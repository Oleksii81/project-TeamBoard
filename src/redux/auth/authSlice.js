import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  register,
  login,
  logout,
  refreshUser,
  updateTheme,
  updateUser,
  createBoard,
  deleteBoard,
  editBoard,
  updateBoardActive,
} from './authOperations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: '',
      name: '',
      avatarURL: '',
      theme: 'dark',
      boards: [],
    },
    token: '',
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.error = payload;
        state.isRefreshing = false;
      })
      .addCase(login.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.error = payload;
        state.isRefreshing = false;
      })
      .addCase(logout.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user.email = '';
        state.user.name = '';
        state.user.avatarURL = '';
        state.user.theme = '';
        state.user.boards = [];
        state.token = '';
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(updateTheme.fulfilled, (state, { payload }) => {
        state.user.theme = payload.theme;
      })
      .addCase(updateUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.theme = payload.theme;
        state.user.avatarURL = payload.avatarURL;
        state.isRefreshing = false;
        state.error = null;
        toast.success('Сhanges are successful!');
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
        toast.error('Invalid password');
      })
      .addCase(createBoard.fulfilled, (state, { payload }) => {
        state.user.boards.push(payload);
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(createBoard.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })
      .addCase(deleteBoard.fulfilled, (state, { payload }) => {
        const indexToRemove = state.user.boards.findIndex(
          board => board._id === payload
        );
        if (indexToRemove !== -1) {
          state.user.boards.splice(indexToRemove, 1);
        }
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(deleteBoard.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })
      .addCase(editBoard.fulfilled, (state, { payload }) => {
        const targetBoard = state.user.boards.find(
          board => board._id === payload.id
        );
        if (targetBoard) {
          targetBoard.title = payload.data.title;
          targetBoard.icon = payload.data.icon;
          targetBoard.background = payload.data.background;
        }
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(editBoard.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })
      .addCase(updateBoardActive, (state, action) => {
        const { boardId, isActive } = action.payload;
        state.user.boards.forEach(board => {
          board.isActive = board._id === boardId ? isActive : false;
        });
      }),
});

export const authReducer = authSlice.reducer;
