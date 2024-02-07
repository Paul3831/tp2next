// components/Date.js

import React from 'react';

const DateComponent = () => {

  const dayOfWeek = "Monday";
  const dayOfMonth = 12;
  const userName = "Martha";
  const numberOfMeetings = 13; 

  return (
    <div className="date-container">
   
      <div className="date-text">
        <div className="day-of-week">{dayOfWeek}</div>
        <div className="day-of-month">{dayOfMonth}</div>
      </div>

     
      <div className="greeting">
        Hi {userName}, you have <span className="meeting-number">{numberOfMeetings}</span> today.
      </div>
    </div>
  );
};

export default DateComponent;
