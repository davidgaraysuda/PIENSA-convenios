import React, { useState, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import { findByIdCareer, updateCareer } from '../../Services/careerService'

import './CareerUpdate.css'

function CareerUpdate({ careerId }) {
    const [category, setCategory] = useState([]);
    const [closssing, setClossing] = useState('')
    const { setOpenModal, setUpdating } = React.useContext(AppContext);
    const [career, setCareer] = useState({ name: '', coordinator: ''});

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
   
        if (event.target.name === 'name')
            setCareer({ ...career, name: event.target.value })
        if (event.target.name === 'coordinador')
            setCareer({ ...career, coordinator: event.target.value })
    }

    useEffect(() => {
        findByIdCareer(careerId).then(data =>
            setCareer(data)
        );
    }, [careerId]);

 

    return (
        <div className="modal">
            <div className="modal__container">
                <div className="modal__tittle">
                    <h1 className="title">Editar careero</h1>
                    <button className="modal__button__close" onClick={onClickClose}>x</button>
                </div>
                <form onSubmit={onSubmit} className="form">
                    <div className="modal__formrow">
                        <label className="modal__label">
                            Nombre de la Carrera
                            <input
                                name="name"
                                value={career.name}
                                onChange={onChange}
                                className="modal__input modal__input-name"
                            />
                        </label>

                        <label className="modal__label">
                            Nombre del Coordinador
                            <input
                                name="coordinador"
                                value={career.coordinator}
                                onChange={onChange}
                                className="modal__input modal__input-name"
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