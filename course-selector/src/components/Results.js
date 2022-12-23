import React from 'react';
import './Results.css';

function Results(props) {
    return (
      <div id="results">
        <h2>Results Works!</h2>
        {/* create p tag for each poprs.courses */}
        <div id="courseResultsList">
          {props.courses.map((course) => <p>{course}</p>)}
        </div>
      </div>
    );
  }

export default Results;

