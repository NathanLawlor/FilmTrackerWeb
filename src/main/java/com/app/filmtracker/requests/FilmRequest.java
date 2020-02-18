package com.app.filmtracker.requests;

import java.util.List;

import com.app.filmtracker.models.Actor;
import com.app.filmtracker.models.Film;

public class FilmRequest {
	
	private Film film;
	
	private List<Actor> actorList;

	public Film getFilm() {
		return film;
	}

	public void setFilm(Film film) {
		this.film = film;
	}

	public List<Actor> getActorList() {
		return actorList;
	}

	public void setActorList(List<Actor> actorList) {
		this.actorList = actorList;
	}
	
}
