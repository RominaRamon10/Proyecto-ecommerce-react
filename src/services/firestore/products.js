import { firestore } from '../../utils/firebase';
import { addDoc, doc, getDoc, getDocs, collection, query, where, serverTimestamp} from 'firebase/firestore'; //importo las funciones de firestore para crear documentos, colecciones ej: addDoc

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
        console.log("ID del documento:", doc.id)
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

export const products = { getProducts, addProduct, getProductsByCategory, getProductById, createOrder };