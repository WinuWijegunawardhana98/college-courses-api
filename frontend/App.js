import React, { useState } from 'react';
import CollegeList from './components/CollegeList';
import CourseDetail from './components/CourseDetail';

function App() {
  const [selectedCourse, setSelectedCourse] = useState('');

  return (
    <div className="App">
      <CollegeList />
      <div>
        <label>Select Course: </label>
        <input
          type="text"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          placeholder="Enter course name"
        />
      </div>
      {selectedCourse && <CourseDetail courseName={selectedCourse} />}
    </div>
  );
}

export default App;
