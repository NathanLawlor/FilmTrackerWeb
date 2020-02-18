import React, { Component } from 'react';
import ActorProfileList from "../actor/ActorProfileList";
import FilmService from "../../service/FilmApiService";
import StarRatings from "../../data/StarRatings";
import PlaceholderImage from "../../img/placeholder_image.jpg";
import "../../css/App.css";
import "../../css/ViewFilm.css";

class ViewFilmComponent extends Component {
	constructor(props){
		super(props);
        this.state = {
            title: '',
            genre: '',
            rating: '',
            filename: '',
            description: '',
            filmActors: [],
            message: null
        }
    }
	
	componentDidMount() {
		var params = new URLSearchParams(window.location.search);
		var filmId = params.get('filmId');
		
        this.loadFilm(filmId);
    }
	
	onChange = (e) => this.setState({ 
		[e.target.name]: e.target.value 
	});
	
	loadFilm = (filmId) => {
		FilmService.fetchFilmById(filmId).then((res) => {
			let film = res.data;
			this.setState({
				id: film.id,
                title: film.title,
                genre: film.genre,
                rating: film.rating,
                filename: film.filename,
                description: film.description,
                filmActors: film.actors
            });
		});
	}
	
	render() {
        return(
            <div className="view-page">
    			<div className="page-body view-page-body"> 
		            <div className="film-details-display"> 
		            	<div className="film-images-container">
		            		<div className="film-preview-container">
		            			<img className="film-image" src={PlaceholderImage} alt={"film"}/>
		            		</div>
	            			<div className="star-rating-image-container"> 
		    					<img className="star-rating-image" src={StarRatings[(this.state.rating)]} alt={`${this.state.rating}`}/>
		    				</div>
		            	</div>
			            <div className="film-details-container">
			            	<h2 className="film-title-view">{this.state.title}</h2>
			            	<p className="film-genre">Genre: {this.state.genre}</p>
			            	<p className="film-desc">{this.state.description}</p>
			            </div>
			        </div>
			        
			        
			        <div className="actor-section">
				        <div>
			        		<h3 className="actor-section-header">Actors:</h3>
			        	</div>
			        	
			        	<ActorProfileList 
			        		containerClass={"film-actors-container"}
			        		actors={this.state.filmActors}
			        		viewActor={this.viewActor}
			        	/>
				    </div> 
				    
			    </div>
			    
            </div>
        )
	}
	
}

export default ViewFilmComponent;