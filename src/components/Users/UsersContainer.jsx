import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  unfollow,
  getUsers,
  toggleIsFollowingProgress,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getsomeUsers,
} from "../../redux/users-selections";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: [1, 2, 3, 4, 5],
    };
  }

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
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

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   };
// };

let mapStateToProps = (state) => {
  return {
    users: getsomeUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};


export default compose(
    connect(mapStateToProps, {
      follow,
      unfollow,
      setCurrentPage,
      toggleIsFollowingProgress,
      getUsers,
    })
) (UsersContainer)
