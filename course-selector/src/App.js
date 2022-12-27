import './App.css';
import Filters from './components/Filters';
import Results from './components/Results';
import React, { useState, useEffect } from 'react';

function App() {

  const [courses, setCourses] = useState(["Loading..."]);
  const [badgeFilters, setBadgeFilters] = useState([])

  useEffect(() => {
    loadCourses();
  }, [])

  useEffect(() => {
    loadCourses();
  }, [badgeFilters])

  function loadCourses() {
    // if the course list is empty, then load message "Please select a badge"
    if (badgeFilters.length === 0) {
      setCourses(["Please select a badge"]);
      return;
    }

    fetch('/courses?badges=' + badgeFilters.join(',')).then(
      res => res.json()
    ).then(data => {
        setCourses(data);
      }
    )
  }

  function updateFilter(badge) {
    if (badgeFilters.includes(badge)) {
      setBadgeFilters(badgeFilters.filter(item => item !== badge));
    } else {
      setBadgeFilters(badgeFilters.concat(badge));
    }
  }

  return (
    <div className='container'>
      <Filters updateFilters={(value) => {updateFilter(value); console.log('meepers');}}></Filters>
      <Results courses={courses}></Results>
    </div>
  );
}

export default App;
