import React from 'react'
import './input.css'
const Input = ({  value, title, name }) => {
    return (
      <label className="sidebar-label-container">
        <input type="checkbox" value={value} name={name} />
        <span className="checkmark"></span>
        {title}
      </label>
    );
  };
  
  export default Input;
