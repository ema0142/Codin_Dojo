import './App.css';
import React from 'react';
import './App.css';

function App() {
  const todos = [
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a project' },
    { id: 3, text: 'Deploy the project' }
  ];

  return (
    <div className="App">
      <h1>Hello Dojo</h1>
      <h2>Todo List:</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}



export default App;
