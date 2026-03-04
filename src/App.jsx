import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Routes, Route, Link } from "react-router-dom";
import Cart from './components/Cart/Cart';
import CheckoutForm from "./components/Cart/CheckoutForm";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="*"  element={
                                  <div style={{ textAlign: "center", padding: "60px" }}>
                                    <h2>404 - Página no encontrada</h2>
                                    <p>La página que buscás no existe.</p>
                                    <Link to="/">
                                        <button>Volver al inicio</button>
                                    </Link>
                                  </div>}/>
      </Routes>
    </> 
  )
};

export default App;
