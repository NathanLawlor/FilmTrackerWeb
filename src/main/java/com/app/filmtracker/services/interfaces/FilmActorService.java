package com.app.filmtracker.services.interfaces;

import java.util.List;

import com.app.filmtracker.models.Actor;
import com.app.filmtracker.models.Film;

public interface FilmActorService {
	List<Film> getFilmsByActorId(int id); 
	List<Actor> getActorsByFilmId(int id); 
}
