import React, { useState, useEffect } from "react";
import CompanyList from './CompanyList';
import Company from './Company'
import { getListCompany, deleteCompany } from '../../Services/companyService'
import CompanyNew from "./CompanyNew.js";

import { AppContext } from "../../Context/AppContext";
import { Modal } from '../../Modal/index'
import './CompanyPage.css'

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

function CompanyPage() {

  const { openModal, setOpenModal, companyIdEdit, updating, setCompanyIdEdit, setUpdating } = React.useContext(AppContext);

  const [loading, setLoading] = useState(true);
  const [company, setCompany] = useState([]);
  const [itemSearch, setItemSearch] = useState('');

  useEffect(() => {
    getListCompany().then(data => {
      setCompany(data);
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
    deleteCompany(companyId).then( dataDel =>
      {
        getListCompany().then(data => {
          setCompany(data);
          setLoading(false);
        })

      }
      )
  }

  const onClickUpdate = (companyId) => {
    setUpdating(true);
    setOpenModal(true);
    setCompanyIdEdit(companyId);
  }

  return (
    <div className="company-page-container">
      <div className="company-page">
        <h2>Empresas</h2>
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
                <TableCell>Nombre de la empresa</TableCell>
                <TableCell align="left">Tel??fono</TableCell>
                <TableCell align="left">Contacto Adicional</TableCell>
                <TableCell align="left">Estado</TableCell>
                <TableCell align="left"><ListIcon /></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {company.map((row) => (
                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.phone}</TableCell>
                  <TableCell align="left">{row.contact}</TableCell>
                  <TableCell align="left">{row.state}</TableCell>
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
      <CompanyNew open={openModal} />
    </div>
  );
}

export default CompanyPage;