import React from 'react';

const DateComponent = () => {

  const dayOfWeek = "Monday";
  const dayOfMonth = 12;
  const userName = "Martha";
  const numberOfMeetings = 13; 

  return (
    <div className="date-container">
   
      <div className="date-text">
     

        <div className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-neutral-950 title day-of-week">{dayOfWeek}</div>
        <div className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-neutral-950 title day-of-week">{dayOfMonth}</div>
      </div>
     
      <div className="greeting">
        Hi {userName}, you<br/> have <span className="meeting-number">{numberOfMeetings}</span><br/> today  
      </div>
    </div>
  );
};

export default DateComponent;
