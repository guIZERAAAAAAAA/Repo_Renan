 
import axios from 'axios'

    const api = axios.create({
        baseURL:'http://localhost:3000/api'
    })

    //Pegar o token
    api.interceptors.request.use(
        (config)=>{
            const token = localStorage.getItem('token')
            if(!token){
                config.headers.Authorization = token
            }
            return config
        },
        (error)=>{
            return Promise.reject(error)
        }
    )

    //Aqui vamos criar um negocio pra pegar o token e liberar 
    
    export default api