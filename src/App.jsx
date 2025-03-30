// import { useReducer } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
// import TodoContext from './context/TodoContext';
// import TodoReducer from './reducer/TodoReducer';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, deleteTodo, editTodo, finishTodo } from './slice/TodoSlice';

function App() {
  // const [todos, setTodos] = useState([
  //   { id: 1, text: 'todo1', isFinished: true },
  //   { id: 2, text: 'todo2', isFinished: false },
  //   { id: 3, text: 'todo3', isFinished: true },
  // ]);

  //const [todos, dispatch] = useReducer(TodoReducer, []);

  const dispatch = useDispatch();

  const actions = bindActionCreators(
    {
      addTodo,
      deleteTodo,
      editTodo,
      finishTodo,
    },
    dispatch
  );

  return (
    <>
      {/* <TodoContext.Provider value={{ todos, dispatch }}> */}
      <AddTodo addTodo={actions.addTodo} />
      <TodoList
        deleteTodo={actions.deleteTodo}
        editTodo={actions.editTodo}
        finishTodo={actions.finishTodo}
      />
      {/* </TodoContext.Provider> */}
    </>
  );
}

export default App;
