import React, { useState } from "react";
import "./App.css";
import PerfilUsuario from "./PerfilUsuario";

function App(props: any): React.ReactNode {
  const [count, setCount] = useState<number>(0);

  console.log(props);

  return (
    <>
      {count} <br />
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>reset</button>

      <br />

      <PerfilUsuario 
        nome="Max"
        idade={12}
        sexo="masculino"
      />
    </>
  );
}

export default App;
