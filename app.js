const express = require('express');

// use the default function to create an app

const app = express();

const hostname = process.env.hostname || "0.0.0.0";
const port = process.env.PORT || 3002;

app.get('/', (req,res) => {
    res.send('Welcome to full stack web apps!');
} );

app.get('/welcome', (req,res) => {
    res.send('<h1>Welcome to welcome page!</h1>');
} );

app.get('/about', (req,res) => {
    res.send('Welcome to my about page!');
} );

app.get('/contact', (req,res) => {
    res.send('Feel free to contact me!');
} );



// start listening
// use the server console to tell user where to find the server
// use backticks for template literals with embedded expressions
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
