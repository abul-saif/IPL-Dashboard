import {React} from 'react';
import { Link } from 'react-router-dom';

import './MatchSmallCard.scss';

export const MatchSmallCard = ({teamName,match}) => {
    const otherTeam=(teamName===match.team1)?match.team2:match.team1;
    const otherTeamRoute = `/teams/${otherTeam}`;
    const isMatchWon= teamName===match.matchWinner;
    return (
        <div className={isMatchWon?"MatchSmallCard won-card":"MatchSmallCard lost-card"}>
                <h2> <span className='vs'> vs </span><Link to={otherTeamRoute}>{otherTeam}</Link></h2>
                <p className='match-result'>{match.matchWinner} won by {match.resultMargin} {match.result}</p>
        </div>

    )
}


