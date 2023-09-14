// import React from 'react';
import { useState } from 'react';
import './Country.css'

const Country = ({country , handleVisitedCountries, handleVisitedFlags}) => {

   const {name,flags,population,area,cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {

        setVisited(!visited);
    }

    console.log(handleVisitedCountries);

    return (
        <div className={`country ${visited ? 'visited': 'non-visited'}`}>
            <h3 style={{color: visited? 'green': 'blue'}} >{name?.common}</h3>
            <img src={flags?.png}></img>
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={() => handleVisitedCountries(country)}>Mark Visited</button>
            <br></br>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br></br>
            <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
            {visited ? " I have Visited" : " Not Visited Yet" }
        </div>
    );
};

export default Country;