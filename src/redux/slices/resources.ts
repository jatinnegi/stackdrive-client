import { createSlice } from "@reduxjs/toolkit";
import { ResourceProps } from "@/types";
import { initialResourcesData } from "@/data";

interface IResources {
  data: ResourceProps[];
  selected: string[];
}

const initialState: IResources = {
  data: initialResourcesData,
  selected: [],
};

interface Payload {
  id: string;
}

const resources = createSlice({
  name: "resources",
  initialState,
  reducers: {
    updateSelectedId(state, { payload: { id } }: { payload: Payload }) {
      state.selected = [id];
    },
    resetSelectedId(state) {
      state.selected = [];
    },
    updateMultipleSelectedIds(
      state,
      { payload: { id } }: { payload: Payload }
    ) {
      const updatedSelectedIds: string[] = [];

      if (state.selected.length === 0) {
        for (let i = 0; i < state.data.length; i++) {
          const currentId = state.data[i].id;
          updatedSelectedIds.push(currentId);
          if (currentId === id) break;
        }
        state.selected = updatedSelectedIds;
      } else {
        let valid = false;
        const prevSelectedId = state.selected[0];
        for (let i = 0; i < state.data.length; i++) {
          const currentId = state.data[i].id;
          if (!valid && (currentId === prevSelectedId || currentId === id)) {
            valid = true;
            updatedSelectedIds.push(currentId);
            continue;
          }
          if (valid && (currentId === prevSelectedId || currentId === id)) {
            updatedSelectedIds.push(currentId);
            break;
          }
          if (valid) updatedSelectedIds.push(currentId);
        }
        state.selected = Array.from(
          new Set<string>([...state.selected, ...updatedSelectedIds])
        );
      }
    },
  },
});

export const { updateSelectedId, resetSelectedId, updateMultipleSelectedIds } =
  resources.actions;
export default resources.reducer;
