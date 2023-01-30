
import API from '../consts/url'
import getHeadersAndToken from '../consts/headersToken'


const getListTutor = async () => {
    const response = await fetch(`${API}/tutor`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });    
    const data = await response.json();
//    console.log(data)
    return  data;
}

const createTutor = async (tutor) => {

    const resp = await fetch(`${API}/tutor`, {
        method: 'POST',
        body: JSON.stringify(tutor),
        headers: getHeadersAndToken()
    });
    return await resp.json();
}

const findByIdTutor = async (tutorId) => {
    const response = await fetch(`${API}/tutor/${tutorId}`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });  
    const data = await response.json();     
    return  data;
}

const listByNameTutor = async (itemSearch) => {
    
    const response = await fetch(`${API}/tutor/search/${itemSearch}`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });  
    const data = await response.json();     
    return  data;
}
const listByNuiTutor = async (itemSearch) => {
  
    const response = await fetch(`${API}/tutor/search/${itemSearch}/nui`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });  
    const data = await response.json();     
    
    return  data;
}


const updateTutor = async (tutor) => {
  
    const resp = await fetch(`${API}/tutor`, {
        method: 'PUT',
        body: JSON.stringify(tutor),
        headers: getHeadersAndToken()
    });
    return await resp.json();
}

const deleteTutor = async (tutorId) => {
    const resp = await fetch(`${API}/tutor/delete/${tutorId}`, {
        method: 'DELETE',
        headers: getHeadersAndToken()              
    });
    return await resp.json();
}


export {
    getListTutor,
    createTutor,
    findByIdTutor,
    updateTutor,
    listByNameTutor,
    listByNuiTutor,
    deleteTutor
    
}