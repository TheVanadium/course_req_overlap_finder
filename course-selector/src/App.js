import './App.css';
import Filters from './components/Filters';
import Results from './components/Results';
import React, { useState, useEffect } from 'react';

function App() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/sustainability').then(
      res => res.json()
    ).then(data => {
        setCourses(data.courses);
        console.log(data.courses);
      }
    )
  }, [])

  return (
    <div className='container'>
      <Filters></Filters>
      <Results courses={courses}></Results>
    </div>
  );
}

export default App;
