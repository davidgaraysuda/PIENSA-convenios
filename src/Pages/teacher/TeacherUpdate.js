import React, { useState, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import { findByIdTeacher, updateTeacher } from '../../Services/teacherService'
import './TeacherUpdate.css'

function TeacherUpdate({ teacherId }) {
    const [closssing, setClossing] = useState('')
    const { setOpenModal, setUpdating } = React.useContext(AppContext);
    const [teacher, setTeacher] = useState({});
  
    const onSubmit = (event) => {
        event.preventDefault();
        updateTeacher(teacher).then(data => {
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
        setTeacher({
            ...teacher,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        findByIdTeacher(teacherId).then(data =>
            setTeacher(data)
        );
    }, [teacherId]);

    return (
        <div className="update">
            <div className="update-form-container">                
                <div className="modal__tittle">
            <h1 className="title">Editar tutor Academico</h1>
                {closssing && <p>Actualizando... {closssing}</p>}
            <button className="modal__button__close" onClick={onClickClose}>x</button>
          </div>
                <form onSubmit={onSubmit}>
                    <div className="update-form-row">
                        <label className="update-label">
                            Nombre
                            <input
                                name="name"
                                value={teacher.name}
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
                                value={teacher.phone}
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
                                value={teacher.status}
                                onChange={onChange}
                                className="update-input"
                            />
                        </label>

                    </div>

                    <div className="update-form-row">
                        <label className="update-label">
                            Carrera
                            <input
                                name="careerId"
                                value={teacher.careerId}
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

export default TeacherUpdate