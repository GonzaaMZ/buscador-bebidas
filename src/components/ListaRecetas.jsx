import { useContext } from "react";
import { RecetaContext } from "../context/RecetaContext";
import Receta from "./Receta";

const ListaRecetas = () => {

    const {recetas} = useContext(RecetaContext);

    return ( 
        <div className="row mt-5">
            {recetas.map(receta => (
                <Receta
                key={receta.idDrink}
                receta={receta}/>
            ))}
        </div>
    );
}
 
export default ListaRecetas;