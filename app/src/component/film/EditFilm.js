import React, { Component } from 'react';
import FilmDetails from "./FilmDetails";
import FilmService from "../../service/FilmApiService";
import ActorService from "../../service/ActorApiService";
import "../../css/EditFilm.css";
import "../../css/ActorDropdown.css";

class EditFilmComponent extends Component {
	
	constructor(props){
		super(props);
        this.state = {
            title: '',
            genre: '',
            rating: '',
            filename: '',
            description: '',
            actorSearch: '',
            actorOptions: [],
            filmActors: [],
            message: null
        }
        this.saveFilm = this.saveFilm.bind(this);
        this.loadFilm = this.loadFilm.bind(this);
        this.fetchActorOptionsBySearch = this.fetchActorOptionsBySearch.bind(this);
        this.addActor = this.addActor.bind(this);
    }
	
	componentDidMount() {
		var params = new URLSearchParams(window.location.search);
		var filmId = params.get('filmId');
		
        this.loadFilm(filmId);
    }
	
	onChange = (e) => this.setState({ 
		[e.target.name]: e.target.value 
	});
	
	loadFilm(filmId) {
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
            })
            this.fetchActorOptionsBySearch();
        });
    }
	
	saveFilm = (e) => {
	     e.preventDefault();
	     const film = {
      		 id: this.state.id, 
      		 title: this.state.title, 
      		 genre: this.state.genre, 
      		 rating: this.state.rating, 
      		 filename: this.state.filename, 
      		 description: this.state.description,
      		 actors: this.state.filmActors
		 };
	     
	     FilmService.editFilm(film).then(res => {
            this.setState({message : 'Film added successfully.'});
            this.props.history.push('/films');
        });
	}
	
	searchActors = (e) => {
		this.setState({actorSearch: e.target.value}, () => {
			this.fetchActorOptionsBySearch();
		});
	}
	
	fetchActorOptionsBySearch = () => {
		ActorService.fetchActorOptionsBySearch(this.state.actorSearch).then(res => {
			var actorsData = [...res.data.actors];
			
			var filmActorsIds = this.state.filmActors.map(function(filmActor){
				return filmActor.id;
			})
			
			actorsData = actorsData.filter(actor => {
				return !filmActorsIds.includes(actor.id);
			})
			
			if(actorsData.length > 10) {
				actorsData = actorsData.slice(0, 10);
			}
			this.setState({actorOptions : actorsData});
		});
	}
	
 	addActor = (id) => {
		var actorOptions = this.state.actorOptions;
		actorOptions = actorOptions.filter(function(actor){
		   return actor.id !== id;
		})
		this.setState({actorOptions : actorOptions});
		
		this.addActorToFilmActors(id);
	}
 	
 	addActorToFilmActors = (id) => {
		ActorService.fetchActorById(id).then(res => {
			var actor= {...res.data};
			const filmActors = this.state.filmActors.concat(actor);
			this.setState({filmActors : filmActors});
		});
	}
	
	removeActor = (id) => {
		var actorList = this.state.filmActors;
		actorList = actorList.filter(function(actor){
		   return actor.id !== id;
		})
		this.setState({filmActors : actorList});
		
		this.fetchActorOptionsBySearch();
	}
 	
 	render() {
        return(
            <div className="edit-page">
            	<div className="edit-page-header">
            		<h2>Edit Film</h2>
            		<button className="btn btn-save" onClick={this.saveFilm}>Save</button>
    			</div>
               
    			<div className="page-body edit-page-body"> 
    				<FilmDetails onChange={this.onChange}
    					title={this.state.title}
    					genre={this.state.genre}
    					rating={this.state.rating}
    					description={this.state.description}
    				/>
		            
		            <div className="details-block hide"> 
				        <div className="image-block">
				            <div> 
				            	<label>File Name:</label>
				            </div>
				            <div> 
				            	<input type="text" placeholder="Filename" name="filename" className="form-input" value={this.state.filename} onChange={this.onChange}/>
				            </div>
			            </div>
			        </div>
			        
			        <div className="details-block actors-block">
			        	<div className="search-actor-block">
		        			<h3>Add Actor:</h3>
			        		<div className="dropdown">
			        			<input type="text" placeholder="Search.." name="actorSearch" className="actor-search" value={this.state.actorSearch} onChange={this.searchActors}/>
			        			<div className="dropdown-content">
			        			{
		            				this.state.actorOptions.map(actor =>
			            				<div className="dropdown-option" key={actor.id} onClick={()=>this.addActor(actor.id)}>
			            					{actor.name}
				        		 		</div>
		            				)
		            			}
			        		 	</div>
			        		 </div>
			        	</div>
		        		<div className="linked-actors-block">
		        			<h3>Actors</h3>
		        			<div className="film-actors-list">
		        			{
	            				this.state.filmActors.map(actor =>
		            				<div className="film-actor" key={actor.id} onClick={()=>this.removeActor(actor.id)}>
		            					{actor.name}
			        		 		</div>
	            				)
	            			}
		        			</div>
			        	</div>
			        </div>

		        </div>
            </div>
        )
    }
	
}

export default EditFilmComponent;