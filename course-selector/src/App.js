import './App.css';
import Filters from './components/Filters';
import Results from './components/Results';
import React, { useState, useEffect } from 'react';

function App() {

  const [courses, setCourses] = useState(["Data not Found"]);

  function filterUpdate() {
    console.log("filter update");
  }

  useEffect(() => {
    fetch('/sustainability,ethics').then(
      res => res.json()
    ).then(data => {
        console.log(data);
        setCourses(data);
      }
    )
  }, [])

  return (
    <div className='container'>
      <Filters onChange={filterUpdate()}></Filters>
      <Results courses={courses}></Results>
    </div>
  );
}

export default App;
