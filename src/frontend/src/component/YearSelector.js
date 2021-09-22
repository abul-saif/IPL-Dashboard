import React from 'react';
import { Link } from 'react-router-dom';

import './YearSelector.scss';

function YearSelector({teamName}) {

    let years=[];
    
    const startyear=process.env.REACT_APP_DATA_START_YEAR;
    const endyear=process.env.REACT_APP_DATA_END_YEAR;

    for(let i=startyear;i<=endyear;i++)
        years.push(i);

    return (
        <ol className='YearSelector'>
            {
                years.map(year=> (
                       <Link to={`/teams/${teamName}/matches/${year}`}> <li>{year}</li> </Link>
                    )
                )
            }

        </ol>
    )
}

export default YearSelector;
