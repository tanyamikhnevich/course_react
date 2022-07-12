import styles from "./AvaDescription.module.css";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const avaDescription = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={styles.avaDescriptionDiv}>
      <div className={styles.divAva}>
        <img
          className={styles.imgAva}
          src={profile.photos.large}
          alt="Avatar"
        />
      </div>
      <div className={styles.description}>
        <h2 className={styles.nameAva}>{profile.fullName}</h2>
        <div className={styles.aboutMe}>
          {" "}
          {"Description: " + profile.aboutMe &&
            "Description: no information"}
        </div>
        <div className={styles.profileStatus}>
          <ProfileStatusWithHooks
            status={status}
            updateStatus={updateStatus}
          />
        </div>
        <div className={styles.aboutMe}>
          {"VK: " + profile.contacts.vk && "VK: no information"}
        </div>
      </div>
    </div>
  );
};

export default avaDescription;
