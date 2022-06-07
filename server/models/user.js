// Import mongoose
const mongoose = require("mongoose");

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
    const newUser = await User.create({
        username: username,
        password: password
    });
    return newUser;
}

//READ a user (login)
async function login(username, password) {
    const user = await getUser(username);
    if (!user) throw Error('User not found!');
    if (user.password != password) throw Error('Bad password');
    return user;
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


//utility functions
async function getUser(username){
    return await User.findOne({"username": username});
}

// export functions that will be used in routes
module.exports = {
    register, login, updatePassword, deleteUser
};
