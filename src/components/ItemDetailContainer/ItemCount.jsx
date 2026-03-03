import { useState } from "react"

const ItemCount = ({ stock, initial = 1, onAdd }) => {
    const [count, setCount] = useState(initial)

    const sumar = () => {
        if (count < stock) setCount(count + 1)
    }

    const restar = () => {
        if (count > 1) setCount(count - 1)
    }

    if (stock === 0) {
        return <p style={{ color: "red" }}>❌ Sin stock disponible</p>
    }

    return (
        <div style={{ marginTop: "20px" }}>

            <p style={{ fontSize: "14px", color: "#666" }}>
                Stock disponible: {stock} unidades
            </p>

            {count === stock && (
                <p style={{ color: "orange", fontSize: "12px" }}>
                    Máximo disponible: {stock} unidades
                </p>
            )}

            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <button
                    onClick={restar}
                    disabled={count === 1}
                    style={{ opacity: count === 1 ? 0.5 : 1 }}
                >
                    -
                </button>

                <span>{count}</span>

                <button
                    onClick={sumar}
                    disabled={count === stock}
                    style={{ opacity: count === stock ? 0.5 : 1 }}
                >
                    +
                </button>
            </div>

            <button
                style={{ marginTop: "10px" }}
                onClick={() => onAdd(count)}
            >
                Agregar al carrito
            </button>

        </div>
    )
}

export default ItemCount