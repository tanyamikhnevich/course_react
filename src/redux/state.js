let renderEntireTree = () => {

}

let state = {
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
}

export const addPost = () => {
 let newPost ={
     id:5,
     massage:state.profilePage.newPostText,
     likesCount:0,
 }
 state.profilePage.posts.push(newPost);
 state.profilePage.newPostText = '';
 renderEntireTree(state);
}

export const updateNewPostText = (newText) => {
        state.profilePage.newPostText = newText;
        renderEntireTree(state);
    }

export const addMassage = () => {
    let newMassage = {
        id:5,
        massage:state.dialogsPage.newMassageText,
    }
    state.dialogsPage.massages.push(newMassage);
    state.dialogsPage.newMassageText='';
    renderEntireTree(state);
}

export const updateNewMassageText = (newMassage) => {
    state.dialogsPage.newMassageText=newMassage;
    renderEntireTree(state);

}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}
export default state;