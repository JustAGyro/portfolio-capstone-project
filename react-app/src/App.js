import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { authenticate } from './store/session';
import Navigation from './components/Navigation';
import { getAllComments } from './store/comments';
import { getAllLikes } from './store/likes';
import { getAllParties } from './store/parties';
import { getAllPokemon } from './store/pokemon';
import { getAllTeams } from './store/teams';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import { useSelector } from 'react-redux';

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
          </Switch>
        )}
      </div>
    </div>
  );
}

export default App;
