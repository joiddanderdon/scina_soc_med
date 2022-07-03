import { fetchData } from "../utils/Fetching.js";
import { React } from "react";
import { useLocation } from "react-router-dom";

 

const Profile = () => {
    
    const location = useLocation();
    //const user = location.state.user;

    //const target_user_id = location.state.id;
    const target_user_id = "62c18ce09786c4cc35a10651";
    const user = "user1";


    console.log(user);
    console.log(target_user_id);
    fetchData("/post/browse", target_user_id, "POST");
    return (
        <div>
            <hr />
            <h2>
                {user}'s Profile
                <br />
                
            </h2>
        </div>
    )
}

export default Profile;