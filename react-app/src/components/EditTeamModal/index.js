import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './EditTeamModal.css';
import { editTeams } from '../../store/teams';

function EditTeamModal({ id, teamName, teamSummary }) {
  const dispatch = useDispatch();
  console.log(teamName);
  const [editTeamName, setEditTeamName] = useState(teamName);
  const [editTeamSummary, setEditTeamSummary] = useState(teamSummary);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      id: id,
      teamName: editTeamName,
      teamSummary: editTeamSummary,
    };
    dispatch(editTeams(payload));
    closeModal();
  };

  return (
    <>
      <div className="modal-container">
        <h1 className="modal-h1">Edit Your Team</h1>
        <form className="modal-form-container" onSubmit={handleSubmit}>
          <h4 className="modal-h4">Team Name:</h4>
          <input
            type="text"
            value={editTeamName}
            onChange={(e) => setEditTeamName(e.target.value)}
            required
          />
          <h4 className="modal-h4">Team Summary:</h4>
          <textarea
            value={editTeamSummary}
            onChange={(e) => setEditTeamSummary(e.target.value)}
            required
          />
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </>
  );
}

export default EditTeamModal;
