const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Замените на SMTP-сервер вашего провайдера (например, smtp.gmail.com для Gmail)
    port: 587, // Используйте порт 465 для SSL и 587 для TLS
    secure: false,
    auth: {
        user: 'serd9095@gmail.com', // Ваш email
        pass: 'pgfe jsjo pzyb rnsw' // Ваш пароль или App Password (если используете Gmail)
    }
});

app.post('/send', (req, res) => {
    const { name, surname, email } = req.body;

    const mailOptions = {
        from: 'serd9095@gmail.com',
        to: 'dedsergej803@gmail.com', // Email, на который приходит письмо
        subject: 'New Contact Request',
        text: `Name: ${name}\nSurname: ${surname}\nEmail: ${email}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
