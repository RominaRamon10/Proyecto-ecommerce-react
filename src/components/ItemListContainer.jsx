import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { services } from "../services";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promiseProduct = categoryId
    ? services.mocks.products.getProductsByCategory(categoryId)
    : services.mocks.products.getProducts();

    promiseProduct
      .then((response) => {
        if (response.success) setItems(response.data);
      })
      .catch(error => console.log(error))
      .finally(()=> setLoading(false));

  }, [categoryId]);

  if (loading) {
    return <h3>Cargando productos...</h3>;
  }

  if (items.length === 0) {
    return <h3>No hay productos en esta categoría</h3>;
  }

  return (
    <div className="container mt-4">
      <h2>Catálogo</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
