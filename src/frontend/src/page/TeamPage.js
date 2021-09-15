import {React, useEffect, useState} from 'react';
import { MatchDetailCard } from '../component/MatchDetailCard';
import { MatchSmallCard } from '../component/MatchSmallCard';

export const TeamPage = () => {

    
    useEffect(() => {
        
        const fetchMatches= async ()=>{
            const reponse= await fetch('http://localhost:8080/teams/Chennai Super Kings');
            const data=await reponse.json();
            console.log(data);
            setteam(data);
        }
        
        fetchMatches();
    }, [])
    
    const [team, setteam] = useState({});
    
    return (
        <div className="TeamPage">
            <h1>{team.teamName}</h1>
            <MatchDetailCard latestMatch={team.recentMatches[0]}/>
            {
                team.recentMatches.slice(1).map(match => <MatchSmallCard match={match}/>)
            }
        </div>
    )
}


