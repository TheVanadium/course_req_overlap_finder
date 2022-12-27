import React from 'react';
import ChecklistFilter from './ChecklistFilter.js';
import './Filters.css';

// change the above into a dictionary with the key being the badge name and the value being false by default
// then change the onChange function to change the value of the key to the opposite of what it was before

const badgeList = [
  "Scientific Method", 
  "Literary and Textual Analysis", 
  "Media and Visual Analysis", 
  "Quantitative and Numerical Analysis", 
  "Pratical and Applied Knowledge", 
  "Ethics",
  "Global Awareness",
  "Sustainability",
];

function Filters(props) {
    return (
      <div id="filters">
        <h2>Filters</h2>
        <ChecklistFilter checklistItems={(badgeList)} update={(value)=>{
          console.log(value + " was updated");
          props.updateFilters(value);
        }
        }></ChecklistFilter>
      </div>
    );
  }
export default Filters;

