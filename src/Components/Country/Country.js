import React from 'react';

const Country = (props) => {
    const {name, population, flag, region} = props.country;
    const flagStyle = {height: '100px'};
    const countryStyle = {border: '1px solid green', margin: '10px', padding: '10px'};
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h1>{name}</h1>
            <img style={flagStyle} src={flag} alt="country-flag"/>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <button onClick={() => handleAddCountry(props.country)}>Add country</button>
        </div>
    );
};

export default Country;