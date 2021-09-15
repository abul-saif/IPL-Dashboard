package io.afsaif.ipldashboard.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import io.afsaif.ipldashboard.model.Team;
import io.afsaif.ipldashboard.repository.MatchRepository;
import io.afsaif.ipldashboard.repository.TeamRepository;

@RestController
@CrossOrigin
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
}
