import React from 'react';
import './HomePage.css';
import { useSelector } from 'react-redux';

function HomePage() {
  const teams = useSelector((state) => Object.values(state.teams));
  const parties = useSelector((state) => Object.values(state.parties));
  const pokemon = useSelector((state) => Object.values(state.pokemon));
  console.log(pokemon);

  // Function to find a Pokémon object by its ID
  const findPokemonById = (id) => {
    return pokemon.find((pkmn) => pkmn.id === id);
  };

  // Create a mapping of team IDs to arrays of Pokémon
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
        <h1>Explore different teams</h1>
      </div>
      <div className="team-cards">
        {Object.values(teams).map((team, index) => (
          <div key={index} className="team-card">
            <div className="team-card-items">Team Name: {team.team_name}</div>
            <div className="team-card-items">
              Team Summary: {team.team_summary}
            </div>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
