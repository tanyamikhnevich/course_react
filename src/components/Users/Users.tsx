import * as React from "react";
import styles from "./Users.module.css";
import User from "./User";
import { UserType } from "../../Types/types";
import UsersSearchForm from "./UsersSearchForm";
import {FilterType} from "../../redux/users-reducer";

type PropsType = {
  users: Array<UserType>;
  onPageChanged: (pageNumber: number) => void;
    onFilterChanged: (filter: FilterType) => void;
  currentPage: number;
  currentCount: number[];
  followingInProgress: Array<number>;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
};

let Users: React.FC<PropsType> = ({
  users,
  onPageChanged,
  currentPage,
  currentCount,
  ...props
}) => {
  return (
    <div>
      <div>
        <UsersSearchForm onFilterChanged={props.onFilterChanged}/>
      </div>

      <div>
        {currentCount.map((p, index) => {
          return (
            <button
              key={index}
              className={currentPage === p ? styles.selectedPage : undefined}
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
