import React from 'react';
import './index.css';

function Sqaure({ val, chooseSquare }) {
  return <div className="square" onClick={chooseSquare}>{val}</div>;
}

export default Sqaure;