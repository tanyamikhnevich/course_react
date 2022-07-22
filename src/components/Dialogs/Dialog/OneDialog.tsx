import styles from './OneDialog.module.css';
import {NavLink} from "react-router-dom";
import * as React from "react";

type PropsType = {
    name: string,
    id: number
};

const OneDialog: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.oneDialogDiv}>
            <div className={styles.oneDialogimg}>
                <img className={styles.imgAva} src='https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg'/>
            </div>
            <div className={`${styles.dialogsItems} ${styles.dialogsItemsText.active}`}>
                <NavLink to={'/dialogs/' + props.id} className={styles.dialogsItemsText}>{props.name}</NavLink>
            </div>
        </div>
    );

}
export default OneDialog