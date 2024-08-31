import devQuotes from "./quotes.js";

export const fetchQuote = () => {
    const randomIndex = Math.floor(Math.random() * devQuotes.length);
    const quote = devQuotes[randomIndex];

    return quote;

};

