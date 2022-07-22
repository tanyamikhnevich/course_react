import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import * as React from "react";

const Navbar: React.FC = () => {
    return  <nav className={styles.nav}>
        <div className={`${styles.item} ${styles.active}`}>
            <NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to='/dialogs' activeClassName={styles.active}>Massages</NavLink>
        </div><div className={styles.item}>
            <NavLink to='/users' activeClassName={styles.active}>Users</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to='/news' activeClassName={styles.active}>News</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to='/music' activeClassName={styles.active}>Music</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to='/settings' activeClassName={styles.active}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;