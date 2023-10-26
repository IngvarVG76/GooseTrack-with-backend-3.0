import { createAsyncThunk } from '@reduxjs/toolkit';
import { $instants } from '../auth/operations';
import { styleToastify } from '../../components/toastify';
import { toast } from 'react-toastify';

export const getReviewsAll = createAsyncThunk(
  'reviews/getAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await $instants.get('/reviews');
      return data;
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

export const getReviewOwn = createAsyncThunk(
  'review/getOwn',
  async (_, thunkAPI) => {
    try {
      const { data } = await $instants.get('/reviews/own');
      return data;
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

export const createReview = createAsyncThunk(
  'review/create',
  async (review, thunkAPI) => {
    try {
      const { data } = await $instants.post('reviews/own', review);
      return data;
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
  },
);

export const editReview = createAsyncThunk(
  'review/edit',
  async (review, thunkAPI) => {
    try {
      const { data } = await $instants.patch(`/reviews/own`, review);
      return data;
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
  },
);

export const deleteReview = createAsyncThunk(
  'review/delete',
  async (_, thunkAPI) => {
    try {
      const { data } = await $instants.delete(`/reviews/own`);
      return data;
    } catch (error) {
      const { status } = error.response;
      if (status === 401) {
        toast.error('Not authorized.', styleToastify);
      }
      if (status === 500) {
        toast.error('Server error.', styleToastify);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
