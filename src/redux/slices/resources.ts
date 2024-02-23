import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NavigationProps, ResourceProps } from "@/types";
import { sortResources } from "@/utils/helper";

export type SortBy = "name" | "owner" | "size" | "lastModified";

interface IResources {
  init: boolean;
  loading: boolean;
  navigation: NavigationProps[];
  initialData: ResourceProps[];
  data: ResourceProps[];
  selected: string[];
  sortBy: SortBy | null;
  isOrderAsc: boolean;
}

const initialState: IResources = {
  init: false,
  loading: true,
  navigation: [],
  initialData: [],
  data: [],
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

interface UpdateResourceDataPayload {
  loading?: boolean;
  navigation?: NavigationProps[];
  data?: ResourceProps[];
}

interface AppendNavigationPayload {
  id: string;
  name: string;
}

interface RemoveNavigationPayload {
  id: string | null;
}

const resources = createSlice({
  name: "resources",
  initialState,
  reducers: {
    updateResourcesData(
      state,
      action: PayloadAction<UpdateResourceDataPayload>
    ) {
      const { loading, data, navigation } = action.payload;

      if (typeof loading === "boolean") {
        state.loading = loading;
      }

      if (typeof data === "object") {
        state.data = data;
        state.initialData = data;
        state.init = true;
      }

      if (typeof navigation === "object") {
        state.navigation = navigation;
      }
    },
    appendNavigation(state, action: PayloadAction<AppendNavigationPayload>) {
      const { id, name } = action.payload;
      state.navigation.push({ id, name });
    },
    removeNavigation(state, action: PayloadAction<RemoveNavigationPayload>) {
      const { id } = action.payload;
      const updatedNavigations: NavigationProps[] = [];

      if (id === null) {
        state.navigation = updatedNavigations;
        return;
      }

      for (let i = 0; i < state.navigation.length; i++) {
        updatedNavigations.push(state.navigation[i]);

        if (state.navigation[i].id === id) {
          break;
        } else {
          continue;
        }
      }

      state.navigation = updatedNavigations;
    },
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
      state.data = state.initialData;
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
  updateResourcesData,
  updateSelectedId,
  appendNavigation,
  removeNavigation,
  resetSelectedIds,
  updateMultipleSelectedIds,
  updateMultipleSelectedIdsBySelectionBox,
  updateTrash,
  resetData,
  updateSort,
} = resources.actions;

export default resources.reducer;
