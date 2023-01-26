import React, { useState, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import { findByIdCareer, updateCareer } from '../../Services/careerService'

import './CareerUpdate.css'

function CareerUpdate({ careerId }) {
    const [category, setCategory] = useState([]);
    const [closssing, setClossing] = useState('')
    const { setOpenModal, setUpdating } = React.useContext(AppContext);
    const [career, setCareer] = useState({ code: '', ambienceId: '', brand: '', measure: '', stock: '', status: '' });

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
   
        if (event.target.name === 'code')
            setCareer({ ...career, code: event.target.value })
        if (event.target.name === 'ambienceId')
            setCareer({ ...career, ambienceId: event.target.value })
        if (event.target.name === 'brand')
            setCareer({ ...career, brand: event.target.value })
        if (event.target.name === 'measure')
            setCareer({ ...career, measure: event.target.value })
        if (event.target.name === 'color')
            setCareer({ ...career, color: event.target.value })
        if (event.target.name === 'stock')
            setCareer({ ...career, stock: event.target.value })
        if (event.target.name === 'status')
            setCareer({ ...career, status: event.target.value })
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
                            Codigo
                            <input
                                name="code"
                                value={career.code}
                                onChange={onChange}
                                className="modal__input modal__input-name"
                            />
                        </label>

                        <select
                            className="modal__select"
                            name="ambienceId"
                            onChange={onChange}
                            value={career.ambienceId}                        >
                            <option>Ambiente---</option>
                            {
                                category.map(item =>
                                    <option key={item.id} value={item.id}>{item.description}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="modal__formrow">
                        <label className="modal__label">
                            Marca
                            <input
                                name="brand"
                                value={career.brand}
                                onChange={onChange}
                                className="modal__input modal__input-name"
                            />
                        </label>

                    </div>
                    <div className="modal__formrow">
                        <label className="modal__label">
                            Color
                            <input
                                name="color"
                                value={career.color}
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