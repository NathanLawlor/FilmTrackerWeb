package com.app.filmtracker.services.interfaces;

import java.util.List;
import java.util.Optional;

import com.app.filmtracker.models.Film;
import com.app.filmtracker.reponses.FilmListResponse;

public interface FilmService {
	List<Film> getAllFilms();
	Optional<Film> getFilmById(int filmId);
	
	Film addFilmEntry(Film film);
	Film editFilmEntry(Film film);
	void removeFilmEntryById(int filmId);
	
	FilmListResponse getFilmsByFilters(String title, String page);
	List<Film> getFilmsForPage(List<Film> films, String page);
	List<Film> getFilmsByTitleSearch(String title);
}
