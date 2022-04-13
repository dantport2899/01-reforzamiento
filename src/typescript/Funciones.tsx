export const Funciones = () => {

    const sumar = (a:number, b:number):number => {
        return a + b * a;
    }

  return (
    <div>
        <h3>Funciones</h3>
        <span>El resultado es: {sumar(1,4)}</span>
    </div>
  )
}
