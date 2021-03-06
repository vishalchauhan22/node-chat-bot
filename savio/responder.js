exports.generateResponseMessage = function(text, userDetails, chatFlow, dbService, welcomeFlow){
    return new Promise((resolve, reject)=>{
        if(!userDetails || !userDetails.next_flow){
            return dbService.saveUser({
                from: userDetails.from,
                next_flow: chatFlow.flow[welcomeFlow].wiresTo
            }).then((response)=>{
                return resolve(chatFlow.flow[welcomeFlow].message);
            },
            (error)=>{
                return reject(error);
            })
        }

        //isGlobalKeyword

        let message = evaluateMessage(text, userDetails.next_flow, chatFlow);

        //Check promise type of new state
        return dbService.updateUser(userDetails.from,{
            next_flow: chatFlow.flow[userDetails.next_flow].wiresTo
        }).then((response)=>{
            return resolve(message);
        },
        (error)=>{
            return reject(error);
        })
    })
}

function evaluateMessage(text, nextFlow, chatFlow, userDetails){
    if(!nextFlow){
        return [""]
    }

    switch (chatFlow.flow[nextFlow].type) {
        case 'function':
            return chatFlow.flow[nextFlow].getMessage(text, userDetails)
        case 'static': 
            return chatFlow.flow[nextFlow].message;
        case 'random': 
            return getRandom(chatFlow.flow[nextFlow].message)
        case 'one-of': 
            return chatFlow.flow[nextFlow].oneOf[text]
        default:
            return;
    }
}

function getRandom(list) {
    return list[Math.floor((Math.random()*list.length))];
}
