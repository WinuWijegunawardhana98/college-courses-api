import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseDetail from './CourseDetail'; // Adjust the path as needed

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');

  useEffect(() => {
    // Fetching courses from the backend
    axios.get('http://localhost:8080/api/courses')
      .then(response => {
        setCourses(response.data); // Store the fetched courses
      })
      .catch(error => {
        console.error('There was an error fetching the courses!', error);
      });
  }, []);

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div>
      <h1>Select Course:</h1>
      <select onChange={handleCourseChange}>
        <option value="">--Select a Course--</option>
        {courses.length > 0 ? (
          courses.map(course => (
            <option key={course.id} value={course.name}>
              {course.name} {/* Display the course name */}
            </option>
          ))
        ) : (
          <option value="">No courses available</option>
        )}
      </select>

      {/* Pass the selected course name to CourseDetail component */}
      {selectedCourse && <CourseDetail courseName={selectedCourse} />}
    </div>
  );
};

export default CoursePage;
