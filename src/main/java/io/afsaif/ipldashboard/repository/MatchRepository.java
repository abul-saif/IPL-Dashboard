package io.afsaif.ipldashboard.repository;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
// import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import io.afsaif.ipldashboard.model.Match;

public interface MatchRepository extends CrudRepository<Match,Long>{
    public List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName1,String teamName2,Pageable pageable);

    default public List<Match> getLatesMatchesByTeam(String teamName,int count){
        return this.getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0,count));
    }
}
