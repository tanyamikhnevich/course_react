import styles from "./Profile.module.css";
import AvaDescription from "./Ava_Description/AvaDescription";
import Wallpaper from "./Wallpaper/Wallpaper";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Types/types";
import * as React from "react";

type PropsType = {
    profile: ProfileType,
    status: string,
    isOwner: boolean,
    savePhoto: (file: File) => void,
    updateStatus: () => void,
    saveProfile: (profile: ProfileType) => Promise<any>,
}

const Profile: React.FC<PropsType> = (props) => {
  return (
    <div>
      <Wallpaper/>
      <AvaDescription
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        saveProfile={props.saveProfile}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;