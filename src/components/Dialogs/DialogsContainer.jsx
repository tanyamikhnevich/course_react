import {
  addMassageActionCreator,
} from "../../redux/dialogs-reducer.ts";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import React from "react";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMassage: (newMassageBody) => {
      dispatch(addMassageActionCreator(newMassageBody));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
