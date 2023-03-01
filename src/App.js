import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaRecetas from "./components/ListaRecetas";
import CategoriasProvider from "./context/CategoriaContext";
import ModalProvider from "./context/ModalContext";
import RecetaProvider from "./context/RecetaContext";

function App() {
  return (
    <CategoriasProvider>
      <RecetaProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <ListaRecetas />
          </div>
        </ModalProvider>
      </RecetaProvider>
    </CategoriasProvider>
  );
}

export default App;
