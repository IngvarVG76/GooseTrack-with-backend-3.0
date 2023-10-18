import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { authReducer } from './auth/slice';
// import { reviewsApi } from './reviews/reviewsApi';
// import { tasksApi } from './tasks/tasksApi';
import storage from 'redux-persist/lib/storage';
import { persistedThemeReducer } from '../styles/Theme/themeSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    // [reviewsApi.reducerPath]: reviewsApi.reducer,
    // [tasksApi.reducerPath]: tasksApi.reducer,
    theme: persistedThemeReducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
