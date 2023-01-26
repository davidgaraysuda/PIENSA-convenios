import React, { useState, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import { createCareer } from '../../Services/careerService'
import { getListCareer } from '../../Services/careerService'
import './CareerNew.css'
//import { InvoiceContext } from "../invoice/InvoiceContext";

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


function CareerNew() {
  const {  setRefreshCareer
   } = React.useContext(AppContext);
  const { setOpenModal, setUpdating } = React.useContext(AppContext);
  const [name, setName] = useState('');
  const [coordinador, setCoordinador] = useState('');
  const [error, setError] = useState(false);
  const [careers, setCareers] = useState([]);

  const [saving, setSaving] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setSaving(true);
    setError(false);
    if (!name) {
      setError(true)
      return
    }
    createCareer({
      name,
      coordinador

    }).then(data => {     
      if (data.status === 200){
        setName('')
        setCoordinador('')
        setSaving(false);
      }
      else{
        setError(true);
        setSaving(false);
      }

      

    })
  }

  useEffect(() => {
    getListCareer().then(data =>
      setCareers(data)
    );
  }, []);


  const onChange = (event) => {
    if (event.target.name === 'name')
      setName(event.target.value)
    if (event.target.name === 'coordinador')
      setCoordinador(event.target.value)

  }

  return (
    <div className="career">
      <div className="career__container">
        <Typography variant="h5" component="h5">
          Carrera
        </Typography>

        <form onSubmit={onSubmit} className="career__form">

          <TextField
            size="small"
            id="outlined-basic"
            label="Nombre de la carrera"
            variant="outlined"
            name="name"
            value={name}
            onChange={onChange}
          />


          <TextField
            size="small"
            id="outlined-basic"
            label="Coordinador de la carrera"
            variant="outlined"
            name="coordinador"
            value={coordinador}
            onChange={onChange}
          />

      <Button type="submit" variant="outlined">Guardar</Button>

          {
            (error && 
              <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert severity="error">Nombre de la carrera || Coordinador de la carrera</Alert>
            </Stack>
              
              )
          }
                  {
          saving && (
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert severity="info">Guardando</Alert>
            </Stack>
          )
        }

        </form>
      </div>
    </div>

  );

}

export default CareerNew