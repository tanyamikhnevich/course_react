import { getAuthUserData } from "./auth-reducer.ts";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export type InitialStateType = {
  initialized: boolean
}

let initialState: InitialStateType = {
  initialized: false,
};

const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

type InitialaizedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS,
}
export const initialaizedSuccess = ():InitialaizedSuccessActionType => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initialaizedSuccess());
  });
};

export default appReducer;
