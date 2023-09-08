import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';

import { useHistory } from 'react-router-dom';
import { deleteComments, loadAllComments } from '../../store/comments';

function DeleteCommentModal({ id }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      id: id,
    };
    dispatch(deleteComments(payload));
    closeModal();
  };

  return (
    <>
      <div className="delete-modal-container">
        <form>
          <h1 className="modal-h1">Confirm Deletion</h1>
          <p>Are you sure you would like to delete this comment?</p>
          <button type="submit" className="gen-button" onClick={handleSubmit}>
            Delete Comment
          </button>
        </form>
      </div>
    </>
  );
}

export default DeleteCommentModal;
