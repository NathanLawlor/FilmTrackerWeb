import React, { Component } from 'react';
import StarRatings from "../../data/StarRatings";
import "../../css/FilmDetailsForm.css";

class FilmDetailsComponent extends Component {	
	render() {
	    return(
    		<div className="details-block">
	            <div className="form-group">
		            <div> 
		            	<label className="form-label">Film Title:</label>
		            </div>
		            <div> 
	                	<input type="text" placeholder="Title" name="title" className="form-input" value={this.props.title} onChange={this.props.onChange}/>
		            </div>
	            </div>
	
	            <div className="form-group">
		            <div> 
		            	<label className="form-label">Genre:</label>
		            </div>
		            <div> 
	                	<input type="text" placeholder="Genre" name="genre" className="form-input" value={this.props.genre} onChange={this.props.onChange}/>
		            </div>
	            </div>
	
	            <div className="form-group">
		            <div> 
		            	<label className="form-label">Rating:</label>
		            </div>
		            <div> 
		            	<input type="range" min="1" max="5" value="3" name="rating" className="form-input slider" value={this.props.rating} onChange={this.props.onChange}/>
		            </div>
	            </div>
	            
	            <div className="description-block"> 
			        <div> 
			        	<label>Description:</label>
	            	</div>
		        	<div> 
			        	<textarea className="description-textarea" 
				        	placeholder="Please enter a description for this film"
				        	name="description"
				        	value={this.props.description}
				        	onChange={this.props.onChange}
				        	rows="5" cols="50">
				        </textarea>
			        </div>
		        </div>
	            
	            <div className="star-rating-image-container"> 
					<img className="star-rating-image" src={StarRatings[(this.props.rating)]} alt={`${this.props.rating}`}/>
				</div>
            </div>
	    )
	}
}

export default FilmDetailsComponent;