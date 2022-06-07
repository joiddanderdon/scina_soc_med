const express = require('express');
//access functions in post model
const Post = require("../models/post");

const router = express.Router();

//create all routes to access databases 
router
    .post('/create', async (req, res) => {
        try {
            const post = await Post.makePost(req.body.username, req.body.post_content);
            res.send(post);
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    })

    .post('/browse', async(req, res) => {
        try{
            const post = await Post.getPost(req.body.target_username);
            res.send(post);
        } catch(error){
            res.status(401).send({message: error.message});
        }
    })

    .put('/edit', async (req, res) => {
        try {
            const post = await Post.editPost(req.body.post_id, req.body.new_content);
            res.send(post);
        }catch(error) {
            res.status(401).send({ message: error.message });
        }
    })

    .delete('/remove', async(req, res) => {
        try {
            const del = await Post.deletePost(req.body.post_id);
            if (del == 1) res.send({success: "Post deleted."})
            else res.send({failure: "No post to delete"});
        } catch(error) {
            res.status(401).send({ message: error.message});
        }
    })

// export router for use in index.js
module.exports = router;