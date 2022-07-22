import {
  actions,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";
import {AppStateType} from "../../redux/redux-store";
import * as React from "react";

let mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, {sendMassage: actions.addMassageActionCreator}),
  withAuthRedirect
)(Dialogs);
