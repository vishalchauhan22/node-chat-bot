module.exports = {
    flow:{
        onboarding: {
            type: 'static',
            message: ['Hello, how are you ?'],
            wiresTo: 'greet_reply'
        },
        greet_reply: {
            type: 'function',
            getMessage: (text)=>{
                return ["I am good.. thankyou :)"]
            },
            wiresTo: 'thanks'
        },
        thanks: {
            type: 'random',
            message: [["It was nice to talk to you.. good bye .. take care :)"], ["Thank you, See you tomorrow."]],
            wiresTo: 'thanks'       
        }
    }
}