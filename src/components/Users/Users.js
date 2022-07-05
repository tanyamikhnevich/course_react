import React from "react";
import styles from "./Users.module.css";
import usercat from "../../assets/images/usercat.png";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";

let Users = (props) => {
  return (
    <div>
      <div>
        {props.currentCount.map((p, index) => {
          return (
            <button
              key={index}
              className={props.currentPage === p && styles.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </button>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  className={styles.userPhoto}
                  src={u.photos.small != null ? u.photos.small : usercat}
                  alt="Avatar"
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.toggleIsFollowingProgress(true, u.id);
                    usersAPI.delFollow(u.id).then((response) => {
                      if (response.data.resultCode == 0) {
                        props.unfollow(u.id);
                      }
                        props.toggleIsFollowingProgress(false, u.id);
                    });

                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.toggleIsFollowingProgress(true, u.id);
                    usersAPI.postFollow(u.id).then((response) => {
                      if (response.data.resultCode == 0) {
                        props.follow(u.id);
                      }
                        props.toggleIsFollowingProgress(false, u.id);
                    });

                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
