import styles from "./Dialogs.module.css";
import React from "react";
import { Field, reduxForm } from "redux-form";
import {Textarea} from "../common/FormControl/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const AddMassageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field
          component={Textarea}
          name={"newMassageBody"}
          placeholder={"Enter your massage"}
          validate={[required, maxLengthCreator(20)]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};
export const AddMassageFormRedux = reduxForm({ form: "dialogAddMassageForm" })(
    AddMassageForm
);
