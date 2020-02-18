package com.app.filmtracker.services.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.filmtracker.models.Film;

@Repository
public interface FilmRepository extends JpaRepository<Film, Integer>{
	Film findByTitle(String title);
	List<Film> findByTitleContaining(String title);
}
