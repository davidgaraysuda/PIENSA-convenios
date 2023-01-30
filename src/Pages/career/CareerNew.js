import React, { useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { createCareer } from '../../Services/careerService'
import './CareerNew.css'

//import { InvoiceContext } from "../invoice/InvoiceContext";
//import { createAmbience } from '../../Services/agreementService'


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function CareerNew({ open }) {
  const { searchCareer, setSearchCareer } = React.useContext(AppContext);
  const { setCareerId, setOpenModal, setUpdating} = React.useContext(AppContext);  
  const [career, setCareer] = useState({ name: '', phone: '', contact: '', status:''});
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [coordinator, setCoordinator] = useState('');

  const onClickSave = () => {

    if (!name) {
      setError(true)
    }
    else {
      createCareer({
        name, 
        coordinator
      }).then(data => {
        setOpenModal(false);
        setSearchCareer(data.name)
      })
    }
  }


  const onChange = (event) => {
    if (event.target.name === 'name')
      setName(event.target.value)
    if (event.target.name === 'coordinator')
      setCoordinator(event.target.value)
  }

  const handleClose = () => {
    setOpenModal(false);
  };

  return (

    <div>

    <Dialog open={open} onClose={handleClose} >
      <DialogTitle>Nueva Carrera</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Indicación: Ingresar nombre de la carrera con su coordinador
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nombre de la carrera"          
          name="name"
          fullWidth
          onChange={onChange}
          variant="standard"
        />

        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Coordinador"          
          name="coordinator"
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

export default CareerNew