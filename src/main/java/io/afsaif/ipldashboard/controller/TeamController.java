package io.afsaif.ipldashboard.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.afsaif.ipldashboard.model.Match;
import io.afsaif.ipldashboard.model.Team;
import io.afsaif.ipldashboard.repository.MatchRepository;
import io.afsaif.ipldashboard.repository.TeamRepository;

@CrossOrigin
@RestController
public class TeamController {

    private TeamRepository teamRepository;
    private MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository,MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository=matchRepository;
    }



    @GetMapping("/teams/{teamName}")
    public Team getTeamByName(@PathVariable String teamName){
        Team team = this.teamRepository.findByTeamName(teamName);
        team.setRecentMatches(this.matchRepository.getLatesMatchesByTeam(teamName, 4));

        return team;

    }

    @GetMapping("/teams/{teamName}/matches")
    public List<Match> getMatchesForTeam(@PathVariable String teamName,@RequestParam int year){
        LocalDate startDate=LocalDate.of(year, 1, 1);
        LocalDate endDate=LocalDate.of(year+1, 1, 1);
        
        return this.matchRepository.getTeamMatchesForYear(teamName,startDate,endDate);
    }
}
