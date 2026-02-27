import { useCart } from "../Context/CartContext";

const CartItem = ({item}) => {
    const { removeItem } = useCart();
    return (
        <div style={{ display: "flex", gap: "20px", alignItems: "center", borderBottom: "1px solid #ccc", padding: "10px 0" }}>
            <img src={item.image} alt={item.title} style={{ width: "80px", height: "80px", objectFit: "cover" }} />

            <div style={{ flex: 1 }}>
                <h4>{item.title}</h4>
                <p>Precio unitario: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Subtotal: ${item.price * item.quantity}</p>
            </div>

            <button
                onClick={() => removeItem(item.id)}
                style={{ color: "red" }}
            >
                Eliminar
            </button>
        </div>
    )
}
export default CartItem;