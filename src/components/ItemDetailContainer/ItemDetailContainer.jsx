import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { services } from "../../services";
import { Link } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        services.firestore.products.getProductById(id)
            .then((response) => {
                //Cuando obtengo los datos de la llamada a firestore, seteo item
                if(response.success){
                    setItem(response.data);
                } else {
                    setError("No se encontró el producto")
                }

            })
            .catch(() => setError("Hubo un error al cargar el producto"))
            .finally(() => setLoading(false))
    },[id]);

    if (loading) return <h3>Cargando producto...</h3>

    if (error) return (
        <div style={{ textAlign: "center", padding: "60px" }}>
            <h3 style={{ color: "red" }}>❌ {error}</h3>
            <Link to="/">
                <button>Volver al catálogo</button>
            </Link>
        </div>
    )

    if (!item) return (
        <div style={{ textAlign: "center", padding: "60px" }}>
            <h3>Producto no encontrado</h3>
            <Link to="/">
                <button>Volver al catálogo</button>
            </Link>
        </div>
    )

    return(
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
};

export default ItemDetailContainer;