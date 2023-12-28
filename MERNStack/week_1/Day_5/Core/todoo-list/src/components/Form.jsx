import React, { useState } from 'react';

function Formm({ updatePosts }) {
  const [title, setTitle] = useState('');

  const handleTitle = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      return; 
    }
    const newPost = {
      title,
    };
    updatePosts(newPost);
    setTitle('');
  };

  return (
    <div>
      <form onSubmit={handleTitle}>
        <input
          type="text"
          value={title}
          placeholder='Add'
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Formm;
