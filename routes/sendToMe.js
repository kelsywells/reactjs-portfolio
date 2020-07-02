const express = require('express')
const sendToMeRouter = express.Router()
const nodemailer = require('nodemailer')

console.log("from sendToMe")

const transport = {

    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.THE_EMAIL,
        pass: process.env.THE_PASSWORD
    }
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
    if (error) {
        console.error('transporter error: ', error)
    } else {
        console.log('user ready to send email')
    }
});

module.exports = sendToMeRouter
