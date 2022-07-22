import * as React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  getUsers,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsersSuper,
} from "../../redux/users-selections";
import {UserType} from "../../Types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage:number
  isFetching: boolean
  followingInProgress: any
}

type MapDispatchPropsType = {
  follow: (userId: number) => void,
  unfollow: (userId: number) => void,
  getUsers: (currentPage:number, pageSize:number) => void
 }

type OwnPropsType = {}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

type StateType = {
  currentCount: any
}

class UsersContainer extends React.Component<PropsType, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: [1, 2, 3, 4, 5],
    };
  }

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    if (pageNumber > pagesCount - 2)
      this.setState({
        currentCount: [
          pagesCount - 4,
          pagesCount - 3,
          pagesCount - 2,
          pagesCount - 1,
          pagesCount,
        ],
      });
    else if (pageNumber < 3)
      this.setState({
        currentCount: [1, 2, 3, 4, 5],
      });
    else
      this.setState({
        currentCount: [
          pageNumber - 2,
          pageNumber - 1,
          pageNumber,
          pageNumber + 1,
          pageNumber + 2,
        ],
      });

    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          currentCount={this.state.currentCount}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsersSuper(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};


export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
  (mapStateToProps, {
    follow,
    unfollow,
    getUsers,
  })
)(UsersContainer);
