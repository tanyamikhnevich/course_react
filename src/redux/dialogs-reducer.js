const ADD_MASSAGE = 'ADD-MASSAGE';
const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE-NEW-MASSAGE-TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MASSAGE:
            let newMassage = {
                id: 5,
                massage: state.newMassageText,
            }
            state.massages.push(newMassage);
            state.newMassageText = '';

            return state;
        case UPDATE_NEW_MASSAGE_TEXT:
            state.newMassageText = action.newMassage;
            return state;
        default: return state;
    }
}
export const addMassageActionCreator = () => ({type: ADD_MASSAGE})
export const updateNewMassageTextActionCreator = (mtext) => ({type: UPDATE_NEW_MASSAGE_TEXT, newMassage:mtext})

export default dialogsReducer;