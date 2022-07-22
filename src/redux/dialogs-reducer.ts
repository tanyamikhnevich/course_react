import {InferActionsTypes} from "./redux-store";

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

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case "ADD-MASSAGE":
      let newMassage = action.newMassageBody;
      return {
        ...state,
        massages: [...state.massages, { id: 6, massage: newMassage }],
      };

    default:
      return state;
  }
};

export const actions = {
 addMassageActionCreator: (newMassageBody: string) => ({
    type: "ADD-MASSAGE",
    newMassageBody,
  } as const),
}


export default dialogsReducer;


type MassagesType = {
  id: number, massage: string
}
type NamesType = {
  id: number, name: string
}
export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>;