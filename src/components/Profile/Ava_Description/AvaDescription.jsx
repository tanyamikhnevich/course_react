import styles from "./AvaDescription.module.css";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import usercat from "../../../assets/images/usercat.png";
import ProfileDataForm from "../ProfileDataForm";
import React, { useState } from "react";

const AvaDescription = ({
  profile,
  status,
  isOwner,
  savePhoto,
  updateStatus,
  saveProfile,
}) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div className={styles.avaDescriptionDiv}>
      <div className={styles.divAva}>
        <img
          className={styles.imgAva}
          src={profile.photos.large != null ? profile.photos.large : usercat}
          alt="Avatar"
        />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
      </div>
      {editMode ? (
        <ProfileDataForm
          initialValues={profile}
          onSubmit={onSubmit}
          profile={profile}
        />
      ) : (
        <ProfileData
          profile={profile}
          status={status}
          updateStatus={updateStatus}
          isOwner={isOwner}
          goToEditMode={() => {
            setEditMode(true);
          }}
        />
      )}
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={styles.contacts}>
      {contactTitle}: {contactValue}
    </div>
  );
};

const ProfileData = ({
  profile,
  status,
  isOwner,
  goToEditMode,
  updateStatus,
}) => {
  return (
    <div className={styles.description}>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>edit</button>
        </div>
      )}
      <h2 className={styles.nameAva}>{profile.fullName}</h2>
      <div className={styles.aboutMe}>
        Description:
        {profile.aboutMe ? profile.aboutMe : " no information"}
      </div>
      <div className={styles.profileStatus}>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
      <div className={styles.aboutMe}>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
      <div className={styles.aboutMe}>
        Looking for a job:
        {profile.lookingForAJob ? " yes" : " no"}
      </div>
      <div className={styles.aboutMe}>
        My Professional skills:
        {profile.lookingForAJobDescription
          ? profile.lookingForAJobDescription
          : " no information"}
      </div>
    </div>
  );
};

export default AvaDescription;
