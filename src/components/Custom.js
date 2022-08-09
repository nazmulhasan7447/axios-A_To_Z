import axios from 'axios';

const authFetch = axios.create({
    // baseURL: 'https://course-api.com',
    baseURL: 'https://icanhazdadjoke.com',
});

authFetch.interceptors.request.use(
    (request)=>{
        request.headers.common['Accept'] = 'application/json'
        console.log('request sent')
        return request;
    }, 
    (error)=>{
        return Promise.reject(error);
    }
)

authFetch.interceptors.response.use(
    (response)=>{
        console.log('response got')
        return response;
    },
    (error)=>{
        return Promise.reject(error);
    }
)


export default authFetch;