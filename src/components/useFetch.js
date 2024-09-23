import { useState, useEffect } from "react";

export const useFetch = () => {
    const [affirmationsList, setAffirmationsList] = useState([]);

    const fetchAffirmations = () => {
        fetch('/affirmation')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                console.log(data.affirmation); // Logs the new affirmation
                setAffirmationsList(data.affirmation); // Set the new affirmation in state
            })
            .catch((error) => console.error('Error fetching affirmation:', error));
    };

    useEffect(() => {
        fetchAffirmations();
    }, []);

    return { affirmationsList, fetchAffirmations };
};
