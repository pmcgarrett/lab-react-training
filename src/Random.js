import React from 'react';
import PropTypes from 'prop-types';

function Random({ min, max }) {
    return (

        <div style={{ border: "solid 2px black", fontSize: "x-large", padding: "3px", width: "500px", margin: "10px 5px" }}>
            Random value between {min} and {max} = {Math.floor(Math.random() * (max - min + 1)) + min}
        </div>

    )
}
Random.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
}

export default Random;