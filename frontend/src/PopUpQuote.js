import React, { useState, useEffect } from 'react';

function PopUpQuotes() {
    const [quote, setQuote] = useState("");

    useEffect(() => {
        fetch('https://api.quotable.io/quotes/random?maxLength=60')
            .then(resp => resp.json())
            .then(json => setQuote(json[0]))
            .catch(error => console.error(error));
    }, []);

    // const checkbox = document.querySelector("checkbox");

    const closeClicked = () => {
        const content = document.getElementById("quote-box");
        content.style.display = "none";
    }

    return <>
        <div id="quote-box" className="flex object-right mx-4 py-2 px-5 bg-[#80CDBB] rounded-lg">
            <p className="text-[#3C3C3C]"> {quote.content} </p>
            <button id="closeButton" className="font-bold mx-2"
                onClick={closeClicked}>X</button>
        </div>
    </>
}

export default PopUpQuotes;