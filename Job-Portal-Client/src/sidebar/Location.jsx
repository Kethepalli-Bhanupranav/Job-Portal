import React from "react";
import InputFields from "../components/InputFields";
const Location = ({ handleChange }) => {
  return (
    <div className="">
      <h4 className="text-lg font-medium mb-2">Location</h4>
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
          value="london"
          title="London"
          name="test"
        />
        <InputFields
          handleChange={handleChange}
          value="seattle"
          title="Seattle"
          name="test"
        />
        <InputFields
          handleChange={handleChange}
          value="madrid"
          title="Madrid"
          name="test"
        />
        <InputFields
          handleChange={handleChange}
          value="boston"
          title="Boston"
          name="test"
        />
      </div>
    </div>
  );
};

export default Location;
