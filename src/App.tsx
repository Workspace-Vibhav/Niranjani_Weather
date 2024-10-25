import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Toaster position="top-right" />
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;