import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './NavBar';
import Instruction from './Instruction'; 
import PreviousCourses from './PreviousCourses'; 
import SelectCourses from './SelectCourses'; 
import '../App.css';

function First(){
    const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <h2 className="titleM">Course Man</h2>
        <NavBar />
        <div>
          <Routes>
            <Route path="/Instruction" element={<Instruction />} />
            <Route path="/PreviousCourses" element={<PreviousCourses />} />
            <Route path="/SelectCourses" element={<SelectCourses />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default First;