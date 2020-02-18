package com.app.filmtracker.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.filmtracker.models.Actor;
import com.app.filmtracker.models.Film;
import com.app.filmtracker.reponses.FilmListResponse;
import com.app.filmtracker.services.impl.FilmActorServiceImpl;
import com.app.filmtracker.services.impl.FilmServiceImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/films")
public class FilmController {
	
	@Autowired
	private FilmServiceImpl filmService;
	
	@Autowired
	private FilmActorServiceImpl filmActorService;
	
	@GetMapping
	public List<Film> getAllFilms() {
		return filmService.getAllFilms();
	}
	
	@GetMapping("/{id}")
	public Optional<Film> getFilmById(@PathVariable int id) {
		return filmService.getFilmById(id);
	}
	
	@GetMapping("/search")
	public FilmListResponse getFilmsByFilters(@RequestParam(defaultValue="") String search, @RequestParam(defaultValue="1") String page) {
		return filmService.getFilmsByFilters(search, page);
	}
	
	@GetMapping("/{id}/actors")
	public List<Actor> getActorsForFilm(@PathVariable int id) {
		return filmActorService.getActorsByFilmId(id);
	}
	
	@PostMapping
	public Film addFilm(@RequestBody Film film) {
		return filmService.addFilmEntry(film);
	}
	
	@PutMapping("/{id}")
	public Film editFilm(@RequestBody Film film) {
		return filmService.editFilmEntry(film);
	}
	
	@DeleteMapping("/{id}")
	public void deleteFilmById(@PathVariable int id) {
		filmService.removeFilmEntryById(id);
	}
	
}
