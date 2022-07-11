import styles from "./AvaDescription.module.css";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const avaDescription = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={styles.avaDescriptionDiv}>
      <div className={styles.divAva}>
        <img
          className={styles.imgAva}
          src={props.profile.photos.large}
          alt="Avatar"
        />
      </div>
      <div className={styles.description}>
        <h2 className={styles.nameAva}>{props.profile.fullName}</h2>
        <div className={styles.aboutMe}>
          {" "}
          {"Description: " + props.profile.aboutMe &&
            "Description: no information"}
        </div>
        <div className={styles.profileStatus}>
          <ProfileStatusWithHooks
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
        <div className={styles.aboutMe}>
          {"VK: " + props.profile.contacts.vk && "VK: no information"}
        </div>
      </div>
    </div>
  );
};

export default avaDescription;
