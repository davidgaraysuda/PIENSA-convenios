import React, { useState, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import { findByIdTutor, updateTutor } from '../../Services/tutorService'
import './TutorUpdate.css'

function TutorUpdate({ tutorId }) {
    const [closssing, setClossing] = useState('')
    const { setOpenModal, setUpdating } = React.useContext(AppContext);
    const [tutor, setTutor] = useState({});
  
    const onSubmit = (event) => {
        event.preventDefault();
        updateTutor(tutor).then(data => {
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
        setTutor({
            ...tutor,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        findByIdTutor(tutorId).then(data =>
            setTutor(data)
        );
    }, [tutorId]);

    return (
        <div className="update">
            <div className="update-form-container">                
                <div className="modal__tittle">
            <h1 className="title">Editar Tutor Empresarial</h1>
                {closssing && <p>Actualizando... {closssing}</p>}
            <button className="modal__button__close" onClick={onClickClose}>x</button>
          </div>
                <form onSubmit={onSubmit}>
                    <div className="update-form-row">
                        <label className="update-label">
                            Nombre
                            <input
                                name="name"
                                value={tutor.name}
                                onChange={onChange}
                                className="update-input"
                            />
                        </label>
    
                    </div>

                    <div className="update-form-row">
                        <label className="update-label">
                            Email
                            <input
                                name="email"
                                value={tutor.email}
                                onChange={onChange}
                                className="update-input"
                            />
                        </label>

                    </div>


                    <div className="update-form-row">
                        <label className="update-label">
                            Teléfono
                            <input
                                name="phone"
                                value={tutor.phone}
                                onChange={onChange}
                                className="update-input"
                            />
                        </label>

                    </div>

                    <div className="update-form-row">
                        <label className="update-label">
                            Tutor Alterno
                            <input
                                name="alternative"
                                value={tutor.alternative}
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
                                value={tutor.status}
                                onChange={onChange}
                                className="update-input"
                            />
                        </label>

                    </div>

                    <div className="update-form-row">
                        <label className="update-label">
                            Empresa
                            <input
                                name="companyId"
                                value={tutor.companyId}
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

export default TutorUpdate