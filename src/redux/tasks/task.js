import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goosetrack-18hi.onrender.com/api/v1';

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task, thunkAPI) => {
    try {
      const res = await axios.post('/tasks', task);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (payload, thunkAPI) => {
    try {
      const { id, updatedTask } = payload;
      const res = await axios.patch(`/tasks/${id}`, updatedTask);
      res.data.task.id = id;
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
