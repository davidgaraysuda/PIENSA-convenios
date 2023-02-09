
import API from '../consts/url'
import getHeadersAndToken from '../consts/headersToken'

const path="teachers"

const getListTeacher = async () => {
    const response = await fetch(`${API}/${path}`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });    
    const data = await response.json();
//    console.log(data)
    return  data;
}

const getListTeacherCareer = async () => {
    const response = await fetch(`${API}/${path}/with/career`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });    
    const data = await response.json();
//    console.log(data)
    return  data;
}

const createTeacher = async (teacher) => {

    const resp = await fetch(`${API}/${path}`, {
        method: 'POST',
        body: JSON.stringify(teacher),
        headers: getHeadersAndToken()
    });
    return await resp.json();
}

const findByIdTeacher = async (teacherId) => {
    const response = await fetch(`${API}/${path}/${teacherId}`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });  
    const data = await response.json();     
    return  data;
}

const listByNameTeacher = async (itemSearch) => {
    const response = await fetch(`${API}/${path}/search/${itemSearch}`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });  
    const data = await response.json();     
    return  data;
}

const listByNuiTeacher = async (itemSearch) => {
  
    const response = await fetch(`${API}/${path}/search/${itemSearch}/nui`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });  
    const data = await response.json();     
    
    return  data;
}


const updateTeacher = async (teacher) => {
  
    const resp = await fetch(`${API}/t${path}`, {
        method: 'PUT',
        body: JSON.stringify(teacher),
        headers: getHeadersAndToken()
    });
    return await resp.json();
}

const deleteTeacher = async (teacherId) => {
    const resp = await fetch(`${API}/${path}/delete/${teacherId}`, {
        method: 'DELETE',
        headers: getHeadersAndToken()              
    });
    return await resp.json();
}


export {
    getListTeacher,
    createTeacher,
    findByIdTeacher,
    updateTeacher,
    listByNameTeacher,
    listByNuiTeacher,
    deleteTeacher,
    getListTeacherCareer
    
}