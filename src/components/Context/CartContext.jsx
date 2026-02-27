/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react"

// Creo el contexto
export const CartContext = createContext();

//Creo el hook personalizado para usarlo
export const useCart = () => useContext(CartContext);

//Creo el Provider que envuelve toda la app
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    // Agregar producto al carrito
    const addItem = (item, quantity) => {
        const existeEnCarrito = cart.find(prod => prod.id === item.id)

        if (existeEnCarrito) {
            //Si existe el producto, actualizo la cantidad
            setCart(cart.map(prod =>
                prod.id === item.id
                    ? { ...prod, quantity: prod.quantity + quantity }
                    : prod
            ))
        } else {
            // Si no existe, agrego el producto con su cantidad
            setCart([...cart, { ...item, quantity }])
        }
    }

    // Eliminar un producto del carrito
    const removeItem = (itemId) => {
        setCart(cart.filter(prod => prod.id !== itemId))
    }

    // Vaciar todo el carrito
    const clearCart = () => {
        setCart([])
    }

    // Total de unidades. Reduzco los valores de cantidades del carrito a un solo numero
    const getTotalQuantity = () => {
        return cart.reduce((total, prod) => total + prod.quantity, 0)
    }

    // Total de precio
    const getTotalPrice = () => {
        return cart.reduce((total, prod) => total + (prod.price * prod.quantity), 0)
    }

    // Devuelve cuántas unidades de un producto hay en el carrito
    const getQuantityInCart = (itemId) => {
        const item = cart.find(prod => prod.id === itemId)
        return item ? item.quantity : 0
    }

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            clearCart,
            getTotalQuantity,
            getTotalPrice,
            getQuantityInCart
        }}>
            {children}
        </CartContext.Provider>
    )
};

