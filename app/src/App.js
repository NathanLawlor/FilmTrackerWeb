import React from 'react';
import './css/App.css';
import AppRouter from "./component/navigation/Router";
import AppHeader from "./component/navigation/AppHeader";

function App() {
	return (
		<div className="page-container">
			<AppHeader/>
			<AppRouter/>
		</div>
    );
}

export default App;