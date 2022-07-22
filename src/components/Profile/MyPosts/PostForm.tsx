import styles from "./MyPosts.module.css";
import * as React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { createField, Textarea } from "../../common/FormControl/FormsControls";
import { AddPostFormValuesType } from "./MyPosts";

type PropsType = {};
type AddPostFormValuesTypeKeys = Extract<keyof AddPostFormValuesType, string>;

const AddPostForm: React.FC<
  InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType
> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.postsTextarea}>
        {createField<AddPostFormValuesTypeKeys>(
          "Enter your post",
          "newPostBody",
          [required, maxLengthCreator(10)],
          Textarea
        )}
      </div>
      <div>
        <button className={styles.postButton}>Add post</button>
      </div>
    </form>
  );
};
export const AddPostFormRedux = reduxForm<AddPostFormValuesType, PropsType>({
  form: "profileAddPostForm",
})(AddPostForm);
