
import API from '../consts/url'
import getHeadersAndToken from '../consts/headersToken'
const model = 'agreement'
const getListAgreement = async () => {
    const response = await fetch(`${API}/${model}`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });    
    const data = await response.json();
//    console.log(data)
    return  data;
}


const createAgreement = async (agreement) => {
    const resp = await fetch(`${API}/${model}`, {
        method: 'POST',
        body: JSON.stringify(agreement),
        headers: getHeadersAndToken()
    });
    return await resp.json();
}

const findByIdAgreement = async (agreementId) => {
    const response = await fetch(`${API}/${model}/${agreementId}`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });  
    const data = await response.json();     
    return  data;
}


const updateAgreement = async (agreement) => {
  
    const resp = await fetch(`${API}/${model}`, {
        method: 'PUT',
        body: JSON.stringify(agreement),
        headers: getHeadersAndToken()
    });
    return await resp.json();
}


const deleteAgreement = async (agreementId) => {
    const resp = await fetch(`${API}/agreement/delete/${agreementId}`, {
        method: 'DELETE',
        headers: getHeadersAndToken()              
    });
    return await resp.json();
}

export {
    getListAgreement,
    createAgreement,
    findByIdAgreement,
    updateAgreement,deleteAgreement
    
}