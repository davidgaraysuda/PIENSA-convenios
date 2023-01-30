import React, { useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { createTeacher } from '../../Services/teacherService'
import './TeacherNew.css'

//import { InvoiceContext } from "../invoice/InvoiceContext";
//import { createAmbience } from '../../Services/agreementService'


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function TeacherNew({ open }) {
  const { searchTeacher, setSearchTeacher } = React.useContext(AppContext);
  const { setTeacherId, setOpenModal, setUpdating} = React.useContext(AppContext);  
  const [teacher, setTeacher] = useState({ name: '', phone: '', contact: '', status:''});
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [careerId, setCompanyId] = useState('');
  const [status, setStatus] = useState('');

  const onClickSave = () => {

    if (!name) {
      setError(true)
    }
    else {
      createTeacher({
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
      setCompanyId(event.target.value)

  }

  const handleClose = () => {
    setOpenModal(false);
  };

  return (

    <div>

    <Dialog open={open} onClose={handleClose} >
      <DialogTitle>Nuevo Tutor Academico </DialogTitle>
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
        />

        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Carrera"          
          name="careerId"
          fullWidth
          onChange={onChange}
          variant="standard"
        />

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={onClickSave}>Guardar</Button>
      </DialogActions>
    </Dialog>
  </div>

  );

}

export default TeacherNew