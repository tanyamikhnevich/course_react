import React from "react";
import styles from "./FormsControl.module.css";

export const Textarea = ({ input, meta, ...props }) => {
  const haveError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (haveError ? styles.error : "")}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {haveError && <span>{meta.error}</span>}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const haveError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (haveError ? styles.error : "")}>
      <div>
        <input {...input} {...props} />
      </div>
      {haveError && <span>{meta.error}</span>}
    </div>
  );
};
