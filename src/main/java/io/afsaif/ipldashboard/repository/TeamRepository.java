package io.afsaif.ipldashboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import io.afsaif.ipldashboard.model.Team;

// @Repository
public interface TeamRepository extends JpaRepository<Team,Long>{

    public Team findByTeamName(String teamName);

}
