import styles from './Dialogs.module.css';
import React from "react";
import OneDialog from "./Dialog/OneDialog";
import MassageOne from "./Massage/MassageOne";

const Dialogs = (props) => {
    let massageElements = props.dialogsPage.massages.map(m => <MassageOne massage={m.massage}/>);
    let dialogsElements = props.dialogsPage.names.map(d => <OneDialog name={d.name} id={d.id}/>);

    let newMassageElement = React.createRef();

    let addMassage = () => {
        props.sendMassage();
    }
    let onMassageChange = () => {
        let mtext = newMassageElement.current.value;
        props.updateNewMassageText(mtext);

    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsOne}>
                {dialogsElements}
            </div>
            <div className={styles.massageOne}>
                {massageElements}
                <div>
                    <textarea onChange={onMassageChange}
                              ref={newMassageElement}
                              value={props.newMassageText}/>
                    <button onClick={addMassage}>Add message</button>
                </div>
            </div>
        </div>
    );

}
export default Dialogs