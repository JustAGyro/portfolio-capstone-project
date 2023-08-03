import React, { useEffect } from 'react';
import './MyTeams.css';
import { useSelector } from 'react-redux';
import { getAllComments } from '../../store/comments';
import { getAllLikes } from '../../store/likes';
import { getAllParties } from '../../store/parties';
import { getAllPokemon } from '../../store/pokemon';
import { getAllTeams } from '../../store/teams';
import { useDispatch } from 'react-redux';
import OpenModalButton from '../OpenModalButton';
import EditTeamModal from '../EditTeamModal';

function MyTeams() {
  const teams = useSelector((state) => state.teams);
  const parties = useSelector((state) => Object.values(state.parties));
  const pokemon = useSelector((state) => state.pokemon);
  const userId = useSelector((state) => state.session.user.id);

  const dispatch = useDispatch();

  const userTeams = Object.values(teams).filter(
    (team) => team.user_id === userId
  );

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

  const findPokemonById = (id) => {
    return userPokemon.find((pkmn) => pkmn.id === id);
  };

  const teamPokemonMap = {};

  parties.forEach((party) => {
    const teamId = party.team_id;
    const pokemonId = party.pokemon_id;

    if (!teamPokemonMap[teamId]) {
      teamPokemonMap[teamId] = [];
    }

    const pkmn = findPokemonById(pokemonId);

    if (pkmn) {
      teamPokemonMap[teamId].push(pkmn);
    }
  });

  console.log(teamPokemonMap);

  return (
    <div className="homepage-container">
      <div className="homepage-header">
        <h1>My Teams</h1>
      </div>
      <div className="team-cards">
        {Object.values(userTeams).map((team, index) => (
          <div key={index} className="team-card">
            <div className="team-card-items">Team Name: {team.team_name}</div>
            <div className="team-card-items">
              Team Summary: {team.team_summary.split('\n\n')}
            </div>
            {teamPokemonMap[team.id] && (
              <div className="team-card-pkmn-div">
                {teamPokemonMap[team.id].map((pkmn, pkmnIndex) => {
                  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pkmn.poke_dex}.png`;
                  return (
                    <div key={pkmnIndex} className="team-card-pkmn-background">
                      <img
                        className="team-card-pkmn"
                        src={imgUrl}
                        alt={pkmn.name}
                      />
                      <div className="team-card-pkmn-overlay"></div>
                    </div>
                  );
                })}
              </div>
            )}
            <div className="team-card-buttons">
              <button className="gen-button">
                <OpenModalButton
                  className="gen-btn"
                  buttonText={'Edit'}
                  modalComponent={
                    <EditTeamModal
                      id={team.id}
                      teamName={team.team_name}
                      teamSummary={team.team_summary}
                    />
                  }
                />
              </button>
              <button className="gen-button">
                <OpenModalButton className="gen-btn" buttonText={'Delete'} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyTeams;
