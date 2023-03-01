import { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriaContext";
import { RecetaContext } from "../context/RecetaContext";

const Formulario = () => {

    const { categorias } = useContext(CategoriasContext);
    const {buscarRecetas, setConsultar} = useContext(RecetaContext);

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const actualizarState = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    return ( 
            <form 
            className="col-12"
            onSubmit={e => {
                e.preventDefault();
                buscarRecetas(busqueda);
                setConsultar(true);
            }}
            >
                <fieldset className="text-center">
                    <legend>Busca bebidas por Categoria o Ingrediente</legend>
                </fieldset>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <input 
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Busca por Ingrediente"
                        onChange={actualizarState}
                        />
                    </div>
                    <div className="col-md-4">
                        <select 
                        name="categoria"
                        className="form-control"
                        onChange={actualizarState}
                        >
                            <option value="">-- Seleccione Categoria --</option>
                            {categorias.map(categoria => (
                                <option
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                                >
                                    {categoria.strCategory}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <input
                         type="submit"
                         className="btn btn-block btn-primary"
                         value="Buscar Bebidas"
                         />
                    </div>
                </div>
            </form>
        );
}
 
export default Formulario;