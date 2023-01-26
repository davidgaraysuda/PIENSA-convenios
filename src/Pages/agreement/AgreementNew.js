import React, { useState, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import { createAgreement } from '../../Services/agreementService'
import './AgreementNew.css'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function AgreementNew({open}) {
  //const { setOpenModal, setUpdating } = React.useContext(AppContext);
  const { openModal, setOpenModal, agreementIdEdit, updating, setAgreementIdEdit, setUpdating } = React.useContext(AppContext);
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [state, setState] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [tutorId, setTutorId] = useState('');
  const [teacherId, setTeacherId] = useState('');
  const [error, setError] = useState(false);

  const onClickSave = () => {
    
    if (!companyId) {
      setError(true)
    }
    else {
      createAgreement({
        fechaInicio, 
        fechaFin, 
        state,
        companyId,
        tutorId, 
        teacherId
      }).then(data => {
        setOpenModal(false);
        setUpdating(false);
      })
    }
  }

  const onClickClose = () => {
    setOpenModal(false);
    setUpdating(false);
  }

  const onChange = (event) => {
    if (event.target.name === 'fechaInicio')
      setFechaInicio(event.target.value)
    if (event.target.name === 'fechaFin')
      setFechaFin(event.target.value)
    if (event.target.name === 'state')
      setState(event.target.value)
    if (event.target.name === 'companyId')
      setCompanyId(event.target.value)
    if (event.target.name === 'tutorId')
      setTutorId(event.target.value)
    if (event.target.name === 'teacherId')
      setTeacherId(event.target.value)
  }
  const handleClose = () => {
    setOpenModal(false);
  };


  return (
    <div>
 
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Nuevo Convenio</DialogTitle>
      <DialogContent>
        <DialogContentText>
         Establecer el  nombre para un nuevo Convenio
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Fecha de Inicio"
          type="date"
          name="fechaInicio"
          fullWidth
          onChange={onChange}
          variant="standard"
        />

        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Fecha de Finalización"
          type="date"
          name="fechaFin"
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
          label="Compañia"
          name="companyId"
          fullWidth
          onChange={onChange}
          variant="standard"
        />

        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Tutor Empresarial"
          name="tutorId"
          fullWidth
          onChange={onChange}
          variant="standard"
        />

        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Tutor Academico"
          name="teacherId"
          fullWidth
          onChange={onChange}
          variant="standard"
        />


      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cerrar</Button>
        <Button onClick={onClickSave}>Guardar</Button>
      </DialogActions>
    </Dialog>
  </div>

  );

}

export default AgreementNew