import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IOperations {
  newFolder: boolean;
  rename: boolean;
  share: boolean;
  information: boolean;
  trash: boolean;
  newFolderCreate: boolean;
}

const initialState: IOperations = {
  newFolder: false,
  rename: false,
  share: false,
  information: false,
  trash: false,
  newFolderCreate: false,
};

interface PayloadType {
  newFolder?: boolean;
  rename?: boolean;
  share?: boolean;
  information?: boolean;
  trash?: boolean;
  newFolderCreate?: boolean;
}

const operations = createSlice({
  name: "operations",
  initialState,
  reducers: {
    updateOperations(state, action: PayloadAction<PayloadType>) {
      const { newFolder, rename, share, information, trash, newFolderCreate } =
        action.payload;

      if (typeof newFolder === "boolean") {
        state.newFolder = newFolder;
      }

      if (typeof rename === "boolean") {
        state.rename = rename;
      }

      if (typeof share === "boolean") {
        state.share = share;
      }

      if (typeof information === "boolean") {
        state.information = information;
      }

      if (typeof trash === "boolean") {
        state.trash = trash;
      }

      if (typeof newFolderCreate === "boolean") {
        state.newFolderCreate = newFolderCreate;
      }
    },
  },
});

export const { updateOperations } = operations.actions;
export default operations.reducer;
