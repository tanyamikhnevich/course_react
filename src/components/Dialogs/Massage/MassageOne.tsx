import styles from './MassageOne.module.css';
import * as React from "react";

type PropsType = {
    massage: string
}

const MassageOne: React.FC<PropsType> = (props) => {
    return (
            <div className={styles.massage}>
                <p className={styles.massageText}>{props.massage}</p>
            </div>
    );

}
export default MassageOne