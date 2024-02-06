// import axios from 'axios';

// const baseUrl = 'https://project-backend-task-pro.onrender.com';

// axios.defaults.baseURL = baseUrl;

// /* BOARDS */
// export const getAllBoardApi = async id => {
//     return await axios.get(`/api/boards`).then(res => res);
//   };

// export const addBoardApi = async boardForm => {
//   return await axios.post('/api/boards', { ...boardForm }).then(res => res);
// };

// export const getBoardApi = async id => {
//   return await axios.get(`/api/boards/${id}`).then(res => res);
// };

// export const deleteBoardApi = async id => {
//   return await axios.delete(`/api/boards/${id}`).then(res => res);
// };

// /* COLUMN */

// export const addColumnApi = async columnForm => {
//   return await axios.post('/api/columns/', { ...columnForm }).then(res => res);
// };

// export const editColumnApi = async (id, body) => {
//   return await axios.patch(`/api/columns/${id}`, body).then(res => res);
// };

// export const getColumnApi = async ({ id }) => {
//   return await axios.get(`api/columns/${id}`).then(res => res);
// };

// export const deleteColumnApi = async columnId => {
//   return await axios.delete(`api/columns/${columnId}`).then(res => res);
// };

/* CARD 

export const addCardApi = async form => {
  return await axios.post('/api/tasks', { ...form }).then(res => res);
};

export const editCardApi = async (id, body, column) => {
  const { data } = await axios
    .patch(`/api/tasks/${id}`, { ...body })
    .then(res => res);
  data.column = column;
  return { data };
};

export const deleteCardApi = async (id, column) => {
  const { data } = await axios.delete(`/api/tasks/${id}`).then(res => res);
  data.column = column;
  return { data };
};

export const replaceCardApi = async (id, columns) => {
  const { column, columnID } = columns;
  const { data } = await axios
    .patch(`/api/tasks/${id}/replace`, { column })
    .then(res => res);
  data.columnNew = column;
  data.idCard = id;
  data.columnOld = columnID;
  return { data };
}; */
