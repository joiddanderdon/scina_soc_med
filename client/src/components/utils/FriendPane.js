import { Link, Outlet } from 'react-router-dom';
import { fetchData } from './Fetching';


const FriendPane = (props) => {
    const [friends, setFriends] = useState();
    fetchData("/user/get", {username: props.username}, "POST")
    .then((data) => {
        setFriends(data);
    })

    return (
        <>
            <ul>

            </ul>
            <Outlet />
        </>
    )
}

const Friend = (f) => {
    return (
        <>
            <li id={f.userid}>
                <Link>
                    f.username
                </Link>
            </li>
        
        </>
        
    )
}