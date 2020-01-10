import React from 'react';

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Desafio Star Wars</h1>
      <button>
        <Link to="/planets">Start</Link>
      </button>
    </div>
  );
}
