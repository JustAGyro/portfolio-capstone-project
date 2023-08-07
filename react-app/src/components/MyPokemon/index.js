import React, { useEffect } from 'react';
import './MyPokemon.css';
import { useSelector } from 'react-redux';
import { getAllComments } from '../../store/comments';
import { getAllLikes } from '../../store/likes';
import { getAllParties } from '../../store/parties';
import { getAllPokemon } from '../../store/pokemon';
import { getAllTeams } from '../../store/teams';
import { useDispatch } from 'react-redux';
import OpenModalButton from '../OpenModalButton';
import { Link } from 'react-router-dom';

function MyPokemon() {
  const pokemon = useSelector((state) => state.pokemon);
  const userId = useSelector((state) => state.session.user.id);
  const dispatch = useDispatch();

  const userPokemon = Object.values(pokemon).filter(
    (pkmn) => pkmn.user_id === userId
  );

  useEffect(() => {
    dispatch(getAllComments());
    dispatch(getAllLikes());
    dispatch(getAllParties());
    dispatch(getAllPokemon());
    dispatch(getAllTeams());
  }, [dispatch]);

  return (
    <div className="homepage-container">
      <div className="homepage-header">
        <h1>My Pokemon</h1>
      </div>
      <div className="pokemon-cards">
        {userPokemon.map((pkmn) => {
          const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pkmn.poke_dex}.png`;
          return (
            <div key={pkmn.id} className="pokemon-card">
              <h2 className="card-h2">
                {pkmn.name.charAt(0).toUpperCase() + pkmn.name.slice(1)}, "
                {pkmn.nick_name}"
              </h2>
              <div className="pokemon-card-area">
                <div className="pokemon-card-info">
                  <p>
                    Typing: {pkmn.type_one} {pkmn.type_two}
                  </p>
                  <p>Tera Type: {pkmn.tera_type}</p>
                  <p>Ability: {pkmn.ability}</p>
                  <p>Nature: {pkmn.nature}</p>
                </div>
                <div className="pokemon-card-img">
                  <img className="pokemon-img" src={imgUrl} alt={pkmn.name} />
                </div>
              </div>
              <div className="team-card-buttons">
                <Link to={`/pokemon/${pkmn.id}/edit`}>
                  <button className="gen-button">Edit</button>
                </Link>
                <button className="gen-button">
                  <OpenModalButton className="gen-btn" buttonText={'Delete'} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyPokemon;
