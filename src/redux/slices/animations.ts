import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAnimations {
  resourceWrappersDrag: boolean;
  resourceWrappersStack: boolean;
  resourceWrappersStackAnimate: boolean;
  resourceWrappersStackAnimateReset: boolean;
  resourceWrappersOffsetX: number;
  resourceWrappersOffsetY: number;
  resourceWrappersStackOffsetX: number;
  resourceWrappersStackOffsetY: number;
  resourceWrappersResetX: null | number;
  resourceWrappersResetY: null | number;
  resourceWrapperMirrorElSelected: string | null;
}

const initialState: IAnimations = {
  resourceWrappersDrag: false,
  resourceWrappersStack: false,
  resourceWrappersStackAnimate: false,
  resourceWrappersStackAnimateReset: false,
  resourceWrappersOffsetX: -1,
  resourceWrappersOffsetY: -1,
  resourceWrappersStackOffsetX: 0,
  resourceWrappersStackOffsetY: 0,
  resourceWrappersResetX: 0,
  resourceWrappersResetY: 0,
  resourceWrapperMirrorElSelected: null,
};

interface PayloadType {
  resourceWrappersDrag?: boolean;
  resourceWrappersStack?: boolean;
  resourceWrappersStackAnimate?: boolean;
  resourceWrappersStackAnimateReset?: boolean;
  resourceWrappersOffsetX?: number;
  resourceWrappersOffsetY?: number;
  resourceWrappersStackOffsetX?: number;
  resourceWrappersStackOffsetY?: number;
  resourceWrappersResetX?: null | number;
  resourceWrappersResetY?: null | number;
  resourceWrapperMirrorElSelected?: string | null;
}

const animations = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateAnimations(state, action: PayloadAction<PayloadType>) {
      const {
        resourceWrappersDrag,
        resourceWrappersStack,
        resourceWrappersOffsetX,
        resourceWrappersOffsetY,
        resourceWrappersStackAnimate,
        resourceWrappersStackAnimateReset,
        resourceWrappersStackOffsetX,
        resourceWrappersStackOffsetY,
        resourceWrappersResetX,
        resourceWrappersResetY,
        resourceWrapperMirrorElSelected,
      } = action.payload;

      if (typeof resourceWrappersDrag === "boolean") {
        state.resourceWrappersDrag = resourceWrappersDrag;
      }

      if (typeof resourceWrappersStack === "boolean") {
        state.resourceWrappersStack = resourceWrappersStack;
      }

      if (typeof resourceWrappersStackAnimate === "boolean") {
        state.resourceWrappersStackAnimate = resourceWrappersStackAnimate;
      }

      if (typeof resourceWrappersStackAnimateReset === "boolean") {
        state.resourceWrappersStackAnimateReset =
          resourceWrappersStackAnimateReset;
      }

      if (typeof resourceWrappersOffsetX === "number") {
        state.resourceWrappersOffsetX = resourceWrappersOffsetX;
      }

      if (typeof resourceWrappersOffsetY === "number") {
        state.resourceWrappersOffsetY = resourceWrappersOffsetY;
      }

      if (typeof resourceWrappersStackOffsetX === "number") {
        state.resourceWrappersStackOffsetX = resourceWrappersStackOffsetX;
      }

      if (typeof resourceWrappersStackOffsetY === "number") {
        state.resourceWrappersStackOffsetY = resourceWrappersStackOffsetY;
      }

      if (
        resourceWrappersResetX === null ||
        typeof resourceWrappersResetX === "number"
      ) {
        state.resourceWrappersResetX = resourceWrappersResetX;
      }

      if (
        resourceWrappersResetY === null ||
        typeof resourceWrappersResetY === "number"
      ) {
        state.resourceWrappersResetY = resourceWrappersResetY;
      }

      if (
        typeof resourceWrapperMirrorElSelected === "string" ||
        resourceWrapperMirrorElSelected === null
      ) {
        state.resourceWrapperMirrorElSelected = resourceWrapperMirrorElSelected;
      }
    },
  },
});

export const { updateAnimations } = animations.actions;
export default animations.reducer;
