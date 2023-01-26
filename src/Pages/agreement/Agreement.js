
import React, {useContext}from 'react';
import './Agreement.css'
import { AppContext } from "../../Context/AppContext";
import EditIco from '../../img/ic_create_48px.png'
import DelIco from '../../img/delete.png'

function Agreement({ agreementItem }) {
    const { setAgreementIdEdit, setOpenModal,setUpdating } = useContext(AppContext);
    
    const onClick = () => {
        setUpdating(true);
        setOpenModal(true);
        setAgreementIdEdit(agreementItem.id);
    }

    const onClickDel = () => {
        
    }

    return (
        <tr>
            <td>{agreementItem.id} </td>
            <td>{agreementItem.description} </td>                        
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

export default Agreement