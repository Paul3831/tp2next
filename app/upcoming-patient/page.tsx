// page.tsx

import React from 'react';

const LoginPage: React.FC = () => {

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Empêcher le formulaire de se soumettre (pour l'exemple)
    // Ajoutez votre logique de connexion ici
    // Par exemple, vous pouvez effectuer une redirection programmatique
    window.location.href = '/dashboard';
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Upcoming-patient
		En TRAVAUX
          </label>
          
        </div>
        
        <div className="flex items-center justify-between">
          
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
