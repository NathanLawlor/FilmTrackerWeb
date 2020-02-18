package com.app.filmtracker.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.filmtracker.models.Actor;
import com.app.filmtracker.reponses.ActorListResponse;
import com.app.filmtracker.services.interfaces.ActorService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/actors")
public class ActorController {
	
	@Autowired
	private ActorService actorService;
	
	@GetMapping
	public ActorListResponse getAllActors() {
		return actorService.getAllActors();
	}
	
	@GetMapping("/search")
	public ActorListResponse getActorsBySearch(@RequestParam String search) {
		return actorService.getActorsByNameContaining(search);
	}
	
	@GetMapping("/{id}")
	public Optional<Actor> getActorById(@PathVariable int id) {
		return actorService.getActorById(id);
	}
	
}
