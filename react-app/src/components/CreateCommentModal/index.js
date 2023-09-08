import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './CreateCommentModal.css';
import { newComment } from '../../store/comments';
import { useHistory } from 'react-router-dom';
import { loadAllComments } from '../../store/comments';

function CreateCommentModal({ teamId }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [text, setText] = useState('');
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      teamId: teamId,
      commentText: text,
    };
    dispatch(newComment(payload));
    closeModal();
    history.push('/');
  };

  return (
    <>
      <div className="modal-container">
        <h1 className="modal-h1">Share your thoughts</h1>
        <form className="modal-form-container" onSubmit={handleSubmit}>
          <h4 className="modal-h4">Comment</h4>
          <textarea
            className="modal-textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <button className="gen-button" type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateCommentModal;
