import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeType, LayoutType, ViewType } from "@/types";

interface ISettings {
  theme: ThemeType;
  layout: LayoutType;
  view: ViewType;
  displayMobileMenu: boolean;
}

const initialState: ISettings = {
  theme: "dark",
  layout: "full",
  view: "grid",
  displayMobileMenu: false,
};

interface PayloadType {
  displayMobileMenu?: boolean;
  theme?: ThemeType;
  layout?: LayoutType;
  view?: ViewType;
}

const settings = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateSettings(state, action: PayloadAction<PayloadType>) {
      const { displayMobileMenu, theme, layout, view } = action.payload;

      state.displayMobileMenu =
        typeof displayMobileMenu !== "undefined"
          ? displayMobileMenu
          : state.displayMobileMenu;
      state.theme = theme ? theme : state.theme;
      state.layout = layout ? layout : state.layout;
      state.view = view ? view : state.view;
    },
  },
});

export const { updateSettings } = settings.actions;
export default settings.reducer;
