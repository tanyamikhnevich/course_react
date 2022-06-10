import styles from './Profile.module.css';
import AvaDescription from "./Ava_Description/AvaDescription";
import Wallpaper from "./Wallpaper/Wallpaper";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return <div>
        <Wallpaper/>
        <AvaDescription/>
        <MyPostsContainer store = {props.store}/>
    </div>
}

export default Profile;