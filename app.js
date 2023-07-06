/**
 * ! Importamos el express al archivo js.
 */
import express from 'express';
/**
 * ! Importamos dotenv al archivo js.
 */
import dotenv from 'dotenv';
dotenv.config();
/**
 * ! Creamos la constante expressApp, que contiene la función previamente importada.
 */
const expressApp = express();
/**
 * ! Configuramos el middleware.
 * * Habilitamos la entrada de datos de tipo json y text.
 * @var {express.json(), express.text()}
 */
expressApp.use(express.json());
expressApp.use(express.text());

expressApp.post('/campus/:nombre', (req, res)=>{
    /**
     * ! Obtenemos datos de entrada.
     * @var {req.body} * Datos enviados del cliente.
     * @var {req.query} * Datos adicionales de la url.
     * @var {req.params} *
     */
    let obj = {
        DATA: req.body,
        'URL-GET': req.query,
        PARAMETROS: req.params
    }
    res.send(obj);
});
let config = JSON.parse(process.env.myConfig);
expressApp.listen(config, ()=>{
    console.log((`Servidor http://${config.hostname}:${config.port}`));
})