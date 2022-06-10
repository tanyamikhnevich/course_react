import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store ={
    _state: {
        profilePage: {
            posts: [
                {id: 1, massage: 'Yo!', likesCount: 65},
                {id: 2, massage: 'My first post!', likesCount: 34},
                {id: 3, massage: 'Wow!!', likesCount: 45},
                {id: 4, massage: 'Yo!', likesCount: 38},
                {id: 4, massage: 'Hello!', likesCount: 98},
            ],
            newPostText:'kkuu'
        },
        dialogsPage: {
            massages: [
                {id: 1, massage: 'Hello'},
                {id: 2, massage: 'Hi'},
                {id: 3, massage: 'Yo'},
                {id: 4, massage: 'Meow'},
            ],
            newMassageText:'hdhd',
            names: [
                {id: 1, name: 'Sveta'},
                {id: 2, name: 'Tanya'},
                {id: 3, name: 'Lola'},
                {id: 4, name: 'John'},
                {id: 5, name: 'Vera'},

            ]
        },
        sidebar: {},
        newsPage: {
            namesData: [
                {id: 1, nameD: 'Tanya'},
                {id: 2, nameD: 'Sveta'},
                {id: 3, nameD: 'John'},
                {id: 4, nameD: 'Tanya'}
            ],
            textData: [
                {id: 1, textN: 'Hi'},
                {id: 2, textN: 'Hello'},
                {id: 3, textN: 'Yo'},
                {id: 4, textN: 'Good'}
            ]
        }
    },
    _callSubscriber () {},

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
        },
}



export default store;
window.store = store;