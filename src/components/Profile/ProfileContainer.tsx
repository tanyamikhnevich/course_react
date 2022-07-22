import * as React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getStatus,
  getUserProfile,
  savePhoto,
  saveProfile,
  updateStatus,
} from "../../redux/profile-reducer";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store";
import { ProfileType } from "../../Types/types";

type MapPropsType = ReturnType<typeof mapStateToProps>;

type DispatchPropsType = {
  getUserProfile: (userId: number) => void;
  getStatus: (userId: number) => void;
  updateStatus: (status: string) => void;
  savePhoto: (file: File) => void;
  saveProfile: (profile: ProfileType) => Promise<any>;
};

type PathParamsType = {
  userId: string;
};

type PropsTypes = MapPropsType &
  DispatchPropsType &
  RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<PropsTypes> {
  refreshProfile() {
    let userId: number | null = +this.props.match.params.userId;
    if (!userId) {
      userId = this.props.autorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }

    if (!userId) {
      console.error("ID should exist in URI params or in state");
    } else {
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);
    }
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: PropsTypes, prevState: PropsTypes) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  componentWillUnmount(): void {}

  render() {
    return (
      <div>
        <button
          onClick={() => {
            console.log(this.props.match.params.userId);
          }}
        >
          button
        </button>
        <Profile
          {...this.props}
          isOwner={!this.props.match.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          savePhoto={this.props.savePhoto}
          saveProfile={this.props.saveProfile}
        />
      </div>
    );
  }
}

let mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
