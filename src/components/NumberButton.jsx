import React from 'react';

function NumberButton(props) {
  return (

    <button onClick={()=>props.handleClick(props.number)} className={"button" + props.number}>{props.number}</button>
  );
}

export default NumberButton;
