import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './CreateTeam.css';
import { useState, useEffect } from 'react';

export function CreateTeam() {
  const pokemon = useSelector((state) => state.pokemon);
  const userId = useSelector((state) => state.session.user.id);
  const dispatch = useDispatch();

  //States for team form
  const [teamName, setTeamName] = useState('Click to enter name');
  const [teamSummary, setTeamSummary] = useState(
    'Click here to write your summary'
  );
  const [teamPokemon1, setTeamPokemon1] = useState({ name: 'Click to choose' });
  const [teamPokemon2, setTeamPokemon2] = useState({ name: 'Click to choose' });
  const [teamPokemon3, setTeamPokemon3] = useState({ name: 'Click to choose' });
  const [teamPokemon4, setTeamPokemon4] = useState({ name: 'Click to choose' });
  const [teamPokemon5, setTeamPokemon5] = useState({ name: 'Click to choose' });
  const [teamPokemon6, setTeamPokemon6] = useState({ name: 'Click to choose' });

  //States for inputs to open
  const [showPokemonInput, setShowPokemonInput] = useState(false);
  const [showSummaryInput, setShowSummaryInput] = useState(false);

  //States for Errors
  const [summaryError, setSummaryError] = useState(false);
  const [requiredError, setRequiredError] = useState(false);
  const [nameError, setNameError] = useState(false);

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
        <div className="create-team-form-container">
          <div className="team-side-div">
            <div className="create-team-card-preview">
              <h2 className="card-h2-team-create" onClick={openPokemonInput}>
                Team Name: {teamName}
              </h2>
              <div className="team-pokemon-divs-container">
                <div className="team-pokemon-div">
                  <p>First Pokemon</p>
                  <div className="team-pokemon" onClick={openPokemonInput}>
                    {teamPokemon1.name}
                  </div>
                </div>
                <div className="team-pokemon-div">
                  <p>Second Pokemon</p>
                  <div className="team-pokemon" onClick={openPokemonInput}>
                    {teamPokemon2.name}
                  </div>
                </div>
                <div className="team-pokemon-div">
                  <p>Third Pokemon</p>
                  <div className="team-pokemon" onClick={openPokemonInput}>
                    {teamPokemon3.name}
                  </div>
                </div>
                <div className="team-pokemon-div">
                  <p>Fourth Pokemon</p>
                  <div className="team-pokemon" onClick={openPokemonInput}>
                    {teamPokemon4.name}
                  </div>
                </div>
                <div className="team-pokemon-div">
                  <p>Fifth Pokemon</p>
                  <div className="team-pokemon" onClick={openPokemonInput}>
                    {teamPokemon5.name}
                  </div>
                </div>
                <div className="team-pokemon-div">
                  <p>Sixth Pokemon</p>
                  <div className="team-pokemon" onClick={openPokemonInput}>
                    {teamPokemon6.name}
                  </div>
                </div>
              </div>
            </div>
            {showPokemonInput && <div className="summary-input-div"> hi</div>}
          </div>
          <div className="summary-side-div">
            <div className="team-pokemon-summary">
              <h2 className="card-h2">Team Summary</h2>
              <div
                className="summary-display-preview"
                onClick={openSummaryInput}
              >
                {teamSummary}
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
