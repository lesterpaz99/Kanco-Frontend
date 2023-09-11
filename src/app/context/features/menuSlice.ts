import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MenuState = {
  value: 'Board' | 'Calendar' | 'something else here';
};

const initialState: MenuState = {
  value: 'Board',
};

export const menu = createSlice({
  name: "menu",
  initialState,
  reducers: {
    reset: () => initialState,
    updateCurrentMenu: (state, action: PayloadAction<MenuState>) => {
      state.value = action.payload.value;
    }
  },
});

export const {
  updateCurrentMenu,
  reset,
} = menu.actions;

export default menu.reducer;
