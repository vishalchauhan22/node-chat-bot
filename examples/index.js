let SimpleChatBot = require('../index');
let socketIo = require("socket.io");
let express = require('express');
let app = express();

let usersTable = {};

let dbService = {
    saveUser : (data)=>{
        return new Promise((resolve, reject)=>{
            usersTable[data.from] = data;
            return resolve(usersTable[data.from]);
        })
    },
    getUser : (from)=>{
        return new Promise((resolve, reject)=>{
            return resolve(usersTable[from]);
        })
    },
    updateUser : (from, data)=>{
        return new Promise((resolve, reject)=>{
            usersTable[from].next_flow = data.next_flow;
            return resolve(usersTable[from]);
        })
    }
}

app.use('/', express.static(__dirname+'/public'))
const server = require('http').createServer(app).listen(4000);
let io = socketIo(server);


simpleChatBot = new SimpleChatBot({
    chatFlow: require('./chatflow.js'),
    welcomeFlow: "onboarding",
    dbService: dbService,
    socket: io
})
