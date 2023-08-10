import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { deletePokemons } from '../../store/pokemon';
import { useHistory } from 'react-router-dom';

function DeletePokemonModal({ id }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      id: id,
    };
    dispatch(deletePokemons(payload));
    history.push('/pokemon');

    closeModal();
  };

  return (
    <>
      <div className="delete-modal-container">
        <form>
          <h1 className="modal-h1">Confirm Release</h1>
          <p>Are you sure you would like to release this pokemon?</p>
          <button type="submit" className="gen-button" onClick={handleSubmit}>
            Release Pokemon
          </button>
        </form>
      </div>
    </>
  );
}

export default DeletePokemonModal;
