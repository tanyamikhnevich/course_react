import styles from './MassageOne.module.css';
import {NavLink} from "react-router-dom";

const MassageOne = (props) => {
    return (
            <div className={styles.massage}>
                <p className={styles.massageText}>{props.massage}</p>
            </div>
    );

}
export default MassageOne