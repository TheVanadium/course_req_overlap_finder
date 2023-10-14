// import './UpdateDate.css';
import React, { useState, useEffect } from 'react';

function UpdateDate() {
    const [date, setDate] = useState("");

    useEffect(() => {
        async function fetchDate() {
            try {
                const response = await fetch('https://thevanadium.pythonanywhere.com/update-date');
                const data = await response.text();
                console.log(data);
                setDate(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchDate();
    }, []);

    function dateStringToReadableDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    return (
        <div id="update-date">
        <p>Last Updated: {dateStringToReadableDate(date)}</p>
        </div>
    );
}

export default UpdateDate;