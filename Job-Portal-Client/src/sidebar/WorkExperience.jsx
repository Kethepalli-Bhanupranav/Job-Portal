import React from 'react'
import InputFields from '../components/InputFields'

const WorkExperience =  ({ handleChange }) => {
  return (
    <div className="">
    <h4 className="text-lg font-medium mb-2">Work Experience</h4>
    <div>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test"
          id="test"
          value=""
          onChange={handleChange}
        />
        <span className="checkmark"></span>Any Experience
      </label>
      <InputFields
        handleChange={handleChange}
        value="Internship"
        title="Internship"
        name="test"
      />
      <InputFields
        handleChange={handleChange}
        value="Work remotely"
        title="Work remotely"
        name="test"
      />
    </div>
  </div>
  )
}

export default WorkExperience