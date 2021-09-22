import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { base_url } from '../api/base_url';
import { MatchDetailCard } from '../component/MatchDetailCard';

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

    },[])

    {
        if(!matches)
            return <h1>Matches not found</h1>;
    }

    return(
        <div className="MatchPage">
            <h1>{teamName}</h1>
            {
                matches.map(match => {
                return <MatchDetailCard teamName={teamName} match={match}/>})
            }
        </div>
    )
}