import styles from "./MyPosts.module.css";
import React from "react";
import { Field, reduxForm } from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControl/FormsControls";



const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.postsTextarea}>
        <Field
          component={Textarea}
          name={"newPostBody"}
          placeholder={"Enter your post"}
          validate={[required, maxLengthCreator(10)]}
        />
      </div>
      <div>
        <button className={styles.postButton}>Add post</button>
      </div>
    </form>
  );
};
export const AddPostFormRedux = reduxForm({ form: "profileAddPostForm" })(
  AddPostForm
);
