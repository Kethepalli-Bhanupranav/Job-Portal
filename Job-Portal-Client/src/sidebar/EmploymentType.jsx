import React from 'react'
import InputFields from '../components/InputFields'

const EmploymentType = ({ handleChange }) => {
  return (
    <div className="">
    <h4 className="text-lg font-medium mb-2">Type of Employment</h4>
    <div>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test"
          id="test"
          value=""
          onChange={handleChange}
        />
        <span className="checkmark"></span>All
      </label>
      <InputFields
        handleChange={handleChange}
        value="temporary"
        title="Temporary"
        name="test"
      />
      <InputFields
        handleChange={handleChange}
        value="full-time"
        title="Full-time"
        name="test"
      />
      <InputFields
        handleChange={handleChange}
        value="part-time"
        title="Part-time"
        name="test"
      />
    </div>
  </div>
  )
}

export default EmploymentType