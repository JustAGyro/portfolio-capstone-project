import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './CreateTeam.css';

export function CreateTeam() {
  const pokemon = useSelector((state) => state.pokemon);
  const userId = useSelector((state) => state.session.user.id);
  const dispatch = useDispatch();

  const userPokemon = Object.values(pokemon).filter(
    (pkmn) => pkmn.user_id === userId
  );

  console.log(userPokemon);

  return (
    <>
      <div className="create-team-container">
        <div className="create-team-header">
          <h1>Create your team!</h1>
          <div className="instructions">
            <p>
              Use the Pokemon that you have created to assemble a team of six
              pokemon. You can add a maximum of six pokemon to your team. If you
              do not want to add all six at this time, you don't have to! All
              pokemon must come from your saved Pokemon. If you have not made
              any yet, please do so before you make a team! No one wants an
              empty team.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateTeam;
