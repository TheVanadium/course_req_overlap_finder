import './App.css';
import Filters from './components/Filters';
import Results from './components/Results';
import Header from './components/Header';
import React, { useState, useEffect } from 'react';

function App() {

  const [courses, setCourses] = useState([]);
  const [badgeFilters, setBadgeFilters] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCourses();
  }, [badgeFilters])

  /**
   * Loads the courses from the server based on the badge filters.
   */
  function loadCourses() {
    if (badgeFilters.length === 0) {
      setCourses([]);
      return;
    }
    // loading feature 
    setLoading(true);
    fetch('https://thevanadium.pythonanywhere.com/courses?badges=' + badgeFilters.join(',')).then(
      res => res.json()
    ).then(data => {
        setCourses(data);
        setLoading(false);
      }
    )
  }

  /**
   * Updates the badge filters based on the given badge.
   * @param {string} badge - The badge to add or remove from the badge filters.
   */
  function updateFilter(badge) {
    if (badgeFilters.includes(badge)) {
      setBadgeFilters(badgeFilters.filter(item => item !== badge));
    } else {
      setBadgeFilters(badgeFilters.concat(badge));
    }
  }

  return (
    <div className="app-container">
      <Header></Header>
      <div className='search-tool'>
        <Filters updateFilters={(value) => {updateFilter(value);}}></Filters>
        <Results courses={courses} loading={loading} badgeFilters={badgeFilters}></Results>
      </div>
    </div>
  );
}

export default App;
