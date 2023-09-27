import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import './custom.css';
import EditRecord from './components/EditRecord';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/edit/:id" element={<EditRecord />} />
      <Route path="/create" element={<EditRecord />} />


      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;