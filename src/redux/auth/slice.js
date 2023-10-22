import { createSlice, isAnyOf } from '@reduxjs/toolkit';



import {
  register,
  logIn,
  getCurrentUser,
  logOut,
  updateUser,
  //   getVerifyEmailUser,
} from './operations';

const initialState = {
  user: {
    userName: '',
    _id: '',
    email: '',
    phone: '',
    skype: '',
    birthDay: '',
    avatarURL: '',
    verify: '',
  },
  token: '',
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
        state.user = {
          userName: payload.userName,
          email: payload.email,
        };
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isFetchingCurrentUser = false;
        state.isLoggedIn = true;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.isFetchingCurrentUser = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.token = '';
        state.user = {
          userName: '',
          _id: '',
          email: '',
          phone: '',
          skype: '',
          birthDay: '',
          avatarURL: '',
          verify: '',
        };
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addMatcher(
        isAnyOf(
          register.pending,
          logIn.pending,
          getCurrentUser.pending,
          logOut.pending,
        ),
        (state) => {
          state.isLoggedIn = false;
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

    // .addCase(getVerifyEmailUser.fulfilled, (state, action) => {
    //     state.user.verify = action.payload;
    // });
  },
});

export const authReducer = authSlice.reducer;
