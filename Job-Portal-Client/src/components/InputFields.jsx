import React from 'react'
import PropTypes from 'prop-types';

const InputFields = ({ handleChange, value, title, name }) => {
  return (
    <label className='sidebar-label-container'>
      <input 
        type="radio"
        name={name} 
        value={value}
        onChange={handleChange} 
      />
      <span className='checkmark'></span>
      {title}
    </label>
  )
}

InputFields.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputFields;
