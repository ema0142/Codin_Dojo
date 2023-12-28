import React from 'react';

function Todolistt({ lista, deletePost, readPost }) {
  return (
    <div>
      {lista.map((onePost, idx) => (
        <div key={idx}>
          <h3 style={onePost.check ? { textDecoration: 'line-through' } : { backgroundColor: 'white' }}>
            {onePost.title}
          </h3>
          <input
            type="checkbox"
            onChange={() => readPost(idx)}
            checked={onePost.check}
            className='cmp'
          />
          <button onClick={() => deletePost(idx)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Todolistt;
