import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './DeleteTeamModal.css';
import { deleteTeams } from '../../store/teams';

function DeleteTeamModal({ id, teamName, teamSummary }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      id: id,
      teamName: teamName,
      teamSummary: teamSummary,
    };
    dispatch(deleteTeams(payload));
    closeModal();
  };

  return (
    <>
      <div className="delete-modal-container">
        <h1 className="modal-h1">Confirm Deletion</h1>
        <p>Are you sure you would like to delete this team?</p>
        <button className="gen-button" onClick={handleSubmit}>
          Save Changes
        </button>
      </div>
    </>
  );
}

export default DeleteTeamModal;
