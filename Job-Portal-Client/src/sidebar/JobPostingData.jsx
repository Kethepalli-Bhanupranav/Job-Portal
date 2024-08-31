import React from 'react'
import InputFields from '../components/InputFields'

const JobPostingData = ({ handleChange })=> {
    const now = new Date();
    const twentyfourHoursAgo = new Date(now - 24*60*60*1000);
    const SevenDaysAgo = new Date(now - 7*24*60*60*1000);
    const ThirtyDaysAgo = new Date(now - 30*24*60*60*1000);
 // Convert date and string
 const twentyfourHoursAgoDate = twentyfourHoursAgo.toISOString().slice(0,10);
 const SevenDaysAgoDate = SevenDaysAgo.toISOString().slice(0,10);
 const ThirtyDaysAgoDate = ThirtyDaysAgo.toISOString().slice(0,10);
  return (
    <div className="">
      <h4 className="text-lg font-medium mb-2">Date Of Posting</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All Time
        </label>
        <InputFields
          handleChange={handleChange}
          value={twentyfourHoursAgoDate}
          title="LAst 24 Hours"
          name="test"
        />
        <InputFields
          handleChange={handleChange}
          value={SevenDaysAgoDate}
          title="Last 7 DAys Ago"
          name="test"
        />
        <InputFields
          handleChange={handleChange}
          value={ThirtyDaysAgoDate}
          title="Last Month"
          name="test"
        />
      </div>
    </div>
  )
}

export default JobPostingData