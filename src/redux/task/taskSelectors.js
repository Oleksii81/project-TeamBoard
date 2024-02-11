export const selectBoard = state => state.auth.board;
export const getBoardId = state => state.board._id;
export const getBoardName = state => state.board.title;
export const getBoardBg = state => state.board.background;
export const getColumn = state => state.board.columns;
export const isLoading = state => state.board.isRefreshing;
