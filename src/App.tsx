import { TiposBasicos } from "./typescript/TiposBasicos";
import { ObjetosLiterales } from './typescript/ObjetosLiterales';
import { Funciones } from "./typescript/Funciones";

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduccion a TS - React</h1>
      <hr />
      {/* <TiposBasicos></TiposBasicos> */}
      {/* <ObjetosLiterales></ObjetosLiterales> */}
      <Funciones></Funciones>
</div>
  )
}
export default App;