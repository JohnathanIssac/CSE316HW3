import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function SelectCourses() {
  const [showCourses, setShowCourses] = useState(false);
  const [inputName, setInputName] = useState('');
  const [searchContent, setSearchContent] = useState('');
  const [selectedCourses, setSelectedCourses] = useState<number[]>([]);
  const [courses, setCourses] = useState([
    { id: 101, name: "CSE101: Algorithmic Thinking - 40 of 40" },
    { id: 114, name: "CSE114: Introduction to Object Oriented Programming - 40 of 40" },
    { id: 214, name: "CSE214: Data Structures - 40 of 40" },
    { id: 215, name: "CSE215: Foundations of Computer Science - 40 of 40" },
    { id: 216, name: "CSE216: Programming Abstractions - 40 of 40" },
    { id: 220, name: "CSE220: System Fundamentals I - 40 of 40" },
    { id: 300, name: "CSE300: Introduction to the Theory of Computation - 40 of 40" },
    { id: 303, name: "CSE303: Compiler Design - 40 of 40" },
    { id: 305, name: "CSE305: Database Systems - 40 of 40" },
    { id: 306, name: "CSE306: Operating Systems - 40 of 40" },
    { id: 310, name: "CSE310: Computer Networks - 40 of 40" },
    { id: 312, name: "CSE312: Software Development - 40 of 40" },
    { id: 316, name: "CSE316: System Fundamentals II - 40 of 40" },
    { id: 320, name: "CSE320: Computer Security Basics - 40 of 40" },
    { id: 416, name: "CSE416: Software Engineering - 40 of 40" },
  ]);

  const handleToggleCourses = () => {
    setShowCourses(!showCourses);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  const handleContentInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchContent(e.target.value);
  };

  const handleCheckboxChange = (courseId: number) => {
    const index = selectedCourses.indexOf(courseId);
    if (index === -1) {
      setSelectedCourses([...selectedCourses, courseId]);
    } else {
      const updatedSelectedCourses = [...selectedCourses];
      updatedSelectedCourses.splice(index, 1);
      setSelectedCourses(updatedSelectedCourses);
    }
  };

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchContent.toLowerCase())
  );

  const handleRegisterButtonClick = () => {
    alert(`Successfully Registered. Selected Courses: ${selectedCourses.map(id => `CSE${id}`).join(', ')}`);
  };

  return (
    <div className="BackBoard">
      <h3 className="SearchTitle">Search Courses</h3>
      <form>
        <div className="col-md-12 d-flex flex-row" style={{ marginLeft: '5%', marginTop: '3%' }}>
          <div className="col-2 justify-content-center"><label htmlFor="Name">Name: </label></div>
          <div className="col-9"><input type="text" id="Name" placeholder="Name" onChange={handleInputChange}/></div>
        </div>
        <div className="col-md-12 d-flex flex-row" style={{ marginLeft: '5%', marginTop: '5%' }}>
          <div className="col-2 justify-content-center"><label htmlFor="sfc">Search for: </label></div>
          <div className="col-9"><input type="text" id="sfc" placeholder="Content" onChange={handleContentInputChange} /></div>
        </div>
      </form>
      <div className="col-md-12 d-flex flex-row" style={{ marginLeft: '4%', marginTop: '5%' }}>
        <button id="ShowCourse" className="btn btn-primary m-2" onClick={handleToggleCourses}>
          {showCourses ? "Hide Courses" : "Show Courses"}
        </button>
      </div>
      {showCourses && (
        <div id="NewDiv" className="col-md-12 d-flex flex-row" style={{ marginLeft: '4%', marginTop: '3%' }}>
          <div className="InnerBox">
            <h4 className="SearchTitle">{`${inputName} Here Are Courses You May Select`}</h4>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
            {filteredCourses.map((course) => (
  <li className="list2" key={course.id}>
    <input
      type="checkbox"
      id={`course-${course.id}`}
      value={course.name}
      onChange={() => handleCheckboxChange(course.id)}
    />
    <label htmlFor={`course-${course.id}`}>{course.name}</label>
  </li>
))}

            </ul>
            <button id="Register" className="btn m-2 btn-pr" onClick={handleRegisterButtonClick}>
              Register
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectCourses;
