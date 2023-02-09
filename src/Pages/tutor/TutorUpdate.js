import React, { useState, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import { findByIdTutor, updateTutor } from '../../Services/tutorService'
import { findAllCompany } from '../../Services/companyService'
import './TutorUpdate.css'

//import { InvoiceContext } from "../invoice/InvoiceContext";
//import { createAmbience } from '../../Services/agreementService'


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Select } from "@mui/material";

function TutorUpdate({ open, tutorId }) {
  const { searchTutor, setSearchTutor } = React.useContext(AppContext);
  const { setTutorId, setOpenModal, setUpdating} = React.useContext(AppContext);  
  const [tutor, setTutor] = useState({ name: '', phone: '', contact: '', status:'', companyId:""});
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [status, setStatus] = useState('');
  const [companys, setCompanys]= useState([]);

  const onClickSave = () => {

    if (!name) {
      setError(true)
    }
    else {
      updateTutor({
        name, 
        phone,
        status
      }).then(data => {
        setOpenModal(false);
        setSearchTutor(data.name)
      })
    }
  }


  const onChange = (event) => {
    if (event.target.name === 'name')
      setName(event.target.value)
    if (event.target.name === 'phone')
      setPhone(event.target.value)
    if (event.target.name === 'status')
      setStatus(event.target.value)
    if (event.target.name === 'companyId')
      setCompanyId(event.target.value)

  }

  const handleClose = () => {
    setOpenModal(false);
    setUpdating(false);
  };

  useEffect(() => {
    findByIdTutor(tutorId).then(data => {
    //console.log(data)
      setTutor(data);
      //setLoading(false);
    }
    );
  }, [tutorId]);

  useEffect(() => {
    findAllCompany().then(data => {
    //console.log(data)
      setCompanys(data);
      //setLoading(false);
    }
    );
  }, []);

  return (

    <div>

    <Dialog open={open} onClose={handleClose} >
      <DialogTitle>Actualizar Tutor Academico </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Indicación: Ingresar nombre del tutor y un contacto
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nombre del Profesor"          
          name="name"
          fullWidth
          onChange={onChange}
          variant="standard"
          value={tutor.name}
        />


        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Teléfono"          
          name="phone"
          fullWidth
          onChange={onChange}
          variant="standard"
          value={tutor.phone}
        />

        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Estado"          
          name="state"
          fullWidth
          onChange={onChange}
          variant="standard"
          value={tutor.status}
        />

        <select
          autoFocus
          margin="dense"
          id="name"
          label="Carrera"          
          name="companyId"
          fullWidth
          onChange={onChange}
          variant="standard"
          value={tutor.companyId} >
            <option>Carrera</option>
            {
                companys.map(item=>
                    <option key={item.id} value={item.id}>{item.name}</option>)
            }
          </select>
          

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={onClickSave}>Guardar</Button>
      </DialogActions>
    </Dialog>
  </div>

  );

}

export default TutorUpdate