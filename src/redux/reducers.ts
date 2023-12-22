import { combineReducers } from "@reduxjs/toolkit";
import settings from "./slices/settings";
import myDrive from "./slices/myDrive";

const rootReducer = combineReducers({
  settings,
  myDrive,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
