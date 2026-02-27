import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import CartItem from "./CartItem"

const Cart = () => {
    const { cart, clearCart, getTotalPrice, getTotalQuantity } = useCart()

    // Renderizado condicional - carrito esta vacío
    if (cart.length === 0) {
        return (
            <div style={{ textAlign: "center", padding: "40px" }}>
                <p>🛒 Tu carrito está vacío</p>
                <Link to="/">
                    <button>Ver productos</button>
                </Link>
            </div>
        )
    }

    // Cuando el arrito tiene productos
    return (
        <div style={{ padding: "20px" }}>
            <h2>Tu carrito</h2>

            {/* Lista de productos */}
            {cart.map(item => (
                <CartItem key={item.id} item={item} />
            ))}

            {/* Resumen final */}
            <div style={{ marginTop: "20px", textAlign: "right" }}>
                <p>Total de productos: {getTotalQuantity()}</p>
                <h3>Total: ${getTotalPrice()}</h3>

                <button
                    onClick={clearCart}
                    style={{ marginRight: "10px", color: "red" }}
                >
                    Vaciar carrito
                </button>

                <Link to="/checkout">
                    <button>Finalizar compra</button>
                </Link>
            </div>
        </div>
    )
}

export default Cart