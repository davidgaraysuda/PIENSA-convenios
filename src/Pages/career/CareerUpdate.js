import React, { useState, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import { findByIdCareer, updateCareer } from '../../Services/careerService'
import './CareerUpdate.css'

function CareerUpdate({ careerId }) {
    const [closssing, setClossing] = useState('')
    const { setOpenModal, setUpdating } = React.useContext(AppContext);
    const [career, setCareer] = useState({});
  
    const onSubmit = (event) => {
        event.preventDefault();
        updateCareer(career).then(data => {
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
        setCareer({
            ...career,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        findByIdCareer(careerId).then(data =>
            setCareer(data)
        );
    }, [careerId]);

    return (
        <div className="update">
            <div className="update-form-container">                
                <div className="modal__tittle">
            <h1 className="title">Editar Carrera</h1>
                {closssing && <p>Actualizando... {closssing}</p>}
            <button className="modal__button__close" onClick={onClickClose}>x</button>
          </div>
                <form onSubmit={onSubmit}>
                    <div className="update-form-row">
                        <label className="update-label">
                            Nombre de la carrera
                            <input
                                name="name"
                                value={career.name}
                                onChange={onChange}
                                className="update-input"
                            />
                        </label>

                    </div>

                    <div className="update-form-row">
                        <label className="update-label">
                            Nombre del coordinador 
                            <input
                                name="coordinator"
                                value={career.coordinator}
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

export default CareerUpdate