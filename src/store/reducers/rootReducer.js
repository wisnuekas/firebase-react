import { combineReducers } from "redux";
import authReducer from "./authReducer";
import orderReducer from "./orderReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import titleReducer from "./titleReducer";
import appNotifReducer from "./appNotifReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  order: orderReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  title: titleReducer,
  notif: appNotifReducer,
});

export default rootReducer;
