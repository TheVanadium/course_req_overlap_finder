import React from "react";
import BadgeList from "./BadgeList.js";
import UpdateDate from "./UpdateDate.js";
import "./Filters.css";

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
      <BadgeList
        checklistItems={badgeList}
        update={(value) => {
          props.updateFilters(value);
        }}
      ></BadgeList>
      <UpdateDate></UpdateDate>
      <div id="disclaimer">
        <p>
          <i>
            Disclaimer: This website is not an official UC Merced product.
            Always consult your advisor before making course selection-related
            decisions.
          </i>
        </p>
      </div>
    </div>
  );
}
export default Filters;
