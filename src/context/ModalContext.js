import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = (props) => {
    
    const [idreceta, setIdreceta] = useState(null);
    const [recetaInfo, setReceta] = useState({});

    useEffect(() => {
        const obtenerReceta = async () => {
            if(!idreceta) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
            const response = await axios.get(url);
            setReceta(response.data.drinks[0]);
        }
        obtenerReceta();
    }, [idreceta])

    
    return (
        <ModalContext.Provider
            value={{
                recetaInfo,
                setIdreceta,
                setReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;