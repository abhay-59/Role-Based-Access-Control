// src/context/UserContext.js
import React, { createContext, useState } from 'react';


export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem('users')) || [
      { id: 'abhay123', name: 'Abhay', password: '12345', role: 'admin' },
    ]
  );
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (user) => {
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const updateUserRole = (userId, newRole) => {
   if (currentUser.role !== 'admin') return;

   const originalAdminId = 'abhay123'; // ID of the original admin
   if (userId === originalAdminId) {
     alert("The role of the original admin cannot be modified.");
     return;
   }

   const updatedUsers = users.map((user) =>
     user.id === userId ? { ...user, role: newRole } : user
   );
   setUsers(updatedUsers);
 };

  const deleteUser = (userId) => {
   if (currentUser.role !== 'admin') return;

   const originalAdminId = 'abhay123'; // ID of the original admin
   if (userId === originalAdminId) {
     alert("The original admin cannot be deleted.");
     return;
   }

   const updatedUsers = users.filter((user) => user.id !== userId);
   setUsers(updatedUsers);
 };

  return (
    <UserContext.Provider
      value={{ users, currentUser, setCurrentUser, addUser, updateUserRole, deleteUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
