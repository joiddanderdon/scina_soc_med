import { Link, Outlet } from 'react-router-dom';
import { fetchData } from './Fetching';
import { useState } from 'react';


const FriendPane = (props) => {
    const [following, setFollowing] = useState();
    const [followers, setFollowers] = useState();

    fetchData("/user/get", {username: props.username}, "POST")
    .then((data) => {
        setFollowing(data.following);
        setFollowers(data.followers);
    })

  

    return (
        <div className="border-right border-blue">
            <hr />
            <h2>
                Following
            </h2>
            <ul>
                { !following || following.length===0 ?
                   <h2>Not following anyone!</h2> :
                   following.map((f) => (
                        <li key={"following_" + f}>
                            {f}
                        </li>            
                ))}
            </ul>
            <hr /><hr />
            <h2>
                Followers
            </h2>
            <ul>
            { !followers || followers.length===0 ?
                   <h2>No followers!</h2> :
                   followers.map((f) => (
                        <li key={"follower_" + f}>
                            {f}
                        </li>            
                ))}
            </ul>
            <Outlet />
        </div>
    )
}




export default FriendPane;