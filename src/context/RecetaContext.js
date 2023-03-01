import axios from "axios";
import { createContext, useEffect, useState } from "react";

//Creacion del context
export const RecetaContext = createContext();

//Creacion de la func provider donde se retorna las funciones y el state
const RecetaProvider = (props) => {
    const [busqueda, buscarRecetas] = useState({
        nombre: '',
        categoria: ''
    })
    const [recetas, setRecetas] = useState([]);
    const [consultar, setConsultar] = useState(false);

    const {nombre, categoria} = busqueda

    useEffect(() => {
        if(consultar){
            const obtenerRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
                const response = await axios.get(url);
                setRecetas(response.data.drinks);
            }
            obtenerRecetas();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [busqueda])


    return (
        <RecetaContext.Provider
        value={{
            recetas,
            buscarRecetas,
            setConsultar
        }}
        >
            {props.children}
        </RecetaContext.Provider>
    )
}

export default RecetaProvider;