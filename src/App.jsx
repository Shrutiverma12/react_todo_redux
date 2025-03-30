// import { useReducer } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
// import TodoContext from './context/TodoContext';
// import TodoReducer from './reducer/TodoReducer';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  // const [todos, setTodos] = useState([
  //   { id: 1, text: 'todo1', isFinished: true },
  //   { id: 2, text: 'todo2', isFinished: false },
  //   { id: 3, text: 'todo3', isFinished: true },
  // ]);

  //const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <>
      <Provider store={store}>
        {/* <TodoContext.Provider value={{ todos, dispatch }}> */}
        <AddTodo />
        <TodoList />
        {/* </TodoContext.Provider> */}
      </Provider>
    </>
  );
}

export default App;
