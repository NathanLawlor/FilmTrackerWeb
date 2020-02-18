package com.app.filmtracker.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.filmtracker.models.Film;
import com.app.filmtracker.reponses.FilmListResponse;
import com.app.filmtracker.services.interfaces.FilmService;
import com.app.filmtracker.services.repositories.FilmRepository;
import com.app.filmtracker.utils.PaginationUtils;

@Service
public class FilmServiceImpl implements FilmService {
	
	@Autowired
	private FilmRepository filmRepo;
	
	@Override
	public List<Film> getAllFilms() {
		return filmRepo.findAll();
	}
	
	@Override
	public Optional<Film> getFilmById(int filmId) {
		return filmRepo.findById(filmId);
	}
	
	@Override
	public Film addFilmEntry(Film film) {
		return filmRepo.save(film);
	}

	@Override
	public Film editFilmEntry(Film film) {
		return filmRepo.save(film);
	}

	@Override
	public void removeFilmEntryById(int filmId) {
		filmRepo.deleteById(filmId);
	}
	
	@Override
	public FilmListResponse getFilmsByFilters(String title, String page) {		
		List<Film> filteredFilms = getFilmsByTitleSearch(title);
		final int filmTotal = filteredFilms.size();
		
		List<Film> filmsForPage = getFilmsForPage(filteredFilms, page);
		
		return new FilmListResponse(filmsForPage, filmTotal);
	}
	
	@Override
	public List<Film> getFilmsByTitleSearch(String title) {
		return filmRepo.findByTitleContaining(title);
	}
	
	@Override
	public List<Film> getFilmsForPage(List<Film> films, String page) {
		final int pageNumber = Integer.parseInt(page);
		return PaginationUtils.getFilmsForPage(films, pageNumber);
	}
	
}
