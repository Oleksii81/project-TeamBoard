import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  register,
  login,
  logout,
  updateUser,
  refreshUser,
  createBoard,
  deleteBoard,
  editBoard,
  updateBoardActive,
  updateTheme,
} from './authOperations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: '',
      name: '',
      avatarURL: '',
      theme: 'light',
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
      //       userName(pin):"ggfgfgf"
      // email(pin):"13@gmail.com"
      // avatarLight(pin):"http://res.cloudinary.com/drj0am35a/image/upload/v1707058150/lt_user.jpg"
      .addCase(register.fulfilled, (state, { payload }) => {
        const { userName, email, avatarURL } = payload.user;
        state.user = {
          ...state.user,
          email: email,
          name: userName,
          avatarURL: (avatarURL && Object.values(avatarURL)[0]) ?? '',
        };
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
        const { userName, email, avatarURL } = payload.user;
        state.user = {
          ...state.user,
          email: email,
          name: userName,

          avatarURL: (avatarURL && Object.values(avatarURL)[0]) ?? '',
        };
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
      .addCase(updateUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.userName;
        state.user.email = payload.email;
        state.user.avatarURL = (payload.avatarURL && Object.values(payload.avatarURL)[0]) ?? '';
        state.isRefreshing = false;
        state.error = null;
        toast.success('Changes are successful!');
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
        toast.error('Invalid password');
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.user.name = payload.userName;
        state.user.email = payload.email;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(updateTheme.fulfilled, (state, { payload }) => {
        state.user.theme = payload.theme;
      })
      .addCase(createBoard.fulfilled, (state, { payload }) => {
        state.user.boards.forEach(board => {
          board.isActive = false;
        });
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
          state.user.boards[0].isActive = true;
        }
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(deleteBoard.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })
      .addCase(editBoard.fulfilled, (state, { payload }) => {
        const indexActive = state.user.boards.findIndex(
          board => board._id === payload.id
        );
        state.user.boards[indexActive].title = payload.data.title;
        state.user.boards[indexActive].icnboard = payload.data.icnboard;
        state.user.boards[indexActive].background = payload.data.background;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(editBoard.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })
      .addCase(updateBoardActive.fulfilled, (state, { payload }) => {
        const id = payload[0]._id;
        const indexToActive = state.user.boards.findIndex(
          board => board._id === id
        );
        state.user.boards.forEach(board => {
          board.isActive = false;
        });
        state.user.boards[indexToActive].isActive = true;
      })
      .addCase(updateBoardActive.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      }),
});

export const authReducer = authSlice.reducer;
