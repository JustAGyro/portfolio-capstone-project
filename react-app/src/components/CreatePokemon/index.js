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
  const [item, setItem] = useState('');
  const [ability, setAbility] = useState('');
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

  //useStates for select fields (movesets, etc.)
  const [moveSelections, setMoveSelections] = useState([]);
  const [abilitySelections, setAbilitySelections] = useState([]);
  const [natureSelections, setNatureSelections] = useState([]);
  const [itemSelection, setItemSelection] = useState([]);

  //useStates for visibility of input fields
  const [nickNameVisible, setNickNameVisible] = useState(false);

  //Grab pokemon for search
  const fetchPokemon = () => {
    fetch(`/api/pokemon/search`)
      .then((response) => response.json())
      .then((data) => setResults(data.results));
  };

  useEffect(() => {
    fetchPokemon();
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

  console.log('hi');

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
                  <div className="pokemon-moves">
                    <div>
                      {' '}
                      <img src={typeOneImage} alt={name} />
                      <img src={typeTwoImage} alt={name} />
                    </div>
                  </div>
                  <div className="pokemon-moves">Moves!</div>
                  <div className="pokemon-moves">Stats!</div>
                </div>
              </div>
              <div className="custom-pokemon-form-container">
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
