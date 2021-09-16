import {React} from 'react';
import { Link } from 'react-router-dom';


export const MatchDetailCard = ({teamName, match}) => {

    if(!match) return null;
    const otherTeam=(teamName===match.team1)?match.team2:match.team1;
    const otherTeamRoute = `/teams/${otherTeam}`;
    return (
        <div className="MatchDetailCard">
            <h2>vs <Link to={otherTeamRoute}>{otherTeam}</Link></h2>
            <h3>{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
            <h4>{match.date}</h4>
            <h4>{match.venue}</h4>
            <h5>{match.playerOfMatch}</h5>
        </div>
    )
}


