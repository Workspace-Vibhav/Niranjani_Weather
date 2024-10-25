import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { User } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'demo' && password === 'demo') {
      toast.success('Login successful!');
      onLogin();
    } else {
      toast.error('Invalid credentials! Try demo/demo');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-500 rounded-full">
            <User size={32} />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Weather Dashboard Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter username"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-400">
          Use demo/demo to login
        </p>
      </div>
    </div>
  );
}

export default Login;