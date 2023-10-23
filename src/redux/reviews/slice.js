import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  createReview,
  deleteReview,
  editReview,
  getReviewOwn,
  getReviewsAll,
} from './operation';

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
      .addCase(deleteReview.fulfilled, (state) => {
        state.reviews = initialState.reviews;
        state.isLoading = false;
      })
      .addCase(editReview.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.reviews = {
          ...state.reviews,
          text: payload.text,
          rating: payload.rating,
        };
      })
      .addMatcher(
        isAnyOf(
          getReviewsAll.pending,
          getReviewOwn.pending,
          createReview.pending,
          deleteReview.pending,
          editReview.pending,
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(
          getReviewsAll.fulfilled,
          getReviewOwn.fulfilled,
          createReview.fulfilled,
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.reviews = payload;
        },
      )
      .addMatcher(
        isAnyOf(
          getReviewsAll.rejected,
          getReviewOwn.rejected,
          createReview.rejected,
          deleteReview.rejected,
          editReview.rejected,
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload.error;
        },
      );
  },
});

export const reviewReducer = reviewSlice.reducer;
