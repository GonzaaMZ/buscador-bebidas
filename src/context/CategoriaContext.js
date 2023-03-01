import axios from "axios";
import { createContext, useEffect, useState } from "react";

//Crear el context
export const CategoriasContext = createContext();

//Provider es donde se encuetran las funciones y state

const CategoriasProvider = (props) => {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
            const response = await axios.get(url);
            setCategorias(response.data.drinks);
        }
        getCategories()
    }, []);

    return (
        <CategoriasContext.Provider
        value={{
            categorias
        }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;