import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface InputState {
  value: string;
}

const initialState: InputState = {
  value: "",
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    inputChange: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { inputChange } = inputSlice.actions;

export default inputSlice.reducer;
