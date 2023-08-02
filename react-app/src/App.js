import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
import LoginFormPage from './components/LoginFormPage';
import { authenticate } from './store/session';
import Navigation from './components/Navigation';
import { getAllComments } from './store/comments';
import { getAllLikes } from './store/likes';
import { getAllParties } from './store/parties';
import { getAllPokemon } from './store/pokemon';
import { getAllTeams } from './store/teams';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(getAllComments());
    dispatch(getAllLikes());
    dispatch(getAllParties());
    dispatch(getAllPokemon());
    dispatch(getAllTeams());
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
            <Route path="/login">
              <LoginFormPage />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
          </Switch>
        )}
      </div>
    </div>
  );
}

export default App;
