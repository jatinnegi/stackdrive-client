import { createSlice } from "@reduxjs/toolkit";

type View = "grid" | "list";

interface IMyDrive {
  view: View;
}

const initialState: IMyDrive = {
  view: "list",
};

interface Payload {
  view?: View;
}

const myDrive = createSlice({
  name: "myDrive",
  initialState,
  reducers: {
    updateMyDrive(state, { payload }: { payload: Payload }) {
      state.view = payload.view || state.view;
    },
  },
});

export const { updateMyDrive } = myDrive.actions;
export default myDrive.reducer;
