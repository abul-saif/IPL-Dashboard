import {React} from 'react';

export const MatchDetailCard = ({latestMatch}) => {

    {
        if(!latestMatch) return null;
    }

    return (
        <div className="MatchDetailCard">
            <h3>{latestMatch.matchWinner}</h3>
            <h4> won by {latestMatch.resultMargin} {latestMatch.result}</h4>
        </div>
    )
}


