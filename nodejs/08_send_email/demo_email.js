var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth: {
        user: 'patopruebasfull@gmail.com',
        pass: 'Mongo2020'
    }
});

var mailOptions = {
    from: '',
    to: 'tarsiciosh@gmail.com',
    subject: 'e-mail sended using Node.js',
    text: 'that was very easy'
    // html : '<h1>Welcome</h1> <p>that was easy</p>'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('mail sent:' + info.response);
    }
})