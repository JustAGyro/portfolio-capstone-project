const LOAD_USER_COMMENTS = 'comments/LOAD_USER_COMMENTS';
const LOAD_ALL_COMMENTS = 'comments/LOAD_ALL_COMMENTS';
const LOAD_COMMENT = 'comments/LOAD_COMMENT';
const DELETE_COMMENT = 'comments/DELETE_COMMENT';
const CLEAR_COMMENTS = 'comments/CLEAR_COMMENTS';

export const loadUserComments = (comments) => {
  return {
    type: LOAD_USER_COMMENTS,
    payload: comments,
  };
};

export const loadAllComments = (comments) => {
  return {
    type: LOAD_ALL_COMMENTS,
    payload: comments,
  };
};

export const loadComment = (comment) => {
  return {
    type: LOAD_COMMENT,
    payload: comment,
  };
};

export const deleteComment = (comment) => {
  return {
    type: DELETE_COMMENT,
    payload: comment,
  };
};

export const clearComments = () => {
  return {
    type: CLEAR_COMMENTS,
  };
};

export const getUserComments = () => async (dispatch) => {
  const response = await fetch('/api/comments/current');

  if (response.ok) {
    const data = await response.json();

    await dispatch(loadUserComments(data));
    return data;
  }
};

export const getAllComments = () => async (dispatch) => {
  const response = await fetch('/api/comments/all');

  if (response.ok) {
    const data = await response.json();

    await dispatch(loadAllComments(data));
    return data;
  }
};

export const newComment = () => async (dispatch) => {
  const response = await fetch('/api/comments/new');

  if (response.ok) {
    const data = await response.json();

    await dispatch(loadComment(data));
    return data;
  }
};

export const deleteComments = (comment) => async (dispatch) => {
  const response = await fetch(`/api/comments/${comment.id}/delete`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  });
  if (response.ok) {
    const data = await response.json();

    dispatch(deleteComment(data));
  }
};

export default function commentsReducer(state = {}, action) {
  let newState = {};
  switch (action.type) {
    case LOAD_USER_COMMENTS:
      newState = { ...state };
      action.payload.forEach((comment) => {
        newState[comment.id] = comment;
      });
      return newState;
    case LOAD_ALL_COMMENTS:
      newState = { ...state };
      action.payload.forEach((comment) => {
        newState[comment.id] = comment;
      });
      return newState;
    case LOAD_COMMENT:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_COMMENT:
      newState = { ...state };
      delete newState[action.payload.id];
      return newState;
    case CLEAR_COMMENTS:
      newState = {};
      return newState;
    default:
      return state;
  }
}
