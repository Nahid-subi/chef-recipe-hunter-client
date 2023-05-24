import React from 'react';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { AuthContextProvider } from './providers/AuthContext';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AuthContextProvider>
        <div>
          <NavBar />
        </div>
        <div className="flex-grow">
          <Outlet />
        </div> 
        <Footer />
      </AuthContextProvider>
    </div>
  );
}; 

export default App;

