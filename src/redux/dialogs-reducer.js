const ADD_MASSAGE = "ADD-MASSAGE";

let initialState = {
  massages: [
    { id: 1, massage: "Hello" },
    { id: 2, massage: "Hy" },
    { id: 3, massage: "Yo" },
    { id: 4, massage: "Meow" },
    { id: 5, massage: "Wow" },
  ],
  names: [
    { id: 1, name: "Sveta" },
    { id: 2, name: "Tanya" },
    { id: 3, name: "Lola" },
    { id: 4, name: "John" },
    { id: 5, name: "Vera" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MASSAGE:
      let newMassage = action.newMassageBody;
      return {
        ...state,
        massages: [...state.massages, { id: 6, massage: newMassage }],
      };

    default:
      return state;
  }
};
export const addMassageActionCreator = (newMassageBody) => ({
  type: ADD_MASSAGE,
  newMassageBody,
});

export default dialogsReducer;