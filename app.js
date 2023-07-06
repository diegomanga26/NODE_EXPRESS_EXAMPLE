/**
 * ! Importamos el express al archivo js.
 */
import express from 'express';
let expressApp = express();
/**
 * ! Importamos dotenv al archivo js.
 */
import dotenv from 'dotenv';
dotenv.config();
/**
 * ! Importamos el modulo que contiene los endpoint.
 */
import appCamper from "./routers/campus.js";

expressApp.use(express.json());
/**
 * ! Redireccionamos la solicitud al router solicitado en el endpoint.
 */
expressApp.use("/campus", appCamper);

let config = JSON.parse(process.env.myConfig);

expressApp.listen(config, ()=>{
    console.log((`Servidor http://${config.hostname}:${config.port}`));
})