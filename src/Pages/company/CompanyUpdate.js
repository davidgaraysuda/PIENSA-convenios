import React, { useState, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import { findByIdCompany, updateCompany } from '../../Services/companyService'
import './CompanyUpdate.css'

function CompanyUpdate({ companyId }) {
    const [closssing, setClossing] = useState('')
    const { setOpenModal, setUpdating } = React.useContext(AppContext);
    const [company, setCompany] = useState({});
  
    const onSubmit = (event) => {
        event.preventDefault();
        updateCompany(company).then(data => {
            setClossing(data.name);
            setOpenModal(false);
            setUpdating(false);
        }
        )
    }

    const onClickClose = () => {
        setOpenModal(false);
        setUpdating(false);
    }

    const onChange = (event) => {
        setCompany({
            ...company,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        findByIdCompany(companyId).then(data =>
            setCompany(data)
        );
    }, [companyId]);

    return (
        <div className="update">
            <div className="update-form-container">                
                <div className="modal__tittle">
            <h1 className="title">Editar Empresa</h1>
                {closssing && <p>Actualizando... {closssing}</p>}
            <button className="modal__button__close" onClick={onClickClose}>x</button>
          </div>
                <form onSubmit={onSubmit}>
                    <div className="update-form-row">
                        <label className="update-label">
                            Nombre
                            <input
                                name="name"
                                value={company.name}
                                onChange={onChange}
                                className="update-input"
                            />
                        </label>
    
                    </div>
                    <div className="update-form-row">
                        <label className="update-label">
                            Tel??fono
                            <input
                                name="phone"
                                value={company.phone}
                                onChange={onChange}
                                className="update-input"
                            />
                        </label>

                    </div>

                    <div className="update-form-row">
                        <label className="update-label">
                            Contacto
                            <input
                                name="contact"
                                value={company.contact}
                                onChange={onChange}
                                className="update-input"
                            />
                        </label>

                    </div>

                    <div className="update-form-row">
                        <label className="update-label">
                            Estado
                            <input
                                name="status"
                                value={company.status}
                                onChange={onChange}
                                className="update-input"
                            />
                        </label>

                    </div>



                    <button type="submit" className="update-primary-button update-button">Actualizar</button>
                </form>
            </div>
        </div>
    );
}

export default CompanyUpdate