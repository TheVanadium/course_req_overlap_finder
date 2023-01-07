import React from 'react';

function ChecklistFilter(props) {

  // function that returns checklist item html
  function checklistItem(item) {
    // create a url friendly version of the item
    const urlItem = item.toLowerCase().replace(/ /g, "-");

    return (
      <div key={urlItem} id={item}>
        <input key={urlItem + "input"} type="checkbox" id={item} name={item} value={urlItem} onChange={(event)=>{props.update(event.target.value)}}/>
        <label key={urlItem + "label"} htmlFor={item}>{item}</label>
      </div>
    );
  }


  return (
    <div id="filters">
      <p>Badges</p>
        { props.checklistItems && props.checklistItems.map((item) => {
          return (checklistItem(item))
        })}
    </div>
  );
}
export default ChecklistFilter;

