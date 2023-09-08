import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { authenticate } from './store/session';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import MyTeams from './components/MyTeams';
import { useSelector } from 'react-redux';
import MyPokemon from './components/MyPokemon';
import CreatePokemon from './components/CreatePokemon';
import EditPokemon from './components/EditPokemon';
import CreateTeam from './components/CreateTeam';
import { getAllComments } from './store/comments';
import { getAllParties } from './store/parties';
import { getAllLikes } from './store/likes';
import { getAllPokemon } from './store/pokemon';
import { getAllTeams } from './store/teams';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
    dispatch(getAllComments());
    dispatch(getAllLikes());
    dispatch(getAllParties());
    dispatch(getAllPokemon());
    dispatch(getAllTeams());
  }, [dispatch]);

  return (
    <div>
      <div className="navbar">
        <Navigation isLoaded={isLoaded} />
      </div>
      <div className="content">
        {isLoaded && (
          <Switch>
            <Route exact path="/">
              {sessionUser ? <HomePage /> : <LandingPage />}
            </Route>
            <Route exact path="/teams">
              <MyTeams />
            </Route>
            <Route exact path="/pokemon">
              <MyPokemon />
            </Route>
            <Route exact path="/pokemon/create">
              <CreatePokemon />
            </Route>
            <Route exact path="/pokemon/:pokemonId/edit">
              <EditPokemon />
            </Route>
            <Route exact path="/teams/create">
              <CreateTeam />
            </Route>
          </Switch>
        )}
      </div>
    </div>
  );
}

export default App;
