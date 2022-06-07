require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const path = require('path');



const userRoutes = require('./server/routes/user');
const postRoutes = require('./server/routes/post');
const commentRoutes = require('./server/routes/comment');

// Setup up connection to database
mongoose.connect(process.env.db_url)
    .then(console.log("DB Connected!!"))
    .catch(error => console.log(error));





app.use(express.json()); //to parse JSON bodies

app.use(express.static(__dirname + "/public"));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public', 'index.html')));


//CORS middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});


app.use('/user', userRoutes);
app.use('/post', postRoutes);
app.use('/comment', commentRoutes);
//create port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));