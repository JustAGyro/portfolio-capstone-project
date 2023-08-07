import React, { useEffect, useState } from 'react';
import './HomePage.css';
import { useSelector } from 'react-redux';
import { getAllComments } from '../../store/comments';
import { getAllLikes } from '../../store/likes';
import { getAllParties } from '../../store/parties';
import { getAllPokemon } from '../../store/pokemon';
import { getAllTeams } from '../../store/teams';
import { useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown';

function HomePage() {
  const teams = useSelector((state) => Object.values(state.teams));
  const parties = useSelector((state) => Object.values(state.parties));
  const pokemon = useSelector((state) => Object.values(state.pokemon));
  const dispatch = useDispatch();

  const [teamCardsClass, setTeamCardsClass] = useState('team-cards');
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [selectedTeamSummary, setSelectedTeamSummary] = useState('');
  const [selectedTeamName, setSelectedTeamName] = useState('');

  useEffect(() => {
    dispatch(getAllComments());
    dispatch(getAllLikes());
    dispatch(getAllParties());
    dispatch(getAllPokemon());
    dispatch(getAllTeams());
  }, [dispatch]);

  const findPokemonById = (id) => {
    return pokemon.find((pkmn) => pkmn.id === id);
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

  const openSummaryButton = (teamSummary, teamName) => {
    if (summaryOpen) {
      setSummaryOpen(false);
      setTeamCardsClass('team-cards');
    } else {
      setSummaryOpen(true);
      setTeamCardsClass('team-cards-summary-open');
      setSelectedTeamSummary(teamSummary);
      setSelectedTeamName(teamName);
    }
  };

  return (
    <div className="homepage-container">
      <div className="homepage-header">
        <h1>Explore different teams</h1>
      </div>
      <div className="cards-summary-container">
        <div className={teamCardsClass}>
          {Object.values(teams).map((team, index) => (
            <div key={index} className="team-card">
              <h2 className="card-h2">"{team.team_name}"</h2>
              {teamPokemonMap[team.id] && (
                <div className="team-card-pkmn-div">
                  {teamPokemonMap[team.id].map((pkmn, pkmnIndex) => {
                    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pkmn.poke_dex}.png`;
                    return (
                      <div
                        key={pkmnIndex}
                        className="team-card-pkmn-background"
                      >
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
              <div className="team-buttons">
                <button
                  className="gen-button"
                  onClick={() =>
                    openSummaryButton(team.team_summary, team.team_name)
                  }
                >
                  Open Team Summary
                </button>
                <button
                  className="gen-button"
                  onClick={() => alert('Coming Soon')}
                >
                  Comments
                </button>
              </div>
            </div>
          ))}
        </div>
        {summaryOpen && (
          <div className="team-summary-div">
            <h1 className="card-h2">Team Summary - {selectedTeamName}</h1>
            <div className="summary-display">{selectedTeamSummary}</div>
            <div className="summary-button">
              <button className="gen-button" onClick={openSummaryButton}>
                Close Summary
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
