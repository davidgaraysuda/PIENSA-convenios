import React, { useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { createCompany } from '../../Services/companyService'
import './CompanyNew.css'

//import { InvoiceContext } from "../invoice/InvoiceContext";
//import { createAmbience } from '../../Services/agreementService'


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function CompanyNew({ open }) {
  const { searchCompany, setSearchCompany } = React.useContext(AppContext);
  const { setCompanyId, setOpenModal, setUpdating} = React.useContext(AppContext);  
  const [company, setCompany] = useState({ name: '', phone: '', contact: '', status:''});
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [contact, setContact] = useState('');
  const [state, setState] = useState('');

  const onClickSave = () => {

    if (!name) {
      setError(true)
    }
    else {
      createCompany({
        name, 
        state
      }).then(data => {
        setOpenModal(false);
        setSearchCompany(data.name)
      })
    }
  }


  const onChange = (event) => {
    if (event.target.name === 'name')
      setName(event.target.value)
    if (event.target.name === 'phone')
      setPhone(event.target.value)
    if (event.target.name === 'contact')
      setContact(event.target.value)
    if (event.target.name === 'state')
      setState(event.target.value)

  }

  const handleClose = () => {
    setOpenModal(false);
  };

  return (

    <div>

    <Dialog open={open} onClose={handleClose} >
      <DialogTitle>Nueva Compañia </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Indicación: Ingresar nombre de la empresa y estado actual
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nombre de la empresa"          
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
          label="Contacto"          
          name="contact"
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
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={onClickSave}>Guardar</Button>
      </DialogActions>
    </Dialog>
  </div>

  );

}

export default CompanyNew