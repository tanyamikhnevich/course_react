import * as React from "react";
import styles from "./Users.module.css";
import usercat from "../../assets/images/usercat.png"
import { NavLink } from "react-router-dom";
import {UserType} from "../../Types/types";

type PropsType = {
  user: UserType,
  follow: (userId: number) => void,
  unfollow: (userId: number) => void,
  followingInProgress: Array<number>
}

let User: React.FC<PropsType> = ({
  user,
  follow,
  unfollow,
  followingInProgress
}) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              className={styles.userPhoto}
              src={user.photos.small != null ? user.photos.small : usercat }
              alt="Avatar"
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"user.location.country"}</div>
          <div>{"user.location.city"}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
