package com.app.filmtracker.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.filmtracker.models.Actor;
import com.app.filmtracker.reponses.ActorListResponse;
import com.app.filmtracker.services.interfaces.ActorService;
import com.app.filmtracker.services.repositories.ActorRepository;

@Service
public class ActorServiceImpl implements ActorService{

	@Autowired
	private ActorRepository actorRepo;
	
	@Override
	public ActorListResponse getAllActors() {
		List<Actor> actors = actorRepo.findAll();
		int actorTotal = actors.size();
		return new ActorListResponse(actors, actorTotal);
	}
	
	@Override
	public Optional<Actor> getActorById(int filmId) {
		return actorRepo.findById(filmId);
	}

	@Override
	public ActorListResponse getActorsByNameContaining(String name) {
		List<Actor> actors = actorRepo.findByNameContaining(name);
		int actorTotal = actors.size();
		return new ActorListResponse(actors, actorTotal);
	}

	@Override
	public List<Actor> getActorsForPage(List<Actor> films, String page) {
//		final int pageNumber = Integer.parseInt(page);
//		return PaginationUtils.getFilmsForPage(films, pageNumber);
		
		//refactor pagination utils to return results for page with any data type
		return null;
	}

}
