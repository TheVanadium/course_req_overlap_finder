import React from 'react';
import './Results.css';

function Results(props) {

    function generateCourses() {
      if (props.courses.length === 0) {
        return props.badgeFilters.length === 0 ? noBadgesSelected() : noCoursesFound();
      }
      return props.courses.map((course) => <p key={course} className={"course"}>{course}</p>);
    }

    function noCoursesFound() {
      return <p id={"noCoursesFound"} className={"course"}>No courses found</p>;
    }

    function noBadgesSelected() {
      return <p id={"pleaseSelect"} className={"course"}>Please select a badge</p>;
    }

    function coursesLoading() {
      // return <p id={"loading"} className={"course"}>Loading...</p>;
      // 10 empty boxes
      return (
        <div id="loadingBoxList">
          <div className={"loadingBox"}><div className={"skeletonText"}></div><div className={"skeletonText"}></div></div>
          <div className={"loadingBox"}><div className={"skeletonText"}></div><div className={"skeletonText"}></div></div>
          <div className={"loadingBox"}><div className={"skeletonText"}></div><div className={"skeletonText"}></div></div>
          <div className={"loadingBox"}><div className={"skeletonText"}></div><div className={"skeletonText"}></div></div>
          <div className={"loadingBox"}><div className={"skeletonText"}></div><div className={"skeletonText"}></div></div>
          <div className={"loadingBox"}><div className={"skeletonText"}></div><div className={"skeletonText"}></div></div>
          <div className={"loadingBox"}><div className={"skeletonText"}></div><div className={"skeletonText"}></div></div>
          <div className={"loadingBox"}><div className={"skeletonText"}></div><div className={"skeletonText"}></div></div>
          <div className={"loadingBox"}><div className={"skeletonText"}></div><div className={"skeletonText"}></div></div>
          <div className={"loadingBox"}><div className={"skeletonText"}></div><div className={"skeletonText"}></div></div>
        </div>
      );
    }

    return (
      <div id="results">
        <h2>Results</h2>
        <div id="courseResultsList">
          {/* if props.loading is true, put loading <p></p> otherwise generate courses */}
          {/* todo: make proper loading component, column bubbles with shining thing*/}
          {props.loading ? coursesLoading() : generateCourses()}
        </div>
      </div>
    );
  }

export default Results;
