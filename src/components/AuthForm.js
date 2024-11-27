import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Dashboard from './Dashboard';
import './styles.css';

const AuthForm = ({ isLogin, setView }) => {
  const { users, addUser, setCurrentUser, currentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({ name: '', id: '', password: '' });
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state

  const handleAction = () => {
    if (!formData.id || !formData.password || (!isLogin && !formData.name)) {
      setError('All fields are required');
      return;
    }

    if (isLogin) {
      const user = users.find(
        (u) => u.id === formData.id && u.password === formData.password
      );
      if (user) {
        setCurrentUser(user);
        setIsAuthenticated(true); // Mark as authenticated
      } else {
        setError('Invalid credentials');
      }
    } else {
      if (users.some((u) => u.id === formData.id)) {
        setError('User ID already exists');
        return;
      }
      addUser({ ...formData, role: 'viewer' });
      setFormData({ name: '', id: '', password: '' });
      setIsAuthenticated(true); // Mark as authenticated after signup
      setCurrentUser({ ...formData, role: 'viewer' }); // Set the user as the current viewer
    }
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    setFormData({ name: '', id: '', password: '' });
  };

  if (isAuthenticated) {
    // Check if the user is admin or viewer
    if (currentUser?.role === 'admin') {
      return <Dashboard setView={setView} />; // Render the Dashboard component for admins
    }

    return (
      <>
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-text">RBAC System</div>
          <div className="logout-button">
            <button onClick={handleSignOut} className="signout-button">
              Log Out
            </button>
          </div>
        </nav>

        {/* Full Page User Table */}
        <div className="welcome-message">
          Welcome <span>{currentUser.name}</span>, you signed in as <span>{currentUser.role}</span>
        </div>
        <div className="user-table-container">
          <h2 className="table-title">All Signed-Up Users</h2>
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>User ID</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.id}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }

  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {isLogin ? 'Login' : 'Signup'}
      </h2>
      <form>
        {!isLogin && (
          <input
            type="text"
            placeholder="Enter name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        )}
        <input
          type="text"
          placeholder="Enter user ID"
          value={formData.id}
          onChange={(e) => setFormData({ ...formData, id: e.target.value })}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {error && <div className="error-message">{error}</div>}
        <button type="button" onClick={handleAction}>
          {isLogin ? 'Login' : 'Signup'}
        </button>
        <button
          type="button"
          className="back-button"
          onClick={() => setView('welcome')}
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
