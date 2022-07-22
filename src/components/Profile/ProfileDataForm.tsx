import styles from "./Ava_Description/AvaDescription.module.css";
import {
  createField,
  Input,
  Textarea,
} from "../common/FormControl/FormsControls";
import { InjectedFormProps, reduxForm } from "redux-form";
import * as React from "react";
import { ProfileType } from "../../Types/types";

type PropsType = {
  profile: ProfileType;
};

type ProfileDataTypeKeys = Extract<keyof ProfileType, string>;

const ProfileDataForm: React.FC<
  InjectedFormProps<ProfileType, PropsType> & PropsType
> = ({ handleSubmit, profile, error }) => {
  return (
    <form className={styles.description} onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
      {error && <div className={styles.formSummaryError}>{error}</div>}
      <h2 className={styles.nameAva}>
        {createField<ProfileDataTypeKeys>("Full name", "fullName", [], Input)}
      </h2>
      <div className={styles.aboutMe}>
        Description:
        {createField<ProfileDataTypeKeys>("About me", "aboutMe", [], Textarea)}
      </div>
      <div className={styles.aboutMe}>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key}>
              <b>
                {key}: {createField(key, "contacts." + key, [], Input)}
              </b>
            </div>
          );
        })}
      </div>
      <div className={styles.aboutMe}>
        Looking for a job:
        {createField<ProfileDataTypeKeys>("", "lookingForAJob", [], Input, {
          type: "checkbox",
        })}
      </div>
      <div className={styles.aboutMe}>
        My Professional skills:
        {createField<ProfileDataTypeKeys>(
          "My Professional skills",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({
  form: "edit-profile",
  enableReinitialize: true,
  destroyOnUnmount: false,
})(ProfileDataForm);
export default ProfileDataFormReduxForm;
