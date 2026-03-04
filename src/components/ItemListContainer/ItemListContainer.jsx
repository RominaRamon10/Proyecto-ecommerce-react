import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { services } from "../../services";
import { Link } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    
    const promiseProduct = categoryId
    ? services.firestore.products.getProductsByCategory(categoryId)
    : services.firestore.products.getProducts();

    promiseProduct
      .then((response) => {
        if (response.success) setItems(response.data);
      })
      .catch(() => setError("Hubo un error al cargar los productos"))
      .finally(()=> setLoading(false));
  }, [categoryId]);

  if (loading) {
    return <h3>Cargando productos...</h3>;
  }

  if (error) return (
      <div style={{ textAlign: "center", padding: "60px" }}>
          <h3 style={{ color: "red" }}>❌ {error}</h3>
          <Link to="/">
              <button>Volver al catálogo</button>
          </Link>
      </div>
  )

  if (items.length === 0) return <h3>No hay productos en esta categoría</h3>


  return (
    <div className="container mt-4">
      <h2>Catálogo de productos</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
