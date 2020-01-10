import React, { useState, useEffect } from 'react';

import api from '../../services/api';

export default function Planets() {
  const [planet, setPlanet] = useState({});
  const [filmsNumber, setFilmsNumber] = useState(0);
  const [selectedPlanet, setSelectedPlanet] = useState(randomizeNumber());

  useEffect(() => {
    async function getPlanet() {
      const response = await api.get(`planets/${selectedPlanet}`);
      
      setPlanet(response.data);
      setFilmsNumber(response.data.films.length);
    }

    getPlanet();
  }, [selectedPlanet]);

  function refreshPlanet() {
    setSelectedPlanet(randomizeNumber());
  }

  function randomizeNumber() {
    return Math.floor(Math.random() * 60) + 1;
  }

  return (
    <div>
      <h1>PLANET</h1>
      <h1>{planet.name}</h1>

      <ul>
        <li>
          <span>CLIMATE: </span>
          <span>{planet.climate}</span>
        </li>
        <li>
          <span>GRAVITY: </span>
          <span>{planet.gravity}</span>
        </li>
        <li>
          <span>POPULATION: </span>
          <span>{planet.population}</span>
        </li>
        <li>
          <span>TERRAIN: </span>
          <span>{planet.terrain}</span>
        </li>
        <li>
          <span>DIAMETER</span>
          <span>{planet.diameter}</span>
        </li>
      </ul>
      <p>Featured in {filmsNumber} films</p>
      <button onClick={refreshPlanet}>Next</button>
    </div>
  );
}
