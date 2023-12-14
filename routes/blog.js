const express = require("express");
const app = express();
const mongoose = require('mongoose');
const router = express.Router();

//Calling the json
app.use(express.json());

// Creating the routes

    // Calling the Home Routes where everyPost is fetched Here!
router.get("/" , (req , res) => {
    res.send("Page that will fetch all the posts");
});

    // Calling the data of only One Post
router.get("/:id", (req, res) => {
    res.json({message : "Fetching the data of one Post", idPost : req.params.id});
})

    // Posting something in the blog
router.post("/add", (req, res) => {
    res.json({message : "This is where you post anything you want"});
})

    // Update post
router.patch("/edit/:id", (req, res) => {
    res.json({message : "This is where you can Update the post"});
})


    // Delete Post
router.delete('/delete/:id', (req, res) => {
    res.json({message : "Here you can delete any post"})
})



module.exports = router;


