let responder = require('./savio/responder');

function Savio(configurations){
    this.type = configurations.type;
    this.chatFlow = configurations.chatFlow;
    this.databaseModel = configurations.databaseModel;
    this.dbService = configurations.dbService;
    this.welcomeFlow = configurations.welcomeFlow;
    this.socket = configurations.socket

    if(!this.socket){
        this.socket.on('connection', (sock)=>{
            sock.on('chat-message', function(data){
                this.getMessage(data.text, data.from)
            })
        })
    }
}

Savio.prototype.getMessage = function(text, from){
    return new Promise((resolve, reject)=>{
        this.dbService.getUser(from).then((userDetails)=>{
            return responder.generateResponseMessage(text, userDetails, this.chatFlow, this.dbService, this.welcomeFlow);
        }, (error)=>{
          return reject(error)  
        })
    })
}

Savio.prototype.serviceMessage = function(options){

}

module.exports = Savio;
