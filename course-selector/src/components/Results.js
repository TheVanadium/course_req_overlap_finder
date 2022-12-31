import React from 'react';
import './Results.css';

function Results(props) {

    function generateCourses() {
      if (props.courses.length === 0) {
        return <p id={"pleaseSelect"} className={"course"}>Please select a badge</p>;
      }
      return props.courses.map((course) => <p key={course} className={"course"}>{course}</p>);
    }

    return (
      <div id="results">
        <h2>Results</h2>
        <div id="courseResultsList">
          {/* if props.loading is true, put loading <p></p> otherwise generate courses */}
          {props.loading ? <p id={"loading"} className={"course"}>Loading...</p> : generateCourses()}
        </div>
      </div>
    );
  }

export default Results;

