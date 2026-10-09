import express from "express"
import database from "./config/database.js"
import routerUser from "./router/user.js"

// se tiver no aeo 
//import  batata  from "./router/user.js" 
//import  comida  from "./router/user.js" 
//import  lupa  from "./router/user.js" 
//import  sushi  from "./router/user.js" 
//import  frango  from "./router/user.js"  

const app = express()
app.use(express.json())

app.use("/api/v1/user", routerUser)


database.db.sync({ force: true })
    .then(() => {
        app.listen(3000, () => {
            console.log("servidor ta rodando na porta 3000")
        })
    })
    .catch((e) => {
        console.log(e)
    })

