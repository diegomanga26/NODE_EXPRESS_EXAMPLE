import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
/**
 * ! Declaramos una variable que defina y gestione las rutas.
 * @var {appCamper} * express.Router();
 */
const appCamper = express.Router();
/**
 * ! Declaramos un middleware que trabaje como mediador para que despues entre al endpoint.
 * @var {next();}
 */
appCamper.use((req, res, next)=>{
    console.log(req);
    next();
})

appCamper.get("/", (req, res)=>{
    res.send(`GET `);
})
appCamper.get("/:id", (req, res)=>{
    res.send(`GET ${req.params.id}`);
})
appCamper.post("/", (req, res)=>{
    res.send(`POST`);
})
/**
 * ! Exportamos el Router.
 */
export default appCamper;