import {APP_TOKEN} from '../ActionTypes';

const initialState = {
  appToken: null,
  newVAl:"CHecking"
};
const getTokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_TOKEN:
      console.log('REDUCER:', action.payload);
      return {
        ...state,
        appToken: action.payload,
      };
    default:
      return state;
  }
};

export default getTokenReducer;
