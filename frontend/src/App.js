import React, { useState } from 'react';
import Header from './header';

function App() {
  const [contador, contar] = useState(0);

  function Incrementar() {
    contar(contador + 1);
  }

  return (
    <div>
      <Header name="SemanaOmniStack" />
      <b>Contador:</b>{contador}
      <p></p>
      <button onClick={Incrementar}>Incrementar</button>
    </div>
  );
}

export default App;
