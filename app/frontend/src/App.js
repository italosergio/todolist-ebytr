import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Tasks from './pages';
import './styles/app.css';

function App() {
  return (
    <Routes>
      <Route path="/tasks" element={ <Tasks /> } />
      <Route exact path="/" element={ <Navigate to="/tasks" /> } />
    </Routes>
  );
}

export default App;
