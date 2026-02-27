import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const sumar = () => {
        if(count < stock){
            setCount(count + 1)
        }
    };

    // const restar = () => {
    //     if(count > initial){
    //         setCount(count - 1)
    //     }
    // };
    const restar = () => {
        if(count > 1){
            setCount(count - 1);
        }
    }
    //Si no hay stock, muestro msj
    if (stock === 0) {
        return <p style={{ color: "red" }}>Sin stock disponible</p>;
    }

//     return (
//         <div style={{ marginTop: "20px" }}>
//             <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
//                 <button onClick={restar}>-</button>
//                 <span>{count}</span>
//                 <button onClick={sumar}>+</button>
//             </div>

//             <button
//                 style={{ marginTop: "10px" }}
//                 onClick={() => onAdd(count)}
//             >
//                 Agregar al carrito
//             </button>
//         </div>
//   );

    return (
        <div style={{ marginTop: "20px" }}>

            {/* Mensaje cuando se llega al límite de stock */}
            {count === stock && (
                <p style={{ color: "orange", fontSize: "12px" }}>
                    Máximo disponible: {stock} unidades
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
                    disabled={count === stock}
                    style={{ opacity: count === stock ? 0.5 : 1 }}
                >
                    +
                </button>

            </div>

            {/* Validación: no puede agregar si count es 0 */}
            <button
                style={{ marginTop: "10px" }}
                onClick={() => {
                    if (count > 0) {
                        onAdd(count);
                    }
                }}
                disabled={count === 0}
            >
                Agregar al carrito
            </button>

        </div>
    );

}

export default ItemCount;