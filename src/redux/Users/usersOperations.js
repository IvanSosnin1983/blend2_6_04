import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://644fd0b5ba9f39c6ab6d1f0d.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/users');
      const { data } = response;
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchUserById = createAsyncThunk(
  'users/fetchUserById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/users/${id}`);
      const { data } = response;
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deletehUserById = createAsyncThunk(
  'users/deletehUserById',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/users/${id}`);
      return id;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
