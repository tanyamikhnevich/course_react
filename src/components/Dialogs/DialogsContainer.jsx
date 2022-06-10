import {addMassageActionCreator, updateNewMassageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMassageText: state.dialogsPage.newMassageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMassageText: (mtext) => {
            let action = updateNewMassageTextActionCreator(mtext);
            dispatch(action);
        },
        sendMassage: () => {
            dispatch(addMassageActionCreator());
        },
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;