import { combineReducers } from "@reduxjs/toolkit";
import settings from "./slices/settings";
import myDrive from "./slices/myDrive";
import resources from "./slices/resources";
import contextMenu from "./slices/contextMenu";
import selectionBox from "./slices/selectionBox";

const rootReducer = combineReducers({
  settings,
  myDrive,
  resources,
  contextMenu,
  selectionBox,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
