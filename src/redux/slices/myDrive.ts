import { createSlice } from "@reduxjs/toolkit";

type View = "grid" | "list";

interface IMyDrive {
  view: View;
  displayModifiedFilter: boolean;
}

const initialState: IMyDrive = {
  view: "grid",
  displayModifiedFilter: false,
};

interface Payload {
  view?: View;
  displayModifiedFilter?: boolean;
}

const myDrive = createSlice({
  name: "myDrive",
  initialState,
  reducers: {
    updateMyDrive(state, { payload }: { payload: Payload }) {
      state.view = payload.view || state.view;

      if (typeof payload.displayModifiedFilter !== "undefined")
        state.displayModifiedFilter = payload.displayModifiedFilter;
    },
  },
});

export const { updateMyDrive } = myDrive.actions;
export default myDrive.reducer;
