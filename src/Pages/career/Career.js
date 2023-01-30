
import React, {useContext}from 'react';
import './Career.css'
import { AppContext } from "../../Context/AppContext";
import EditIco from '../../img/ic_create_48px.png'
import DelIco from '../../img/delete.png'

function Career({ careerItem }) {
    const { setCareerIdEdit, setOpenModal,setUpdating } = useContext(AppContext);
    
    const onClick = () => {
        setUpdating(true);
        setOpenModal(true);
        setCareerIdEdit(careerItem.id);
    }

    const onClickDel = () => {
        
    }

    return (
        <tr>
            <td>{careerItem.id} </td>
            <td>{careerItem.name} </td>   
            <td>{careerItem.coordinator} </td>                         
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

export default Career