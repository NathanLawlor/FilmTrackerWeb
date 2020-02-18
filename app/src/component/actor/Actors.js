import React, { Component } from 'react'
import ActorProfileList from "./ActorProfileList";
import SearchBar from "../navigation/SearchBar";
import ActorService from "../../service/ActorApiService";
import "../../css/Actors.css";

class ActorsComponent extends Component {
	
	constructor(props) {
        super(props);
        this.state = {
            actors: [],
            actorTotal: '',
            pages: 1,
            currentPage: 1,
            message: null
        }
        this.reloadActorList = this.reloadActorList.bind(this);
    }
	
	componentDidMount() {
        this.reloadActorList();
    }

    reloadActorList() {
    	let params = new URLSearchParams(window.location.search);
    	var searchText = params.get('search');
    	
		if(searchText == null) {
			searchText = "";
		}
		this.fetchActorsByFilters(searchText);
    }
    
    fetchActorsByFilters = (searchText) => {
    	ActorService.fetchActorOptionsBySearch(searchText).then((res) => {
    		this.setState({actors: res.data.actors});
    		this.setState({actorTotal: res.data.actorTotal});
    	})
    }
    
    render() {    	
        return (
            <div className="list-page">
            	<div className="list-page-header">
            		<h2>Actors</h2>
            		
            		<div className="list-page-actions">
		            	<SearchBar submitAction="/actors" />
		            	
		            	<div className="total-results-block">
		            		<p>Results: {this.state.actorTotal}</p>
		            	</div>
		        	</div>
            	</div>
            	
            	<ActorProfileList 
	        		containerClass={"actor-container"}
	        		actors={this.state.actors}
	        		viewActor={this.viewActor}
            	/>
            
            </div>
        )
    }
    
}

export default ActorsComponent;