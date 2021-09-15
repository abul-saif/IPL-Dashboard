import {React} from 'react';

export const MatchSmallCard = ({match}) => {
    return (
        <div className="MatchSmallCard">
                <h3>{match.team1} vs {match.team2}</h3>
                <p>{match.matchWinner} won by {match.resultMargin} {match.result}</p>
        </div>

    )
}


