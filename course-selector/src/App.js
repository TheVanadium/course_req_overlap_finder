import './App.css';
import Filters from './components/Filters';
import Results from './components/Results';
import React, { useState, useEffect } from 'react';

function App() {

  const [courses, setCourses] = useState(["Data not Found"]);
  const [badgeFilters, setBadgeFilters] = useState([])

  useEffect(() => {
    loadCourses();
  }, [])

  function loadCourses() {
    fetch('/sustainability_ethics').then(
      res => res.json()
    ).then(data => {
        console.log(data);
        setCourses(data);
      }
    )
  }

  const updateFilter = (badge) => () => {
    console.log("Filter Update");
    if (badge in badgeFilters) {
      setBadgeFilters(badgeFilters.filter(badge));
    } else {
      setBadgeFilters(badgeFilters.push(badge));
    }
  }

  return (
    <div className='container'>
      <Filters onChange={updateFilter("sustainability")}></Filters>
      <Results courses={courses}></Results>
    </div>
  );
}

export default App;
