let store ={
    _state: {
        profilePage: {
            posts: [
                {id: 1, massage: 'Yo', likesCount: 67},
                {id: 2, massage: 'My first post', likesCount: 34},
                {id: 3, massage: 'Wow!!', likesCount: 45},
                {id: 4, massage: 'Yo', likesCount: 38},
                {id: 4, massage: 'Hello', likesCount: 98},
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
    getState() {
        return this._state;
    },
    _callSubscriber () {},
    addPost() {
        let newPost ={
            id:5,
            massage:this._state.profilePage.newPostText,
            likesCount:0,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
     updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMassage() {
        let newMassage = {
            id:5,
            massage:this._state.dialogsPage.newMassageText,
        }
        this._state.dialogsPage.massages.push(newMassage);
        this._state.dialogsPage.newMassageText='';
        this._callSubscriber(this._state);
    },
    updateNewMassageText (newMassage) {
        this._state.dialogsPage.newMassageText=newMassage;
        this._callSubscriber(this._state);

    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
}


export default store;
window.store = store;