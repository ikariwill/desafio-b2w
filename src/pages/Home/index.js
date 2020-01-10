import React from 'react';

// import { Container } from './styles';

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Desafio Star Wars</h1>
      <Link to="/planets" />Start</Link>
    </div>
  );
}
