import React, { useState } from "react";

interface CourseCheckbox {
  id: string;
  value: string;
  checked?: boolean;
}

const CourseList: React.FC<{ onSaveCourses: (selectedCourses: CourseCheckbox[]) => void }> = ({ onSaveCourses }) => {
  const initialCourses: CourseCheckbox[] = [
    { id: 'CSE101', value: 'CSE101' },
    { id: 'CSE114', value: 'CSE114' },
    { id: 'CSE214', value: 'CSE214' },
    { id: 'CSE215', value: 'CSE215' },
    { id: 'CSE216', value: 'CSE216' },
    { id: 'CSE220', value: 'CSE220' },
    { id: 'CSE300', value: 'CSE300' },
    { id: 'CSE303', value: 'CSE303' },
    { id: 'CSE305', value: 'CSE305' },
    { id: 'CSE306', value: 'CSE306' },
    { id: 'CSE310', value: 'CSE310' },
    { id: 'CSE312', value: 'CSE312' },
    { id: 'CSE316', value: 'CSE316' },
    { id: 'CSE320', value: 'CSE320' },
    { id: 'CSE416', value: 'CSE416' }
  ];

  const [courses, setCourses] = useState<CourseCheckbox[]>(initialCourses);

  const handleCheckboxChange = (id: string) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id ? { ...course, checked: !course.checked } : course
      )
    );
  };

  const handleSaveCourses = () => {
    const selectedCourses = courses.filter((course) => course.checked);
    onSaveCourses(selectedCourses);
  };

  return (
    <div className="row justify-content-center" style={{ margin: '50px', listStyle: 'none', padding: 0 }}>
      {courses.map((course) => (
        <div key={course.id} className="col-3" style={{ marginBottom: '20px' }}>
          <input
            type="checkbox"
            name="course"
            id={course.id}
            value={course.value}
            checked={course.checked || false}
            onChange={() => handleCheckboxChange(course.id)}
          />
          <label>{course.value}</label>
        </div>
      ))}
      <button id="SetPreviousCourses" className="btn m-2 btn-pr" onClick={handleSaveCourses}>
        Set Previous Courses
      </button>
    </div>
  );
};

function PreviousCourses() {
  const handleSaveCourses = (selectedCourses: CourseCheckbox[]) => {
    console.log("Selected Courses:", selectedCourses);
    alert("Submission accepted. Selected courses: " + selectedCourses.map((course) => course.value).join(", "));
  };

  return (
    <div className="BackBoard">
      <p className="paragraph">Check off the courses you have completed with a C or better.</p>
      <CourseList onSaveCourses={handleSaveCourses} />
    </div>
  );
}

export default PreviousCourses;
