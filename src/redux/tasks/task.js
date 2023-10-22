import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { styleToastify } from '../../components/toastify';

axios.defaults.baseURL = 'https://project-backend-8dts.onrender.com';

export const $instants = axios.create({
  baseURL: 'https://project-backend-8dts.onrender.com',
});

export const getAllTasks = createAsyncThunk(
  'tasks/getAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/tasks');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);



export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (month, thunkAPI) => {
    try {
      const res = await axios.get(`/tasks?month=${month}`);
      return res.data;
    } catch (error) {
      if (error.response.data.message.includes('have no any task')) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// export const addTask = createAsyncThunk(
//   'tasks/addTask',
//   async (task, thunkAPI) => {
//     // console.log(task)
//     try {
//       const res = await axios.post('/tasks', task);
//       return res.data;
//     } catch (error) {
//       console.log(error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task, thunkAPI) => {
    try {
      const { data } = await $instants.post('/tasks', task);
      return data;
    } catch (error) {
      console.log(error);
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

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/tasks/${id}`);
      res.data.id = id;
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
