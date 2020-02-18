package com.app.filmtracker.services.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.filmtracker.models.Actor;

@Repository
public interface ActorRepository extends JpaRepository<Actor, Integer>  {
	Actor findByName(String name);
	List<Actor> findByNameContaining(String name);
}
