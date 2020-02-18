import React from 'react';
import { withRouter } from "react-router";
import PlaceholderImage from "../../img/placeholder_image.jpg";
import "../../css/ActorProfile.css";

function viewActor(actorId, history) {
    history.push('/actors/view?actorId=' + actorId);
}

const ActorProfile = (props) => {
	return (
		<div className="actor-info" onClick={() => viewActor(props.actor.id, props.history)}>
			<div className="actor-image-container">
				<img className="actor-image" src={props.actor.filename || PlaceholderImage} alt={"actor"}/>
			</div>
			<div className="actor-name">{props.actor.name}</div>
		</div>
	)
}

export default withRouter(ActorProfile);