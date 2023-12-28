import React from 'react';


const Bouton = ({ tab, idx, onClickHandler }) => {
  return (
    <div className='btn'>
      <button onClick={() => onClickHandler(tab)} className="btn1">Tab {idx + 1}</button>
    </div>
  );
};

export default Bouton;
