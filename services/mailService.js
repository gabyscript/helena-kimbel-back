
const nodemailer = require('nodemailer')

const EmailSender = async (mailData) => {

    let {fullName, email, subject, message} = mailData;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD,
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const options = {
        from: process.env.USER,
        to: process.env.USER,
        cc: `${email}`,
        subject : `${fullName} ha enviado ${subject}` ,
        text: `${message}`
    }
    
    transporter.sendMail(options, (error, info) => {
        if(error){
            res.status(500).send(error.msg)
        } else {
            console.log("Email enviado correctamente");
            res.status(200),jsonp(req.body)
        }
    })
   
}

module.exports = EmailSender; 