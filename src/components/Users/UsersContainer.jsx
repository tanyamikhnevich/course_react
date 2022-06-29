import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCount: [1, 2, 3, 4, 5],
        };
    }

    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
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
        this.props.setCurrentPage(pageNumber);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        return <Users currentCount = {this.state.currentCount}
                      currentPage = {this.props.currentPage}
                      onPageChanged = {this.onPageChanged}
                      users = {this.props.users}
                      follow = {this.props.follow}
                      unfollow = {this.props.unfollow}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (UsersContainer)