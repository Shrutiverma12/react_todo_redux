import { combineReducers, createStore } from 'redux';
import TodoReducer from './reducer/TodoReducer.js';

const reducer = combineReducers({ todos: TodoReducer });
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
