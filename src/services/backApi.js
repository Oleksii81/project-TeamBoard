import axios from 'axios';

const baseUrl = 'https://project-backend-task-pro.onrender.com';

axios.defaults.baseURL = baseUrl;

export const fetchHelpApi = async data => {
  return await axios.post(`/api/help`, { ...data });
};

/* BOARDS */
export const getAllBoardApi = async () => {
  return await axios.get(`/api/boards`).then(res => res);
};

export const addBoardApi = async boardForm => {
  return await axios.post('/api/boards', { ...boardForm }).then(res => res);
};

export const getBoardApi = async id => {
  return await axios.get(`/api/boards/${id}`);
  // try {
  //   const response = await axios.get(`/api/boards/${id}`);
  //   const data = response.data;
  //   const isActive = response.status === 200;
  //   return { ...data, isActive };
  // } catch (error) {
  //   throw error;
  // }
};

export const deleteBoardApi = async id => {
  return await axios.delete(`/api/boards/${id}`).then(res => res);
};

/* COLUMN */

export const addColumnApi = async (idBoard, columnForm) => {
  return await axios
    .post(`/api/columns/${idBoard}`, { ...columnForm })
    .then(res => res);
};

export const editColumnApi = async (idBoard, idColumn, body) => {
  return await axios
    .patch(`/api/columns/${idBoard}/${idColumn}`, body)
    .then(res => res);
};

export const getColumnApi = async ({ idBoard }) => {
  return await axios.get(`api/columns/${idBoard}`).then(res => res);
};

export const getOneColumnApi = async ({ idBoard, idColumn }) => {
  return await axios.get(`api/columns/${idBoard}/${idColumn}`).then(res => res);
};

export const deleteColumnApi = async ({ idBoard, idColumn }) => {
  return await axios.delete(`api/columns/${idBoard}/${idColumn}`).then(res => res);
};

/* CARD */
export const getColumnCards = async idColumn => {
  return await axios.get(`api/cards/${idColumn}`).then(res => res);
};

export const getOneCardApi = async ({ idColumn, idCard }) => {
  return await axios.get(`api/cards/${idColumn}/${idCard}`).then(res => res);
};

export const addCardApi = async (idColumn, form) => {
  return await axios
    .post(`/api/cards/${idColumn}`, { ...form })
    .then(res => res);
};

export const editCardApi = async (idColumn, idCard, body, column) => {
  const { data } = await axios
    .put(`api/cards/${idColumn}/${idCard}`, { ...body })
    .then(res => res);
  data.column = column;
  return { data };
};

export const deleteCardApi = async (idColumn, idCard, column) => {
  const { data } = await axios
    .delete(`/api/cards/${idColumn}/${idCard}`)
    .then(res => res);
  data.column = column;
  return { data };
};

export const replaceCardApi = async (id, columns) => {
  const { column, idColumn } = columns;
  const { data } = await axios
    .patch(`/api/cards/${idColumn}/${id}`, { column })
    .then(res => res);
  data.columnNew = column;
  data.idCard = id;
  data.columnOld = idColumn;
  return { data };
};
