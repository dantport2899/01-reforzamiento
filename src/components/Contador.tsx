import { useState } from "react";

export const Contador = () => {
  const [valor, setvalor] = useState(0);

  const acumular = (numero:number) => {
    setvalor(valor + numero);
  }

  return (
    <div>
      <h3>
        Contador: <small>{valor}</small>
      </h3>
      <button className="btn btn-primary" onClick={()=>acumular(1)}>+1</button>
      &nbsp; {/* generar un estacio */}
      <button className="btn btn-primary" onClick={()=>acumular(-1)}>-1</button>
    </div>
  );
};
