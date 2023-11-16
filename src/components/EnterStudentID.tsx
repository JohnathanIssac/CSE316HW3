
import React, { useState } from "react";
import "../App.css";

export let studentID: string = ""; // Global variable to store student ID

const EnterStudentID = () => {
  const [localStudentID, setLocalStudentID] = useState("");

  const handleSaveID = () => {
    studentID = localStudentID;
    console.log("Student ID saved successfully");
    alert("ID Successfully Saved.");
  };

  return (
    <div className="BackBoard">
      <h2 className="IDEntry">ID Entry Form</h2>
      <div className="col-md-12 d-flex flex-row" style={{ marginLeft: '5%', marginTop: '3%' }}>
        <div className="col-2 justify-content-center"><label htmlFor="Id">ID: </label></div>
        <div className="col-9"><input type="text" id="Id" placeholder="ID" onChange={(e) => setLocalStudentID(e.target.value)} /></div>
      </div>
      <div className="BTNcenter">
        <button id="IDSet" className="btn m-2 btn-pr" onClick={handleSaveID}>
          Set Student ID
        </button>
      </div>
    </div>
  );
};

export default EnterStudentID;
