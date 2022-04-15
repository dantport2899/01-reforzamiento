import { useEffect, useRef, useState } from 'react';
import { reqqResapi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const useUsuarios = () => {

    const [usuario, setusuarios] = useState<Usuario[]>([])
    const paginaref = useRef(0);

    useEffect(() => {
       cargaUsuarios();
    }, []);

    const cargaUsuarios = async() => {
         //llamado al api promesa y se le asigna la interfaz
         const resp = await reqqResapi.get<ReqResListado>('/users',{
             params: {
                 page: paginaref.current
             }
         });

         if (resp.data.data.length > 0){
            setusuarios(resp.data.data);
         }else{
            paginaref.current--; 
             alert('No hay mas registros');
         }
    }

    const paginasiguiente = async() => {
        paginaref.current++; 
        cargaUsuarios();
    }

    const paginaanterior = async() => {
        if (paginaref.current > 1) {
            paginaref.current--;
            cargaUsuarios();
        }
    }

    return {
        usuario,
        paginasiguiente,
        paginaanterior
    }
}
