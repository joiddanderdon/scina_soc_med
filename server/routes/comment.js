const express = require('express');
//access functions in post model
const Comment = require("../models/comment");

const router = express.Router();

//create all routes to access databases
router
    .post('/create', async (req, res) => {
        try {
            const comment = await Comment.makeComment(req.body.username, req.body.post_id, req.body.comment_content);
            res.send(comment);
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    })

    .post('/browse', async(req, res) => {
        try{
            const comment = await Comment.getComments(req.body.post_id);
            res.send(comment);
        } catch(error){
            res.status(401).send({message: error.message});
        }
    })

    .put('/edit', async (req, res) => {
        try {
            const comment = await Comment.editComment(req.body.comment_id, req.body.new_content);
            res.send(comment);
        }catch(error) {
            res.status(401).send({ message: error.message });
        }
    })

    .delete('/remove', async(req, res) => {
        try {
            const del = await Comment.deleteComment(req.body.comment_id);
            if (del == 1) res.send({success: "Comment deleted."})
            else res.send({failure: "No comment to delete."});
        } catch(error) {
            res.status(401).send({ message: error.message});
        }
    })

// export router for use in index.js
module.exports = router;