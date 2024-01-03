import { createSlice } from "@reduxjs/toolkit";
import { CoordinateProps } from "@/types";

const initialState: Record<string, CoordinateProps> = {};

interface Payload {
  id: string;
  coordinates: CoordinateProps;
}

const selectionBox = createSlice({
  name: "myDrive",
  initialState,
  reducers: {
    updateResourceCoordinates(
      state,
      { payload: { id, coordinates } }: { payload: Payload }
    ) {
      state[id] = coordinates;
    },
  },
});

export const { updateResourceCoordinates } = selectionBox.actions;
export default selectionBox.reducer;
