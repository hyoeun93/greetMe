// exports.handler = (event, context, callback) => {
//     callback(null, result);
// }

// exports.handler = async(event, context) => {
//     const data = event.data;
//     let newImage = await resizeImage();
//     return newImage;
// }

// const resizeImage = (data) => new Promise((resolve, reject) => {
//     if(error) {
//         reject(error);
//     } else {
//         resolve(result);
//     }
// })

//context objects provide us useful runtime information while the Lambda function is executing.
// exports.handler = async(event, context) => {
//     context.getRemainingTimeInMillis();

//     context.functionName;
//     context.functionVersion;
//     context.functionArn;
//     context.awsRequestId;
//     context.memoryLimitInMB;
//     context.identity;
//     context.clientContext;
// }

// exports.handler = (event, context, callback) => {
//     const error = new Error("an error occurred");
//     console.error("An error occurred");
// }
const moment = require('moment');

const greeting = {
    "en": "Hello",
    "fr": "Bonjour",
    "hi": "Namaste",
    "es": "Hola"
}

exports.handler = async (event) => {
    let name = event.pathParameters.name;
    let {lang, ...info} = event.queryStringParameters;

    let message = `${greeting[lang] ? greeting[lang] : greeting['en']} ${name}`;
    let response = {
        message: message,
        info: info, 
        timestamp: moment().unix()
    }
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    };
}