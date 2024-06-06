import React from "react";
import { useState, useEffect } from "react";
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
  const [date, setDate] = useState("");

  useEffect(() => {
    async function fetchDate() {
      try {
        const response = await fetch(
          "https://thevanadium.pythonanywhere.com/update-date"
        );
        const data = await response.text();
        console.log(data);
        setDate(
          new Date(data).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        );
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchDate();
  }, []);

  return (
    <div id="filters">
      <h2>Filters</h2>
      <div id="badgeList">
        <p>Badges</p>
        {badgeList.map((item) => {
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
                  props.updateFilters(event.target.value);
                }}
              />
              <label key={urlItem + "label"} htmlFor={item}>
                {item}
              </label>
            </div>
          );
        })}
      </div>
      <div id="update-date">
        <p>Last Updated: {date ? date : <i>Loading...</i>}</p>
      </div>
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
