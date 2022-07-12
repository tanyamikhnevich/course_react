import React from "react";
import styles from "./Users.module.css";
import User from "./User";

let Users = ({
  users,
  onPageChanged,
  currentPage,
  currentCount,
  ...props
}) => {
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
      {users.map(u => <User
          user = {u}
          key={u.id}
          followingInProgress={props.followingInProgress}
          unfollow={props.unfollow}
          follow={props.follow}/>
          )}
    </div>
  );
};

export default Users;
