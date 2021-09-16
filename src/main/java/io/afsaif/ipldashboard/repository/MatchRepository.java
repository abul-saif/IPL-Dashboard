package io.afsaif.ipldashboard.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
// import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import io.afsaif.ipldashboard.model.Match;

// @Repository
public interface MatchRepository extends JpaRepository<Match,Long>{
    public List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName1,String teamName2,Pageable pageable);
    
    @Query("select m from Match m where (m.team1=:teamName or m.team2=:teamName) and m.date between :startDate and :endDate order by m.date")
    public List<Match> getTeamMatchesForYear(
        @Param("teamName")String teamName,
        @Param("startDate") LocalDate startDate,
        @Param("endDate") LocalDate endDate
    );

    // public List<Match> getByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc(
    //     String teamName1,
    //     LocalDate date1,
    //     LocalDate date2,
    //     String teamName2,
    //     LocalDate date3,
    //     LocalDate date4
    // );

    default public List<Match> getLatesMatchesByTeam(String teamName,int count){
        return this.getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0,count));
    }

}
