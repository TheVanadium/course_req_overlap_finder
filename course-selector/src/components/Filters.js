import React from 'react';
import ChecklistFilter from './ChecklistFilter.js';
import './Filters.css';

/**
 * For more info go to https://ue.ucmerced.edu/academics
   This is a list of all the badges that are available, except:
   -Leadership, Community, and Engaging the World (Units aren't listed, which messes up the API. Will need to be fixed.)
     https://ge.ucmerced.edu/intellectual-experience-badges/leadership-community-and-engaging-world
   -Practical and Applied Skills (No Page Available)
   -Quantitative and Numerical Analysis (No Page Available)
 */

const badgeList = [
  "Ethics",
  "Diversity and Identity",
  "Global Awareness",
  "Literary and Textual Analysis", 
  "Media and Visual Analysis", 
  "Scientific Method", 
  "Sustainability",
];

function Filters(props) {
    return (
      <div id="filters">
        <h2>Filters</h2>
        <ChecklistFilter checklistItems={(badgeList)} update={(value)=>{
          props.updateFilters(value);
        }
        }></ChecklistFilter>
      </div>
    );
  }
export default Filters;

