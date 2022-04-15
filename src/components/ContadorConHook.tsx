import { UseCounter } from '../hooks/UseCounter';

export const ContadorConHook = () => {

  const {valor, acumular} = UseCounter(10);

  return (
    <div>
      <h3>
        Contador con Hook: <small>{valor}</small>
      </h3>
      <button className="btn btn-primary" onClick={()=>acumular(1)}>+1</button>
      &nbsp; {/* generar un estacio */}
      <button className="btn btn-primary" onClick={()=>acumular(-1)}>-1</button>
    </div>
  );
};
