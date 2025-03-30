import { useState } from 'react';
// import TodoContext from '../../context/TodoContext';

function AddTodo({ addTodo }) {
  // const { dispatch } = useContext(TodoContext);
  const [todoText, setTodoText] = useState('');

  function onaddTodo(todoText) {
    // dispatch({
    //   type: 'add_todo',
    //   payload: {
    //     todoText,
    //   },
    // });
    addTodo({ todoText });
  }

  return (
    <>
      <input
        placeholder='add your next todo...'
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <button
        onClick={() => {
          onaddTodo(todoText);
          setTodoText('');
        }}
      >
        Submit
      </button>
    </>
  );
}
export default AddTodo;
