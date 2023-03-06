
const EmailSender = require('../services/mailService');


const send = async (req, res) => {
   try {
        const mailData = req.body
        await EmailSender(mailData)
        res.json({ msg: "Tu mensaje ha sido enviado de manera correcta 🎉" })
        
    } catch (error) {
        res.status(404).json({msg: "Error" + error})
    }
  }; 

module.exports = {
    send
}; 