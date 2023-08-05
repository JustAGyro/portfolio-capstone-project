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

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  console.log(sessionUser);

  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
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
            <Route exact path="/teams/create">
              <CreatePokemon />
            </Route>
          </Switch>
        )}
      </div>
    </div>
  );
}

export default App;
