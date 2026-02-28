// import 'bootstrap-icons/font/bootstrap-icons.css';
// import { Link } from "react-router-dom"
// import { useCart } from "../Context/CartContext";

// const CartWidget = () => {
//     const { getTotalQuantity } = useCart();
//     const cantidad = getTotalQuantity();

//       return (
//         <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
//             <div style={{ position: "relative", display: "inline-block" }}>

//                 {/* Ícono del carrito */}
//                 🛒

//                 {/* Número de productos - solo se muestra si hay algo */}
//                 {cantidad > 0 && (
//                     <span style={{
//                         position: "absolute",
//                         top: "-8px",
//                         right: "-8px",
//                         background: "red",
//                         color: "white",
//                         borderRadius: "50%",
//                         padding: "2px 6px",
//                         fontSize: "12px",
//                         fontWeight: "bold"
//                     }}>
//                         {cantidad}
//                     </span>
//                 )}
//             </div>
//         </Link>
//       )

// };

// export default CartWidget;


//////////////////
import { useNavigate } from "react-router-dom"
import { Button } from "primereact/button"
import { Badge } from "primereact/badge"
import { useCart } from "../Context/CartContext"

const CartWidget = () => {
    const { getTotalQuantity } = useCart()
    const cantidad = getTotalQuantity()
    const navigate = useNavigate()

    return (
        <div style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>

            <Button
                icon="pi pi-shopping-cart"
                rounded
                text
                onClick={() => navigate("/cart")}
                style={{
                    color: "#1a3c4e",
                    fontSize: "22px",
                    width: "42px",
                    height: "42px"
                }}
            />

            {/* Solo aparece si hay productos en el carrito */}
            {cantidad > 0 && (
                <Badge
                    value={cantidad}
                    severity="danger"
                    style={{
                        position: "absolute",
                        top: "-4px",
                        right: "-4px",
                        fontSize: "11px",
                        minWidth: "20px",
                        height: "20px"
                    }}
                />
            )}

        </div>
    )
}

export default CartWidget
