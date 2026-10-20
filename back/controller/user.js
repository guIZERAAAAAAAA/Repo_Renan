import ServiceUSer from "../service/user.js"

class ControllerUser {
    async Buscar(req, res) {
        try {

            const users = await ServiceUSer.Buscar()

            res.status(200).send({ users })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }





    async Detalhe(req, res) {
        try {

            const user = await ServiceUSer.Detalhe()
            const id = req.session.id

            res.status(200).send({ user })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }





    async Criar(req, res) {
        try {

            const { name, email, password } = req.body
            await ServiceUSer.Criar(name, email, password)

            res.status(201).send({ message: "Usuario criado com sucesso " })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Alterar(req, res) {
        try {

            const id = req.session.id
            const { name, email, password } = req.body

            await ServiceUSer.Alterar(id, name, email, password)

            res.status(200).send({ message: "Usuario alterado com sucesso " })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Deletar(req, res) {
        try {

            const id = req.session.id
            await ServiceUSer.Deletar(id)

            res.status(204).send({ message: "Usuario deletado com sucesso " })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Login(req, res) {
        return res.status(200).send({ token :123 })
        try {

            const { email, password } = req.body
            const token = await ServiceUSer.Login(email, password)

            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }
}
export default new ControllerUser()
