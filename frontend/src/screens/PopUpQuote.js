import React, { useState, useEffect } from 'react';

const PopUpQuotes = ({ isDarkMode }) => {
    const [quote, setQuote] = useState("");

    // fetch API 
    useEffect(() => {
        fetch('https://api.quotable.io/quotes/random?maxLength=60')
            .then(resp => resp.json())
            .then(json => setQuote(json[0]))
            .catch(error => console.error(error));
    }, []);


    // unimplemented feature
    // const checkbox = document.querySelector("checkbox");

    // quote-box is only visible after quote is loaded
    if (quote) {
        const content = document.getElementById("quote-box");
        content.style.display = "flex";
    }

    // quote-box will disappear when close button 'x' is clicked
    const closeClicked = () => {
        const content = document.getElementById("quote-box");
        content.style.display = "none";
    }

    return <>
        <div id="quote-box"
            className={
                isDarkMode === true
                    ? "hidden flex object-right mx-4 py-2 px-5 bg-[#80CDBB] rounded-lg"
                    : "hidden flex object-right mx-4 py-2 px-5 bg-[#BEE6CC] rounded-lg"}>
            <p className="text-[#3C3C3C]"> {quote.content} </p>
            <button id="closeButton" className="font-bold mx-2"
                onClick={closeClicked}>x</button>
        </div>
    </>
}

export default PopUpQuotes;