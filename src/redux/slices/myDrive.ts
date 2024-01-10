import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type View = "grid" | "list";
type Operation = "newFolder";

interface IMyDrive {
  view: View;
  displayModifiedFilter: boolean;
  operation: Operation | null;
}

const initialState: IMyDrive = {
  view: "grid",
  displayModifiedFilter: false,
  operation: null,
};

interface Payload {
  view?: View;
  displayModifiedFilter?: boolean;
  operation?: Operation | null;
}

const myDrive = createSlice({
  name: "myDrive",
  initialState,
  reducers: {
    updateMyDrive(state, action: PayloadAction<Payload>) {
      const { payload } = action;

      state.view = payload.view || state.view;

      if (typeof payload.displayModifiedFilter !== "undefined") {
        state.displayModifiedFilter = payload.displayModifiedFilter;
      }
      if (typeof payload.operation !== "undefined") {
        state.operation = payload.operation;
      }
    },
  },
});

export const { updateMyDrive } = myDrive.actions;
export default myDrive.reducer;
