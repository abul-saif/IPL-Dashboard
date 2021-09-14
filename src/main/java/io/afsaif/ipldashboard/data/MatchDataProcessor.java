package io.afsaif.ipldashboard.data;

import java.time.LocalDate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.batch.item.ItemProcessor;

import io.afsaif.ipldashboard.model.Match;
// import net.bytebuddy.asm.MemberSubstitution.Substitution.ForMethodInvocation.MethodResolver.Matching;

public class MatchDataProcessor implements ItemProcessor<MatchInput, Match> {

    private static final Logger log = LoggerFactory.getLogger(MatchDataProcessor.class);

    @Override
    public Match process(final MatchInput matchInput) throws Exception {

        Match match=new Match();
        match.setId(Long.parseLong(matchInput.getId()));
        match.setCity(matchInput.getCity());
        match.setDate(LocalDate.parse(matchInput.getDate()));
        match.setPlayerOfMatch(matchInput.getPlayer_of_match());
        match.setVenue(matchInput.getVenue());

        //Set Team 1 and Team 2 depending on order of innings.
        String firstInningsTeam,secondInningsTeam;
        if(matchInput.getToss_decision().equals("bat")){
            firstInningsTeam = matchInput.getToss_winner();
            secondInningsTeam = firstInningsTeam.equals(matchInput.getTeam1())?matchInput.getTeam2():matchInput.getTeam1();
        }
        else{
            secondInningsTeam = matchInput.getToss_winner();
            firstInningsTeam=secondInningsTeam.equals(matchInput.getTeam1())?matchInput.getTeam2():matchInput.getTeam1();
        }

        match.setTeam1(firstInningsTeam);
        match.setTeam2(secondInningsTeam);

        match.setTossWinner(matchInput.getToss_winner());
        match.setTossDecision(matchInput.getToss_decision());
        match.setMatchWinner(matchInput.getWinner());
        match.setResult(matchInput.getResult());
        match.setResultMargin(matchInput.getResult_margin());
        match.setUmpire1(matchInput.getUmpire1());
        match.setUmpire2(matchInput.getUmpire2());

        return match;
    }
}