
import React, {useContext}from 'react';
import './Company.css'
import { AppContext } from "../../Context/AppContext";
import EditIco from '../../img/ic_create_48px.png'
import DelIco from '../../img/delete.png'

function Company({ companyItem }) {
    const { setCompanyIdEdit, setOpenModal,setUpdating } = useContext(AppContext);
    
    const onClick = () => {
        setUpdating(true);
        setOpenModal(true);
        setCompanyIdEdit(companyItem.id);
    }

    const onClickDel = () => {
        
    }

    return (
        <tr>
            <td>{companyItem.id} </td>
            <td>{companyItem.name} </td>   
            <td>{companyItem.phone} </td>   
            <td>{companyItem.contact} </td>   
            <td>{companyItem.state} </td>                         
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

export default Company