import { useState } from "react";
import { useCart } from "../Context/CartContext"

const ItemCount = ({stock, initial = 1, onAdd, itemId}) => {
    const [count, setCount] = useState(initial);
    const { getQuantityInCart } = useCart();

    //Stock real = stock total - lo que esta en el carrito
    const cantidadEnCarrito = getQuantityInCart(itemId)
    const stockDisponible = stock - cantidadEnCarrito

    const sumar = () => {
        if(count < stockDisponible){
            setCount(count + 1)
        }
    };

    const restar = () => {
        if(count > 1){
            setCount(count - 1);
        }
    }
    //Si no hay stock, muestro msj
    if (stock <= 0) {
        return <p style={{ color: "red" }}>Sin stock disponible</p>;
    }

    return (
        <div style={{ marginTop: "20px" }}>

            {/* <p style={{ fontSize: "14px", color: "#666" }}>
                Stock disponible: {stockDisponible} unidades
            </p> */}

            {count === stockDisponible && (
                <p style={{ color: "orange", fontSize: "12px" }}>
                    Máximo disponible: {stockDisponible} unidades
                </p>
            )}

            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>

                {/* El botón se deshabilitada cuando count es 1 */}
                <button 
                    onClick={restar}
                    disabled={count === 1}
                    style={{ opacity: count === 1 ? 0.5 : 1 }}
                >
                    -
                </button>

                <span>{count}</span>

                {/* El botón + queda deshabilitado cuando se llega al stock máximo */}
                <button 
                    onClick={sumar}
                    disabled={count === stockDisponible}
                    style={{ opacity: count === stockDisponible ? 0.5 : 1 }}
                >
                    +
                </button>

            </div>

            {/* Validación: no puede agregar si count es 0 */}
            <button
                style={{ marginTop: "10px" }}
                onClick={() => onAdd(count)}
                disabled={count === 0}
            >
                Agregar al carrito
            </button>

        </div>
    );

}

export default ItemCount;