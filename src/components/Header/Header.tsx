import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import * as React from "react";

export type MapPropsType = {
    isAuth: boolean,
    login: string,
}

export type DispatchPropsType = {
    logout: () => void
}

const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerImgDiv}>
        <img
          className={styles.headerImg}
          src="https://d.newsweek.com/en/full/1984441/cat-hissing.jpg?w=1600&h=900&q=88&f=a8fb4a1840e933f4fad59682cd58a34e"
        />
      </div>
      <div className={styles.pDiv}>
        <h1 className={styles.titleText}>MeowChat</h1>
      </div>
      <div className={styles.loginBlock}>
        {props.isAuth ? (
          <div>
            {" "}
            {props.login} - <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink className={styles.loginNav} to={"/login"}>
            Login{" "}
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
