import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        {/*Catalogo principal de productos*/}
        <Route path="/" element={<ItemListContainer />} /> 

        {/*Catálogo de productos filtrados por categorías */}
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        {/* Vista en detalle de un producto */}
        <Route path="/item/:id" element={<ItemListContainer />} />

        {/* Ruta de tipo “404” */}
        <Route path="*"  element={<h2>404 - Página no encontrada</h2>}/>

      </Routes>
    </>
  );
}

export default App;
