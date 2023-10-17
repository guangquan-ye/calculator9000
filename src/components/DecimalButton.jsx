import React from 'react';

const DecimalButton = ({ handleClick }) => (
  <button onClick={() => handleClick('.')}>.</button>
);

export default DecimalButton;
