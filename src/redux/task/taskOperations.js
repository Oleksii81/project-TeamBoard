import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addCardApi,
  addColumnApi,
  editColumnApi,
  deleteColumnApi,
  getBoardApi,
  editCardApi,
  getOneCardApi,
  deleteCardApi,
  replaceCardApi,
} from '../../services/backApi';

export const getActiveBoard = createAsyncThunk(
  'task/getActiveBoard',
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
  async ({ idBoard, body }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await addColumnApi(idBoard, body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editColumn = createAsyncThunk(
  'column/edit',
  async ({ idBoard, id, body }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await editColumnApi(idBoard, id, body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'column/delete',
  async ({ idBoard, id }, { rejectWithValue, dispatch }) => {
    try {
      await deleteColumnApi({ idBoard, idColumn: id });
      return { id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addCard = createAsyncThunk(
  'card/add',
  async ({ idColumn, form }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await addCardApi(idColumn, form);
      const { columns } = form;
      return { data, columns };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getOneCard = createAsyncThunk(
  'card/getOne',
  async ({ idColumn, idCard }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await getOneCardApi({ idColumn, idCard });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editCard = createAsyncThunk(
  'card/edit',
  async ({ idColumn, id, body }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await editCardApi(idColumn, id, body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  'card/delete',
  async ({ columnID, _id }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await deleteCardApi(columnID, _id);
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
);
