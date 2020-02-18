package com.app.filmtracker.services.interfaces;

import java.util.List;
import java.util.Optional;

import com.app.filmtracker.models.Actor;
import com.app.filmtracker.reponses.ActorListResponse;

public interface ActorService {
	ActorListResponse getAllActors();
	Optional<Actor> getActorById(int filmId);
	ActorListResponse getActorsByNameContaining(String name);
	
	List<Actor> getActorsForPage(List<Actor> films, String page);
}
