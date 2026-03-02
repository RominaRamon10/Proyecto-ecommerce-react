import { firestore } from '../../utils/firebase';
import { addDoc, doc, getDoc, getDocs, collection, query, where, serverTimestamp, updateDoc, increment} from 'firebase/firestore'; //importo las funciones de firestore para crear documentos, colecciones ej: addDoc

//agregar productos
const addProduct = async (data) => {
    try {
        const docRef = await addDoc(collection(firestore, "productos"),data);
        return {success: true, docRef};

    } catch (error) {
        return { success: false, error}
    }
}


//obtener productos
const getProducts = async () => {
    try {
        const querySnapshot = await getDocs(collection(firestore,"productos")) // nombre de la collection de firebase es productos
        
        //obtengo los productos, los id unidos a los campos del objeto data
        const productos = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        return { success: true, data: productos };

    } catch (error) {
        return { success: false, error}
    }
};


//obtener productos por categoria
const getProductsByCategory = async (categoryId) => {

    try {
        const productsRef = collection(firestore, "productos");

        const q = query(
        productsRef,
        where("categoryId", "==", categoryId)
        );

        const querySnapshot = await getDocs(q);

        const productos = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
        }));

        return { success: true, data: productos };

    } catch (error) {
        return { success: false, error };
    }
    
};

//obtener producto por id
const getProductById = async (id) => {

    try {
        const productRef = doc(firestore, "productos", id);
        const snapshot = await getDoc(productRef);

        if (!snapshot.exists()) {
        return { success: false, error: "Producto no encontrado" };
        }

        return {
        success: true,
        data: {
            id: snapshot.id,
            ...snapshot.data()
        }
        };

    } catch (error) {
        return { success: false, error };
    }

};

const updateStock = async (cart) => {
    try {
        // Por cada producto del carrito, resta la cantidad del stock
        const updates = cart.map(item => {
            const productRef = doc(firestore, "productos", item.id)
            return updateDoc(productRef, {
                stock: increment(-item.quantity)  // resta la cantidad comprada
            })
        })

        await Promise.all(updates)  // ejecuta todas las actualizaciones juntas
        return { success: true }

    } catch (error) {
        return { success: false, error }
    }
}


const createOrder = async (orderData) => {
    try {
        const orderRef = collection(firestore, "ordenes")
        const docRef = await addDoc(orderRef, {
            ...orderData,
            date: serverTimestamp()
        })
        return {success: true, orderId: docRef.id }
    } catch (error) {
        return { success: false, error }
    }
}

/////////////
// services/firestore/products.js - agregás esta función
const checkStock = async (cart) => {
    try {
        // Consulta el stock actual de cada producto del carrito
        const checks = await Promise.all(
            cart.map(async (item) => {
                const resultado = await getProductById(item.id)

                if (!resultado.success) {
                    return {
                        ok: false,
                        mensaje: `El producto "${item.title}" ya no está disponible`
                    }
                }

                const stockActual = resultado.data.stock

                if (stockActual < item.quantity) {
                    return {
                        ok: false,
                        // Mensaje claro para el usuario
                        mensaje: stockActual === 0
                            ? `"${item.title}" se quedó sin stock`
                            : `"${item.title}" solo tiene ${stockActual} unidad/es disponible/s y tenés ${item.quantity} en el carrito`
                    }
                }

                return { ok: true }
            })
        )

        // Filtra solo los productos con problemas de stock
        const sinStock = checks.filter(c => !c.ok)

        if (sinStock.length > 0) {
            return {
                success: false,
                // Devuelve todos los mensajes juntos
                errores: sinStock.map(c => c.mensaje)
            }
        }

        return { success: true }

    } catch {
        return { success: false, errores: ["Error al verificar el stock"] }
    }
}

export const products = {
    getProducts,
    addProduct,
    getProductsByCategory,
    getProductById,
    createOrder,
    updateStock,
    checkStock
}