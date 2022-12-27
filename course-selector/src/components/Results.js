import React from 'react';
import './Results.css';

function Results(props) {
    return (
      <div id="results">
        <h2>Results</h2>
        <div id="courseResultsList">
          {props.courses.map((course) => <p key={course} className={"course"}>{course}</p>)}
        </div>
      </div>
    );
  }

export default Results;

