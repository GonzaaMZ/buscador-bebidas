import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Receta = ({ receta }) => {
  const { recetaInfo, setIdreceta, setReceta } = useContext(ModalContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const mostrarIngredientes = informacion => {
    let ingredientes = [];
    for (let i = 1; i < 16; i++) {
      if (informacion[`strIngredient${i}`]) {
        ingredientes.push(
          <li>
            {informacion[`strIngredient${i}`]}: {informacion[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredientes;
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>
        <img
          src={receta.strDrinkThumb}
          alt={`Img de ${receta.strDrink}`}
          className="card-img-top"
        />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={() => {
              setIdreceta(receta.idDrink);
              handleOpen();
            }}
          >
            Ver Receta
          </button>
          <Modal
            open={open}
            onClose={() => {
              setIdreceta(null);
              setReceta({});
              handleClose();
            }}
          >
            <Box sx={style}>
              <h2>{recetaInfo.strDrink}</h2>
              <h3 className="mt-4">Instrucciones</h3>
              <p>{recetaInfo.strInstructions}</p>
              <img
                src={recetaInfo.strDrinkThumb}
                className="img-fluid my-4"
                alt={receta.strDrink}
              />
              <h3>Ingredientes y Cantidades</h3>
              <ul>{mostrarIngredientes(recetaInfo)}</ul>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Receta;
