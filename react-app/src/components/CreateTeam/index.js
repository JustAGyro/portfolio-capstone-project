import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export function CreateTeam() {
  const pokemon = useSelector((state) => state.pokemon);
  const userId = useSelector((state) => state.session.user.id);
  const dispatch = useDispatch();

  const userPokemon = Object.values(pokemon).filter(
    (pkmn) => pkmn.user_id === userId
  );

  console.log(userPokemon);

  return <div>Hi :)</div>;
}

export default CreateTeam;
