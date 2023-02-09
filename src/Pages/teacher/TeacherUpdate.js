import React, { useState, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import { findByIdTeacher, updateTeacher } from '../../Services/teacherService'
import { findAllCareer } from '../../Services/careerService'
import './TeacherUpdate.css'

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

function TeacherUpdate({ open, teacherId }) {
  const { searchTeacher, setSearchTeacher } = React.useContext(AppContext);
  const { setTeacherId, setOpenModal, setUpdating} = React.useContext(AppContext);  
  const [teacher, setTeacher] = useState({ name: '', phone: '', contact: '', status:'', carreraId:""});
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [careerId, setCareerId] = useState('');
  const [status, setStatus] = useState('');
  const [careers, setCareers]= useState([]);

  const onClickSave = () => {

    if (!name) {
      setError(true)
    }
    else {
      updateTeacher({
        name, 
        phone,
        status
      }).then(data => {
        setOpenModal(false);
        setSearchTeacher(data.name)
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
    if (event.target.name === 'careerId')
      setCareerId(event.target.value)

  }

  const handleClose = () => {
    setOpenModal(false);
    setUpdating(false);
  };

  useEffect(() => {
    findByIdTeacher(teacherId).then(data => {
    //console.log(data)
      setTeacher(data);
      //setLoading(false);
    }
    );
  }, [teacherId]);

  useEffect(() => {
    findAllCareer().then(data => {
    //console.log(data)
      setCareers(data);
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
          value={teacher.name}
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
          value={teacher.phone}
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
          value={teacher.status}
        />

        <select
          autoFocus
          margin="dense"
          id="name"
          label="Carrera"          
          name="careerId"
          fullWidth
          onChange={onChange}
          variant="standard"
          value={teacher.carreraId} >
            <option>Carrera</option>
            {
                careers.map(item=>
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

export default TeacherUpdate