// Import mongoose
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

// Create schema for entity
const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    followers: [String],
    following: [String]
})

// Create mongoose model of schema
const User = mongoose.model("User", userSchema);

// Create CRUD functions on model

// Create a user
async function register(username, password) {
    const user = await getUser(username);
    if (user) throw Error("Username already in use; Please choose another.");
    
    //generate a salt
    const salt = await bcrypt.genSalt(10);

    //hash the password
    const hashed = await bcrypt.hash(password, salt);
    
    const newUser = await User.create({
        username: username,
        password: hashed
    });
    return newUser._doc;
}

//READ a user (login)
async function login(username, password) {
    const user = await getUser(username);
    if (!user) throw Error('User not found!')
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw Error('Wrong password!');

    return user._doc;
}

// To display others' profiles 'n whatnot.
async function getUserByName(username){
    const user = await getUser(username);
    if (!user) throw Error(`User not found!`)
    else console.log(user);
    return user._doc;
}

// Update Password
async function updatePassword(id, password) {
    const user = await User.updateOne({"_id": id}, {$set: { password: password}});
    return user;
    //change to findByIdAndUpdate
};

// DELETE 

async function deleteUser(id){
    await User.deleteOne({"_id": id});
};

// Follow
async function follow(userid, username) {
    const user = await User.findById(userid);
    if (user.following === undefined) {
        user.following = [];
    }
    user.following[user.following.length] = username;
    await User.findByIdAndUpdate(userid, 
        {following: user.following}
        );
    
    return user._doc;
}

// Add follower
async function addFollower(userid, username) {
    const user = await User.findById(userid);
    if (user.followers === undefined){
        user.followers = [];
    }
    user.followers[user.followers.length] = username;
    await User.findByIdAndUpdate(userid,
        {
            followers: user.followers
        });
    return user._doc;
}


//utility functions
async function getUser(username){
    return await User.findOne({"username": username});
}




// export functions that will be used in routes
module.exports = {
    register, login, updatePassword, deleteUser, getUserByName, follow, addFollower
};
