const express = require ('express');
const cors = require('cors');
require('dotenv').config();
const usersRouter = require('./routes/users');


class Server {
    constructor() {
        this.app = express(); //instancia
        this.port = 3000; //puerto
        
        //http://localhost:3000/api/v1/users
        this.basePath='/api/v1';
        this.usersPath=`${this.basePath}/users`;

        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use(express.json());  //para interpretar texto en json

    }
    routes(){
        this.app.use(this.userPatch, usersRouter);
    
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log("Listening on port "+this.post)
        })
    }
}

module.exports = Server;