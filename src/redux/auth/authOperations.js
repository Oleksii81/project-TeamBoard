import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { addBoardApi, deleteBoardApi } from 'services/backApi';

axios.defaults.baseURL = 'https://project-backend-task-pro.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/auth/signup', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/auth/signin', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/api/auth/logout');
    clearAuthHeader();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const currentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/auth/current`);
      if (!data) {
        throw new Error();
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (formData, thunkAPI) => {
    try {
      const { data } = await axios.put('/api/auth', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const patchBoard = createAsyncThunk(
  'auth/updateBoard',
  async ({ boardId }, thunkAPI) => {
    try {
      const { data } = await axios.put(`/api/boards`, {
        boards: boardId,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createBoard = createAsyncThunk(
  'boards/createBoard',
  async (boardData, thunkAPI) => {
    try {
      // const response = await addBoardApi(boardData);
      // const payload = { isActive: true, ...response.data };
      // return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (boardId, thunkAPI) => {
    try {
      await deleteBoardApi(boardId);
      return boardId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editBoard = createAsyncThunk(
  'boards/editBoard',
  async ({ id, data }, thunkAPI) => {
    try {
      await axios.put(`/api/boards/${id}`, data);
      return { id, data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateBoardActive = createAction('auth/updateBoardActive');
