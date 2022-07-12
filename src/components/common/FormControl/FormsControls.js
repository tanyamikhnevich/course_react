import React from "react";
import styles from "./FormsControl.module.css";
import { Field } from "redux-form";

export const Textarea = ({ input, meta: {touched, error}, ...props }) => {
  const haveError = touched && error;
  return (
    <div className={styles.formControl + " " + (haveError ? styles.error : "")}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {haveError && <span>{error}</span>}
    </div>
  );
};

export const Input = ({ input, meta: {touched, error}, ...props }) => {
  const haveError = touched && error;
  return (
    <div className={styles.formControl + " " + (haveError ? styles.error : "")}>
      <div>
        <input {...input} {...props} />
      </div>
      {haveError && <span>{error}</span>}
    </div>
  );
};

export const createField = (placeholder, name, validators, component, props={}, text = "") => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        component={component}
        validate={validators}
        {...props}
      /> {text}
    </div>
  );
};
