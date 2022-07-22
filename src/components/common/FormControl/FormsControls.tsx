import * as React from "react";
import styles from "./FormsControl.module.css";
import { Field, WrappedFieldProps } from "redux-form";
import { FieldValidatorType } from "../../../utils/validators/validators";

export const Textarea: React.FC<WrappedFieldProps> = ({
  input,
  meta: { touched, error },
  ...props
}) => {
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

export const Input: React.FC<WrappedFieldProps> = ({
  input,
  meta: { touched, error },
  ...props
}) => {
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

export function createField<KeysType extends string>(
  placeholder: string | undefined,
  name: KeysType,
  validators: Array<FieldValidatorType>,
  component: React.FC<WrappedFieldProps>,
  props = {},
  text = ""
) {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        component={component}
        validate={validators}
        {...props}
      />{" "}
      {text}
    </div>
  );
}
