
import API from '../consts/url'
import getHeadersAndToken from '../consts/headersToken'
const model = 'company'

const getListCompany = async () => {
    const response = await fetch(`${API}/company`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });    
    const data = await response.json();
//    console.log(data)
    return  data;
}

const getCompanyById = async (companyId) => {
    const response = await fetch(`${API}/${model}/${companyId}`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });    
    const data = await response.json();

    return  data;
}

const getCompanyByCode = async (code) => {
    const response = await fetch(`${API}/${model}/${code}/code`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });    
    const data = await response.json();

    return  data;
}

const getListCompanyAmbience= async () => {
    const response = await fetch(`${API}/${model}/with/ambience`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });    
    const data = await response.json();
    return  data;
}

const listByCodeCompany = async (itemSearch) => {  
    const resp = await fetch(`${API}/${model}/search/${itemSearch}/code`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });  
    return {status: resp.status, body: await resp.json()}
}

const createCompany = async (company) => {
    const resp = await fetch(`${API}/carreras`, {
        method: 'POST',
        body: JSON.stringify(company),
        headers: getHeadersAndToken()
    });
    return {status: resp.status, data: await resp.json()}
}

const findByIdCompany = async (companyId) => {

    const response = await fetch(`${API}/carreras/${companyId}`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });  
    const data = await response.json();     
    return  data;
}

const findAllCompany = async () => {

    const response = await fetch(`${API}/company`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });  
    const data = await response.json();     
    return  data;
}


const listByNameCompany = async (itemSearch) => {
    
    const response = await fetch(`${API}/carreras/search/${itemSearch}`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });  
    const data = await response.json();     
    return  data;
}

const updateCompany = async (company) => {
  
    const resp = await fetch(`${API}/carreras`, {
        method: 'PUT',
        body: JSON.stringify(company),
        headers: getHeadersAndToken()
    });
    return await resp.json();
}

const deleteCompany = async (companyId) => {
    const resp = await fetch(`${API}/carreras/delete/${companyId}`, {
        method: 'DELETE',
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
    getListCompanyAmbience,
    listByCodeCompany,
    getCompanyById,
    getCompanyByCode,
    deleteCompany, 
    findAllCompany

}