import React, { useState } from 'react';

const Movie = ({directorName}) => {
    const [display, setDisplay] = useState("Old Movies");
        const handleClick = (e) => {
            e.preventDefault();
            setDisplay("Current Movies");
        }
    return (
        <div>
            <h1> {display} </h1>
            <p data-testid="director"> Movie Director : {directorName} </p>
            <button onClick={handleClick}>Show</button>
        </div>
    );
};

export default Movie;