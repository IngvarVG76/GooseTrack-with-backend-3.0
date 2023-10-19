import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  register,
  logIn,
  getCurrentUser,
  logOut,
  //   updateUser,
  //   getVerifyEmailUser,
} from './operations';

const initialState = {
  user: {
    userName: null,
    _id: null,
    email: null,
    phone: null,
    skype: null,
    birthDay: null,
    avatarURL: null,
    verify: null,
  },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = false;
        if (payload?.status) {
          console.error(payload?.message);
        }
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.isLoggedIn = false;
        if (payload?.status) {
          console.error(payload?.message);
        }
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isFetchingCurrentUser = false;
        state.isLoggedIn = false;
        if (payload?.status) {
          console.error(payload?.message);
        }
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.isFetchingCurrentUser = false;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.isLoggedIn = false;
        state.token = null;
        state.user = {
          userName: null,
          _id: null,
          email: null,
          phone: null,
          skype: null,
          birthDay: null,
          avatarURL: null,
          verify: null,
        };
        if (payload?.status) {
          console.error(payload?.message);
        }
      })
      .addMatcher(
        isAnyOf(
          register.pending,
          logIn.pending,
          getCurrentUser.pending,
          logOut.pending,
        ),
        (state) => {
          state.isLoggedIn = true;
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(
          register.rejected,
          logIn.rejected,
          getCurrentUser.rejected,
          logOut.rejected,
        ),
        (state, { payload }) => {
          state.isLoggedIn = false;
          state.error = payload.error;
        },
      );
    //   .addCase(logOut.fulfilled, (state) => {
    //     state.user = { name: null, email: null };
    //     state.token = null;
    //     state.isLoggedIn = false;
    //   })

    //   .addCase(updateUser.fulfilled, (state, action) => {
    //     state.user = action.payload;
    //   });
    // .addCase(getVerifyEmailUser.fulfilled, (state, action) => {
    //     state.user.verify = action.payload;
    // });
  },
});

export const authReducer = authSlice.reducer;
