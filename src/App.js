import React from 'react';
import ToDo from './components/ToDo';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import Pomodoro from './components/Pomodoro';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className='overflow-x-hidden'>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ToDo" element={<ToDo />} />
          <Route path="/Pomodoro" element={<Pomodoro />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
