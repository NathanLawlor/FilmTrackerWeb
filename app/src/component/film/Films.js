import React, { Component } from 'react'
import PaginationBar from "../pagination/PaginationBar";
import SearchBar from "../navigation/SearchBar";
import FilmService from "../../service/FilmApiService";
import StarRatings from "../../data/StarRatings";
import "../../css/Films.css";

class FilmsComponent extends Component {
	
	constructor(props) {
        super(props)
        this.state = {
            films: [],
            filmTotal: '',
            pages: 1,
            currentPage: 1,
            message: null
        }
        this.reloadFilmList = this.reloadFilmList.bind(this);
        this.deleteFilm = this.deleteFilm.bind(this);
        this.editFilm = this.editFilm.bind(this);
        this.addFilm = this.addFilm.bind(this);
        this.changePage = this.changePage.bind(this);
    }
	
	componentDidMount() {
        this.reloadFilmList();
    }

    reloadFilmList() {
    	let params = new URLSearchParams(window.location.search);
    	var searchText = params.get('search');
    	
		if(searchText == null) {
			searchText = "";
		}
		this.fetchFilmsByFilters(searchText);
		
		let filterUrl = this.getFilterUrl(searchText);
		this.props.history.push(filterUrl);
    }
    
    getFilterUrl = (searchText) => {
    	let filterUrl = "/films?";
    	if(searchText !== null && searchText !== "") {
			filterUrl += ('search=' + searchText + '&');
		}
    	filterUrl += ('page=' + this.state.currentPage);
    	return filterUrl;
    }
    
    fetchFilmsByFilters = (searchText) => {
    	FilmService.fetchFilmsByFilters(this.state.currentPage, searchText).then((res) => {
            this.setState({films: res.data.films})
            this.setState({pages: Math.ceil(res.data.filmTotal / 10)})
            this.setState({filmTotal: res.data.filmTotal})
        });
    }
    
    deleteFilm(filmId) {
    	if (window.confirm('Are you sure you wish to delete this film?')) {
    		FilmService.deleteFilm(filmId).then(res => {
                this.setState({message : 'Film deleted successfully.'});
                this.setState({films: this.state.films.filter(film => film.id !== filmId)});
            })	
    	}
    }

    editFilm(filmId) {
        this.props.history.push('/films/edit?filmId=' + filmId);
    }
    
    viewFilm(filmId) {
        this.props.history.push('/films/view?filmId=' + filmId);
    }

    addFilm() {
        this.props.history.push('/films/add');
    }
    
    changePage(page) {
    	if(page > 0 && page <= this.state.pages) {
    		this.setState({currentPage: page}, () => {
        		this.reloadFilmList();
        		window.location.href = "#app-header";
        	});
    	}
    }
    
    render() {    	
        return (
            <div className="list-page">
            	<div className="list-page-header">
            		<h2>Films</h2>
            		
            		<div className="list-page-actions">
	            		<SearchBar submitAction="/films" />
		            	
		            	<div className="total-results-block">
		            		<p>Results: {this.state.filmTotal}</p>
		            	</div>
		            	
		            	<div className="btn-add-container">
		            		<button className="btn btn-add" onClick={() => this.addFilm()}> Add Film</button>
		            	</div>
	            	</div>
            	</div>

            	<div className="film-table-container">
	            	<table className="film-table">
	            		<thead>
	            			<tr className="film-table-header">
	            				<th className="film-table-header">Title</th>
	            				<th className="film-table-header">Genre</th>
	            				<th className="film-table-header">Rating</th>
	            				<th className="film-table-header">Actions</th>
	            			</tr>
	            		</thead>
	            		<tbody className="film-table-body">
            			{
            				this.state.films.map(film =>
            					<tr key={film.id}>
            						<td className="film-table-cell">{film.title}</td>
            						<td className="film-table-cell">{film.genre}</td>
            						<td className="film-table-cell rating-cell">
            							<img className="star-rating-image" src={StarRatings[(film.rating)]} alt={`${film.rating}`}/>
            						</td>
            						<td className="film-table-cell action-cell">
            							<button className="btn btn-view" onClick={() => this.viewFilm(film.id)}>View</button>
            							<button className="btn btn-edit" onClick={() => this.editFilm(film.id)}>Edit</button>
            							<button className="btn btn-delete" onClick={() => this.deleteFilm(film.id)}>Delete</button>
            						</td>
            					</tr>
            				)
            			}
	            		</tbody>
	            	</table>
            	</div>
            	
            	<PaginationBar 
            		pages={this.state.pages}
            		currentPage={this.state.currentPage}
            		changePage={this.changePage}
            	/>
                
            </div>
        )
    }
    
}

export default FilmsComponent;