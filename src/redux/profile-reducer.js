const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, massage: 'Yo!', likesCount: 67},
        {id: 2, massage: 'My first post', likesCount: 34},
        {id: 3, massage: 'Wow!!', likesCount: 45},
        {id: 4, massage: 'Yo', likesCount: 38},
        {id: 5, massage: 'Hello', likesCount: 98},
    ],
        newPostText:'kkuu'
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost ={
                id:6,
                massage:state.newPostText,
                likesCount:0,
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText:text})

export default profileReducer;