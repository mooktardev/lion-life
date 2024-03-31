const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/pages/index.html'));
});

app.get('/about', function(req,res){
    res.sendFile(path.join(__dirname+'/pages/about.html'));
});

app.get('/contact', function(req,res){
    res.sendFile(path.join(__dirname+'/pages/contact.html'));
});

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname+'/pages/404.html'));
});


// Start the server
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on localhost:${PORT}`);
  console.log('Press Ctrl+C to quit.');
})
