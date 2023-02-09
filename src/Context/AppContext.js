import React, { useState } from "react";
const AppContext = React.createContext();

function AppProvider (props) {
    const [ openModal , setOpenModal ]=useState(false);
    const [ companyIdEdit , setCompanyIdEdit ]=useState(null);
    const [ careerIdEdit , setCareerIdEdit ]=useState(null);
    const [ teacherIdEdit , setTeacherIdEdit ]=useState(null);
    const [ agreementIdEdit , setAgreementIdEdit ]=useState(null);
    const [ providerIdEdit , setProviderIdEdit ]=useState(null);
    const [ expenseIdEdit , setExpenseIdEdit ]=useState(null);
    const [ userIdEdit , setUserIdEdit ]=useState(null);
    const [ updating, setUpdating ] = useState(false);
    const [ contractId, setContractId ] = useState(false);
    const [ customerNewContract, setCustomerNewContract ] = useState(false);    
    const [customerId, setCustomerId] = useState('');
    const [role, setRole] = useState('');
    const [token, setToken] = useState('');

    return(
        <AppContext.Provider value = {{
            openModal,setOpenModal,
            companyIdEdit,setCompanyIdEdit,
            careerIdEdit , setCareerIdEdit,
            updating, setUpdating,
            contractId, setContractId,
            customerNewContract, setCustomerNewContract,
            userIdEdit , setUserIdEdit,
            agreementIdEdit , setAgreementIdEdit,
            providerIdEdit , setProviderIdEdit,
            expenseIdEdit , setExpenseIdEdit,
            customerId, setCustomerId,
            role, setRole,
            token, setToken,
            teacherIdEdit , setTeacherIdEdit
            

        }} >
            {props.children}
        </AppContext.Provider>
    )
}

export{AppContext, AppProvider}