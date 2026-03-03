import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card } from "primereact/card"
import { Button } from "primereact/button"
import { Tag } from "primereact/tag"
import { Divider } from "primereact/divider"
import { useCart } from "../Context/CartContext"
import ItemCount from "./ItemCount"

const ItemDetail = ({ item }) => {
    const [agregado, setAgregado] = useState(false)
    const { addItem } = useCart()
    const navigate = useNavigate()

    const handleAdd = (cantidad) => {
        addItem(item, cantidad)
        setAgregado(true)
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
            padding: "24px",
            backgroundColor: "#f0f8fc"
        }}>
            <Card style={{
                width: "100%",
                maxWidth: "850px",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                overflow: "hidden"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: "32px",
                    alignItems: "flex-start"
                }}>
                    <div style={{
                        flex: "1 1 280px",
                        maxHeight: "420px",
                        overflow: "hidden",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#f5f5f5"
                    }}>
                        <img
                            src={item.image}
                            alt={item.title}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                maxHeight: "420px",
                                borderRadius: "12px"
                            }}
                        />
                    </div>

                    <div style={{
                        flex: "1 1 280px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px"
                    }}>

                        {/* Título */}
                        <h2 style={{
                            color: "#1a3c4e",
                            fontSize: "26px",
                            fontWeight: "bold",
                            margin: 0
                        }}>
                            {item.title}
                        </h2>

                        {/* Categoría */}
                        <Tag
                            value={item.category}
                            style={{
                                backgroundColor: "#b2d8e8",
                                color: "#1a3c4e",
                                width: "fit-content",
                                fontWeight: "bold"
                            }}
                        />

                        <Divider />

                        {/* Descripción */}
                        <p style={{
                            color: "#444",
                            fontSize: "15px",
                            lineHeight: "1.6",
                            margin: 0
                        }}>
                            {item.description}
                        </p>

                        {/* Precio */}
                        <p style={{
                            fontSize: "28px",
                            fontWeight: "bold",
                            color: "#4a90b8",
                            margin: 0
                        }}>
                            ${item.price}
                        </p>

                        {/* Stock */}
                        <p style={{
                            fontSize: "14px",
                            color: item.stock > 0 ? "#2e7d32" : "red",
                            margin: 0
                        }}>
                            {item.stock > 0
                                ? `✅ Stock disponible: ${item.stock} unidades`
                                : "❌ Sin stock"
                            } 
                        </p>

                        <Divider />

                        {/* Si agrega producto al carrito */}
                        {agregado ? (
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px"
                            }}>
                                <p style={{
                                    color: "#2e7d32",
                                    fontWeight: "bold",
                                    fontSize: "15px"
                                }}>
                                    ✅ Producto agregado al carrito
                                </p>

                                <Button
                                    label="Ir al carrito"
                                    icon="pi pi-shopping-cart"
                                    onClick={() => navigate("/cart")}
                                    style={{
                                        backgroundColor: "#4a90b8",
                                        border: "none",
                                        borderRadius: "8px",
                                        fontWeight: "bold"
                                    }}
                                />

                                <Button
                                    label="Seguir comprando"
                                    icon="pi pi-arrow-left"
                                    onClick={() => navigate("/")}
                                    outlined
                                    style={{
                                        color: "#4a90b8",
                                        borderColor: "#4a90b8",
                                        borderRadius: "8px",
                                        fontWeight: "bold"
                                    }}
                                />
                            </div>
                        ) : (
                            <ItemCount
                                stock={item.stock}
                                initial={1}
                                onAdd={handleAdd}
                                itemId={item.id}
                            />
                        )}
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ItemDetail