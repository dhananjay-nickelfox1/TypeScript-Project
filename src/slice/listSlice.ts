import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface listType {
  content: string;
  id: number;
  edit: boolean;
}

interface changeType {
  content: string;
  id: number;
}

export interface ListState {
  value: Array<listType>;
}

const initialState: ListState = {
  value: [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<listType>) => {
      state.value = [...state.value, action.payload];
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    editItem: (state, action: PayloadAction<number>) => {
      const newList = [...state.value];
      newList.forEach((item) => {
        if (item?.id === action.payload) item.edit = !item.edit;
      });
      state.value = newList;
    },
    changeValue: (state, action: PayloadAction<changeType>) => {
      const newList = [...state.value];
      newList.forEach((item) => {
        if (item?.id === action.payload.id)
          item.content = action.payload.content;
      });
      state.value = newList;
    },
  },
});

export const { addItem, deleteItem, editItem, changeValue } = listSlice.actions;

export default listSlice.reducer;
