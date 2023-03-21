import React from "react";
import { CHANGE_THEME } from "../ActionTypes";

const initialState = {
    mode: 'LIGHT'
};
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      console.log("REDUCER:", action.payload);
    return {
        ...state,
        mode: action.payload
    }
    default:
      return state;
  }
};

export default themeReducer;
