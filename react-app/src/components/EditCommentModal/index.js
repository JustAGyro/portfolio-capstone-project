import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './EditCommentModal.css';
import { useHistory } from 'react-router-dom';
import { loadAllComments } from '../../store/comments';
import { editComment } from '../../store/comments';

function EditCommentModal({ id, commentText }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [text, setText] = useState(commentText);
  const { closeModal } = useModal();

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      commentText: text,
    };
    dispatch(editComment(id, payload));

    closeModal();
  };

  return (
    <>
      <div className="modal-container">
        <h1 className="modal-h1">Edit your thoughtss</h1>
        <form className="modal-form-container" onSubmit={handleEditSubmit}>
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

export default EditCommentModal;
