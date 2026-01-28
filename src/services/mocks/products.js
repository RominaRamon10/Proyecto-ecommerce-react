import productos from "../../data/productos.json";

//obtener productos por categoria
const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const operaciónExitosa = true; // Simulación de éxito o fracaso
        setTimeout(()=>{
            if(categoryId){
                if(operaciónExitosa){
                    resolve({success: true, 
                            data:(productos.filter(prod => prod.category === categoryId))})
                } else{
                    reject({success: false, message: "Error al obtener los productos"})
                }
            } else{
                resolve(productos);
            }
        }, 800);
    });
};

const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        const operaciónExitosa = true;
        setTimeout(() => {
            if(operaciónExitosa){
                resolve({success: true, data: (productos.find(prod => prod.id === id))})
            } else{
                reject({success: false, message: "Error al obtener el producto"})
            }
        }, 800);
    })
};

export const products = { getProducts, getProductById };