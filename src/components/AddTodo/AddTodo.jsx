import { useContext, useState } from 'react';
import TodoContext from '../../context/TodoContext';

function AddTodo() {
  const { todos, setTodos } = useContext(TodoContext);
  const [todoText, setTodoText] = useState('');

  return (
    <>
      <input
        placeholder='add your next todo...'
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <button
        onClick={() => {
          let nextId = todos.lenght + 1;
          setTodos([
            ...todos,
            {
              id: nextId,
              text: todoText,
              iFinished: false,
            },
          ]);
          setTodoText('');
        }}
      >
        Submit
      </button>
    </>
  );
}
export default AddTodo;
