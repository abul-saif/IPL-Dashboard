import React, { useEffect, useState } from 'react'
import { base_url } from '../api/base_url';
import { TeamComponent } from '../component/TeamComponent';
import './HomePage.scss';

export const  HomePage = () => {

    const [teams, setteams] = useState([]);

    useEffect(() => {

        const fetchTeams = async ()=>{
            const response=await fetch(`${base_url}/teams`);
            const data=await response.json();
            setteams(data);
        }

        fetchTeams();
        
    }, [])

    if(!teams){
        return null;
    }

    return (
        <div className='HomePage'>
            <div className='heading'>
                <h1>Saifu Ka IPL Dashboard</h1>
                <hr />
            </div>
                {
                    teams.map(team => <TeamComponent team={team}></TeamComponent>)
                }
        </div>
    )
}
