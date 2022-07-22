import styles from "./Dialogs.module.css";
import * as React from "react";
import OneDialog from "./Dialog/OneDialog";
import MassageOne from "./Massage/MassageOne";
import { AddMassageFormRedux } from "./DialogsForm";
import {InitialStateType} from "../../redux/dialogs-reducer";

type OwnPropsType = {
    dialogsPage: InitialStateType,
    sendMassage: (newMassageBody: string) => void
}

export type DialogFormValuesType = {
    newMassageBody: string,
};


const Dialogs: React.FC<OwnPropsType> = (props) => {
  let massageElements = props.dialogsPage.massages.map((m) => (
    <MassageOne key={m.id} massage={m.massage} />
  ));
  let dialogsElements = props.dialogsPage.names.map((d) => (
    <OneDialog key={d.id} name={d.name} id={d.id} />
  ));

  let addNewMassage = (values: DialogFormValuesType) => {
    props.sendMassage(values.newMassageBody);
  };
  return (
    <div>
      <div className={styles.dialogs}>
        <div className={styles.dialogsOne}>{dialogsElements}</div>
        <div className={styles.massageOne}>{massageElements}</div>
      </div>
      <div className={styles.massageForm}>
        <AddMassageFormRedux onSubmit={addNewMassage} />
      </div>
    </div>
  );
};

export default Dialogs;
