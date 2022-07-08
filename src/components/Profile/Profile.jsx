import styles from './Profile.module.css';
import AvaDescription from "./Ava_Description/AvaDescription";
import Wallpaper from "./Wallpaper/Wallpaper";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return <div>
        <Wallpaper profile = {props.profile}/>
        <AvaDescription profile = {props.profile} status={props.status}
                        updateStatus = {props.updateStatus}/>
        <MyPostsContainer />
    </div>
}

export default Profile;