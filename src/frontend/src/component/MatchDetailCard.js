import {React} from 'react';
import { Link } from 'react-router-dom';


export const MatchDetailCard = ({teamName, latestMatch}) => {

    if(!latestMatch) return null;
    const otherTeam=(teamName===latestMatch.team1)?latestMatch.team2:latestMatch.team1;
    const otherTeamRoute = `/teams/${otherTeam}`;
    return (
        <div className="MatchDetailCard">
            <h2>vs <Link to={otherTeamRoute}>{otherTeam}</Link></h2>
            <h3>{latestMatch.matchWinner} won by {latestMatch.resultMargin} {latestMatch.result}</h3>
            <h4>{latestMatch.date}</h4>
            <h4>{latestMatch.venue}</h4>
            <h5>{latestMatch.playerOfMatch}</h5>
        </div>
    )
}


