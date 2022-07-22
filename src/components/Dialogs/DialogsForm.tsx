import * as React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { createField, Textarea } from "../common/FormControl/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { DialogFormValuesType } from "./Dialogs";

type DialogFormValuesTypeKeys = Extract<keyof DialogFormValuesType, string>;
type PropsType = {}

const AddMassageForm: React.FC<InjectedFormProps<DialogFormValuesType, PropsType> & PropsType> = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
          {createField<DialogFormValuesTypeKeys>(
              "Enter your massage",
              "newMassageBody",
              [required, maxLengthCreator(20)],
              Textarea
          )}
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};
export const AddMassageFormRedux = reduxForm<DialogFormValuesType, PropsType>({ form: "dialogAddMassageForm" })(
    AddMassageForm
);
