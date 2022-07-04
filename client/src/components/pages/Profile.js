import { fetchData } from "../utils/Fetching";
import Form from "../utils/PostForm"
import { React } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import { useState, useEffect } from 'react';

 


const Profile = () => {
    const location = useLocation();
    const navigate = useNavigate();


/* //I think this will be the method of choice once we can establish a global state.

    const [username, setUserName] = useState();
    const [user, setUser] = useState({
        username: '',
        userid: '',
    });
    */
    
    if (location.state === null || location.state.length === 0) {
        window.location.assign("./register");
    }
    
    const username = location.state.user;
    const userid = location.state.id;
    
    return (
        <div>
            <hr />
            <h2>
                {username}'s Posts
                <hr />
                <ListPosts userid={userid} />
                <hr />
                <Form userid={userid} />
            </h2>
        </div>
    )
}



const ListPosts = (props) => {
    const [listOfPosts, setListOfPosts] = useState();
    fetchData("/post/browse", {target_user_id: props.userid}, "POST")
    .then((data) => {
        setListOfPosts(data);
    })
    
    return (
        <div>
            <ul>
                { !listOfPosts || listOfPosts.length===0 ?
                   <h2>No posts to show!</h2> :
                   listOfPosts.map((item) => (
                        <li key={item._id}>
                            {item.post_content}
                        </li>            
                ))}
            </ul>
        </div>

  );
  
}


export default Profile;