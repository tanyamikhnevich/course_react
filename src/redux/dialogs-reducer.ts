const ADD_MASSAGE = "ADD-MASSAGE";

type MassagesType = {
  id: number, massage: string
}

type NamesType = {
  id: number, name: string
}

let initialState = {
  massages: [
    { id: 1, massage: "Hello" },
    { id: 2, massage: "Hy" },
    { id: 3, massage: "Yo" },
    { id: 4, massage: "Meow" },
    { id: 5, massage: "Wow" },
  ] as Array<MassagesType>,
  names: [
    { id: 1, name: "Sveta" },
    { id: 2, name: "Tanya" },
    { id: 3, name: "Lola" },
    { id: 4, name: "John" },
    { id: 5, name: "Vera" },
  ] as Array<NamesType>,
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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

type AddMassageActionCreatorType = {
  type: typeof ADD_MASSAGE,
  newMassageBody: string,
}

export const addMassageActionCreator = (newMassageBody: string): AddMassageActionCreatorType => ({
  type: ADD_MASSAGE,
  newMassageBody,
});

export default dialogsReducer;