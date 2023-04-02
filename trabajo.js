const express = require('express');
const app = express();
const body_parser = require ('body_parser');
const path = require ('path');
const ejs = require ('ejs');


app.get('/', (req, res) => {
  res.send('Hola mundo!');
});

app.use (morgan('dev'));

app.set('view engine', 'ejs' );

app.get('/part', (req,res)=>{
res.render('part');
})

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
