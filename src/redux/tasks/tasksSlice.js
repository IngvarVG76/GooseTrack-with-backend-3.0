import { createSlice } from '@reduxjs/toolkit';

import {
  handleMonthFulfilled,
  handlePending,
  handleRejected,
} from './handlers';

import { fetchTasks, addTask, deleteTask, updateTask } from './task';

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, handleMonthFulfilled)
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.tasks.push(payload.data);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addTask.rejected, handleRejected)
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.tasks = state.tasks.filter((task) => task._id !== payload.id);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(updateTask.pending, handlePending)
      .addCase(updateTask.fulfilled, (state, { payload }) => {
        const updatedContact = payload.data;

        const index = state.tasks.findIndex(
          (task) => task._id === updatedContact._id,
        );

        if (index !== -1) {
          state.tasks.splice(index, 1, updatedContact);
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateTask.rejected, handleRejected);
  },
});
export const tasksReducer = tasksSlice.reducer;
