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
  const [gender, setGender] = useState('');
  const [shiny, setShiny] = useState(false);
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

  useEffect(() => {
    fetchSelectedPokemon(pkmnId);
  }, [selectedItem]);

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

  console.log('PokemonData ', pokemonData.abilities);
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
                <h2 className="card-h2">
                  {' '}
                  {selectedItem.name.charAt(0).toUpperCase() +
                    selectedItem.name.slice(1)}
                </h2>
                {pokemonData && (
                  <div className="pokemon-standard-info">
                    <p className="pokemon-info-item">Dex # {pokemonData.id}</p>
                    <p className="pokemon-info-item">Type 1:</p>
                    <p className="pokemon-info-item">Type 2:</p>
                    <p>Ability: </p>
                  </div>
                )}
                <div className="custom-pokemon-form-container">
                  <form></form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CreatePokemon;
