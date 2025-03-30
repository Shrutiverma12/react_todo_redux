import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slice/TodoSlice';

// const reducer = combineReducers({ todos: TodoReducer });
// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  devTools: true,
});

export default store;
