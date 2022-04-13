interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion{
    pais: string;
    casa: number;
}

export const ObjetosLiterales = () => {
  
    const persona: Persona = {
        nombre: 'Dante',
        edad: 22,
        direccion: {
            pais: 'Mexico',
            casa: 235
        }
    }
  
    return (
    <div>
        <h3>Objetos literales</h3>
        <code>
            <pre>
                {JSON.stringify(persona, null,2)}
            </pre>
        </code>
    </div>
  )
}
