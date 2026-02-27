import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const ItemDetail = ({item}) => {
    //para controlar que mostrar
    const [agregado, setAgregado] = useState(false);
    const {addItem} = useCart();

    const handleAdd = (cantidad) => {
        addItem(item, cantidad);
        setAgregado(true);
    }

    return(
        <div>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
            <p>{item.description}</p>
            <p>${item.price}</p>
            <p>Stock disponible: {item.stock}</p>

            {/* Renderizado condicional*/}
            {
                agregado
                ? (
                    // Cuando ya agregó el producto al carrito, se muestra esto
                    <div>
                        <p style={{ color: "green" }}>✅ Producto agregado al carrito</p>
                        <Link to="/cart">
                            <button>Ir al carrito</button>
                        </Link>
                        <Link to="/">
                            <button>Seguir comprando</button>
                        </Link>
                    </div>
                )
                : (
                    // Cuando todavía no agregó el producto al carrito, muestra el ItemCount
                    <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} itemId={item.id} />
                )
            }
        </div>
    )
};

export default ItemDetail;