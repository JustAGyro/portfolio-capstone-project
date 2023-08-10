const LOAD_USER_PARTIES = 'parties/LOAD_USER_PARTIES';
const LOAD_ALL_PARTIES = 'parties/LOAD_ALL_PARTIES';
const LOAD_PARTY = 'parties/LOAD_PARTY';
const DELETE_PARTY = 'parties/DELETE_PARTY';
const CLEAR_PARTIES = 'parties/CLEAR_PARTIES';

export const loadUserParties = (parties) => {
  return {
    type: LOAD_USER_PARTIES,
    payload: parties,
  };
};

export const loadAllParties = (parties) => {
  return {
    type: LOAD_ALL_PARTIES,
    payload: parties,
  };
};

export const loadParty = (party) => {
  return {
    type: LOAD_PARTY,
    payload: party,
  };
};

export const deleteParty = (party) => {
  return {
    type: DELETE_PARTY,
    payload: party,
  };
};

export const clearParties = () => {
  return {
    type: CLEAR_PARTIES,
  };
};

export const getUserParties = () => async (dispatch) => {
  const response = await fetch('/api/parties/current');

  if (response.ok) {
    const data = await response.json();

    dispatch(loadUserParties(data));
    return data;
  }
};

export const getAllParties = () => async (dispatch) => {
  const response = await fetch('/api/parties/all');

  if (response.ok) {
    const data = await response.json();

    dispatch(loadAllParties(data));
    return data;
  }
};

export const newParty = (party) => async (dispatch) => {
  const response = await fetch(`/api/parties/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(party),
  });

  if (response.ok) {
    const data = await response.json();

    dispatch(loadParty(data));
    return data;
  }
};

export const deleteParties = (party) => async (dispatch) => {
  const response = await fetch(`/api/parties/${party.id}delete`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(party),
  });

  if (response.ok) {
    const data = await response.json();

    dispatch(deleteParty(data));
    return data;
  }
};

export default function partyReducer(state = {}, action) {
  let newState = {};
  switch (action.type) {
    case LOAD_USER_PARTIES:
      newState = { ...state };
      action.payload.forEach((party) => {
        newState[party.id] = party;
      });
      return newState;
    case LOAD_ALL_PARTIES:
      newState = { ...state };
      action.payload.forEach((party) => {
        newState[party.id] = party;
      });
      return newState;
    case LOAD_PARTY:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_PARTY:
      newState = { ...state };
      delete newState[action.payload.id];
      return newState;
    case CLEAR_PARTIES:
      newState = {};
      return newState;
    default:
      return state;
  }
}
