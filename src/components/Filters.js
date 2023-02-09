import React from 'react';
import ChecklistFilter from './ChecklistFilter.js';
import './Filters.css';

/**
 * For more info go to https://ue.ucmerced.edu/academics
   This is a list of all the badges that are available, except:
   -Leadership, Community, and Engaging the World (Units are in div tags instead of li tags, which messes up the API.)
     https://ge.ucmerced.edu/intellectual-experience-badges/leadership-community-and-engaging-world
   -Practical and Applied Skills (No Page Available)
   -Quantitative and Numerical Analysis (No Page Available)
 */

const badgeList = [
  "Diversity and Identity",
  "Ethics",
  "Global Awareness",
  "Literary and Textual Analysis", 
  "Media and Visual Analysis", 
  "Scientific Method", 
  "Societies and Cultures of the Past",
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

