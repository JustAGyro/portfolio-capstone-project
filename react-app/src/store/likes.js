import { loadComment } from './comments';

const LOAD_USER_LIKES = 'likes/LOAD_USER_COMMENTS';
const LOAD_ALL_LIKES = 'likes/LOAD_ALL_LIKES';
const LOAD_LIKE = 'likes/LOAD_LIKE';
const DELETE_LIKE = 'likes/DELETE_LIKE';
const CLEAR_LIKES = 'likes/CLEAR_LIKES';

export const loadUserLikes = (likes) => {
  return {
    type: LOAD_USER_LIKES,
    payload: likes,
  };
};

export const loadAllLikes = (likes) => {
  return {
    type: LOAD_ALL_LIKES,
    payload: likes,
  };
};

export const loadLike = (like) => {
  return {
    type: LOAD_LIKE,
    payload: like,
  };
};

export const deleteLike = (like) => {
  return {
    type: DELETE_LIKE,
    payload: like,
  };
};

export const clearLikes = () => {
  return {
    type: CLEAR_LIKES,
  };
};

export const getUserLikes = () => async (dispatch) => {
  const response = await fetch('/api/likes/current');

  if (response.ok) {
    const data = await response.json();

    await dispatch(loadUserLikes(data));
    return data;
  }
};

export const getAllLikes = () => async (dispatch) => {
  const response = await fetch('/api/likes/all');

  if (response.ok) {
    const data = await response.json();

    dispatch(loadAllLikes(data));
    return data;
  }
};

export const newLike = (like) => async (dispatch) => {
  const response = await fetch(`/api/comments/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(like),
  });

  if (response.ok) {
    const data = await response.json();

    dispatch(loadComment(data));
    return data;
  }
};

export const deleteLikes = (like) => async (dispatch) => {
  const response = await fetch(`/api/comments/${like.id}delete`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(like),
  });

  if (response.ok) {
    const data = await response.json();

    dispatch(deleteLike(data));
    return data;
  }
};

export default function likeReducer(state = {}, action) {
  let newState = {};
  switch (action.type) {
    case LOAD_USER_LIKES:
      newState = { ...state };
      action.payload.forEach((like) => {
        newState[like.id] = like;
      });
      return newState;
    case LOAD_ALL_LIKES:
      newState = { ...state };
      action.payload.forEach((like) => {
        newState[like.id] = like;
      });
      return newState;
    case LOAD_LIKE:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_LIKE:
      newState = { ...state };
      delete newState[action.payload.id];
      return newState;
    case CLEAR_LIKES:
      newState = {};
      return newState;
    default:
      return state;
  }
}
