import { createSlice } from '@reduxjs/toolkit';

type ThemeState = {
  isLightTheme: boolean;
};

const initialState: ThemeState = {
  isLightTheme: true
};

const thememode = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLightTheme: (state) => {
      state.isLightTheme = true;
    },
    setDarkTheme: (state) => {
      state.isLightTheme = false;
    }
  }
});

export const { setLightTheme, setDarkTheme } = thememode.actions;
export default thememode.reducer;
