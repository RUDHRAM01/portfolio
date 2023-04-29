const nodemailer = require("nodemailer")


const sendMail = (req,res) =>{

    let createTransport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "rudhramsaraswat1112@gmail.com",
            pass : "ztcthtsvbglggfqn"
        }
    })


    let details = {
        from: "rudhramsaraswat1112@gmail.com",
        to: req.email,
        subject: "RS Portfolio",
        text: "hello user",
        html:`<p>Email : ${req.email}</p> <p>Name : ${req.firstName} ${req.lastName}</p> <p>Message : ${req.message}</p>`
    }

    createTransport.sendMail(details, (err) => {
        console.log("there is an error : ",err)
    })
}

module.exports = sendMail