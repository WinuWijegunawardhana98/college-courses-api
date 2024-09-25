import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CollegeList = () => {
  const [colleges, setColleges] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [courses, setCourses] = useState([]);

  // Fetch colleges on component mount
  useEffect(() => {
    axios.get('http://localhost:8080/api/colleges')
      .then(response => {
        setColleges(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the colleges!', error);
      });
  }, []);

  // Fetch courses based on selected course
  useEffect(() => {
    if (selectedCourse) {
      axios.get(`http://localhost:8080/api/courses/byname?courseName=${selectedCourse}`)
        .then(response => {
          setCourses(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the courses!', error);
        });
    }
  }, [selectedCourse]);

  // Styles for the component
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
      textAlign: 'center',
      fontSize: '28px',
      color: '#333',
      marginBottom: '20px',
    },
    collegeCard: {
      border: '1px solid #ddd',
      borderRadius: '5px',
      padding: '15px',
      margin: '10px 0',
      backgroundColor: '#fff',
      boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)',
    },
    collegeName: {
      fontSize: '24px',
      color: '#007bff',
      margin: '0',
    },
    courseDropdown: {
      margin: '20px 0',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ddd',
      width: '100%',
      fontSize: '16px',
    },
    noColleges: {
      textAlign: 'center',
      color: '#777',
      fontStyle: 'italic',
    },
    courseDetails: {
      color: '#555',
      margin: '5px 0',
    },
    courseCard: {
      border: '1px solid #ddd',
      borderRadius: '5px',
      padding: '15px',
      margin: '10px 0',
      backgroundColor: '#fff',
      boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>List of Colleges</h1>
      {colleges.length > 0 ? (
        colleges.map(college => (
          <div key={college.id} style={styles.collegeCard}>
            <h2 style={styles.collegeName}>{college.name}</h2>
            <p>Accommodation: {college.accommodationType}</p>
            <p>Accommodation Fee: ${college.accommodationFee}</p>
          </div>
        ))
      ) : (
        <p style={styles.noColleges}>No colleges found.</p>
      )}

      <select
        style={styles.courseDropdown}
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}
      >
        <option value="">Select Course</option>
        {/* Replace with your actual course options */}
        <option value="Course1">Course 1</option>
        <option value="Course2">Course 2</option>
        <option value="Course3">Course 3</option>
      </select>

      {selectedCourse && (
        <div>
          <h2 style={styles.title}>Courses for {selectedCourse}</h2>
          {courses.length > 0 ? (
            courses.map(course => (
              <div key={course.id} style={styles.courseCard}>
                <h3 style={styles.courseDetails}>{course.name}</h3>
                <p>Duration: {course.duration}</p>
                <p>Fee: ${course.fee}</p>
              </div>
            ))
          ) : (
            <p style={styles.noColleges}>No courses found for {selectedCourse}.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CollegeList;
