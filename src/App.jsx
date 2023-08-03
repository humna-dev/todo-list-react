import React, { useState } from 'react';
import './App.css'; // Import the custom CSS file

export default function App() {
  const [todos, setTodos] = useState('');
  const [todoslist, setTodoslist] = useState([]);

  const addTodo = () => {
    setTodoslist([...todoslist, todos]);
    setTodos('');
  };

  return (
    <div className="App">
      <h1>Todo list</h1>
      <input
        value={todos}
        onChange={(e) => setTodos(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      {todoslist.map((val, key) => (
        <div key={key} className="task-box">
          <span>{val}</span>
        </div>
      ))}
    </div>
  );
}
