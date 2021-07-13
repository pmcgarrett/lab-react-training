import React from 'react';

function Rating({ children }) {
    let roundNumber = Math.round(children);
    let emptyStars = "☆".repeat(5 - roundNumber)
    let fullStars = "★".repeat(roundNumber)
    let stars = fullStars + emptyStars;

    return (
        <div style={{ fontSize: "xx-large" }}>{stars}</div>
    )

};

export default Rating;

