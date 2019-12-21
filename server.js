var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var sgMail = require('@sendgrid/mail');
var SENDGRID_API_KEY='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';
sgMail.setApiKey(SENDGRID_API_KEY);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine','ejs');

app.get('/form',(req,res)=>{
    res.render('form'); 
})

app.post('/form',(req,res)=>{

    console.log(req.body.email1);
                  
    const msg = {
        to: 'milanimavat171098@gmail.com',					//receiver's email
        from: req.body.email1,			//sender's email
        subject: req.body.subject1,				//Subject
        text: req.body.comment1       ,		//content
        html: '<h1>' + req.body.comment1 + '</h1>',			//HTML content
    };
    sgMail.send(msg);
    res.redirect('/form');
})

app.listen(3000);