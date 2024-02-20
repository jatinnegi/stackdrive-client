import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MessageType = "success";

export interface IMessage {
  id: string;
  type: MessageType;
  value: string;
  display: boolean;
}

const initialState: IMessage[] = [];

interface AddPayload {
  id: string;
  type: MessageType;
  value: string;
}

interface RemoveAction {
  id: string;
}

const messages = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<AddPayload>) {
      const { id, type, value } = action.payload;

      state.push({ id, type, value, display: true });
    },

    removeMessage(state, action: PayloadAction<RemoveAction>) {
      const { id } = action.payload;
      let indexToRemove = null;

      for (let i = 0; i < state.length && indexToRemove === null; i++) {
        if (id === state[i].id) {
          indexToRemove = i;
        } else {
          continue;
        }
      }

      if (indexToRemove === null) return;

      state[indexToRemove].display = false;
    },
  },
});

export const { addMessage, removeMessage } = messages.actions;
export default messages.reducer;
