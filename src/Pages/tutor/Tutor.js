
import React, {useContext}from 'react';
import './Tutor.css'
import { AppContext } from "../../Context/AppContext";
import EditIco from '../../img/ic_create_48px.png'
import DelIco from '../../img/delete.png'

function Tutor({ tutorItem }) {
    const { setTutorIdEdit, setOpenModal,setUpdating } = useContext(AppContext);
    
    const onClick = () => {
        setUpdating(true);
        setOpenModal(true);
        setTutorIdEdit(tutorItem.id);
    }

    const onClickDel = () => {
        
    }

    return (
        <tr>
            <td>{tutorItem.id} </td>
            <td>{tutorItem.name} </td>   
            <td>{tutorItem.email} </td>   
            <td>{tutorItem.phone} </td>   
            <td>{tutorItem.alternative} </td>   
            <td>{tutorItem.status} </td> 
            <td>{tutorItem.companyId} </td>             
            <td>
                <button>
                    <img src={EditIco} onClick={onClick} alt="edit" width="16" height="16" /> 
                </button>                            
                <button>
                    <img src={DelIco} onClick={onClickDel} alt="delete" width="16" height="16" /> 
                </button>                
            </td>
     
        </tr>

    );
}

export default Tutor