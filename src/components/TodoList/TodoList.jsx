// import { useContext } from 'react';
import Todo from '../Todo/Todo';
// import TodoContext from '../../context/TodoContext';
import { useSelector } from 'react-redux';

function TodoList({ editTodo, deleteTodo, finishTodo }) {
  // const { todos, dispatch } = useContext(TodoContext);

  //const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todoList);

  function onDeleteTodo(id) {
    // dispatch({ type: 'delete_todo', payload: { id } });
    deleteTodo({ id });
  }

  function onEditTodo(id, newTodo) {
    // dispatch({ type: 'edit_todo', payload: { id, newTodo } });
    editTodo({ id, newTodo });
  }

  function onFinishTodo(id, state) {
    // dispatch({ type: 'finish_todo', payload: { id, state } });
    finishTodo({ id, state });
  }

  return (
    <>
      {todos &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            isFinished={todo.isFinished}
            editTodo={(newTodo) => onEditTodo(todo.id, newTodo)}
            deleteTodo={() => onDeleteTodo(todo.id)}
            finishTodo={(state) => onFinishTodo(todo.id, state)}
          />
        ))}
    </>
  );
}

export default TodoList;
