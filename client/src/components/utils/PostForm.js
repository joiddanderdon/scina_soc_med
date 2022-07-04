import { fetchData } from "./Fetching";
import { useState } from "react";




const Form = (props) => {
    
    const [postContent, setPostContent] = useState({
        data: ''
    });

    const onChange = (e) => {
        setPostContent({"data": e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        fetchData("/post/create", {user_id: props.userid, post_content: postContent.data}, "POST")
        .then((data) => {
            setPostContent({"data": ""});
        });
    }



    return (
        <div>
            <hr />
            <hr />
            <h2>Create new post..</h2>
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col">
                        <textarea 
                        id="post_content" 
                        className="" 
                        onChange={onChange}
                        defaultValue=""
                        />
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col">
                        <button type="submit">Submit</button>
                    </div>
                    <div className="col"></div>
                </div>
            </form>
        </div>
    )
}




export default Form;