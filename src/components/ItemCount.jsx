import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(stock);

    const sumar = () => {
        if(count < stock){
            setCount(count + 1)
        }
    };

    const restar = () => {
        if(count > initial){
            setCount(count - 1)
        }
    };

    return (
        <div style={{ marginTop: "20px" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <button onClick={restar}>-</button>
                <span>{count}</span>
                <button onClick={sumar}>+</button>
            </div>

            <button
                style={{ marginTop: "10px" }}
                onClick={() => onAdd(count)}
            >
                Agregar al carrito
            </button>
        </div>
  );

}

export default ItemCount;