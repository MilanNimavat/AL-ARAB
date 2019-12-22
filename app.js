//reuire
const express  = require('express');
//body parser
const app = express();
const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY='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';
sgMail.setApiKey(SENDGRID_API_KEY);


app.use(express.static('./public'));
 var bodyParser = require('body-parser');
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));


//template engine ejs and static data
app.set('view engine','ejs')
// app.use(express.static('public'));


app.get('/',(req,res)=>{
   
    res.render('index')
    
})
app.get('/index',(req,res)=>{
    res.render('index')
})

app.get('/fruits',(req,res)=>{
    res.render('fruits')
})

app.get('/grocery',(req,res)=>{
   
    res.render('grocery')
    
})

app.get('/veges',(req,res)=>{
    res.render('veges')
})

app.get('/spices',(req,res)=>{
    res.render('spices')
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.get('/clothes',(req,res)=>{
    res.render('clothes')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/service',(req,res)=>{
    res.render('service')
})

app.get('/contect',(req,res)=>{
    // res.send('contect')
    res.render('contect')
})

app.post('/form',(req,res)=>{

    console.log(req.body.email1);
                  
    const msg = {
        to: 'milanimavat171098@gmail.com',					//receiver's email
        from: req.body.email1,			//sender's email
        subject: req.body.subject1,				//Subject
        text: req.body.message1       ,		//content
        html: '<h1>' + req.body.message1 + '</h1>',			//HTML content
    };
    sgMail.send(msg);
    res.redirect('/contact');
})

const PORT = 8080;
app.listen(PORT,(req,res)=>{
    console.log(`server started in port on ${PORT}...`);
})