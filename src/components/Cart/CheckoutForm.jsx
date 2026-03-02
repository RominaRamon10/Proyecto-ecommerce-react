import { useState } from "react"
import { useCart } from "../Context/CartContext"
import { services } from "../../services"

const CheckoutForm = () => {
    const { cart, getTotalPrice, clearCart } = useCart()

    //Estado del formulario
    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        email: "",
        emailConfirm: "",
        telefono: ""
    })

    //Estado del proceso
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)   // guarda el id de la orden
    const [error, setError] = useState(null)

    //Actualiza cada campo del formulario
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    //Validaciones antes de enviar
    const validarFormulario = () => {
        if (!form.nombre || !form.apellido || !form.email || !form.telefono) {
            setError("Todos los campos son obligatorios")
            return false
        }
        if (form.email !== form.emailConfirm) {
            setError("Los emails no coinciden")
            return false
        }
        return true
    }

    //Enviar la orden a Firebase
    const handleSubmit = async () => {

        if (!validarFormulario()) return

        setLoading(true)
        setError(null)


        ///////
        console.log("1. Verificando stock...")
        // 1. Verificar stock antes de procesar la compra
        const stockCheck = await services.firestore.products.checkStock(cart)
        console.log("2. Resultado stock:", stockCheck)

        if (!stockCheck.success) {
            // Muestra todos los productos con problemas de stock
            setError(stockCheck.errores)
            setLoading(false)
            return  // ← no continúa con la compra
        }
        // 2. Si hay stock, crear la orden
        console.log("3. Creando orden...")
        const orden = {
            comprador: {
                nombre: form.nombre,
                apellido: form.apellido,
                email: form.email,
                telefono: form.telefono
            },
            productos: cart.map(item => ({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity,
                subtotal: item.price * item.quantity
            })),
            total: getTotalPrice(),
            estado: "pendiente"
        }
        console.log("4. Orden armada:", orden)
        const orderResponse = await services.firestore.products.createOrder(orden)
        console.log("5. Respuesta de Firebase:", orderResponse)

        if (orderResponse.success) {
            console.log("6. Actualizando stock...")
            // 3. Descontar stock en Firebase
            await services.firestore.products.updateStock(cart)
            console.log("7. Stock actualizado. OrderId:", orderResponse.orderId)
            setOrderId(orderResponse.orderId)
            clearCart()
        } else {
            setError(["Hubo un error al procesar la compra. Intentá de nuevo."])
        }

        setLoading(false)
    
        ///////////
    //     const orden = {
    //         comprador: {
    //             nombre: form.nombre,
    //             apellido: form.apellido,
    //             email: form.email,
    //             telefono: form.telefono
    //         },
    //         productos: cart.map(item => ({
    //             id: item.id,
    //             title: item.title,
    //             price: item.price,
    //             quantity: item.quantity,
    //             subtotal: item.price * item.quantity
    //         })),
    //         total: getTotalPrice(),
    //         estado: "pendiente"
    //     }

    //     const orderResponse = await services.firestore.products.createOrder(orden);

    //     if (orderResponse.success) {
    //         await services.firestore.products.updateStock(cart) //actualizo el stock en firebase
    //         setOrderId(orderResponse.orderId)  //guardo el id para mostrárselo al usuario
    //         clearCart()                   //vacío el carrito
    //     } else {
    //         setError("Hubo un error al procesar la compra. Intentá de nuevo.")
    //     }

    //     setLoading(false)
    }

    // Si la orden se generó, muestra el mensaje de éxito con el ID
    if (orderId) {
        return (
            <div style={{ textAlign: "center", padding: "40px" }}>
                <h2>✅ ¡Gracias por tu compra!</h2>
                <p>Tu orden fue generada con éxito.</p>
                <p>El número de tu orden es:</p>
                <h3 style={{
                    background: "#f0f0f0",
                    padding: "10px",
                    borderRadius: "8px",
                    fontFamily: "monospace"
                }}>
                    {orderId}
                </h3>
                <p style={{ fontSize: "14px", color: "#666" }}>
                    Guardá este número para hacer el seguimiento de tu pedido.
                </p>
            </div>
        )
    }

    // Formulario
    return (
        <div style={{ maxWidth: "500px", margin: "40px auto", padding: "20px" }}>
            <h2>Finalizar compra</h2>

            {/* Resumen de la compra */}
            <div style={{ background: "#f9f9f9", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
                <h4>Resumen</h4>
                {cart.map(item => (
                    <p key={item.id}>
                        {item.title} x{item.quantity} — ${item.price * item.quantity}
                    </p>
                ))}
                <hr />
                <strong>Total: ${getTotalPrice()}</strong>
            </div>

            {/* Campos del formulario */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre *"
                    value={form.nombre}
                    onChange={handleChange}
                    style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
                />

                <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido *"
                    value={form.apellido}
                    onChange={handleChange}
                    style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={form.email}
                    onChange={handleChange}
                    style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
                />

                <input
                    type="email"
                    name="emailConfirm"
                    placeholder="Confirmar email *"
                    value={form.emailConfirm}
                    onChange={handleChange}
                    style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
                />

                <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono *"
                    value={form.telefono}
                    onChange={handleChange}
                    style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
                />
                
                {/* Mensaje de error 
                {error && (
                    <p style={{ color: "red", fontSize: "14px" }}>{error}</p>
                )} */}

                {/* Mensajes de error de stock */}
                {error && (
                    <div style={{
                        backgroundColor: "#fff3f3",
                        border: "1px solid red",
                        borderRadius: "8px",
                        padding: "12px",
                        marginTop: "8px"
                    }}>
                        {/* error es un array, mostramos cada mensaje */}
                        {error.map((msg, index) => (
                            <p key={index} style={{
                                color: "red",
                                margin: "4px 0",
                                fontSize: "14px"
                            }}>
                                ❌ {msg}
                            </p>
                        ))}
                    </div>
                )}

                {/* Botón de confirmar */}
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    style={{
                        padding: "12px",
                        background: loading ? "#ccc" : "#2e7d32",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "16px",
                        cursor: loading ? "not-allowed" : "pointer"
                    }}
                >
                    {loading ? "Procesando..." : "Confirmar compra"}
                </button>

            </div>
        </div>
    )
}

export default CheckoutForm