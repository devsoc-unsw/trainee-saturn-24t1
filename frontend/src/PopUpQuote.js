import React, { useState, useEffect } from 'react';

function PopUpQuotes() {
    const [quote, setQuote] = useState("");

    useEffect(() => {
        fetch('https://api.quotable.io/quotes/random')
            .then(resp => resp.json())
            .then(json => setQuote(json[0]))
            .catch(error => console.error(error));
        console.log('display')
    }, []);

    // const checkbox = document.querySelector("checkbox");

    return <>
        <div id="quote-content" className="mx-4 py-2 px-5 bg-[#80CDBB] 
            max-w-52 max-h-44 rounded-lg">
            <p className="text-[#3C3C3C]">
                {quote.content}
            </p>
        </div>
    </>
}

export default PopUpQuotes;