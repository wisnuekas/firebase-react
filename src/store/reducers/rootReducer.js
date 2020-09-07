import { combineReducers } from "redux";
import authReducer from "./authReducer";
import orderReducer from "./orderReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  order: orderReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
