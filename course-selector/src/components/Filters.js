import React from 'react';
import ChecklistFilter from './ChecklistFilter.js';
import './Filters.css';

// change the above into a dictionary with the key being the badge name and the value being false by default
// then change the onChange function to change the value of the key to the opposite of what it was before

const badgeList = {
  "Scientific Method": false,
  "Literary and Textual Analysis": false,
  "Media and Visual Analysis": false,
  "Quantitative and Numerical Analysis": false,
  "Pratical and Applied Knowledge": false,
  "Ethics": false,
};


function Filters(props) {
    return (
      <div id="filters">
        <h2>Filters</h2>
        <ChecklistFilter checklistItems={Object.keys(badgeList)} onChange={(value)=>{
          console.log(value);
          badgeList[value] = !badgeList[value];
          console.log(badgeList[value]);
          props.onChange();
        }
        }></ChecklistFilter>
      </div>
    );
  }
export default Filters;

