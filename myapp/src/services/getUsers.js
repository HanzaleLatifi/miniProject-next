import axios from 'axios';

export const getUsers=(page , count)=>{
    return axios.get(`https://reqres.in/api/users?page=${page || 1}&per_page=${count || 3}`)
}