import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './CreateTeam.css';
import { useState, useEffect } from 'react';
import { newTeam } from '../../store/teams';
import { newParty } from '../../store/parties';
import { useHistory } from 'react-router-dom';

export function CreateTeam() {
  const pokemon = useSelector((state) => state.pokemon);
  const userId = useSelector((state) => state.session.user.id);
  const dispatch = useDispatch();
  const history = useHistory();

  //States for team form
  const [teamName, setTeamName] = useState('');
  const [teamSummary, setTeamSummary] = useState('');
  const [teamPokemon1, setTeamPokemon1] = useState('First');
  const [teamPokemon2, setTeamPokemon2] = useState('Second');
  const [teamPokemon3, setTeamPokemon3] = useState('Third');
  const [teamPokemon4, setTeamPokemon4] = useState('Fourth');
  const [teamPokemon5, setTeamPokemon5] = useState('Fifth');
  const [teamPokemon6, setTeamPokemon6] = useState('Sixth');

  //States for inputs to open
  const [showPokemonInput, setShowPokemonInput] = useState(false);
  const [showSummaryInput, setShowSummaryInput] = useState(false);

  //States for Errors
  const [summaryError, setSummaryError] = useState(false);
  const [requiredError, setRequiredError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [duplicateError, setDuplicateError] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (summaryError || requiredError || nameError || duplicateError) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [summaryError, requiredError, nameError, duplicateError]);

  const checkForDuplicates = () => {
    const teamPokemons = [
      teamPokemon1,
      teamPokemon2,
      teamPokemon3,
      teamPokemon4,
      teamPokemon5,
      teamPokemon6,
    ];
    const uniquePokemons = new Set(teamPokemons);

    if (uniquePokemons.size < teamPokemons.length) {
      setDuplicateError(true);
    } else {
      setDuplicateError(false);
    }
  };

  useEffect(() => {
    if (teamName.length > 25) {
      setNameError(true);
    } else if (teamName.length <= 25) {
      setNameError(false);
    }
  }, [teamName]);

  useEffect(() => {
    if (teamSummary.length > 1000) {
      setSummaryError(true);
    } else if (teamSummary.length <= 1000) {
      setSummaryError(false);
    }
  }, [teamSummary]);

  useEffect(() => {
    checkForDuplicates();
  }, [
    teamPokemon1,
    teamPokemon2,
    teamPokemon3,
    teamPokemon4,
    teamPokemon5,
    teamPokemon6,
  ]);

  useEffect(() => {
    if (teamName.length < 1 || teamSummary.length < 1) {
      setRequiredError(true);
    } else if (teamName.length > 1 && teamSummary.length > 1) {
      setRequiredError(false);
    }
  });

  const openPokemonInput = () => {
    if (showPokemonInput) {
      setShowPokemonInput(false);
    } else {
      setShowPokemonInput(true);
    }
  };

  const openSummaryInput = () => {
    if (showSummaryInput) {
      setShowSummaryInput(false);
    } else {
      setShowSummaryInput(true);
    }
  };

  const userPokemon = Object.values(pokemon).filter(
    (pkmn) => pkmn.user_id === userId
  );

  console.log('teamPokemon 1: ', teamPokemon1.name);

  const submitTeamForm = async () => {
    const teamPayload = {
      teamName: teamName,
      teamSummary: teamSummary,
    };

    const createdTeam = await dispatch(newTeam(teamPayload));

    if (createdTeam) {
      console.log(createdTeam);
      const teamPokemons = [
        teamPokemon1,
        teamPokemon2,
        teamPokemon3,
        teamPokemon4,
        teamPokemon5,
        teamPokemon6,
      ];

      const teamPokemonPayloads = teamPokemons.map((teamPokemonName) => {
        const matchingPokemon = userPokemon.find(
          (pokemon) => pokemon.name === teamPokemonName
        );

        if (matchingPokemon) {
          return {
            pokemonId: matchingPokemon.id,
            teamId: createdTeam.id,
          };
        }

        return null;
      });

      // Filter out any null values (no matching Pokemon)
      const validTeamPokemonPayloads = teamPokemonPayloads.filter(
        (payload) => payload !== null
      );

      validTeamPokemonPayloads.forEach((payload) => {
        dispatch(newParty(payload));
      });

      history.push('/teams');
    }
    history.push('/teams');
  };

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
        <div className="create-team-form-container">
          <div className="team-side-div">
            <div className="create-team-card-preview">
              <h2 className="card-h2-team-create">Team Name: {teamName}</h2>
              <div className="team-pokemon-divs-container">
                <div className="team-pokemon-div">
                  <p>First Pokemon</p>
                  <div className="team-pokemon">
                    {teamPokemon1.charAt(0).toUpperCase() +
                      teamPokemon1.slice(1)}
                  </div>
                </div>
                <div className="team-pokemon-div">
                  <p>Second Pokemon</p>
                  <div className="team-pokemon">
                    {teamPokemon2.charAt(0).toUpperCase() +
                      teamPokemon2.slice(1)}
                  </div>
                </div>
                <div className="team-pokemon-div">
                  <p>Third Pokemon</p>
                  <div className="team-pokemon">
                    {teamPokemon3.charAt(0).toUpperCase() +
                      teamPokemon3.slice(1)}
                  </div>
                </div>
                <div className="team-pokemon-div">
                  <p>Fourth Pokemon</p>
                  <div className="team-pokemon">
                    {teamPokemon4.charAt(0).toUpperCase() +
                      teamPokemon4.slice(1)}
                  </div>
                </div>
                <div className="team-pokemon-div">
                  <p>Fifth Pokemon</p>
                  <div className="team-pokemon">
                    {teamPokemon5.charAt(0).toUpperCase() +
                      teamPokemon5.slice(1)}
                  </div>
                </div>
                <div className="team-pokemon-div">
                  <p>Sixth Pokemon</p>
                  <div className="team-pokemon">
                    {teamPokemon6.charAt(0).toUpperCase() +
                      teamPokemon6.slice(1)}
                  </div>
                </div>
                <div>
                  <button
                    disabled={disabled}
                    className="gen-button"
                    onClick={submitTeamForm}
                  >
                    Submit Your Team
                  </button>
                  <button className="gen-button" onClick={openPokemonInput}>
                    Edit Name & Pokemon
                  </button>
                </div>
                <div className="errors-div">
                  {requiredError && (
                    <p className="error-msg">
                      Please enter a team name and team summary before creating
                      your team!
                    </p>
                  )}
                  {duplicateError && (
                    <p className="error-msg">
                      You can't add the same Pokemon to a team more than once!
                    </p>
                  )}
                </div>
              </div>
            </div>
            {showPokemonInput && (
              <div className="summary-input-div">
                {' '}
                {userPokemon && (
                  <form>
                    <div className="teamname-input-div">
                      <p>Team Name</p>
                      <input
                        className="custom-pkmn-input"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                      ></input>
                    </div>
                    {nameError && (
                      <p className="error-msg">
                        Team name must be less 25 characters or less!
                      </p>
                    )}
                    <div className="select-pokemon-form">
                      <div className="select-pokemon-div">
                        <p>First Pokemon</p>
                        <select
                          value={teamPokemon1}
                          onChange={(e) => setTeamPokemon1(e.target.value)}
                        >
                          <option value="">Select</option>
                          {userPokemon.map((pokemon) => (
                            <option value={pokemon.name}>
                              {pokemon.name.charAt(0).toUpperCase() +
                                pokemon.name.slice(1)}{' '}
                              , "
                              {pokemon.nick_name.charAt(0).toUpperCase() +
                                pokemon.nick_name.slice(1)}
                              "
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="select-pokemon-div">
                        <p>Second Pokemon</p>
                        <select
                          value={teamPokemon2}
                          onChange={(e) => setTeamPokemon2(e.target.value)}
                        >
                          <option value="">Select</option>
                          {userPokemon.map((pokemon) => (
                            <option value={pokemon.name}>
                              {pokemon.name.charAt(0).toUpperCase() +
                                pokemon.name.slice(1)}{' '}
                              , "
                              {pokemon.nick_name.charAt(0).toUpperCase() +
                                pokemon.nick_name.slice(1)}
                              "
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="select-pokemon-div">
                        <p>Third Pokemon</p>
                        <select
                          value={teamPokemon3}
                          onChange={(e) => setTeamPokemon3(e.target.value)}
                        >
                          <option value="">Select</option>
                          {userPokemon.map((pokemon) => (
                            <option value={pokemon.name}>
                              {pokemon.name.charAt(0).toUpperCase() +
                                pokemon.name.slice(1)}{' '}
                              , "
                              {pokemon.nick_name.charAt(0).toUpperCase() +
                                pokemon.nick_name.slice(1)}
                              "
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="select-pokemon-div">
                        <p>Fourth Pokemon</p>
                        <select
                          value={teamPokemon4}
                          onChange={(e) => setTeamPokemon4(e.target.value)}
                        >
                          <option value="">Select</option>
                          {userPokemon.map((pokemon) => (
                            <option value={pokemon.name}>
                              {pokemon.name.charAt(0).toUpperCase() +
                                pokemon.name.slice(1)}{' '}
                              , "
                              {pokemon.nick_name.charAt(0).toUpperCase() +
                                pokemon.nick_name.slice(1)}
                              "
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="select-pokemon-div">
                        <p>Fifth Pokemon</p>
                        <select
                          value={teamPokemon5}
                          onChange={(e) => setTeamPokemon5(e.target.value)}
                        >
                          <option value="">Select</option>
                          {userPokemon.map((pokemon) => (
                            <option value={pokemon.name}>
                              {pokemon.name.charAt(0).toUpperCase() +
                                pokemon.name.slice(1)}{' '}
                              , "
                              {pokemon.nick_name.charAt(0).toUpperCase() +
                                pokemon.nick_name.slice(1)}
                              "
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="select-pokemon-div">
                        <p>Sixth Pokemon</p>
                        <select
                          value={teamPokemon6}
                          onChange={(e) => setTeamPokemon6(e.target.value)}
                        >
                          <option value="">Select</option>
                          {userPokemon.map((pokemon) => (
                            <option value={pokemon.name}>
                              {pokemon.name.charAt(0).toUpperCase() +
                                pokemon.name.slice(1)}{' '}
                              , "
                              {pokemon.nick_name.charAt(0).toUpperCase() +
                                pokemon.nick_name.slice(1)}
                              "
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
          <div className="summary-side-div">
            <div className="team-pokemon-summary">
              <h2 className="card-h2">Team Summary</h2>

              <div className="summary-display-preview">{teamSummary}</div>
              {summaryError && (
                <p className="error-msg">
                  Summary must be less than 1000 characters long.
                </p>
              )}
              <div>
                <button className="gen-button" onClick={openSummaryInput}>
                  Edit Summary
                </button>
              </div>
            </div>
            {showSummaryInput && (
              <div className="summary-input-div">
                <div>
                  <form className="summary-form">
                    <p>Type in your team summary</p>
                    <textarea
                      value={teamSummary}
                      onChange={(e) => setTeamSummary(e.target.value)}
                      placeholder="A good summary should include a description of why you chose your pokemon, how they work together, and the teams strengths and weaknesses."
                    ></textarea>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateTeam;
