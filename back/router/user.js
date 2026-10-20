import express from "express"
import controllerUser from "../controller/user.js"
import authMiddleware from "../middleware/auth.js" 

const router = express.Router()

router.get("/buscar", authMiddleware ,controllerUser.Buscar)
router.get("detalhe", authMiddleware ,controllerUser.Detalhe)
router.post("/criar", controllerUser.Criar)
router.put("/alterar", authMiddleware,controllerUser.Alterar)
router.delete("/deletar", authMiddleware, controllerUser.Deletar)

router.post("/login", controllerUser.Login)


export default router