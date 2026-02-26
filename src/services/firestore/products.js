import { firestore } from '../../utils/firebase';
import { addDoc, getDoc, getDocs, collection} from 'firebase/firestore'; //importo las funciones de firestore para crear documentos, colecciones ej: addDoc

//agregar productos
const addProduct = async (data) => {
    try {
        const docRef = await addDoc(collection(firestore, "productos"),data);
        return {success: true};

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
        const querySnapshot = await getDocs(collection(firestore,"productos"), categoryId)
        
        const productos = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        return { success: true, data: productos };

    } catch (error) {
        return { success: false, error}
    }
};

//obtener producto por id
const getProductById = async (id) => {
    try {
        const docRef = await getDoc(collection(firestore, "productos"),id);
        if(!docRef.exists()) return {success: false, error: "Producto no encontrado"};
        return { success: true, data: docRef };
    } catch (error) {
        return {success: false, error};
    }

};

export const products = { getProducts, addProduct, getProductsByCategory, getProductById };