//import mongoose
const mongoose = require("mongoose");

// Create schema for entity
const postSchema = new mongoose.Schema({
    user_id: {type: String, required: true},
    post_date: {type: Date, required: true},
    post_content:{type: String, required: true}
})

//Create model from schema
const Post = mongoose.model("Post", postSchema);

// Create CRUD functions on model

// Create a post
async function makePost(user_id, content) {
    const newPost = await Post.create({
        user_id: user_id,
        post_content: content,
        post_date: Date.now()
    });
    return newPost;
}

// Find posts by user
async function getPost(user_id) {
    const posts = await Post.find({"user_id" : user_id});
    return posts;
}

// Edit Post
async function editPost(post_id, content) {
    const post = await Post.updateOne({"_id": post_id}, {$set: { post_content: content}});
    return post;
};

// Delete
async function deletePost(id){
    return (await Post.deleteOne({"_id": id})).deletedCount;
};



// export functions that will be used in routes
module.exports = {
    makePost, getPost, editPost, deletePost
};