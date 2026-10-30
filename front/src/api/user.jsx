import api from './api'

//buscar
//BuscarUm

//Criar
export const CriarUser = async (name, email, password) => {
    const body = { name,email, password }
    const response = await api.post('/v1/user/criar', body, {
        headers: { 'Content-Type': 'application/json' }}
    )}

///Alterar

export const AlterarUser = async (name, email, password) => {
    const body = { name,email, password }
    const response = await api.put('/v1/user/alterar', body, {
        headers: { 'Content-Type': 'application/json' }}
    )}
////Deletar

export const loginUser = async (email, password) => 
    {const body = { email, password } 

const response = await api.post('/v1/user/login', body, {
        headers: { 'Content-Type': 'application/json' }
    })

    return response.data
}

