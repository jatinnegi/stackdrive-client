import { createSlice } from "@reduxjs/toolkit";

type ThemeType = "light" | "dark";
type LayoutType = "full" | "collapse" | "scrollable";

interface ISettings {
  display: boolean;
  theme: ThemeType;
  layout: LayoutType;
}

const initialState: ISettings = {
  display: false,
  theme: "dark",
  layout: "collapse",
};

interface Payload {
  display?: boolean;
  theme?: ThemeType;
  layout?: LayoutType;
}

const settings = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleDisplay(state, { payload }: { payload: Payload }) {
      const { display } = payload;
      if (typeof display === "undefined") return;
      state.display = display;
    },
    updateSettings(state, { payload }: { payload: Payload }) {
      state.theme = payload.theme || state.theme;
      state.layout = payload.layout || state.layout;
    },
  },
});

export const { toggleDisplay, updateSettings } = settings.actions;
export default settings.reducer;
