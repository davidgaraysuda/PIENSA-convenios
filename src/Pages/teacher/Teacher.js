
import React, {useContext}from 'react';
import './Teacher.css'
import { AppContext } from "../../Context/AppContext";
import EditIco from '../../img/ic_create_48px.png'
import DelIco from '../../img/delete.png'

function Teacher({ teacherItem }) {
    const { setTeacherIdEdit, setOpenModal,setUpdating } = useContext(AppContext);
    
    const onClick = () => {
        setUpdating(true);
        setOpenModal(true);
        setTeacherIdEdit(teacherItem.id);
    }

    const onClickDel = () => {
        
    }

    return (
        <tr>
            <td>{teacherItem.id} </td>
            <td>{teacherItem.name} </td>   
            <td>{teacherItem.phone} </td>     
            <td>{teacherItem.status} </td> 
            <td>{teacherItem.careerId} </td>             
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

export default Teacher