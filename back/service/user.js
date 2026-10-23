import repositoryUser from "../repository/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const SECRET = "batata123"
const SALT = 12

class ServiceUser {

    async Buscar() {

        return repositoryUser.Buscar

    }

    async Detalhe(id) {

        if (!id) {
            throw new Error("favor informar o ID")
        }

        return repositoryUser.Detalhe(id)
    }

    async Criar(name, email, password) {

        if (!name || !email || !password) {
            throw new Error("favor informar todos os parametros")
        }

        const cryptPass = await bcrypt.hash(password, SALT)

        await repositoryUser.Criar(name, email, cryptPass)
    }

    async Alterar(id, name, email, password) {
        if (!id || !name || !email || !password) {
            throw new Error("favor informar todos os parametros")

        }

        const cryptPass = !password
            ? undefined
            : await bcrypt.hash(id, name, email, cryptPass)

        await repositoryUser.Alterar(id, name, email, password)
    }

    async Deletar(id) {

        if (!id) {
            throw new Error("favor informar o ID")
        }
        await repositoryUser.Deletar(id)
    }


    async Login(email, password) {
        if (!email || !password) {
            throw new Error("Email ou senha inválido")
        }

        const user = await repositoryUser.BuscarEmail(email)

        if (!user || !(await bcrypt.compare(String(password), user.password))
        )
    
        {
            throw new Error("Email ou senha inválido")
        }

        // token
        return jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            SECRET,
            {
                expiresIn: 60
            }
        )
    }



}
export default new ServiceUser
