import productos from "../../data/productos.json";

//obtener productos
const getProducts = () => {
    return new Promise((resolve, reject) => {
        const operaciónExitosa = true; // Simulación de éxito o fracaso
        setTimeout(() => {
            if (operaciónExitosa) {
                resolve({ success: true, data: productos });
            } else {
                reject({ success: false, message: "Error al obtener los productos" });
            }
        }, 800);
    });
};

//obtener productos por categoria
const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        const operaciónExitosa = true; // Simulación de éxito o fracaso
        setTimeout(() => {
            if (categoryId) {
                if (operaciónExitosa) {
                    resolve({
                        success: true,
                        data: productos.filter((prod) => prod.category === categoryId),
                    });
                } else {
                    reject({ success: false, message: "Error al obtener los productos" });
                }
            }
        }, 800);
    });
};

//obtener producto por id
const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        const operaciónExitosa = true;
        setTimeout(() => {
            if (operaciónExitosa) {
                resolve({
                    success: true,
                    data: productos.find((prod) => prod.id === id),
                });
            } else {
                reject({ success: false, message: "Error al obtener el producto" });
            }
        }, 800);
    });
};

export const products = { getProducts, getProductsByCategory, getProductById };
