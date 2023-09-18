import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type menuType = 'Board' | 'Calendar' | 'something else here';

interface MenuState {
  selectedMenu: menuType;
  visible: boolean
};

const initialState: MenuState = {
  selectedMenu: 'Board',
  visible: true
};

export const menu = createSlice({
  name: "menu",
  initialState,
  reducers: {
    // reset: () => initialState,
    updateCurrentMenu: (state, action: PayloadAction<menuType>) => {
      state.selectedMenu = action.payload;
    },
    toggleVisible: (state) => {
      state.visible = !state.visible;
    }
  },
});

export const {
  // reset,
  updateCurrentMenu,
  toggleVisible
} = menu.actions;

export default menu.reducer;
