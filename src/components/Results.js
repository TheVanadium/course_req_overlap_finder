import React from "react";
import "./Results.css";

function Results(props) {
  function generateCourses() {
    if (props.courses.length === 0) {
      return props.badgeFilters.length === 0 ? (
        <p id={"pleaseSelect"} className={"course"}>
          Please select a badge
        </p>
      ) : (
        <p id={"noCoursesFound"} className={"course"}>
          No courses found
        </p>
      );
    }
    return props.courses.map((course) => (
      <p key={course} className={"course"}>
        {course}
      </p>
    ));
  }

  function coursesLoading() {
    return (
      <div id="loadingBoxList">
        {Array.from({ length: 10 }, (_, i) => (
          <div className={"loadingBox"} key={i} data-testid={`loadingBox-${i}`}>
            <div className={"skeletonText"}></div>
            <div className={"skeletonText"}></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div id="results">
      <h2>Results</h2>
      <div id="courseResultsList">
        {props.loading ? coursesLoading() : generateCourses()}
      </div>
    </div>
  );
}

export default Results;
