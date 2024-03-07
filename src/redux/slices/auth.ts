import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuth {
  userInfo: Record<string, string> | null;
}

const initialState: IAuth = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo") || "{}")
    : null,
};

interface SetCredentialsPayload {
  userInfo: Record<string, string>;
}

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials(state, action: PayloadAction<SetCredentialsPayload>) {
      const { userInfo } = action.payload;
      state.userInfo = userInfo;
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
    logout(state) {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logout } = auth.actions;

export default auth.reducer;
