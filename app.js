const express = require('express');

const app = express();

app.listen(3000);

app.get('/', (req,res)=>{
    //res.send('<p> Home page </p>');
    res.sendFile('./frontend/index.html',{root:__dirname});
});
app.get('/about', (req,res)=>{
    //res.send('<p>About page </p>');
    res.sendFile('./frontend/about.html',{root:__dirname});

});

//redirects

app.get('about-us',(req,res)=>{
    res.redirect('about');
});

//404 page
app.use((req,res)=>{
    res.status(404).sendFile('./frontend/404.html',{root:__dirname})
});