import styles from './OneDialog.module.css';
import {NavLink} from "react-router-dom";

const OneDialog = (props) => {
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