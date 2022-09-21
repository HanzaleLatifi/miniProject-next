import axios from 'axios';

export const getUsers=(page=1 , count=3)=>{
    return axios.get(`https://reqres.in/api/users?page=${page}&per_page=${count}`)
}