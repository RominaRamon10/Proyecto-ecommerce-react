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
