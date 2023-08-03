const LOAD_USER_TEAMS = 'teams/LOAD_USER_TEAMS';
const LOAD_ALL_TEAMS = 'teams/LOAD_ALL_TEAMS';
const LOAD_TEAM = 'teams/LOAD_TEAM';
const DELETE_TEAM = 'teams/DELETE_TEAM';
const CLEAR_TEAMS = 'teams/CLEAR_TEAMS';

export const loadUserTeams = (teams) => {
  return {
    type: LOAD_USER_TEAMS,
    payload: teams,
  };
};

export const loadAllTeams = (teams) => {
  return {
    type: LOAD_ALL_TEAMS,
    payload: teams,
  };
};

export const loadTeam = (team) => {
  return {
    type: LOAD_TEAM,
    payload: team,
  };
};

export const deleteTeam = (team) => {
  return {
    type: DELETE_TEAM,
    payload: team,
  };
};

export const clearTeams = () => {
  return {
    type: CLEAR_TEAMS,
  };
};

export const getUserTeams = () => async (dispatch) => {
  const response = await fetch('/api/teams/current');

  if (response.ok) {
    const data = await response.json();

    await dispatch(loadUserTeams(data));
    return data;
  }
};

export const getAllTeams = () => async (dispatch) => {
  const response = await fetch('/api/teams/all');

  if (response.ok) {
    const data = await response.json();

    await dispatch(loadAllTeams(data));
    return data;
  }
};

export const newTeam = (team) => async (dispatch) => {
  const response = await fetch(`/api/teams/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(team),
  });

  if (response.ok) {
    const data = await response.json();

    dispatch(loadTeam(team));
    return data;
  }
};

export const deleteTeams = (team) => async (dispatch) => {
  const response = await fetch(`/api/teams/${team.id}/delete`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(team),
  });

  if (response.ok) {
    const data = await response.json();

    dispatch(deleteTeam(data));
    return data;
  }
};

export const editTeams = (team) => async (dispatch) => {
  console.log('Do we get here? Actually First');
  const response = await fetch(`/api/teams/${team.id}/edit`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(team),
  });
  console.log('Do we get here? First');

  if (response.ok) {
    console.log('Do we get here? Second');
    const data = await response.json();

    dispatch(loadTeam(data));
    return data;
  }
};

export default function teamReducer(state = {}, action) {
  let newState = {};
  switch (action.type) {
    case LOAD_USER_TEAMS:
      newState = { ...state };
      action.payload.forEach((team) => {
        newState[team.id] = team;
      });
      return newState;
    case LOAD_ALL_TEAMS:
      newState = { ...state };
      action.payload.forEach((team) => {
        newState[team.id] = team;
      });
      return newState;
    case LOAD_TEAM:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_TEAM:
      newState = { ...state };
      delete newState[action.payload.id];
      return newState;
    case CLEAR_TEAMS:
      newState = {};
      return newState;
    default:
      return state;
  }
}
