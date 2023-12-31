import { createSlice } from "@reduxjs/toolkit";

interface IContextMenu {
  resourceContextMenu: boolean;
  open: boolean;
  anchorX: number;
  anchorY: number;
}

const initialState: IContextMenu = {
  resourceContextMenu: false,
  open: false,
  anchorX: 0,
  anchorY: 0,
};

interface HandleContextMenuProps {
  resourceContextMenu: boolean;
  anchorX: number;
  anchorY: number;
}

const contextMenu = createSlice({
  name: "contextMenu",
  initialState,
  reducers: {
    handleContextMenu(state, { payload }: { payload: HandleContextMenuProps }) {
      state.open = true;
      state.resourceContextMenu = payload.resourceContextMenu;
      state.anchorX = payload.anchorX;
      state.anchorY = payload.anchorY;
    },
    onContextMenuClose(state) {
      state.open = false;
      state.anchorX = 0;
      state.anchorY = 0;
    },
  },
});

export const { handleContextMenu, onContextMenuClose } = contextMenu.actions;
export default contextMenu.reducer;
