import React, { Component } from "react";
import FilmDetails from "./FilmDetails";
import FilmService from "../../service/FilmApiService";
import ActorService from "../../service/ActorApiService";
import "../../css/AddFilm.css";
import "../../css/ActorDropdown.css";

class AddFilmComponent extends Component{
	
	constructor(props){
        super(props);
        this.state ={
            title: '',
            genre: '',
            rating: '3',
            filename: '',
            description: '',
            actorSearch: '',
            actorOptions: [],
            filmActors: [],
            message: null
        }
        this.saveFilm = this.saveFilm.bind(this);
        this.fetchActorOptionsBySearch = this.fetchActorOptionsBySearch.bind(this);
    }
	
	componentDidMount() {
        this.fetchActorOptionsBySearch();
    }
	
	onChange = (e) => this.setState({ 
		[e.target.name]: e.target.value 
	});
	
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
	     
        FilmService.addFilm(film).then(res => {
            this.setState({message : 'Film added successfully.'});
            this.props.history.push('/films');
        });
    }
	
	fetchActorOptionsBySearch = () => {
		ActorService.fetchActorOptionsBySearch(this.state.actorSearch).then(res => {
			var actorsData = [...res.data.actors];
			const filmActorsIds = this.state.filmActors.map((actor) => {
				return actor.id;
			});
			
			actorsData = actorsData.filter((actor) => {
			   return !filmActorsIds.includes(actor.id);
			})
			
			if(actorsData.length > 10) {
				actorsData = actorsData.slice(0, 10);
			}
			this.setState({actorOptions : actorsData});
		});
	}
	
	searchActors = (e) => {
		this.setState({actorSearch: e.target.value}, () => {
			this.fetchActorOptionsBySearch();
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
			
			this.fetchActorOptionsBySearch();
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
	        <div className="add-page">
	        	<div className="add-page-header">
	        		<h2>Add Film</h2>
	        		<button className="btn btn-save" onClick={this.saveFilm}>Save</button>
    			</div>
	            
    			<div className="page-body add-page-body"> 
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
	    );
	}

}

export default AddFilmComponent;