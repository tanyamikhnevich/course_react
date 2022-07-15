import styles from "./Ava_Description/AvaDescription.module.css";
import {createField, Input, Textarea} from "../common/FormControl/FormsControls";
import { reduxForm } from "redux-form";
import React from "react";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
  return (
    <form className={styles.description}
    onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
        {error && <div className={styles.formSummaryError}>{error}</div>}
      <h2 className={styles.nameAva}>
        {createField("Full name", "fullName", [], Input)}
      </h2>
      <div className={styles.aboutMe}>
        Description:
          {createField("About me", "aboutMe", [], Textarea)}
      </div>


      <div className={styles.aboutMe}>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
              <div key={key}>
                  <b>{key}:  {createField(key, "contacts."+ key, [], Input)}</b>
              </div>
          );
        })}
      </div>


      <div className={styles.aboutMe}>
        Looking for a job:
          {createField("", "lookingForAJob", [], Input, {type: 'checkbox'})}
      </div>
        <div className={styles.aboutMe}>
            My Professional skills:
            {createField("My Professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile", enableReinitialize: true, destroyOnUnmount: false})(
  ProfileDataForm
);
export default ProfileDataFormReduxForm;
