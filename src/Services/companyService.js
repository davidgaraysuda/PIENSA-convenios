
import API from '../consts/url'
import getHeadersAndToken from '../consts/headersToken'


const getListCompany = async () => {
    const response = await fetch(`${API}/company`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });    
    const data = await response.json();
//    console.log(data)
    return  data;
}

const createCompany = async (company) => {

    const resp = await fetch(`${API}/company`, {
        method: 'POST',
        body: JSON.stringify(company),
        headers: getHeadersAndToken()
    });
    return await resp.json();
}

const findByIdCompany = async (companyId) => {
    const response = await fetch(`${API}/company/${companyId}`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });  
    const data = await response.json();     
    return  data;
}

const listByNameCompany = async (itemSearch) => {
    
    const response = await fetch(`${API}/company/search/${itemSearch}`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });  
    const data = await response.json();     
    return  data;
}
const listByNuiCompany = async (itemSearch) => {
  
    const response = await fetch(`${API}/company/search/${itemSearch}/nui`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });  
    const data = await response.json();     
    
    return  data;
}


const updateCompany = async (company) => {
  
    const resp = await fetch(`${API}/company`, {
        method: 'PUT',
        body: JSON.stringify(company),
        headers: getHeadersAndToken()
    });
    return await resp.json();
}

export {
    getListCompany,
    createCompany,
    findByIdCompany,
    updateCompany,
    listByNameCompany,
    listByNuiCompany
    
}