
import {addMassageActionCreator, updateNewMassageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let addMassage = () => {
        props.store.dispatch(addMassageActionCreator());
    }
    let onMassageChange = (mtext) => {
        props.store.dispatch(updateNewMassageTextActionCreator(mtext));

    }
    return (
        <Dialogs updateNewMassageText={onMassageChange} sendMassage={addMassage}
        dialogsPage={state} newMassageText={state.newMassageText}/>
    );

}
export default DialogsContainer;