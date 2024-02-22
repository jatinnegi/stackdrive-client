import { combineReducers } from "@reduxjs/toolkit";
import settings from "./slices/settings";
import myDrive from "./slices/myDrive";
import resources from "./slices/resources";
import contextMenu from "./slices/contextMenu";
import messages from "./slices/messages";
import operations from "./slices/operations";

const rootReducer = combineReducers({
  settings,
  myDrive,
  resources,
  contextMenu,
  messages,
  operations,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
