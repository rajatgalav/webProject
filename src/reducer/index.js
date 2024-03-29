import { applyMiddleware, createStore } from "redux";
// import axios from "axios";

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null,
};

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_PENDING": {
      return {...state, fetching: true}
      break;
    }
    case "FETCH_USERS_REJECTED": {
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case "FETCH_USERS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload,
      }
      break;
    }
  }
  return state
}


// store.dispatch({
//   type: "FETCH_USERS_PENDING"
// })
// store.dispatch({
//   type: "FETCH_USERS_FULFILLED",
//   payload: axios.get("http://rest.learncode.academy/api/wstern/users").then(res => res.data)
// })