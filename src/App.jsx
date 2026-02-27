import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';
import CheckoutForm from "./components/Cart/CheckoutForm";

function App() {
  return (
  
    // <>
    //   <NavBar />

    //   <Routes>
    //     {/*Catalogo principal de productos*/}
    //     <Route path="/" element={<ItemListContainer />} /> 

    //     {/*Catálogo de productos filtrados por categorías */}
    //     <Route path="/category/:categoryId" element={<ItemListContainer />} />

    //     {/* Vista en detalle de un producto */}
    //     <Route path="/item/:id" element={<ItemDetailContainer />} />

    //     {/* Ruta de tipo “404” */}
    //     <Route path="*"  element={<h2>404 - Página no encontrada</h2>}/>

    //   </Routes>
    // </>

    <>
      
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="*"  element={<h2>404 - Página no encontrada</h2>}/>
      </Routes>
    </> 
  )
};

export default App;
