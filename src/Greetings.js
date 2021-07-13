import React from 'react';

function Greetings({ children, lang }) {
    switch (lang) {
        case 'de':
            return (
                <div style={{ border: "solid 2px black", fontSize: "x-large", padding: "3px", width: "500px", margin: "10px 5px" }}>
                    Hallo {children}
                </div>
            )
        case 'en':
            return (
                <div style={{ border: "solid 2px black", fontSize: "x-large", padding: "3px", width: "500px", margin: "10px 5px" }}>
                    Hello {children}
                </div>
            )
        case 'es':
            return (
                <div style={{ border: "solid 2px black", fontSize: "x-large", padding: "3px", width: "500px", margin: "10px 5px" }}>
                    Hola {children}
                </div>
            )
        case 'fr':
            return (
                <div style={{ border: "solid 2px black", fontSize: "x-large", padding: "3px", width: "500px", margin: "10px 5px" }}>
                    Bonjour {children}
                </div>
            )

    }


}


export default Greetings;