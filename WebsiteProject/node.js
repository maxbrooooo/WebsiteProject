const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact.html');  // access contact
});


app.post('/submit-form', (req, res) => {
    const name = req.body.name
    const email = req.body.email  // define email and name
    res.send(`Thanks for Submitting!`);
    console.log('name') //log name and emails
    console.log('email')
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`); // run server
});