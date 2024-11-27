import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import './Dashboard.css';
import DeleteIcon from '../assets/images/delete.png';
// import Navbar from './navbar';

const Dashboard = ({ setView }) => {
  const { users, currentUser, updateUserRole, deleteUser } = useContext(UserContext);
  const handleToggleRole = (userId) => {
    // Find the user to toggle the role
    const user = users.find((u) => u.id === userId);
    if (!user) return;

    // Toggle role logic
    const newRole = user.role === 'admin' ? 'viewer' : 'admin';

    // Call updateUserRole with the new role
    updateUserRole(userId, newRole);
  };

  return (
    <>
      <nav className="navbar">
        <h1>RBAC System</h1>
        <button onClick={() => setView('welcome')}>Logout</button>
      </nav>
      
      <div className="dashboard-container">
        {/* <h2 className="text-2xl font-bold mb-4">User Management Dashboard</h2> */}
        <div className="welcome-message">
          Welcome <span>{currentUser.name}</span>, you are signed in as <span>{currentUser.role}</span>
        </div>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">User ID</th>
              <th className="border p-2">Role</th>
              {currentUser.role === 'admin' && <th className="border p-2">Actions</th>}
            </tr>
          </thead>
          <tbody>
          {users.map((user) => (
  <tr key={user.id}>
    <td>{user.name}</td>
    <td>{user.id}</td>
    <td>{user.role}</td>
    {currentUser.role === 'admin' && (
      <td>

        <button className="action-button" onClick={() => handleToggleRole(user.id)}>
          Toggle Role
        </button>
        <button className="delete-button" onClick={() => deleteUser(user.id)}>
        <img src={DeleteIcon} alt="Delete" className="delete-icon" />
        </button>
      </td>
    )}
  </tr>
))}

          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
