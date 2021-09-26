import * as http from "http";
import * as socketIO from "socket.io";
import { Client } from "socket.io/dist/client";


describe("typescript-socekt-io", () => {  
    let httpServer : http.Server;
    let ioServer : socketIO.Server;
     let httpServerAddr : any; 

    /**
     * Setup WS & HTTP servers
     */
    beforeAll((done) => {
        httpServer = http.createServer().listen();
        ioServer = new socketIO.Server(httpServer);
        httpServerAddr = httpServer.address(); 
       
        done();
    }); 

    /**
     *  Cleanup WS & HTTP servers
     */
    afterAll((done) => {
        ioServer.close();
        httpServer.close();
        done();
    }); 

    test("should work",(done)=>{
        
        ioServer.on('connection', (socket : socketIO.Socket) => { 
            console.log('a user connected : ' + socket.id)
        });  
        //ioServer.emit("hello", "world");
        done();
    });
  
});