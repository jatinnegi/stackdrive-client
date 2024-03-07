import { combineReducers } from "@reduxjs/toolkit";
import settings from "./slices/settings";
import resources from "./slices/resources";
import contextMenu from "./slices/contextMenu";
import messages from "./slices/messages";
import operations from "./slices/operations";
import auth from "./slices/auth";
import { apiSlice } from "./slices/api/apiSlice";

const rootReducer = combineReducers({
  settings,
  resources,
  contextMenu,
  messages,
  operations,
  auth,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
