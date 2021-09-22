import {React, useEffect, useState} from 'react';
import { MatchDetailCard } from '../component/MatchDetailCard';
import { MatchSmallCard } from '../component/MatchSmallCard';
import { base_url } from '../api/base_url';
import { useParams } from 'react-router';
import { PieChart } from 'react-minimal-pie-chart';

import './TeamPage.scss';
import { Link } from 'react-router-dom';

export const TeamPage = () => {

    const {teamName} = useParams();
    const [team, setteam] = useState({});
    const startYear=process.env.REACT_APP_DATA_END_YEAR;
    
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
            <div className='team-name-section'>
                <h1 className='team-name'>{team.teamName}</h1>
                <h3>Latest matches</h3>
            </div>

            <div className='win-loss-section'>
                <PieChart
                    data={[
                        { title: 'Losses', value: team.totalMatches-team.totalWins, color: '#a34d5d' },
                        { title: 'Wins', value: team.totalWins, color: '#4da375' }
                    ]}
                />
            </div>

            <div className='match-details-section'>
                <MatchDetailCard teamName={team.teamName} match={team.recentMatches[0]}/>
            </div>

            {
                team.recentMatches.slice(1).map(match =><MatchSmallCard teamName={team.teamName} match={match}/> )
            }


            <div className='more-link'>
                <Link to={`/teams/${team.teamName}/matches/${startYear}`} ><p>More > </p> </Link>
            </div>
        </div>
    )
}


