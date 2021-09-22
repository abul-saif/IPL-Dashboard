package io.afsaif.ipldashboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.afsaif.ipldashboard.model.Team;

public interface TeamRepository extends JpaRepository<Team,Long>{

    public Team findByTeamName(String teamName);

}
