import React, { useEffect, useState } from 'react';
import './EditPokemon.css';
import { useDispatch, useSelector } from 'react-redux';
import { editPokemons } from '../../store/pokemon';
import { useHistory, useParams } from 'react-router-dom';

function EditPokemon() {
  const { pokemonId } = useParams();
  const pokemon = useSelector((state) => state.pokemon[pokemonId]);
  const [pokemonData, setPokemonData] = useState({});
  const [heldItems, setHeldItems] = useState([]);
  const [nickNameError, setNickNameError] = useState(false);
  const [requiredError, setRequiredError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  //Errors
  useEffect(() => {
    if (nickName.length > 25) {
      setNickNameError(true);
      setDisabled(true);
    } else {
      setNickNameError(false);
      setDisabled(false);
    }

    if (
      gender.length < 2 ||
      teraType.length < 2 ||
      item.length < 2 ||
      ability.length < 2 ||
      nature.length < 2 ||
      moveOne.length < 2 ||
      moveTwo.length < 2 ||
      moveThree.length < 2 ||
      moveFour.length < 2
    ) {
      setRequiredError(true);
      setDisabled(true);
    } else {
      setRequiredError(false);
      setDisabled(false);
    }
  });

  //useStates for pokemon databasefields
  const [pokeDex, setPokeDex] = useState(0);
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');
  const [gender, setGender] = useState('-');
  const [shiny, setShiny] = useState('No');
  const [shinyBoolean, setShinyBoolean] = useState(false);
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

  //Grab pokemon to customize and save to db
  const fetchSelectedPokemon = (pokeDex) => {
    fetch(`/api/pokemon/${pokeDex}/search`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data));
  };

  //Grab items
  const fetchItems = () => {
    fetch(`/api/pokemon/items`)
      .then((response) => response.json())
      .then((data) => setHeldItems(data.items));
  };

  //Grab natures
  const fetchNatures = () => {
    fetch(`/api/pokemon/natures`)
      .then((response) => response.json())
      .then((data) => setNatureSelections(data.results));
  };

  useEffect(() => {
    fetchSelectedPokemon(pokeDex);
    fetchItems();
    fetchNatures();
  }, [pokeDex]);

  useEffect(() => {
    if (pokemon) {
      if (pokemon.name) {
        setName(pokemon.name);
      }

      if (pokemon.nick_name) {
        setNickName(pokemon.nick_name);
      }

      if (pokemon.poke_dex) {
        setPokeDex(pokemon.poke_dex);
      }
      if (pokemon.type_one) {
        setTypeOne(pokemon.type_one);
      }
      if (pokemon.type_two) {
        setTypeTwo(pokemon.type_two);
      }

      if (pokemon.ability) {
        setAbility(pokemon.ability);
      }

      if (pokemonData.abilities) {
        setAbilitySelections(pokemonData.abilities);
      }

      if (pokemon.item) {
        setItem(pokemon.item);
      }

      if (pokemon.move_one) {
        setMoveOne(pokemon.move_one);
      }
      if (pokemon.move_two) {
        setMoveTwo(pokemon.move_two);
      }
      if (pokemon.move_three) {
        setMoveThree(pokemon.move_three);
      }
      if (pokemon.move_four) {
        setMoveFour(pokemon.move_four);
      }

      if (pokemonData.moves) {
        setMoveSelections(pokemonData.moves);
      }

      if (pokemonData.stats) {
        setBaseHp(pokemonData?.stats[0]?.base_stat);
        setBaseAtk(pokemonData?.stats[1]?.base_stat);
        setBaseDef(pokemonData?.stats[2]?.base_stat);
        setBaseSpAtk(pokemonData?.stats[3]?.base_stat);
        setBaseSpDef(pokemonData?.stats[4]?.base_stat);
        setBaseSpeed(pokemonData?.stats[5]?.base_stat);
      }

      if (
        pokemon.ev_hp &&
        pokemon.ev_atk &&
        pokemon.ev_def &&
        pokemon.ev_sp_atk &&
        pokemon.ev_sp_def &&
        pokemon.ev_speed
      ) {
        setEvHp(pokemon.ev_hp);
        setEvAtk(pokemon.ev_atk);
        setEvDef(pokemon.ev_def);
        setEvSpAtk(pokemon.ev_sp_atk);
        setEvSpDef(pokemon.ev_sp_def);
        setEvSpeed(pokemon.ev_speed);
      }

      if (
        pokemon.iv_hp &&
        pokemon.iv_atk &&
        pokemon.iv_def &&
        pokemon.iv_sp_atk &&
        pokemon.iv_sp_def &&
        pokemon.iv_speed
      ) {
        setIvHp(pokemon.iv_hp);
        setIvAtk(pokemon.iv_atk);
        setIvDef(pokemon.iv_def);
        setIvSpAtk(pokemon.iv_sp_atk);
        setIvSpDef(pokemon.iv_sp_def);
        setIvSpeed(pokemon.iv_speed);
      }

      if (pokemon.nature) {
        setNature(pokemon.nature);
      }

      if (pokemon.gender) {
        setGender(pokemon.gender);
      }

      if (pokemon.tera_type) {
        setTeraType(pokemon.tera_type);
      }
    }
  }, [pokemonData]);

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
  // prettier-ignore
  const totalHp = ((2 * baseHp + ivHp + (evHp / 4)) * 50 / 100) + 50 + 10;
  // prettier-ignore
  const totalAtk = ((2 * baseAtk + ivAtk + (evAtk / 4)) * 50) / 100 + 5;
  // prettier-ignore
  const totalDef = ((2 * baseDef + ivDef + (evDef / 4)) * 50) / 100 + 5;
  // prettier-ignore
  const totalSpAtk = ((2 * baseSpAtk + ivSpAtk + (evSpAtk / 4)) * 50) / 100 + 5;
  // prettier-ignore
  const totalSpDef = ((2 * baseSpDef + ivSpDef + (evSpDef / 4)) * 50) / 100 + 5;
  // prettier-ignore
  const totalSpeed = ((2 * baseSpeed + ivSpeed + (evSpeed / 4)) * 50) / 100 + 5;
  const remainingEv = 508 - evHp - evAtk - evDef - evSpAtk - evSpDef - evSpeed;

  //Setting max for slider values
  const [maxValues, setMaxValues] = useState({
    hp: 508 - (evAtk + evDef + evSpAtk + evSpDef + evSpeed),
    atk: 508 - (evHp + evDef + evSpAtk + evSpDef + evSpeed),
    def: 508 - (evHp + evAtk + evSpAtk + evSpDef + evSpeed),
    spAtk: 508 - (evHp + evAtk + evDef + evSpDef + evSpeed),
    spDef: 508 - (evHp + evAtk + evDef + evSpAtk + evSpeed),
    speed: 508 - (evHp + evAtk + evDef + evSpAtk + evSpDef),
  });

  const updateMaxValues = () => {
    setMaxValues({
      hp: 508 - (evAtk + evDef + evSpAtk + evSpDef + evSpeed),
      atk: 508 - (evHp + evDef + evSpAtk + evSpDef + evSpeed),
      def: 508 - (evHp + evAtk + evSpAtk + evSpDef + evSpeed),
      spAtk: 508 - (evHp + evAtk + evDef + evSpDef + evSpeed),
      spDef: 508 - (evHp + evAtk + evDef + evSpAtk + evSpeed),
      speed: 508 - (evHp + evAtk + evDef + evSpAtk + evSpDef),
    });
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    if (shiny === 'No' || shiny === 'no') {
      setShinyBoolean(false);
    } else if (shiny === 'Yes' || shiny === 'yes') {
      setShinyBoolean(true);
    }

    const payload = {
      pokeDex: pokeDex,
      name: name,
      nickName: nickName,
      gender: gender,
      shiny: shinyBoolean,
      typeOne: typeOne,
      typeTwo: typeTwo,
      teraType: teraType,
      item: item,
      ability: ability,
      nature: nature,
      moveOne: moveOne,
      moveTwo: moveTwo,
      moveThree: moveThree,
      moveFour: moveFour,
      baseHp: baseHp,
      baseAtk: baseAtk,
      baseDef: baseDef,
      baseSpAtk: baseSpAtk,
      baseSpDef: baseSpDef,
      baseSpeed: baseSpeed,
      evHp: evHp,
      evAtk: evAtk,
      evDef: evDef,
      evSpAtk: evSpAtk,
      evSpDef: evSpDef,
      evSpeed: evSpeed,
      ivHp: ivHp,
      ivAtk: ivAtk,
      ivDef: ivDef,
      ivSpAtk: ivSpAtk,
      ivSpDef: ivSpDef,
      ivSpeed: ivSpeed,
    };
    console.log('do we even trigger this...?');
    dispatch(editPokemons(payload, pokemonId));
    console.log('do we even trigger this...?');
    history.push('/pokemon');
  };

  return (
    <>
      <div className="create-pokemon-container">
        <div className="edit-header">
          <h1>Edit Your Pokemon</h1>
        </div>
        <div>
          {pokemon && (
            <div className="customize-container">
              <div className="custom-pokemon-card">
                <div className="pkmn-details">
                  <h2 onClick={openNickName} className="card-h2-details">
                    {' '}
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
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
                            style={{ width: `${(totalHp / 300) * 100}%` }}
                          ></div>
                        </label>
                      </span>
                      <span className="stat-row">
                        <label>
                          Atk
                          <div
                            className="stat-bar-atk"
                            style={{ width: `${(totalAtk / 300) * 100}%` }}
                          ></div>
                        </label>
                      </span>
                      <span className="stat-row">
                        <label>
                          Def
                          <div
                            className="stat-bar-def"
                            style={{ width: `${(totalDef / 300) * 100}%` }}
                          ></div>
                        </label>
                      </span>
                      <span className="stat-row">
                        <label>
                          SpAtk
                          <div
                            className="stat-bar-spatk"
                            style={{ width: `${(totalSpAtk / 300) * 100}%` }}
                          ></div>
                        </label>
                      </span>
                      <span className="stat-row">
                        <label>
                          SpDef
                          <div
                            className="stat-bar-spdef"
                            style={{ width: `${(totalSpDef / 300) * 100}%` }}
                          ></div>
                        </label>
                      </span>
                      <span className="stat-row">
                        <label>
                          Speed
                          <div
                            className="stat-bar-speed"
                            style={{ width: `${(totalSpeed / 300) * 100}%` }}
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
                {requiredError && (
                  <p className="error-msg">
                    All fields are required besdies Nick Name & Stats
                  </p>
                )}
              </div>
              <div className="custom-pokemon-form-container">
                <h2>Customization Fields</h2>
                <form>
                  {nickNameVisible && (
                    <div className="nickName-input">
                      <div className="general-info">
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
                      </div>
                      {nickNameError && (
                        <p className="error-msg">
                          Nick name must be less than 25 characters long
                        </p>
                      )}
                    </div>
                  )}
                  {abilityItemVisible && (
                    <div className="ability-item-input">
                      <div className="ability-item-info">
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
                      </div>
                    </div>
                  )}
                  {movesVisible && (
                    <div className="movelist-input-container">
                      <div className="movelist-input-form">
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
                              <option key="m1">
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
                              <option key="m2">
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
                              <option key="m3">
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
                              <option key="m4">
                                {move.move.name.charAt(0).toUpperCase() +
                                  move.move.name.slice(1)}
                              </option>
                            ))}
                          </select>
                        </label>
                      </div>
                    </div>
                  )}
                  {statsVisible && (
                    <div className="stats-input-container">
                      <div className="stats-input-basestats">
                        <p>Base Stats</p>
                        <div className="base-stats-div">
                          <div className="base-stats-name">
                            <div>Hp</div>
                            <div>Atk</div>
                            <div>Def</div>
                            <div>SpAtk</div>
                            <div>SpDef</div>
                            <div>Speed</div>
                          </div>
                          <div className="base-stats-amt">
                            <div>{baseHp}</div>
                            <div>{baseAtk}</div>
                            <div>{baseDef}</div>
                            <div>{baseSpAtk}</div>
                            <div>{baseSpDef}</div>
                            <div>{baseSpeed}</div>
                          </div>
                        </div>
                        <div className="nature-input">
                          <label>
                            Nature
                            <select
                              value={nature}
                              onChange={(e) => setNature(e.target.value)}
                            >
                              <option selected value="">
                                Select
                              </option>
                              {natureSelections.map((nature) => (
                                <option key={nature.name}>
                                  {nature.name.charAt(0).toUpperCase() +
                                    nature.name.slice(1)}
                                </option>
                              ))}
                            </select>
                          </label>
                        </div>
                      </div>
                      <div className="stats-input-evstats">
                        <p>EV Points remaining: {remainingEv} </p>
                        <div className="stat-slider-div">
                          <div className="stat-slider-label">Hp</div>
                          <input
                            className="evSlider"
                            type="range"
                            id="slider1"
                            name="slider1"
                            min="0"
                            max={Math.min(252, maxValues.hp)}
                            step="4"
                            value={evHp}
                            onChange={(e) => {
                              setEvHp(parseInt(e.target.value, 10));
                              updateMaxValues();
                            }}
                          />
                          <output htmlFor="slider1">{evHp}</output>
                        </div>
                        <div className="stat-slider-div">
                          <div className="stat-slider-label">Atk</div>
                          <input
                            className="evSlider"
                            type="range"
                            id="slider2"
                            name="slider2"
                            min="0"
                            max={Math.min(252, maxValues.atk)}
                            step="4"
                            value={evAtk}
                            onChange={(e) => {
                              setEvAtk(parseInt(e.target.value, 10));
                              updateMaxValues();
                            }}
                          />
                          <output htmlFor="slider2">{evAtk}</output>
                        </div>
                        <div className="stat-slider-div">
                          <div className="stat-slider-label">Def</div>
                          <input
                            className="evSlider"
                            type="range"
                            id="slider3"
                            name="slider3"
                            min="0"
                            max={Math.min(252, maxValues.def)}
                            step="4"
                            value={evDef}
                            onChange={(e) => {
                              setEvDef(parseInt(e.target.value, 10));
                              updateMaxValues();
                            }}
                          />
                          <output htmlFor="slider3">{evDef}</output>
                        </div>
                        <div className="stat-slider-div">
                          <div className="stat-slider-label">SpAtk</div>
                          <input
                            className="evSlider"
                            type="range"
                            id="slider4"
                            name="slider4"
                            min="0"
                            max={Math.min(252, maxValues.spAtk)}
                            step="4"
                            value={evSpAtk}
                            onChange={(e) => {
                              setEvSpAtk(parseInt(e.target.value, 10));
                              updateMaxValues();
                            }}
                          />
                          <output htmlFor="slider4">{evSpAtk}</output>
                        </div>
                        <div className="stat-slider-div">
                          <div className="stat-slider-label">SpDef</div>
                          <input
                            className="evSlider"
                            type="range"
                            id="slider5"
                            name="slider5"
                            min="0"
                            max={Math.min(252, maxValues.spDef)}
                            step="4"
                            value={evSpDef}
                            onChange={(e) => {
                              setEvSpDef(parseInt(e.target.value, 10));
                              updateMaxValues();
                            }}
                          />
                          <output htmlFor="slider5">{evSpDef}</output>
                        </div>
                        <div className="stat-slider-div">
                          <div className="stat-slider-label">Speed</div>
                          <input
                            className="evSlider"
                            type="range"
                            id="slider6"
                            name="slider6"
                            min="0"
                            max={Math.min(252, maxValues.speed)}
                            step="4"
                            value={evSpeed}
                            onChange={(e) => {
                              setEvSpeed(parseInt(e.target.value, 10));
                              updateMaxValues();
                            }}
                          />
                          <output htmlFor="slider6">{evSpeed}</output>
                        </div>
                      </div>
                      <div className="iv-input-container">
                        <p>IV Spread</p>
                        <div className="base-stats-div">
                          <div className="iv-stats-name">
                            <div>Hp</div>
                            <div>Atk</div>
                            <div>Def</div>
                            <div>SpAtk</div>
                            <div>SpDef</div>
                            <div>Speed</div>
                          </div>
                          <div className="iv-stats-amt">
                            <div>
                              <input
                                className="iv-input"
                                type="number"
                                min="0"
                                max="31"
                                value={ivHp}
                                onChange={(e) =>
                                  setIvHp(parseInt(e.target.value), 10)
                                }
                              ></input>
                            </div>
                            <div>
                              {' '}
                              <input
                                className="iv-input"
                                type="number"
                                min="0"
                                max="31"
                                value={ivAtk}
                                onChange={(e) =>
                                  setIvAtk(parseInt(e.target.value), 10)
                                }
                              ></input>
                            </div>
                            <div>
                              {' '}
                              <input
                                className="iv-input"
                                type="number"
                                min="0"
                                max="31"
                                value={ivDef}
                                onChange={(e) =>
                                  setIvDef(parseInt(e.target.value), 10)
                                }
                              ></input>
                            </div>
                            <div>
                              {' '}
                              <input
                                className="iv-input"
                                type="number"
                                min="0"
                                max="31"
                                value={ivSpAtk}
                                onChange={(e) =>
                                  setIvSpAtk(parseInt(e.target.value), 10)
                                }
                              ></input>
                            </div>
                            <div>
                              {' '}
                              <input
                                className="iv-input"
                                type="number"
                                min="0"
                                max="31"
                                value={ivSpDef}
                                onChange={(e) =>
                                  setIvSpDef(parseInt(e.target.value), 10)
                                }
                              ></input>
                            </div>
                            <div>
                              {' '}
                              <input
                                className="iv-input"
                                type="number"
                                min="0"
                                max="31"
                                value={ivSpeed}
                                onChange={(e) =>
                                  setIvSpeed(parseInt(e.target.value), 10)
                                }
                              ></input>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="customize-pokemon-button"
                        onClick={(e) => openStats(e)}
                      >
                        X
                      </button>
                    </div>
                  )}
                </form>
                <button
                  className="gen-button"
                  onClick={handleEdit}
                  disabled={disabled}
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default EditPokemon;
