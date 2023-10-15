import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const themeSlice = createSlice({
  name: 'lightTheme',
  initialState: { currentTheme: true },
  reducers: {
    toggleTheme: (state) => {
      state.lightTheme = !state.lightTheme;
    },
  },
});

const persistConfig = {
  key: 'lightTheme',
  storage,
  whitelist: ['lightTheme'],
};

export const persistedThemeReducer = persistReducer(
  persistConfig,
  themeSlice.reducer,
);

export const { toggleTheme } = themeSlice.actions;
