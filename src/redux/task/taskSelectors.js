export const selectBoard = state => state.auth.user.boards;
export const getBoardId = state => state.board.id;
export const getBoardName = state => state.board.title;
export const getBoardBg = state => state.board.background;
export const getColumn = state => state.board.columns;
export const isLoading = state => state.isRefreshing;
