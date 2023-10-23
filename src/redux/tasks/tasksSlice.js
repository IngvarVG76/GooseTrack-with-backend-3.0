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
        state.tasks.push(payload.task);
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
        const updateTaskIndex = state.tasks.findIndex(
          (task) => task._id === payload.task.id,
        );

        if (updateTaskIndex >= 0) {
          state.tasks[updateTaskIndex] = {
            ...state.tasks[updateTaskIndex],
            ...payload.task,
          };
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateTask.rejected, handleRejected);
  },
});
export const tasksReducer = tasksSlice.reducer;
