import {React} from 'react';
import { Link } from 'react-router-dom';

import './MatchDetailCard.scss';

export const MatchDetailCard = ({teamName, match}) => {

    if(!match) return null;
    const otherTeam=(teamName===match.team1)?match.team2:match.team1;
    const otherTeamRoute = `/teams/${otherTeam}`;
    const isMatchWon= teamName===match.matchWinner;
    return (
        <div className={isMatchWon?"MatchDetailCard won-card":"MatchDetailCard lost-card"}>
            <div className='leftSide'>
                <h1> <span className='vs'> vs </span><Link to={otherTeamRoute}>{otherTeam}</Link></h1>
                <h3 className='match-date'>{match.date}</h3>
                <h3 className='match-venue'>{match.venue}</h3>
                <h3 className='match-result'>{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
            </div>

            <div className='rightSide'>
                <h3>Frist Innings</h3>
                <p>{match.team1}</p>
                <h3>Second Innings</h3>
                <p>{match.team2}</p>
                <h3>Player Of the Match</h3>
                <p>{match.playerOfMatch}</p>
                <h3>Umpires</h3>
                <p>{match.umpire1} , {match.umpire2}</p>
            </div>
        </div>
    )
}


