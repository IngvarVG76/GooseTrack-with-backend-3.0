import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { styleToastify } from '../../components/toastify';
import { toast } from 'react-toastify';

export const $instants = axios.create({
  baseURL: 'https://project-backend-8dts.onrender.com',
});

const setAuthHeader = (token) => {
  $instants.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  $instants.defaults.headers.common['Authorization'] = '';
};

export const register = createAsyncThunk(
  'user/signup',
  async (user, thunkAPI) => {
    try {
      const { data } = await $instants.post('/auth/signup', user);
      toast.success('You have successfully registered', styleToastify);
      return data;
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 400) {
          toast.error('User register error.', styleToastify);
        }
        if (status === 409) {
          toast.error('User already exists.', styleToastify);
        }
        if (status === 500) {
          toast.error('Server error.', styleToastify);
        }
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logIn = createAsyncThunk(
  'user/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await $instants.post('/auth/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 400) {
          toast.error('User login error.', styleToastify);
        }
        if (status === 401) {
          toast.error('Email or password is wrong.', styleToastify);
        }
        if (status === 500) {
          toast.error('Server error.', styleToastify);
        }
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logOut = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    await $instants.post('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        toast.error('Not authorized.', styleToastify);
      }
      if (status === 500) {
        toast.error('Server error.', styleToastify);
      }
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getCurrentUser = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    const { auth } = thunkAPI.getState();
    const persistedToken = auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const response = await $instants.get('/auth/current');
      return response.data.user;
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 500) {
          toast.error('Server error.', styleToastify);
        }
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateUser = createAsyncThunk(
  '/user',
  async (credentials, thunkAPI) => {
    try {
      const response = await $instants.patch(
        '/users/profile/avatar',
        credentials,
      );
      toast.success('Your user data successfully updated', styleToastify);
      return response.data.user;
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(
        'Ooops! Your data wasn"t updated. Please reload this page and try again !',
        styleToastify,
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// export const sendVerifyEmailUser = createAsyncThunk(
//   '/sendVerifyEmail',
//   async (_, thunkAPI) => {
//     try {
//       await axios.get('/sendVerifyEmail');
//       console.log('A letter for email verification has been sent to your mail');

//       return;
//     } catch (error) {
//       console.log(error.response.data.message);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );

// export const getVerifyEmailUser = createAsyncThunk(
//   '/getVerifyEmail',
//   async (verifyToken, thunkAPI) => {
//     try {
//       const response = await axios.get(`/verify/${verifyToken}`);

//       return response.data.verify;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );

// export const sendRenewPass = createAsyncThunk(
//   '/sendRenewPass',
//   async (email, thunkAPI) => {
//     try {
//       await axios.post('/sendRenewPass', email);

//       console.log('The new password has been successfully sent to your email');
//       return;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );

// export const changePassword = createAsyncThunk(
//   '/changePassword',
//   async (data, thunkAPI) => {
//     try {
//       await axios.post('/changePassword', data);
//       console.log('Your password has been successfully updated');
//       return;
//     } catch (error) {
//       console.log('You have entered an invalid old password');
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );
