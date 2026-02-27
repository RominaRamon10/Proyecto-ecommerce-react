
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { services } from "../../services";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        services.firestore.products.getProductById(id)
            .then((response) => {
                //Cuando obtengo los datos de la llamada a firestore, seteo item
                if(response.success) setItem(response.data);

            })
            .catch(error => console.log(error))
    },[id]);

    return(
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
};

export default ItemDetailContainer;