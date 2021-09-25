import express, { Request, Response } from 'express'; 
import cors from 'cors';
import * as socketIO from "socket.io";
import * as path from "path";
import * as http from "http";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

export class App{

    public app : express.Application;
    public httpServer : http.Server;
    public io : socketIO.Server;

    constructor(){
        this.app = express();
       
        this.httpServer = new http.Server(this.app);
        this.io = new socketIO.Server(this.httpServer);
        this.appSettings();
        this.routes(); 
        this.initSocketIO();

    } 

    public routes(){
        this.app.use(cors);
        this.app.get("/", function (req, res) {
            res.sendFile(path.resolve('./client/index.html'));
            
        });
    }

    public initSocketIO(){
        this.io.on('connection', (socket : socketIO.Socket) => { 
             console.log('a user connected : ' + socket.id)
        });
    }

    private appSettings(){
        const PORT = process.env.PORT;
        console.log(PORT);
        const NODE_ENV = process.env.NODE_ENV;
        this.app.set('port',PORT);
        this.app.set('node_env',NODE_ENV);
    } 

    async listen(){
        this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

}