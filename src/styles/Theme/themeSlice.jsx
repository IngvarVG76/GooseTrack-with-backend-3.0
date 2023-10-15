import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const themeSlice = createSlice({
  name: 'lightTheme',
  initialState: { currentTheme: true },
  reducers: {
    changeTheme: (state) => {
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

export const { changeTheme } = themeSlice.actions;
