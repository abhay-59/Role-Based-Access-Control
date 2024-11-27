// src/App.js
import React, { useState } from 'react';
import UserProvider from './context/UserContext';
import Welcome from './components/Welcome';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';

const App = () => {
  const [view, setView] = useState('welcome');

  return (
    <UserProvider>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        {view === 'welcome' && <Welcome setView={setView} />}
        {view === 'login' && <AuthForm isLogin={true} setView={setView} />}
        {view === 'signup' && <AuthForm isLogin={false} setView={setView} />}
        {view === 'dashboard' && <Dashboard setView={setView} />}
      </div>
    </UserProvider>
  );
};

export default App;
