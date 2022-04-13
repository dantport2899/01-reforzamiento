export const TiposBasicos = () => {
    let nombre:string | number = 'Dante';
    const edad: number = 22;
    const estaActivo = true;
    const poderes:string[] = [];//'Velocidad', 'Volar', 'Respirar en el agua'];


  return (
    <div>
        <h3>Tipos basicos</h3>
        {nombre} - {edad} años - { (estaActivo) ? 'Activo' : 'No Activo'}
        <br />
        {/* ?\ como mostrar un arreglo en lista y separado por un elemento */}
        {poderes.join(', ')}   
    </div>
  )
}
