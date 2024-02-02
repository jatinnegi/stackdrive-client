import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResourceProps } from "@/types";
import { initialResourcesData } from "@/data";
import { sortResources } from "@/utils/helper";

export type SortBy = "name" | "owner" | "size" | "lastModified";

interface IResources {
  data: ResourceProps[];
  selected: string[];
  sortBy: SortBy | null;
  isOrderAsc: boolean;
}

const initialState: IResources = {
  data: initialResourcesData,
  selected: [],
  sortBy: null,
  isOrderAsc: true,
};

interface Payload {
  id: string;
}

interface UpdateMultipleSelectedIdsBySelectionBoxPayload {
  ids: string[];
}

interface UpdateSortPayload {
  sortBy: SortBy;
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
    updateTrash(state) {
      const ids = state.selected;

      state.data = state.data.filter(
        (resource: ResourceProps) => !ids.includes(resource.id)
      );

      state.selected = [];
    },
    resetData(state) {
      state.data = initialResourcesData;
    },
    updateSort(state, action: PayloadAction<UpdateSortPayload>) {
      const { sortBy } = action.payload;

      if (state.sortBy === sortBy) {
        state.isOrderAsc = !state.isOrderAsc;
      } else {
        state.sortBy = sortBy;
        state.isOrderAsc = true;
      }
      state.data = sortResources(state.data, state.sortBy, state.isOrderAsc);
    },
  },
});

export const {
  updateSelectedId,
  resetSelectedIds,
  updateMultipleSelectedIds,
  updateMultipleSelectedIdsBySelectionBox,
  updateTrash,
  resetData,
  updateSort,
} = resources.actions;
export default resources.reducer;
