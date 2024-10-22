const express = require('express');

const app = express();

app.set('view engine','ejs');
app.set('views','frontend');


app.listen(3000);

app.get('/', (req,res)=>{
    const blogs = [
    {title:'Blog nr 1', snippet:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue mollis sapien placerat tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin vitae leo nec metus molestie pretium at vitae massa. Cras elit purus, convallis et tempus non, varius congue ligula. Quisque nec velit viverra, sagittis sapien vitae, pharetra tortor. Duis hendrerit augue eu lectus pellentesque egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'},
    {title:'Blog nr 2', snippet:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue mollis sapien placerat tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin vitae leo nec metus molestie pretium at vitae massa. Cras elit purus, convallis et tempus non, varius congue ligula. Quisque nec velit viverra, sagittis sapien vitae, pharetra tortor. Duis hendrerit augue eu lectus pellentesque egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'},
    {title:'Blog nr 3', snippet:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue mollis sapien placerat tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin vitae leo nec metus molestie pretium at vitae massa. Cras elit purus, convallis et tempus non, varius congue ligula. Quisque nec velit viverra, sagittis sapien vitae, pharetra tortor. Duis hendrerit augue eu lectus pellentesque egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'},
    ];
    res.render('index',{title: 'Home',blogs:blogs});
});
app.get('/about', (req,res)=>{
    res.render('about',{title: 'About'});
});

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title: 'Create'});
});

app.use((req,res)=>{
    res.status(404).render('404',{title: '404'});
});