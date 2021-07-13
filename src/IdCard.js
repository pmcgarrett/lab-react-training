import React from 'react';
import './idCard.css';
import PropTypes from 'prop-types';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    let options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    
    return (
        <div className="profile" style={{ display: "inline-flex" }}>
            <div>
                <img src={picture} alt={picture} />
            </div>
            <div>
                <>
                    <p><strong>First Name </strong> {firstName}</p>
                    <p><strong>Last Name </strong> {lastName}</p>
                    <p><strong>Gender </strong> {gender}</p>
                    <p><strong>Height </strong> {height}</p>
                    <p><strong>Birth </strong> {birth.toLocaleDateString('en-US', options)}</p>
                </>
            </div>
        </div>

    )
}
IdCard.propTypes = {
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    gender: PropTypes.oneOf(['male', 'female']),
    height: PropTypes.number,
    birth: PropTypes.instanceOf(Date),

}

export default IdCard;