## Deployed Link 
  https://rbac123.netlify.app/

# RBAC System
A Role-Based Access Control (RBAC) System implemented in ReactJS to manage user roles and permissions effectively. This project allows users to sign up, log in, and view their role-based access. Admin users can manage other users by toggling roles or deleting them, while viewers have restricted access.

## Features
### Authentication:
## Default Admin Credentials
- **ID-** abhay123
- **Password-** 12345

- Users can sign up or log in with their credentials.
- Role-based dashboard for **Admin** and **Viewer** roles.
### Admin Dashboard:

- View all registered users.
- Toggle user roles (Admin <-> Viewer).
- Delete users from the system.
### Viewer Dashboard:

- Access to a read-only table of registered users.

# Tech Stack
- **Frontend:** ReactJS, CSS (for styling).
- **State Management:** React Context API.
# Getting Started
## Prerequisites
Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm**
## Installation
1. ### Clone the repository:

``` bash
git clone https://github.com/abhay-59/Role-Based-Access-Control
cd Role-Based-Access-Control
```
2. ### Install dependencies:

``` bash
npm install
```
3. ### Start the development server:

``` bash
npm start
``` 
4. ### Open the app in your browser:

- The app will run at http://localhost:3000.
# File Structure
```
src/
├── components/
│   ├── AuthForm.js      # Login and signup component
│   ├── Dashboard.js     # Admin dashboard component
├── context/
│   ├── UserContext.js   # Context API for managing state
├── styles/
│   ├── styles.css       # Custom CSS for navbar and table
├── App.js               # Main application entry point
├── index.js             # React DOM rendering
```
# Usage
### Sign Up:

- Users can sign up by providing a name, user ID, and password.
- All new users are assigned the "Viewer" role by default.
### Admin Role:

- Admin users can view all signed-up users in a table.
- Admins have the ability to toggle roles and delete users.
### Viewer Role:

- Viewers can log in and see a list of all users but cannot modify any data.
# Screenshots
<img src="https://github.com/user-attachments/assets/d71b6ac5-1a4b-43de-98f0-eb2ab640d5f7" alt="Image 3" width="300" height="300">

<img src="https://github.com/user-attachments/assets/12c35b7f-f9f3-4427-9cc7-04020adafb16" alt="Image Description" width="300" height="300">

<img src="https://github.com/user-attachments/assets/f8e3b771-472e-42ec-b8b9-e6efbd251c1e" alt="Image 2" width="300" height="300">

<img src="https://github.com/user-attachments/assets/bf024834-3cea-4c72-93e7-514fc3b635d6" alt="Image 4" width="300" height="300">

<img src="https://github.com/user-attachments/assets/8565ab14-58bd-4037-9125-f70a4138b985" alt="Image 5" width="300" height="300">



# Future Enhancements
- Add server-side integration (e.g., Node.js/Express backend).
- Add user profile management.
- Add some UseEffect props for maintaining states.
