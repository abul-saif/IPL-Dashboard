package io.afsaif.ipldashboard.repository;

// import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import io.afsaif.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team,Long>{

    public Team findByTeamName(String teamName);

}
