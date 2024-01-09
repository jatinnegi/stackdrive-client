import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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

interface UpdateMultipleSelectedIdsBySelectionBoxPayload {
  ids: string[];
}

const resources = createSlice({
  name: "resources",
  initialState,
  reducers: {
    updateSelectedId(state, action: PayloadAction<Payload>) {
      const { id } = action.payload;
      state.selected = [id];
    },
    resetSelectedIds(state) {
      state.selected = [];
    },
    updateMultipleSelectedIds(state, action: PayloadAction<Payload>) {
      const { id } = action.payload;
      const updatedSelectedIds: string[] = [];

      if (state.selected.length === 0) {
        for (let i = 0; i < state.data.length; i++) {
          const currentId = state.data[i].id;
          updatedSelectedIds.push(currentId);
          if (currentId === id) break;
        }
        state.selected = updatedSelectedIds;
      } else if (state.selected.length === 1 && state.selected[0] === id) {
        return state;
      } else {
        let valid = false;
        let firstSelectedId = state.selected[0];

        for (let i = 0; i < state.data.length; i++) {
          const currentId = state.data[i].id;
          if (currentId === id || currentId === firstSelectedId) {
            if (valid) {
              updatedSelectedIds.push(currentId);
            }
            valid = !valid;
          }

          if (valid) {
            updatedSelectedIds.push(currentId);
          }
        }
        state.selected = updatedSelectedIds;
      }
    },
    updateMultipleSelectedIdsBySelectionBox(
      state,
      action: PayloadAction<UpdateMultipleSelectedIdsBySelectionBoxPayload>
    ) {
      const { ids } = action.payload;
      state.selected = ids;
    },
  },
});

export const {
  updateSelectedId,
  resetSelectedIds,
  updateMultipleSelectedIds,
  updateMultipleSelectedIdsBySelectionBox,
} = resources.actions;
export default resources.reducer;
