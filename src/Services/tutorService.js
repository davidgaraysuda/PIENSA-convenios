
import API from '../consts/url'
import getHeadersAndToken from '../consts/headersToken'


const getListTutor = async () => {
    const response = await fetch(`${API}/tutors`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });    
    const data = await response.json();
//    console.log(data)
    return  data;
}

const createTutor = async (tutor) => {

    const resp = await fetch(`${API}/tutors`, {
        method: 'POST',
        body: JSON.stringify(tutor),
        headers: getHeadersAndToken()
    });
    return await resp.json();
}

const findByIdTutor = async (tutorId) => {
    const response = await fetch(`${API}/tutors/${tutorId}`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });  
    const data = await response.json();     
    return  data;
}

const listByNameTutor = async (itemSearch) => {
    
    const response = await fetch(`${API}/tutors/search/${itemSearch}`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });  
    const data = await response.json();     
    return  data;
}


const updateTutor = async (tutor) => {
  
    const resp = await fetch(`${API}/tutors`, {
        method: 'PUT',
        body: JSON.stringify(tutor),
        headers: getHeadersAndToken()
    });
    return await resp.json();
}

const deleteTutor = async (tutorId) => {
    const resp = await fetch(`${API}/tutors/delete/${tutorId}`, {
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
    deleteTutor
    
}