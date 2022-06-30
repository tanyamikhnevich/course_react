import styles from './AvaDescription.module.css';
import Preloader from "../../common/preloader/Preloader";
import usercat from "../../../assets/images/usercat.png";

const avaDescription = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={styles.avaDescriptionDiv}>
        <div className={styles.divAva}>
            <img className={styles.imgAva}
                 src={props.profile.photos.large} alt='Avatar'/>
        </div>
        <div className={styles.textareaDiv}>
            <h2 className={styles.nameAva}>{props.profile.fullName}</h2>
        <textarea className={styles.description} placeholder={props.profile.aboutMe}/>
        </div>
    </div>
    )
}

export default avaDescription;