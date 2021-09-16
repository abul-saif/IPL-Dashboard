import {React, useEffect, useState} from 'react';
import { MatchDetailCard } from '../component/MatchDetailCard';
import { MatchSmallCard } from '../component/MatchSmallCard';
// import axios from 'axios';
import { base_url } from '../api/base_url';
import { useParams } from 'react-router';


export const TeamPage = () => {

    const {teamName} = useParams();
    const [team, setteam] = useState({});
    
    useEffect(() => {
        
        const fetchMatches= async ()=>{
            const reponse= await fetch(`${base_url}/teams/${teamName}`);
            const data=await reponse.json();
            console.log(data);
            setteam(data);
        }
        
        fetchMatches();
    }, [teamName])

    
    {
        if(!team || !team.teamName){
            return <h1>Team Not Found</h1>
        }
    }

    return (
        <div className="TeamPage">
            <h1>{team.teamName}</h1>
            <MatchDetailCard teamName={team.teamName} latestMatch={team.recentMatches[0]}/>
            {
                team.recentMatches.slice(1).map(match => <MatchSmallCard teamName={team.teamName} match={match}/>)
            }
        </div>
    )
}


