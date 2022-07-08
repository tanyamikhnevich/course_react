import styles from "./Dialogs.module.css";
import React from "react";
import OneDialog from "./Dialog/OneDialog";
import MassageOne from "./Massage/MassageOne";
import { AddMassageFormRedux } from "./DialogsForm";

const Dialogs = (props) => {
  let massageElements = props.dialogsPage.massages.map((m) => (
    <MassageOne massage={m.massage} />
  ));
  let dialogsElements = props.dialogsPage.names.map((d) => (
    <OneDialog name={d.name} id={d.id} />
  ));

  let addNewMassage = (values) => {
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
