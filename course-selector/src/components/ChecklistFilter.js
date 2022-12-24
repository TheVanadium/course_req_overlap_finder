import React from 'react';

function ChecklistFilter(props) {
  
    return (
      <div id="filters">
        <p>Badges</p>
        {/* checklist items for each props.checklist-items if it exists*/}
          { props.checklistItems && props.checklistItems.map((item) => (
            <div key={item} id={item}>
              <input key={item + "input"} type="checkbox" id={item} name={item} value={item} onChange={(event)=>{props.onChange(event.target.value)}}/>
              <label key={item + "label"} htmlFor={item}>{item}</label>
            </div>
          ))}
      </div>
    );
  }
export default ChecklistFilter;

