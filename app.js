const express = require('express');
const app = express();
const mongoose = require('mongoose');
//Calling the routes
const BlogRouter = require('./routes/blog')

require('dotenv').config();

// Use the Json
app.use(express.json())

//Access to Database
mongoose.connect(process.env.DataBase_URL);
// Check if the database is connected 
mongoose.connection.on("connected" , () => {
    console.log("Succefully Connected to Database.");
})
    // when the database have an error 
mongoose.connection.on("error", () => {
    console.log("Error Connecting to database!")
})


// Call the routes
app.use("/blogs" , BlogRouter);


app.get('/', (req, res) => {
    res.redirect("/blog")
})



// Listening to the port
app.listen(
    8080,
    console.log("Server in up Link : http://localhost:8080/")
)


