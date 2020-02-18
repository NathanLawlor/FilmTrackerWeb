import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from "../Home";
import FilmsComponent from "../film/Films";
import AddFilmComponent from "../film/AddFilm";
import EditFilmComponent from "../film/EditFilm";
import ViewFilmComponent from "../film/ViewFilm";
import ActorsComponent from "../actor/Actors";
import ViewActorComponent from "../actor/ViewActor";

const AppRouter = () => {
    return(
		<div className="page-body">
            <Router>
                <Switch>
                    <Route exact path="/" exact component={HomeComponent} />
                
                    <Route exact path="/films" component={FilmsComponent} />
                    <Route path="/films/add" component={AddFilmComponent} />
                    <Route path="/films/edit" component={EditFilmComponent} />
                    <Route path="/films/view" component={ViewFilmComponent} />
                    
                    <Route exact path="/actors" component={ActorsComponent} />
                    <Route path="/actors/view" component={ViewActorComponent} />
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter;