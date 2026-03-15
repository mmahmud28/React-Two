import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({countriespromise}) => {
    const dataApi = use(countriespromise);
    const countrie = dataApi.countries;
    console.log(countrie);
    return (
        <div>
            <h1>Result: {countrie.length}</h1>
            {
                countrie.map(country=> <Country country={country}></Country>)
            }
        </div>
    );
};

export default Countries;