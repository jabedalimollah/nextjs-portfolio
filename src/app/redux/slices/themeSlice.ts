import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface themeState {
  darkmode: boolean;
}

const initialState: themeState = {
  darkmode: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // setDarkMood: (state, action: PayloadAction<boolean>) => {
    //   state.darkmood = action.payload;
    // },
    setDarkMood: (state) => {
      state.darkmode = !state.darkmode;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDarkMood } = themeSlice.actions;

export default themeSlice.reducer;
