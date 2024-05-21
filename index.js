//console.log("Hello world");

const express = require('express')
const mongoose = require('mongoose');
const app = express()

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
app.get('/', (req,res) => {
    res.send('Hello World of Node Api' + 'With Anand Jha');
});

mongoose.connect("mongodb+srv://anandjha:anand123@cluster0.kvbey4e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log('connection successful');
}).catch(() => {
    console.log("connection failed");
}); 