const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // {id: 1, photoUrl:'https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip',
        //     followed: false, fullName: 'Tanya', status: 'Learning React',location: {city: 'SPb', country: 'Russia'}},
        // {id: 2, photoUrl:'https://moderncat.com/wp-content/uploads/2014/03/tortoiseshell-kitten-closeup-p-46771525-940x640.jpg',
        //     followed: true, fullName: 'Sveta', status: 'Dreaming', location: {city: 'SPb', country: 'Russia'}},
        // {id: 3, photoUrl:'https://i.insider.com/61d1c0e2aa741500193b2d18?width=700',
        //     followed: false, fullName: 'Lola', status: 'Kuku', location: {city: 'Syktyvkar', country: 'Russia'}},
        // {id: 4, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB2ysrPvhIBLoo22vh1IW1cPRT4YEaSA52Rg&usqp=CAU',
        //     followed: true, fullName: 'John', status: 'Learning IOS', location: {city: 'SPb', country: 'Russia'}},
        // {id: 5, photoUrl:'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9',
        //     followed: false, fullName: 'Vera', status: 'Walking', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 6, photoUrl:'https://www.statnews.com/wp-content/uploads/2020/05/GettyImages-513859318.jpg',
        //     followed: true, fullName: 'Valera', status: 'Drunk', location: {city: 'California', country: 'USA'}},

    ],
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: {
                return {...state, users:[...state.users, ...action.users]}
            }
            default:
            return state;
    }

}
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;