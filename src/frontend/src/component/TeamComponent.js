import React from 'react'
import { Link } from 'react-router-dom';
import './TeamComponent.scss';

export const TeamComponent = ({team}) => {
    return (
        <div className='TeamComponent'>
            <Link to={`/teams/${team.teamName}`}> <h2>{team.teamName}</h2> </Link>
            <br />
            <p>Total matches palyed {team.totalMatches}</p>
        </div>
    )
}

