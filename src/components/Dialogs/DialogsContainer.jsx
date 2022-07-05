import {
  addMassageActionCreator,
  updateNewMassageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import React from "react";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMassageText: state.dialogsPage.newMassageText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMassageText: (mtext) => {
      let action = updateNewMassageTextActionCreator(mtext);
      dispatch(action);
    },
    sendMassage: () => {
      dispatch(addMassageActionCreator());
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
