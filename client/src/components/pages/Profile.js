import { fetchData } from "../utils/Fetching";
import Form from "../utils/PostForm"
import UserContext from "../../context/userContext";
import { React, useContext, useEffect } from "react";
import { useState } from 'react';
import FriendPane from "../utils/FriendPane";
 


const Profile = (f) => {
    const {user} = useContext(UserContext);

    const {username, userid} = user;
    if (userid === undefined || userid.length === 0) {
        window.location.replace("/register");

    }
    else {
        return (
            <div className="row">
                <span className="col-4">
                    <FriendPane username={username} />

                </span>

                <span className="col">
                    <hr />
                    <h2>
                        {username}'s Profile
                        <hr />
                        <ListPosts userid={userid} />
                        <hr />
                        <Form userid={userid} />
                    </h2>
                </span>
            </div>
        )
    }
}



const ListPosts = (props) => {
    const [listOfPosts, setListOfPosts] = useState();
    const {user} = useContext(UserContext);
    //This removes sooooooo many errors.
    //Without it, fetch is run on every render 
    // and eventually crashes the browser
    useEffect(() => {
        fetchData("/post/browse", {target_user_id: user.userid}, "POST")
        .then((data) => {
            setListOfPosts(data);
        })
    }, [listOfPosts, user.userid])
    
    
    return (
        <div>
            <ul className="no-bullets">
                { !listOfPosts || listOfPosts.length===0 ?
                   <h2>No posts to show!</h2> :
                   listOfPosts.map((item) => (
                        <li key={item._id}>
                            {item.post_content}
                            <DeleteButton postId={item._id} />
                            <hr />
                            <br />   
                        </li>   
                          
                ))}
            </ul>
        </div>

  );
  
}

const DeleteButton = (prop) => {
    const onClick = (b) => {
        fetchData("/post/remove", {post_id: b.target.id}, "DELETE")
    }

    return (
        <div>
            <button id={prop.postId} onClick={onClick}>Delete Post</button>
        </div>
    )
}



export default Profile;