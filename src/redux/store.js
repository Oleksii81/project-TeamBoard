// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER
//   } from 'redux-persist';

//   const rootReducer = combineReducers({

//   });

//   const persistConfig = {
//     key: 'auth',
//     storage,
//     blacklist: [],
//   };

//   const persistedReducer = persistReducer(persistConfig, rootReducer);

//   export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: getDefaultMiddleware => [
//       ...getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       }),
//     ],
//   });

//   export const persistor = persistStore(store);
