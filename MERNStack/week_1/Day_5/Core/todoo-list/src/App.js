import React, { useState } from 'react';
import './App.css';
import Form from './components/Formm';
import Lista from './components/Lista';

function App() {
  const [list, setList] = useState([
    { title: 'Get Python black belt.', check: false }
  ]);

  const updatePosts = (newPost) => {
    setList([...list, newPost]);
  };

  const deletePost = (postId) => {
    const updatedPosts = list.filter((onePost, idx) => idx !== postId);
    setList(updatedPosts);
  };

  const readPost = (postId) => {
    const copyList = [...list];
    copyList[postId].check = !copyList[postId].check;
    setList(copyList);
  };

  return (
    <div className="App">
      <Form updatePosts={updatePosts} />
      <Lista list={list} deletePost={deletePost} readPost={readPost} />
    </div>
  );
}

export default App;
