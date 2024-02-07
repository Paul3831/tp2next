// components/MainComponent.js

import React from 'react';
import Link from 'next/link';

const MainComponent = () => {
  // Supposons que vous ayez ces informations
  const dayOfWeek: string = "Monday";
  const dayOfMonth: number = 12;
  const userName: string = "Paul";
  const numberOfMeetings: number = 3; // Supposons que vous avez cette information

  // Définissez explicitement les types des paramètres
  const pluralize = (count: number, singular: string, plural: string): string => (count === 1 ? singular : plural);

  return (
    <div>
      {/* Affiche la date */}
      <div className="date-container">
        <div className="date-text">
          <div className="day-of-week">{dayOfWeek}</div>
          <div className="day-of-month">{dayOfMonth}</div>
        </div>

        {/* Affiche le message personnalisé */}
        <div className="greeting">
          Hi {userName}, you have <span className="meeting-number">{numberOfMeetings}</span> {pluralize(numberOfMeetings, 'meeting', 'meetings')} today.
        </div>
      </div>

      {/* Bouton Upcoming Patient */}
      <div className="mt-4">
      <Link href="/upcoming-patient">
          <p className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Upcoming Patient
          </p>
        </Link>        

      </div>

      {/* Image */}
      <div className="image-container mt-4">
        <img src="/path/to/your/image.jpg" alt="Image description" />
      </div>
    </div>
  );
};

export default MainComponent;
