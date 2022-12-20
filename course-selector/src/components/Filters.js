import React from 'react';
import ChecklistFilter from './ChecklistFilter.js';
import './Filters.css';

const badges = [
  "Scientific Method",
  "Literary and Textual Analysis",
  "Media and Visual Analysis",
  "Quantitative and Numerical Analysis",
  "Pratical and Applied Knowledge",
  "Ethics",
];

function Filters() {
    return (
      <div id="filters">
        <h2>Filters</h2>
        <ChecklistFilter checklistItems={badges}></ChecklistFilter>
      </div>
    );
  }
export default Filters;

