import * as React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { AppStateType } from "../redux/redux-store";

let mapStateToPropsRedirect = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
});

type MapStatePropsType = {isAuth: boolean}
type DispatchPropsType = {}


export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
  const RedirectComponent: React.FC<MapStatePropsType & DispatchPropsType> = (props) => {
    let {isAuth, ...restProps} = props
    if (!isAuth) return <Redirect to={"/login"} />;
    return <WrappedComponent {...restProps as WCP} />;
  }

  let ConnectedAuthRedirectComponent = connect<MapStatePropsType, DispatchPropsType, WCP, AppStateType>(mapStateToPropsRedirect, {})(
    RedirectComponent
  );

  return ConnectedAuthRedirectComponent;
};