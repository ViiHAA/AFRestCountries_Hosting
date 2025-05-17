import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { loginUser, registerUser } from '../services/auth';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      let userData;

      if (isLogin) {
        // Login
        if (!formData.username || !formData.password) {
          throw new Error('Please enter both username and password');
        }
        userData = await loginUser(formData.username, formData.password);
      } else {
        // Register
        if (!formData.username || !formData.password || !formData.name) {
          throw new Error('Please fill in all fields');
        }
        userData = await registerUser(formData.username, formData.password, formData.name);
      }

      // Call the onLogin function from parent component
      onLogin(userData);
      
      // Navigate to home page
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  return (
    <div className="max-w-md mx-auto fade-in">
      <div className="card p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {isLogin ? 'Login' : 'Register'}
          </h2>
          <p className="text-gray-600">
            {isLogin 
              ? 'Access your account to save favorite countries' 
              : 'Create an account to start exploring'}
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3 border border-red-300 bg-red-50 text-red-500 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Name Field (Only for Register) */}
          {!isLogin && (
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field w-full pl-10"
                  placeholder="Enter your name"
                />
              </div>
            </div>
          )}

          {/* Username Field */}
          <div className="mb-6">
            <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="input-field w-full pl-10"
                placeholder="Enter your username"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-8">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input-field w-full pl-10"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full btn-primary flex justify-center items-center"
            disabled={loading}
          >
            {loading ? (
              <span>Processing...</span>
            ) : (
              <>
                {isLogin ? <FaSignInAlt className="mr-2" /> : <FaUserPlus className="mr-2" />}
                {isLogin ? 'Login' : 'Register'}
              </>
            )}
          </button>
        </form>

        {/* Toggle between Login and Register */}
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              type="button"
              onClick={toggleMode}
              className="ml-2 text-primary hover:underline focus:outline-none"
            >
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login; 