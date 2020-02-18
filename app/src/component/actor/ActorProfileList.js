import React from 'react';
import ActorProfile from "./ActorProfile.js";

const defaultStyle = {
	fontSize: '25px',
    textAlign: 'center'
};

function ActorProfileListContent({containerClass, actors, viewActor}) {
	if(actors.length > 0) {
		return (
			<div className={containerClass}>
				{ 
					actors.map(actor => 
						<ActorProfile 
							key={actor.id}
							actor={actor}
						/>
					) 
				}
			</div>
		)
	} else {
		var message = "There are no actors to display";
		if(containerClass === "actor-container") {
			message = "There are no actors that match your search";
		} else if(containerClass === "film-actors-container") {
			message = "There are currently no actors linked with this film";
		}
		
		return (
			<div style={defaultStyle}>
				{message}
			</div>
		)
	}
}

const ActorProfileList = (props) => {
	return (
		<ActorProfileListContent 
			containerClass={props.containerClass}
			actors={props.actors}
			viewActor={props.viewActor}
		/>
	)
}

export default ActorProfileList;