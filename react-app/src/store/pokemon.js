const LOAD_USER_POKEMON = 'pokemon/LOAD_USER_POKEMON';
const LOAD_ALL_POKEMON = 'pokemon/LOAD_ALL_POKEMON';
const LOAD_POKEMON = 'pokemon/LOAD_POKEMON';
const DELETE_POKEMON = 'pokemon/DELETE_POKEMON';
const CLEAR_POKEMON = 'pokemon/CLEAR_POKEMON';

export const loadUserPokemon = (pokemon) => {
  return {
    type: LOAD_USER_POKEMON,
    payload: pokemon,
  };
};

export const loadAllPokemon = (pokemon) => {
  return {
    type: LOAD_ALL_POKEMON,
    payload: pokemon,
  };
};

export const loadPokemon = (pokemon) => {
  return {
    type: LOAD_POKEMON,
    payload: pokemon,
  };
};

export const deletePokemon = (pokemon) => {
  return {
    type: DELETE_POKEMON,
    payload: pokemon,
  };
};

export const clearPokemon = (pokemon) => {
  return {
    type: CLEAR_POKEMON,
  };
};

export const getUserPokemon = () => async (dispatch) => {
  const response = await fetch('/api/pokemon/current');

  if (response.ok) {
    const data = await response.json();

    dispatch(loadUserPokemon(data));
    return data;
  }
};

export const getAllPokemon = () => async (dispatch) => {
  const response = await fetch('/api/pokemon/all');

  if (response.ok) {
    const data = await response.json();

    dispatch(loadAllPokemon(data));
    return data;
  }
};

export const newPokemon = (pokemon) => async (dispatch) => {
  const response = await fetch(`/api/pokemon/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pokemon),
  });

  if (response.ok) {
    const data = await response.json();

    dispatch(loadPokemon(data));
    return data;
  }
};

export const deletePokemons = (pokemon) => async (dispatch) => {
  const response = await fetch(`/api/pokemon/${pokemon.id}/delete`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pokemon),
  });

  if (response.ok) {
    const data = await response.json();

    dispatch(deletePokemon(data));
    return data;
  }
};

export default function pokemonReducer(state = {}, action) {
  let newState = {};
  switch (action.type) {
    case LOAD_USER_POKEMON:
      newState = { ...state };
      action.payload.forEach((pokemon) => {
        newState[pokemon.id] = pokemon;
      });
      return newState;
    case LOAD_ALL_POKEMON:
      newState = { ...state };
      action.payload.forEach((pokemon) => {
        newState[pokemon.id] = pokemon;
      });
      return newState;
    case LOAD_POKEMON:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_POKEMON:
      newState = { ...state };
      delete newState[action.payload.id];
      return newState;
    case CLEAR_POKEMON:
      newState = {};
      return newState;
    default:
      return state;
  }
}
