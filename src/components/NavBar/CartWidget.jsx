import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom"
import { useCart } from "../Context/CartContext";

const CartWidget = () => {
    const { getTotalQuantity } = useCart();
    const cantidad = getTotalQuantity();

      // return (
      //   <div className="position-relative">
      //     <i className="bi bi-cart3 fs-4 text-white"></i>
      //     <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      //       3
      //     </span>
      //   </div>
      // );
      return (
        <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ position: "relative", display: "inline-block" }}>

                {/* Ícono del carrito */}
                🛒

                {/* Número de productos - solo se muestra si hay algo */}
                {cantidad > 0 && (
                    <span style={{
                        position: "absolute",
                        top: "-8px",
                        right: "-8px",
                        background: "red",
                        color: "white",
                        borderRadius: "50%",
                        padding: "2px 6px",
                        fontSize: "12px",
                        fontWeight: "bold"
                    }}>
                        {cantidad}
                    </span>
                )}
            </div>
        </Link>
      )

};

export default CartWidget;
