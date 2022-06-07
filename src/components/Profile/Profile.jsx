import styles from './Profile.module.css';
import AvaDescription from "./Ava_Description/AvaDescription";
import Wallpaper from "./Wallpaper/Wallpaper";
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import {addPost, updateNewPostText} from "../../redux/state";

const Profile = (props) => {
    return <div>
        <Wallpaper/>
        <AvaDescription/>
        <MyPosts posts = {props.profilePage.posts}
                 addPost={props.addPost}
                 newPostText={props.profilePage.newPostText}
                 updateNewPostText={props.updateNewPostText}/>
    </div>
}

export default Profile;