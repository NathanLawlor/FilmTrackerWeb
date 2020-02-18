package com.app.filmtracker.services.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.filmtracker.models.Actor;
import com.app.filmtracker.models.Film;
import com.app.filmtracker.services.interfaces.ActorService;
import com.app.filmtracker.services.interfaces.FilmActorService;
import com.app.filmtracker.services.interfaces.FilmService;

@Service
public class FilmActorServiceImpl implements FilmActorService {
	
	@Autowired
	private FilmService filmService;
	
	@Autowired
	private ActorService actorService;

	@Override
	public List<Film> getFilmsByActorId(int id) {
		Optional<Actor> actor = actorService.getActorById(id);
		if(actor.isPresent()) {
			//return filmActorRepo.findFilmsByActorId(actor.get().getId());
		}
		return new ArrayList<>();
	}

	@Override
	public List<Actor> getActorsByFilmId(int id) {
		Optional<Film> film = filmService.getFilmById(id);
		if(film.isPresent()) {
			//return filmActorRepo.findActorsByFilmId(film.get().getId());
		}
		return new ArrayList<>();
	}
	
}
