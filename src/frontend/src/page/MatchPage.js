import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { base_url } from '../api/base_url';
import { MatchDetailCard } from '../component/MatchDetailCard';
import YearSelector from '../component/YearSelector';

import './MatchPage.scss';

export const MatchPage = () => {

    const [matches, setmatches] = useState([]);
    const {teamName,year} = useParams();

    useEffect(() => {
        const fetchMatches = async () =>{
            const response=await fetch(`${base_url}/teams/${teamName}/matches?year=${year}`);
            const data= await response.json();
            setmatches(data);
        }
        
        fetchMatches();

    },[teamName,year])

    {
        if(!matches)
            return <h1>Matches not found</h1>;
    }

    return(
        <div className="MatchPage">
            <div className='year-selector'>
                <p>Select Year</p> <br />
                <YearSelector teamName={teamName}/>
            </div>
            <div>
            <h1><span style={{color:'#4da375'}}>{teamName}</span> matches in {year}</h1>
                {
                    matches.map(match => {
                    return <MatchDetailCard teamName={teamName} match={match}/>})
                }
            </div>
        </div>
    )
}