import React, { Component } from 'react';
import ActorService from "../../service/ActorApiService";
import PlaceholderImage from "../../img/placeholder_image.jpg";
import "../../css/App.css";
import "../../css/ViewActor.css";

class ViewActorComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			filename: '',
			actorFilms: []
		}
		this.viewFilm = this.viewFilm.bind(this);
	}
	
	componentDidMount() {
		var params = new URLSearchParams(window.location.search);
		var actorId = params.get('actorId');
		
        this.loadActor(actorId);
    }
	
	onChange = (e) => this.setState({ 
		[e.target.name]: e.target.value 
	});
	
	loadActor = (actorId) => {
		ActorService.fetchActorById(actorId).then((res) => {
			let actor = res.data;
			this.setState({
				id: actor.id,
                name: actor.name,
                filename: actor.filename,
                actorFilms: actor.films
            });
		});
	}
	
	viewFilm(filmId) {
        this.props.history.push('/films/view?filmId=' + filmId);
    }
	
	render() {
        return(
            <div className="view-page">
    			<div className="page-body view-page-body"> 
		            <div className="actor-block"> 
			            <div className="actor-profile-container">
							<img className="actor-image-view" src={this.state.filename || PlaceholderImage} alt={"actor"}/>
							<div className="actor-name-badge">
								<h2 className="actor-name-view">{this.state.name}</h2>
							</div>
						</div>
			        </div>
			        
			        <div className="film-section">
				        <div>
			        		<h3 className="film-section-header">Films:</h3>
			        	</div>
				        <div className="actor-films-container">
					    {
				    		this.state.actorFilms.map(film =>
		    					<div key={film.id} className="film-block" onClick={() => this.viewFilm(film.id)}>
		    						<div className="film-image-container">
										<img className="film-image" src={PlaceholderImage} alt={"film"}/>
		    						</div>
									<div className="film-title">{film.title}</div>
		    					</div>
		    				)
				    	}
					    </div>
				    </div> 
				    
			    </div>
			    
            </div>
        )
	}
	
}

export default ViewActorComponent;