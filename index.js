let responder = require('./savio/responder');

function Savio(configurations){
    this.type = configurations.type;
    this.chatFlow = configurations.chatFlow;
    this.databaseModel = configurations.databaseModel;
    this.dbService = configurations.dbService;
    this.welcomeFlow = configurations.welcomeFlow;
    this.socket = configurations.socket
    this.getMessage = function(text, from){
        return new Promise((resolve, reject)=>{
            return this.dbService.getUser(from).then((userDetails)=>{
                if(!userDetails){
                    userDetails = {
                        from: from
                    }
                }
                return responder.generateResponseMessage(text, userDetails, this.chatFlow, this.dbService, this.welcomeFlow).then((resp)=>{
                    return resolve(resp)
                },(err)=>{
                    return reject(err)
                });
            }, (error)=>{
              return reject(error)  
            })
        })
    }

    if(this.socket){
        let self = this;
        this.socket.on('connection', (sock)=>{
            sock.on('chat-message', function(data){
                self.getMessage(data.text, data.from).then((resp)=>{
                    sock.emit("chat-message", resp[0])
                }, (error)=>{
                    console.log("Err", error)
                    throw error;
                })
            })
        })
    }
}

Savio.prototype.serviceMessage = function(options){

}

module.exports = Savio;
