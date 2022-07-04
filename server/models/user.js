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
    return user._doc;
}

// Update Password
async function updatePassword(id, password) {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = await User.findByIdAndUpdate(
        id,
        {
            password: hashed
        }
    );
    return {...user, password: undefined};

};

// DELETE 

async function deleteUser(id){
    await User.deleteOne({"_id": id});
};

// Follow
//userid = user that will follow another
//username = user that will be followed
async function follow(userid, userToFollow) {
    const user = await User.findById(userid);
    if (user.following === undefined) {
        user.following = [];
    }

    //make sure the target user exists
    if (!(await User.findOne({"username" : userToFollow}))) return false;

    // make sure we don't have duplicates
    if (user.following.includes(userToFollow)) return false;

    user.following[user.following.length] = userToFollow;
    await User.findByIdAndUpdate(userid, 
        {following: user.following}
        );
    
    addFollower(user.username, userToFollow);


    return true;
}

// Add follower
// ONLY called from the follow function
async function addFollower(follower, leader) {
    const user = await User.findOne({"username": leader});
    if (user.followers === undefined){
        user.followers = [];
    }
    if (user.followers.includes(follower)) return;
    
    user.followers[user.followers.length] = follower;
    await User.findOneAndUpdate(
        {
            "username": leader
        },
        {
            followers: user.followers
        });
    
    return;
}


//utility functions
async function getUser(username){
    return await User.findOne({"username": username});
}




// export functions that will be used in routes
module.exports = {
    register, login, updatePassword, deleteUser, getUserByName, follow
};
