import React from "react";

function BadgeList(props) {
  function checklistItem(item) {
    let urlItem = item
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/the-|of-/g, "");

    return (
      <div key={urlItem} id={item}>
        <input
          key={urlItem + "input"}
          type="checkbox"
          id={item}
          name={item}
          value={urlItem}
          onChange={(event) => {
            props.update(event.target.value);
          }}
        />
        <label key={urlItem + "label"} htmlFor={item}>
          {item}
        </label>
      </div>
    );
  }

  return (
    <div id="badgelist">
      <p>Badges</p>
      {props.checklistItems &&
        props.checklistItems.map((item) => {
          return checklistItem(item);
        })}
    </div>
  );
}
export default BadgeList;
