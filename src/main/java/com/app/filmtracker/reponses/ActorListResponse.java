package com.app.filmtracker.reponses;

import java.util.List;

import com.app.filmtracker.models.Actor;

public class ActorListResponse {

	private List<Actor> actors;
	
	private int actorTotal;

	public ActorListResponse(List<Actor> actors, int actorTotal) {
		super();
		this.actors = actors;
		this.actorTotal = actorTotal;
	}

	public List<Actor> getActors() {
		return actors;
	}

	public void setActors(List<Actor> actors) {
		this.actors = actors;
	}

	public int getActorTotal() {
		return actorTotal;
	}

	public void setActorTotal(int actorTotal) {
		this.actorTotal = actorTotal;
	}
	
}
