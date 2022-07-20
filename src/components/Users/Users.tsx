import * as React from "react";
import styles from "./Users.module.css";
import User from "./User";
import { UserType } from "../../Types/types";

type PropsType = {
  users: Array<UserType>;
  onPageChanged: (pageNumber: number) => void;
  currentPage: number;
  currentCount: any
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void

};

let Users: React.FC<PropsType> = ({ users, onPageChanged, currentPage, currentCount, ...props }) => {
  return (
    <div>
      <div>
        {currentCount.map((p, index) => {
          return (
            <button
              key={index}
              className={currentPage === p && styles.selectedPage}
              onClick={(e) => {
                onPageChanged(p);
              }}
            >
              {p}
            </button>
          );
        })}
      </div>
      {users.map((u) => (
        <User
          user={u}
          key={u.id}
          followingInProgress={props.followingInProgress}
          unfollow={props.unfollow}
          follow={props.follow}
        />
      ))}
    </div>
  );
};

export default Users;
