
import API from '../consts/url'
import getHeadersAndToken from '../consts/headersToken'
const model = 'career'

const getListCareer = async () => {
    const response = await fetch(`${API}/career`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });    
    const data = await response.json();
//    console.log(data)
    return  data;
}

const getCareerById = async (careerId) => {
    const response = await fetch(`${API}/${model}/${careerId}`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });    
    const data = await response.json();

    return  data;
}

const getCareerByCode = async (code) => {
    const response = await fetch(`${API}/${model}/${code}/code`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });    
    const data = await response.json();

    return  data;
}

const getListCareerAmbience= async () => {
    const response = await fetch(`${API}/${model}/with/ambience`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });    
    const data = await response.json();
    return  data;
}

const listByCodeCareer = async (itemSearch) => {  
    const resp = await fetch(`${API}/${model}/search/${itemSearch}/code`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });  
    return {status: resp.status, body: await resp.json()}
}

const createCareer = async (career) => {
    const resp = await fetch(`${API}/career`, {
        method: 'POST',
        body: JSON.stringify(career),
        headers: getHeadersAndToken()
    });
    return {status: resp.status, data: await resp.json()}
}

const findByIdCareer = async (careerId) => {
    const response = await fetch(`${API}/career/${careerId}`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });  
    const data = await response.json();     
    return  data;
}

const listByNameCareer = async (itemSearch) => {
    
    const response = await fetch(`${API}/career/search/${itemSearch}`,{
        method: 'GET',        
        headers: getHeadersAndToken()
    });  
    const data = await response.json();     
    return  data;
}

const updateCareer = async (career) => {
  
    const resp = await fetch(`${API}/career`, {
        method: 'PUT',
        body: JSON.stringify(career),
        headers: getHeadersAndToken()
    });
    return await resp.json();
}


export {
    getListCareer,
    createCareer,
    findByIdCareer,
    updateCareer,
    listByNameCareer,
    getListCareerAmbience,
    listByCodeCareer,
    getCareerById,
    getCareerByCode

}