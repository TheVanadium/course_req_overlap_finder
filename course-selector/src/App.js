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
    // turn badgeFilters into a query string
    fetch('/courses?badges=' + badgeFilters.join(',')).then(
      res => res.json()
    ).then(data => {
        console.log(data);
        setCourses(data);
      }
    )
  }

  function updateFilter (badge) {
    console.log("Filter Update");
    console.log(badgeFilters)
    if (badge in badgeFilters) {
      setBadgeFilters(badgeFilters.filter(badge));
    } else {
      setBadgeFilters(badgeFilters.concat(badge));
    }
    console.log(badge + " was added");
  }

  return (
    <div className='container'>
      <Filters updateFilters={(value) => {updateFilter(value); console.log('meepers');}}></Filters>
      <Results courses={courses}></Results>
    </div>
  );
}

export default App;
