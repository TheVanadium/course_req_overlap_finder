import React, { useState, useEffect } from "react";

function UpdateDate() {
  const [date, setDate] = useState("");

  useEffect(() => {
    async function fetchDate() {
      try {
        const response = await fetch(
          "https://thevanadium.pythonanywhere.com/update-date"
        );
        const data = await response.text();
        let formattedDate = new Date(data).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        setDate(formattedDate);
      } catch (error) {
        setDate("Error fetching date");
      }
    }
    fetchDate();
  }, []);

  return (
    <div id="update-date">
      <p>Last Updated: {date ? date : <i>Loading...</i>}</p>
    </div>
  );
}

export default UpdateDate;
