import React from 'react';
import PropTypes from 'prop-types';

function BoxColor({ r, g, b }) {
    let hex = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
    if (hex === "#ff00") {
        return (

            <div style={{
                border: "solid 2px black",
                fontSize: "x-large",
                padding: "3px",
                width: "500px",
                height: "100px",
                margin: "10px 5px",
                paddingTop: "25px",
                backgroundColor: `rgb(${r},${g},${b})`
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                }}>
                    <div>{`rgb(${r},${g},${b})`}</div>
                    <div>{hex}</div>
                </div>
            </div>

        )

    } else {
        return (

            <div style={{
                border: "solid 2px black",
                fontSize: "x-large",
                padding: "3px",
                width: "500px",
                height: "100px",
                margin: "10px 5px",
                paddingTop: "25px",
                backgroundColor: `rgb(${r},${g},${b})`
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <div>{`rgb(${r},${g},${b})`}</div>
                    <div>{hex}</div>
                </div>
            </div>

        )
    }



}
BoxColor.propTypes = {
    r: PropTypes.number,
    g: PropTypes.number,
    b: PropTypes.number,
}

export default BoxColor;