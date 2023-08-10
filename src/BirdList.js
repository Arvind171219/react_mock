import React, { useState } from 'react';

function BirdList() {
  const [birds, setBirds] = useState([]);
  const [birdName, setBirdName] = useState('');

  const addBird = () => {
    if (birdName.trim() !== '') {
      setBirds([...birds, { name: birdName, likes: 0 }]);
      setBirdName('');
    }
  };

  const likeBird = (index) => {
    const updatedBirds = birds.map((bird, i) =>
      i === index ? { ...bird, likes: bird.likes + 1 } : bird
    );
    setBirds(updatedBirds);
  };

  return (
    <div>
      <h1>Bird List</h1>
      <input
        type="text"
        placeholder="Enter bird name"
        value={birdName}
        onChange={(e) => setBirdName(e.target.value)}
      />
      <button onClick={addBird}>Add Bird</button>
      <ul>
        {birds.map((bird, index) => (
          <li key={index}>
            {bird.name} - Likes: {bird.likes}
            <button onClick={() => likeBird(index)}>Like</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BirdList;
