
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { services } from "../services";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItems] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        services.firestore.products.getProductById(id)
        //services.mocks.products.getProductById(id)
            .then((response) => {
                if(response.success) setItems(response.data);

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