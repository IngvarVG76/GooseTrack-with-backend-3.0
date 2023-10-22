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
import { tasksReducer } from './tasks/tasksSlice';
import { dateReducer } from './date/dateSlice';
import storage from 'redux-persist/lib/storage';
import { persistedThemeReducer } from '../styles/Theme/themeSlice';
import { reviewReducer } from './reviews/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    date: dateReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    reviews: reviewReducer,
    theme: persistedThemeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
