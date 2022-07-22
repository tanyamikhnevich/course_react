import { getAuthUserData } from "./auth-reducer";
import { InferActionsTypes } from "./redux-store";

let initialState = { initialized: false };

const appReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case "INITIALIZED_SUCCESS":
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const actions = {
  initialaizedSuccess: () => ({ type: "INITIALIZED_SUCCESS" } as const),
};

export const initializeApp = () => (dispatch: any, getState) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(actions.initialaizedSuccess());
  });
};

export default appReducer;

type ActionsTypes = InferActionsTypes<typeof actions>;
export type InitialStateType = typeof initialState;
// type ActionsTypes = InitialaizedSuccessActionType
// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;
