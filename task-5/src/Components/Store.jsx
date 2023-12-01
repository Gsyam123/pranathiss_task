// store.js
import { createStore } from "redux";

// Reducer
const rootReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

// Store
const store = createStore(rootReducer);

export default store;
