import express from "express";
import morgan from "morgan";
import {dirname,join} from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";
import * as dotenv from "dotenv";

// Routes
import indexRoutes from "./routes/routes.js";

const app=express();

dotenv.config();
app.use(morgan("dev"));

//configuracion para vistar en plantilla ejs
const _dirname=dirname(fileURLToPath(import.meta.url))

app.set('views',join(_dirname, 'views'))
app.set('view engine','ejs');
///rutas 
app.use(indexRoutes)

//configuración delpuerto del servidor
app.set("port",process.env.PORT||8080)
///servidor 
app.listen(app.get("port"),()=>{
    console.log(`server on port ${app.get('port')}`);
})