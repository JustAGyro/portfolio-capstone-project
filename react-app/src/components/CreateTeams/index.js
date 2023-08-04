import React, { useEffect, useState } from 'react';
import './CreateTeams.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function CreateTeams() {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchPokemon();
    console.log('AHHHHHH');
  }, []);

  const fetchPokemon = () => {
    fetch(`/api/pokemon/search`)
      .then((response) => response.json())
      .then((data) => setResults(data.results));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSelectChange = (event) => {
    const selectedName = event.target.value;
    const selectedObject = results.find((item) => item.name === selectedName);
    setSelectedItem(selectedObject);
  };

  const filteredResults = results.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log(results);
  return (
    <>
      <div className="create-teams-container">
        <h1>Hi this is the beginning of the create form woo</h1>
        <h2>this is just so my thing doesnt bork</h2>
        <div className="create-teams-search">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search Pokémon"
          />
          <select
            value={selectedItem ? selectedItem.name : ''}
            onChange={handleSelectChange}
          >
            <option value="">Select a Pokémon</option>
            {filteredResults.map((pkmn) => (
              <option key={pkmn.name} value={pkmn.name}>
                {pkmn.name.charAt(0).toUpperCase() + pkmn.name.slice(1)}
              </option>
            ))}
          </select>

          {selectedItem && (
            <div>
              <h3>Selected Pokémon:</h3>
              <p>Name: {selectedItem.name}</p>
              {/* Add more details about the selected item here */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CreateTeams;
