import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCount: [1, 2, 3, 4, 5],
        };
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.toggleIsFetching(false);
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
        this.props.toggleIsFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users currentCount = {this.state.currentCount}
                      currentPage = {this.props.currentPage}
                      onPageChanged = {this.onPageChanged}
                      users = {this.props.users}
                      follow = {this.props.follow}
                      unfollow = {this.props.unfollow}
        />
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}



export default connect (mapStateToProps, {
    follow, unfollow, setUsers,  setCurrentPage, setTotalUsersCount, toggleIsFetching}) (UsersContainer)