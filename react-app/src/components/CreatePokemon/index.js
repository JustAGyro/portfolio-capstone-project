import React, { useEffect, useState, useRef } from 'react';
import './CreatePokemon.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function CreatePokemon() {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [pokemonData, setPokemonData] = useState({});
  const [heldItems, setHeldItems] = useState([]);
  const [pkmnId, setPkmnId] = useState('');
  const searchRef = useRef(null);

  //useStates for pokemon databasefields
  const [pokeDex, setPokeDex] = useState(0);
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');
  const [gender, setGender] = useState('-');
  const [shiny, setShiny] = useState('No');
  const [typeOne, setTypeOne] = useState('');
  const [typeTwo, setTypeTwo] = useState('');
  const [teraType, setTeraType] = useState('');
  const [item, setItem] = useState('-');
  const [ability, setAbility] = useState('-');
  const [nature, setNature] = useState('');
  const [moveOne, setMoveOne] = useState('');
  const [moveTwo, setMoveTwo] = useState('');
  const [moveThree, setMoveThree] = useState('');
  const [moveFour, setMoveFour] = useState('');
  const [baseHp, setBaseHp] = useState(0);
  const [baseAtk, setBaseAtk] = useState(0);
  const [baseDef, setBaseDef] = useState(0);
  const [baseSpAtk, setBaseSpAtk] = useState(0);
  const [baseSpDef, setBaseSpDef] = useState(0);
  const [baseSpeed, setBaseSpeed] = useState(0);
  const [evHp, setEvHp] = useState(0);
  const [evAtk, setEvAtk] = useState(0);
  const [evDef, setEvDef] = useState(0);
  const [evSpAtk, setEvSpAtk] = useState(0);
  const [evSpDef, setEvSpDef] = useState(0);
  const [evSpeed, setEvSpeed] = useState(0);
  const [ivHp, setIvHp] = useState(0);
  const [ivAtk, setIvAtk] = useState(0);
  const [ivDef, setIvDef] = useState(0);
  const [ivSpAtk, setIvSpAtk] = useState(0);
  const [ivSpDef, setIvSpDef] = useState(0);
  const [ivSpeed, setIvSpeed] = useState(0);
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeDex}.png`;
  const typeOneImage = `/images/${typeOne}.png`;
  const typeTwoImage = `/images/${typeTwo}.png`;
  const itemImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.toLowerCase()}.png`;

  //useStates for select fields (movesets, etc.)
  const [moveSelections, setMoveSelections] = useState([]);
  const [abilitySelections, setAbilitySelections] = useState([]);
  const [natureSelections, setNatureSelections] = useState([]);

  //useStates for visibility of input fields
  const [nickNameVisible, setNickNameVisible] = useState(false);
  const [abilityItemVisible, setAbilityItemVisible] = useState(false);
  const [movesVisible, setMovesVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  //Grab pokemon for search
  const fetchPokemon = () => {
    fetch(`/api/pokemon/search`)
      .then((response) => response.json())
      .then((data) => setResults(data.results));
  };

  //Grab items
  const fetchItems = () => {
    fetch(`/api/pokemon/items`)
      .then((response) => response.json())
      .then((data) => setHeldItems(data.items));
  };

  useEffect(() => {
    fetchPokemon();
    fetchItems();
  }, []);

  //Grab pokemon to customize and save to db
  const fetchSelectedPokemon = (pkmnId) => {
    fetch(`/api/pokemon/${pkmnId}/search`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data));
  };

  //Grab Pokemon & load all the states to properly show data
  useEffect(() => {
    fetchSelectedPokemon(pkmnId);
  }, [selectedItem]);

  useEffect(() => {
    if (pokemonData && pokemonData !== 'Error') {
      if (pokemonData.id) {
        setPokeDex(pokemonData.id);
      }
      if (pokemonData.types) {
        setTypeOne(pokemonData.types[0].type.name);
      }
      if (pokemonData.types) {
        setTypeTwo(pokemonData.types[1]?.type.name);
      }

      if (pokemonData.abilities) {
        setAbilitySelections(pokemonData.abilities);
      }

      if (pokemonData.moves) {
        setMoveSelections(pokemonData.moves);
      }

      // console.log(pokemonData.id);
      // console.log(pokemonData.name);
      // console.log(pokemonData.types[0].type.name);
      // console.log(pokemonData.types[1]?.type.name);
      // console.log(pokemonData.abilities);
      // console.log(pokemonData.moves);
    }
  }, [pokemonData]);

  //To get the dropdown to only show when in use
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setShowResults(true);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        // Clicked outside of the container, hide the results
        setShowResults(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  //For results
  const resultClick = (item) => {
    setSelectedItem(item);
    setPkmnId(item.name);
  };

  const filteredResults = results.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //Open input boxes
  const openNickName = (e) => {
    e.preventDefault();
    setNickNameVisible(true);
    if (nickNameVisible) {
      setNickNameVisible(false);
    }
  };

  const openAbilityItem = (e) => {
    e.preventDefault();
    setAbilityItemVisible(true);
    if (abilityItemVisible) {
      setAbilityItemVisible(false);
    }
  };

  const openMoves = (e) => {
    e.preventDefault();
    setMovesVisible(true);
    if (movesVisible) {
      setMovesVisible(false);
    }
  };

  const openStats = (e) => {
    e.preventDefault();
    setStatsVisible(true);
    if (statsVisible) {
      setStatsVisible(false);
    }
  };

  //Calculate stats
  const totalHp = (2 * baseHp + ivHp + (evHp / 4) * 50) / 100 + 50 + 10;
  const totalAtk = (2 * baseAtk + ivAtk + (evAtk / 4) * 50) / 100 + 5;
  const totalDef = (2 * baseDef + ivDef + (evDef / 4) * 50) / 100 + 5;
  const totalSpAtk = (2 * baseSpAtk + ivSpAtk + (evSpAtk / 4) * 50) / 100 + 5;
  const totalSpDef = (2 * baseSpDef + ivSpDef + (evSpDef / 4) * 50) / 100 + 5;
  const totalSpeed = (2 * baseSpeed + ivSpeed + (evSpeed / 4) * 50) / 100 + 5;

  console.log(totalHp);
  console.log(moveSelections);
  return (
    <>
      <div className="create-pokemon-container">
        <h1>Hi this is the beginning of the create form woo</h1>
        <h2>this is just so my thing doesnt bork</h2>
        <div className="search-container">
          <label>
            Search for a Pokemon
            <div className="search-bar" ref={searchRef}>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search Pokémon"
              />
            </div>
          </label>
          {filteredResults && showResults && (
            <div className="results-dropdown-menu">
              <ul className="results-list">
                {filteredResults.map((result) => (
                  <li
                    className="result-item"
                    key={result.name}
                    onClick={() => resultClick(result)}
                  >
                    {result.name.charAt(0).toUpperCase() + result.name.slice(1)}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div></div>
        </div>
        <div>
          {selectedItem && pokemonData && (
            <div className="customize-container">
              <div className="custom-pokemon-card">
                <div className="pkmn-details">
                  <h2 onClick={openNickName} className="card-h2-details">
                    {' '}
                    {selectedItem.name.charAt(0).toUpperCase() +
                      selectedItem.name.slice(1)}
                    , "{nickName}"
                  </h2>
                  <div className="details-div" onClick={openNickName}>
                    <div className="details-div-item">
                      <p className="details-div-text">Gender</p>
                      <p className="details-div-text">{gender}</p>
                    </div>
                    <div className="details-div-item">
                      <p className="details-div-text">Shiny</p>
                      <p className="details-div-text">{shiny}</p>
                    </div>
                    <div className="details-div-item">
                      <p className="details-div-text">Tera Type</p>
                      <p className="details-div-text">{teraType}</p>
                    </div>
                  </div>
                </div>
                <div className="pokemon-img-stats-moves">
                  <div className="pokemon-image">
                    <img
                      src={imageUrl}
                      alt={name}
                      className="customize-pkmn-img"
                    />
                  </div>
                  <div className="pokemon-types-ability-item">
                    <div className="pokemon-types">
                      {' '}
                      <img src={typeOneImage} alt={name} />
                      <img src={typeTwoImage} alt={name} />
                    </div>
                    <div className="pokemon-abilities">
                      <p>Ability</p>
                      <div className="ability-div" onClick={openAbilityItem}>
                        {ability}
                      </div>
                    </div>
                    <div className="pokemon-abilities">
                      <p>Item</p>
                      <div className="ability-div" onClick={openAbilityItem}>
                        <img src={itemImageUrl}></img>
                        {item}
                      </div>
                    </div>
                  </div>
                  <div className="pokemon-moves">
                    {' '}
                    <div className="pokemon-abilities">
                      <p>Move One</p>
                      <div className="ability-div" onClick={openMoves}>
                        {moveOne}
                      </div>
                    </div>
                    <div className="pokemon-abilities">
                      <p>Move Two</p>
                      <div className="ability-div" onClick={openMoves}>
                        {moveTwo}
                      </div>
                    </div>
                    <div className="pokemon-abilities">
                      <p>Move Three</p>
                      <div className="ability-div" onClick={openMoves}>
                        {moveThree}
                      </div>
                    </div>
                    <div className="pokemon-abilities">
                      <p>Move Four</p>
                      <div className="ability-div" onClick={openMoves}>
                        {moveFour}
                      </div>
                    </div>
                  </div>
                  <div className="pokemon-stats">
                    <p>Stats</p>
                    <div className="stat-div" onClick={openStats}>
                      <span className="stat-row">
                        <label>
                          HP
                          <div
                            className="stat-bar-hp"
                            style={{ width: `${(totalHp / 1000) * 100}%` }}
                          ></div>
                        </label>
                      </span>
                      <span className="stat-row">
                        <label>
                          Atk
                          <div
                            className="stat-bar-atk"
                            style={{ width: `${(totalAtk / 1000) * 100}%` }}
                          ></div>
                        </label>
                      </span>
                      <span className="stat-row">
                        <label>
                          Def
                          <div
                            className="stat-bar-def"
                            style={{ width: `${(totalDef / 1000) * 100}%` }}
                          ></div>
                        </label>
                      </span>
                      <span className="stat-row">
                        <label>
                          SpAtk
                          <div
                            className="stat-bar-spatk"
                            style={{ width: `${(totalSpAtk / 1000) * 100}%` }}
                          ></div>
                        </label>
                      </span>
                      <span className="stat-row">
                        <label>
                          SpDef
                          <div
                            className="stat-bar-spdef"
                            style={{ width: `${(totalSpDef / 1000) * 100}%` }}
                          ></div>
                        </label>
                      </span>
                      <span className="stat-row">
                        <label>
                          Speed
                          <div
                            className="stat-bar-speed"
                            style={{ width: `${(totalSpeed / 1000) * 100}%` }}
                          ></div>
                        </label>
                      </span>
                      <div className="pokemon-nature">
                        <p>Nature</p>
                        <div className="ability-div">{nature}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="custom-pokemon-form-container">
                <h2>Customization Fields</h2>
                <form>
                  {nickNameVisible && (
                    <div className="nickName-input">
                      <form className="general-info">
                        <label>
                          Nick Name:
                          <input
                            className="custom-pkmn-input"
                            type="text"
                            placeholder="Nick name"
                            value={nickName}
                            onChange={(e) => setNickName(e.target.value)}
                          ></input>
                        </label>
                        <label>Gender: </label>
                        <select
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option selected value="">
                            Select
                          </option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Unknown</option>
                        </select>
                        <label>Shiny? </label>
                        <select
                          value={shiny}
                          onChange={(e) => setShiny(e.target.value)}
                        >
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                        <label>Tera Type: </label>
                        <select
                          value={teraType}
                          onChange={(e) => setTeraType(e.target.value)}
                        >
                          <option selected value="">
                            Select
                          </option>
                          <option>Bug</option>
                          <option>Dark</option>
                          <option>Dragon</option>
                          <option>Electric</option>
                          <option>Fairy</option>
                          <option>Fighting</option>
                          <option>Fire</option>
                          <option>Flying</option>
                          <option>Ghost</option>
                          <option>Grass</option>
                          <option>Ground</option>
                          <option>Ice</option>
                          <option>Normal</option>
                          <option>Poison</option>
                          <option>Psychic</option>
                          <option>Rock</option>
                          <option>Steel</option>
                          <option>Water</option>
                        </select>
                        <button
                          className="customize-pokemon-button"
                          onClick={(e) => openNickName(e)}
                        >
                          X
                        </button>
                      </form>
                    </div>
                  )}
                  {abilityItemVisible && (
                    <div className="ability-item-input">
                      <form className="ability-item-info">
                        <label>
                          Ability:
                          <select
                            value={ability}
                            onChange={(e) => setAbility(e.target.value)}
                          >
                            <option selected value="">
                              Select
                            </option>
                            {abilitySelections.map((ability) => (
                              <option key={ability.ability}>
                                {ability.ability.name.charAt(0).toUpperCase() +
                                  ability.ability.name.slice(1)}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label>
                          Item:
                          <select
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                          >
                            <option selected value="">
                              Select
                            </option>
                            {heldItems.map((item) => (
                              <option key={item.name}>
                                {item.name.charAt(0).toUpperCase() +
                                  item.name.slice(1)}
                              </option>
                            ))}
                          </select>
                        </label>
                        <button
                          className="customize-pokemon-button"
                          onClick={(e) => openAbilityItem(e)}
                        >
                          X
                        </button>
                      </form>
                    </div>
                  )}
                  {movesVisible && (
                    <div className="movelist-input-container">
                      <form className="movelist-input-form">
                        <label>
                          Move One
                          <select
                            value={moveOne}
                            onChange={(e) => setMoveOne(e.target.value)}
                          >
                            <option selected value="">
                              Select
                            </option>
                            {moveSelections.map((move) => (
                              <option key={move.move.name}>
                                {move.move.name.charAt(0).toUpperCase() +
                                  move.move.name.slice(1)}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label>
                          Move Two
                          <select
                            value={moveTwo}
                            onChange={(e) => setMoveTwo(e.target.value)}
                          >
                            <option selected value="">
                              Select
                            </option>
                            {moveSelections.map((move) => (
                              <option key={move.move.name}>
                                {move.move.name.charAt(0).toUpperCase() +
                                  move.move.name.slice(1)}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label>
                          Move Three
                          <select
                            value={moveThree}
                            onChange={(e) => setMoveThree(e.target.value)}
                          >
                            <option selected value="">
                              Select
                            </option>
                            {moveSelections.map((move) => (
                              <option key={move.move.name}>
                                {move.move.name.charAt(0).toUpperCase() +
                                  move.move.name.slice(1)}
                              </option>
                            ))}
                          </select>
                        </label>
                        <button
                          className="customize-pokemon-button"
                          onClick={(e) => openMoves(e)}
                        >
                          X
                        </button>
                        <label>
                          Move Four
                          <select
                            value={moveFour}
                            onChange={(e) => setMoveFour(e.target.value)}
                          >
                            <option selected value="">
                              Select
                            </option>
                            {moveSelections.map((move) => (
                              <option key={move.move.name}>
                                {move.move.name.charAt(0).toUpperCase() +
                                  move.move.name.slice(1)}
                              </option>
                            ))}
                          </select>
                        </label>
                      </form>
                    </div>
                  )}
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CreatePokemon;
