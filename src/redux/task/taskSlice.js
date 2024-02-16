import { createSlice } from '@reduxjs/toolkit';

import {
  getActiveBoard,
  addColumn,
  editColumn,
  deleteColumn,
  getOneCard,
  addCard,
  editCard,
  deleteCard,
  replaceCard,
} from './taskOperations';
import { logout } from '../auth/authOperations';

const initialState = {
  id: '',
  title: '',
  background: '0',
  columns: [],
  error: null,
  isRefreshing: false,
};

const boardSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    changePart: (state, { payload }) => {
      state.part += payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getActiveBoard.pending, state => {
        state.error = null;
      })
      .addCase(getActiveBoard.fulfilled, (state, { payload }) => {
        state.board = payload;
        state.columns = payload[0].columns ?? [];
        state.error = null;
      })
      .addCase(getActiveBoard.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addColumn.pending, state => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(addColumn.fulfilled, (state, { payload }) => {
        state.columns.push({ ...payload, cards: [] });
      })
      .addCase(addColumn.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(editColumn.pending, state => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(editColumn.fulfilled, (state, { payload }) => {
        const index = state.columns.findIndex(col => col._id === payload._id);
        state.columns[index].title = payload.title;
      })
      .addCase(editColumn.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteColumn.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.columns = state.columns.filter(
          col => col._id !== action.payload.id
        );
      })
      .addCase(deleteColumn.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getOneCard.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOneCard.fulfilled, (state, action) => {
        state.loading = false;
        state.card = action.payload;
      })
      .addCase(getOneCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addCard.pending, state => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(addCard.fulfilled, (state, { payload }) => {
        const data = payload;
        const index = state.columns.findIndex(col => col._id === data.owner);
        state.columns[index].cards.push(data);
      })
      .addCase(addCard.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(editCard.pending, state => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(editCard.fulfilled, (state, { payload }) => {
        const { data, idColumn } = payload;
        const index = state.columns.findIndex(col => col._id === idColumn);
        const indexTask = state.columns[index].cards.findIndex(
          el => el._id === data._id
        );
        state.columns[index].cards[indexTask] = { ...data };
      })
      .addCase(editCard.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteCard.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(deleteCard.fulfilled, (state, { payload }) => {
        console.log(payload);
        const { columnId, _id } = payload;
        const index = state.columns.findIndex(col => col._id === columnId);
        state.columns[index].cards = state.columns[index].cards.filter(
          el => el._id !== _id
        );
      })
      .addCase(deleteCard.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(replaceCard.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(replaceCard.fulfilled, (state, { payload }) => {
        const { columnNew, idCard, columnOld } = payload;
        const indexOld = state.columns.findIndex(col => col._id === columnOld);
        const indexNew = state.columns.findIndex(col => col._id === columnNew);
        const task = state.columns[indexOld].cards.filter(
          el => el._id === idCard
        );
        state.columns[indexOld].cards = state.columns[indexOld].cards.filter(
          el => el._id !== idCard
        );
        state.columns[indexNew].cards.push(task[0]);
      })
      .addCase(replaceCard.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.title = '';
        state.background = '00';
      })
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isRefreshing = false;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        (state, { payload }) => {
          state.isRefreshing = false;
        }
      );
  },
});

export const { changePart, changeBackground, setBoardActive } =
  boardSlice.actions;
export default boardSlice.reducer;
