//import mongoose
const mongoose = require("mongoose");

// Create schema for entity
const commentSchema = new mongoose.Schema({
    username: {type: String, required: true},
    post_id: {type: String, required: true},
    comment_date: {type: Date, required: true},
    comment_content:{type: String, required: true}
})

//Create model from schema
const Comment = mongoose.model("Comment", commentSchema);

// Create CRUD functions on model

// Create a post
async function makeComment(username, post_id, content) {
    const newComment = await Comment.create({
        username: username,
        post_id: post_id,
        comment_content: content,
        comment_date: Date.now()
    });
    return newComment;
}

// Find comments by post_id
async function getComments(post_id) {
    const comments = await Comment.find({"post_id" : post_id});
    return comments;
}

// Edit Post
async function editComment(comment_id, content) {
    const comment = await Comment.updateOne({"_id": comment_id}, {$set: { comment_content: content}});
    return comment;
};

// Delete
async function deleteComment(id){
    const del = await Comment.deleteOne({"_id": id});
    return del.deletedCount;
};



// export functions that will be used in routes
module.exports = {
    makeComment, getComments, editComment, deleteComment
};