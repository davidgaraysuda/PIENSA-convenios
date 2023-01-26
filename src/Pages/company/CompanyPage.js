import React, { useState, useEffect } from "react";
import { getListCompany, listByNameCompany } from '../../Services/companyService'
import CompanyNew from "./CompanyNew.js";
import CompanyUpdate from './CompanyUpdate'
import { AppContext } from "../../Context/AppContext";

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

import { Modal } from '../../Modal/index'
import './CompanyPage.css'

function CompanyPage() {

  const { openModal, setOpenModal, companyIdEdit,setCompanyIdEdit, updating, setUpdating,  } = React.useContext(AppContext);
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

  const onClick = () => {
    setOpenModal(true)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (itemSearch)
      listByNameCompany(itemSearch).then(data => {
        setCompany(data);

      }
      );
    else
      getListCompany().then(data => {
        setCompany(data);

      }
      );

  }
  const onChange = (event) => {
    if (event.target.name === 'itemSearch')
      setItemSearch(event.target.value)
  }
  
  const onClickUpdate = () => {
    setUpdating(true);
    setOpenModal(true);
    setCompanyIdEdit();
  }

  return (
    <div className="company-page-container">
      <div className="company-page">
        <h2>Compañias</h2>
        <div className="button-container">
          <form onSubmit={onSubmit}>
            <input
              name="itemSearch"
              value={itemSearch}
              onChange={onChange}
              placeholder="Nombre"
            />
            <button type="submit" className="button-new-customer">Buscar</button>
          </form>
          
        </div>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre de la Empresa</TableCell>
            <TableCell align="left">Teléfono</TableCell>
            <TableCell align="left">Contacto</TableCell>  
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
              <TableCell align="left">{row.status}</TableCell>              
              <TableCell align="left">
              <IconButton size="small" aria-label="delete" onClick={() => { onClickUpdate(row.id) }}>
                <EditIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        {!!openModal &&
          (
            <Modal>
              {updating ? <CompanyUpdate companyId={companyIdEdit} /> : <CompanyNew />}
            </Modal>
          )
        }
      </div>
    </div>
  );
}

export default CompanyPage;