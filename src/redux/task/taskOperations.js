import { createAsyncThunk } from '@reduxjs/toolkit';
import {
 /* addCardApi,*/
  addColumnApi,
  editColumnApi,
  deleteColumnApi,
  getBoardApi,
 /* editCardApi,
  deleteCardApi,
  replaceCardApi,*/
} from '../../services/backApi';

export const getBoardId = createAsyncThunk(
  'task/getBoard',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await getBoardApi(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addColumn = createAsyncThunk(
  'column/add',
  async (columnForm, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await addColumnApi(columnForm);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editColumn = createAsyncThunk(
  'column/edit',
  async ({ id, body }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await editColumnApi(id, body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'column/delete',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await deleteColumnApi(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/*export const addCard = createAsyncThunk(
  'card/add',
  async (form, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await addCardApi(form);
      const { column } = form;
      return { data, column };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editCard = createAsyncThunk(
  'card/edit',
  async ({ id, body, column }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await editCardApi(id, body, column);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  'card/delete',
  async ({ _id, columnID }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await deleteCardApi(_id, columnID);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const replaceCard = createAsyncThunk(
  'card/replace',
  async (replace, { rejectWithValue, dispatch }) => {
    const [_id, column, columnID] = replace;
    try {
      const { data } = await replaceCardApi(_id, { column, columnID });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);*/