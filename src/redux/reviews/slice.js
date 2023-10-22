import { createSlice } from '@reduxjs/toolkit';
import { getReviewOwn, getReviewsAll } from './operation';

const initialState = {
  reviews: null,
  isLoading: false,
  error: null,
};

const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getReviewsAll.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getReviewsAll.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.reviews = payload;
      })
      .addCase(getReviewsAll.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      })
      .addCase(getReviewOwn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getReviewOwn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.reviews = payload;
      })
      .addCase(getReviewOwn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      });
  },
});

export const reviewReducer = reviewSlice.reducer;
