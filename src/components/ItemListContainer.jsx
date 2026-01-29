import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { services } from "../services";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  
  //ver si funciona
  useEffect(() => {
    services.mocks.products.getProductsByCategory(categoryId)
      .then((response) => {
        if(response.success) setItems(response.data);
      })
      .catch(error => console.log(error))
  },[categoryId])

  return (
    <div>
      <h2>Catálogo</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
