package com.app.filmtracker.reponses;

import java.util.List;

import com.app.filmtracker.models.Film;

public class FilmListResponse {
	private List<Film> films;
	
	private int filmTotal;
	
	public FilmListResponse(List<Film> films, int filmTotal) {
		super();
		this.films = films;
		this.filmTotal = filmTotal;
	}

	public List<Film> getFilms() {
		return films;
	}

	public void setFilms(List<Film> films) {
		this.films = films;
	}

	public int getFilmTotal() {
		return filmTotal;
	}

	public void setFilmTotal(int filmTotal) {
		this.filmTotal = filmTotal;
	}
}
