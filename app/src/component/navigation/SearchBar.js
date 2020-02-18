import React from 'react'
import { FaSearch } from 'react-icons/fa'
import "../../css/SearchBar.css";

const SearchBar = (props) => {
	return (
		<div className="search-container">
    	    <form action={props.submitAction}>
    	      	<input type="text" placeholder="Search.." name="search" className="search-input"/>
    	      	<button type="submit" className="search-button">
    	      		<FaSearch className="search-icon"/>
    	        </button>
    	    </form>
    	</div>
	)
}

export default SearchBar;