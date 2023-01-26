import React, { useState, useEffect } from "react";
import AgreementList from './AgreementList';
import Agreement from './Agreement'
import { getListAgreement, deleteAgreement } from '../../Services/agreementService'
import AgreementNew from "./AgreementNew.js";

import { AppContext } from "../../Context/AppContext";
import { Modal } from '../../Modal/index'
import './AgreementPage.css'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import IconButton from '@mui/material/IconButton';
import ListIcon from '@mui/icons-material/List';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function AgreementPage() {

  const { openModal, setOpenModal, agreementIdEdit, updating, setAgreementIdEdit, setUpdating } = React.useContext(AppContext);

  const [loading, setLoading] = useState(true);
  const [agreement, setAgreement] = useState([]);
  const [itemSearch, setItemSearch] = useState('');

  useEffect(() => {
    getListAgreement().then(data => {
      setAgreement(data);
      setLoading(false);
    }
    );
  }, [openModal]);

  const   handleClickOpen = () => {
    setOpenModal(true);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  }

  const onChange = (event) => {
    if (event.target.name === 'itemSearch')    
    setItemSearch(event.target.value)
  }


  const onClickDelete = (companyId) => {
    deleteAgreement(companyId).then( dataDel =>
      {
        getListAgreement().then(data => {
          setAgreement(data);
          setLoading(false);
        })

      }
      )
  }

  const onClickUpdate = (careerId) => {
    setUpdating(true);
    setOpenModal(true);
    setAgreementIdEdit(careerId);
  }

  return (
    <div className="agreement-page-container">
      <div className="agreement-page">
        <h2>Convenios</h2>
        <div className="button-container">
          <form onSubmit={onSubmit}>
          </form>
          <Button variant="outlined" onClick={handleClickOpen}>
            Nuevo
          </Button>
        </div>
        <div className="button-container">
        <form onSubmit={onSubmit}>
          <input 
              name="itemSearch"
              value={itemSearch}
              onChange={onChange}
          />
          <button type="submit" className="button-new-career">Buscar</button>
        </form>
        
      </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Fecha de Inicio</TableCell>
                <TableCell align="left">Fecha de Finalización</TableCell>
                <TableCell align="left">Estado</TableCell>
                <TableCell align="left">Compañia</TableCell>
                <TableCell align="left">Tutor Empresarial</TableCell>
                <TableCell align="left">Tutor Academico</TableCell>
                <TableCell align="left"><ListIcon /></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {agreement.map((row) => (
                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">{row.fechaInicio}</TableCell>
                  <TableCell align="left">{row.fechaFin}</TableCell>
                  <TableCell align="left">{row.status}</TableCell>
                  <TableCell align="left">{row.companyId}</TableCell>
                  <TableCell align="left">{row.tutorId}</TableCell>
                  <TableCell align="left">{row.teacherId}</TableCell>
                  <TableCell align="left">
                    <IconButton size="small" aria-label="delete" onClick={() => { onClickDelete(row.id) }}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" aria-label="delete" onClick={() => { onClickUpdate(row.id) }}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <AgreementNew open={openModal} />
    </div>
  );
}

export default AgreementPage;