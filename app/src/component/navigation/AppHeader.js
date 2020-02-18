import React from 'react';
import '../../css/AppHeader.css';
import AppLogo from '../../img/film_tracker_logo.png';

const AppHeader = () => {	
    return(
		<div id="app-header"className="app-header">
    		<div className="app-brand-block">
				<div>
					<h1 className="app-title">Film Tracker</h1>
				</div>
				<div className="app-logo-container"> 
					<img className="app-logo" src={AppLogo} alt="App Logo"/>
				</div>
			</div>
	
    		<div className="navigation-bar">
				<nav>
					<ul className="nav-list">
						<li className="nav-link"><a href="/">Home</a></li>
						<li className="nav-link"><a href="/films">Films</a></li>
						<li className="nav-link"><a href="/actors">Actors</a></li>
					</ul>
				</nav>
			</div>
		</div>
    )
}

export default AppHeader;