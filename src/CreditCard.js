import React from 'react';
import './CreditCard.css';
import PropTypes from 'prop-types';

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    let logo;
    if (type === "Visa") {
        logo = "img/visa.png"
    } else {
        logo = "img/master-card.svg"
    }


    return (
        <div className="creditCard" style={{ display: "inline-flex", backgroundColor: bgColor, color: color }}>
            <div className="cardContent">
                <div className="logo">
                    <img src={logo} alt=""></img>
                </div>
                <div className="cardNumber">
                    .... .... ....  {number.substring(12)}
                </div>
                <div className="text">
                    Exprires {expirationMonth}/ {expirationYear} {bank}
                </div>
                <div className="text">
                    {owner}
                </div>
            </div>

        </div>

    )
}
CreditCard.propTypes = {
    // To be completed

}

export default CreditCard;