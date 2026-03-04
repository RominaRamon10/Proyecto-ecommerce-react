# ProyectoFinalRominaRamon 🛍️

E-commerce de ropa desarrollado con React y Firebase como proyecto final del curso.

🔗 **Demo en vivo:** [https://rofuxreact.vercel.app/](https://rofuxreact.vercel.app/)

---

## Descripción del proyecto

**Rofux** es una Single Page Application (SPA) de e-commerce de ropa, desarrollada con React. Permite a los usuarios explorar un catálogo de productos, filtrar por categorías, ver el detalle de cada producto, agregar productos al carrito y finalizar una compra. Las órdenes generadas se almacenan en Firebase Firestore.

### Funcionalidades principales

- Listado dinámico de productos obtenidos desde Firebase Firestore
- Filtrado de productos por categoría
- Vista de detalle de cada producto
- Selector de cantidad con validaciones de stock
- Carrito de compras con persistencia en localStorage
- Verificación de stock disponible al confirmar la compra
- Generación de órdenes de compra en Firebase Firestore
- Descuento de stock automático al confirmar una compra
- Navegación entre secciones sin recarga de página (SPA)
- Diseño responsive adaptado a celulares, tablets y desktop

---

## Tecnologías usadas

| Tecnología | Uso |
|---|---|
| React 18 | Librería principal de UI |
| React Router DOM | Navegación entre páginas |
| Firebase Firestore | Base de datos en la nube |
| PrimeReact | Componentes visuales |
| Bootstrap | Estilos complementarios |
| Vite | Bundler y entorno de desarrollo |
| Vercel | Deploy de la aplicación |

---

## Instrucciones de instalación

### Requisitos previos

- Node.js instalado (versión 18 o superior)
- Una cuenta en [Firebase](https://firebase.google.com)

### Pasos

**1. Clonar el repositorio**
```bash
git clone https://github.com/RominaRamon10/Proyecto-ecommerce-react.git
cd Proyecto-ecommerce-react
```

**2. Instalar dependencias**
```bash
npm install
```

**3. Configurar Firebase**

Crear un archivo `.env` en la raíz del proyecto con tus credenciales de Firebase:
```
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
```

**4. Iniciar el proyecto**
```bash
npm run dev
```

**5. Abrir en el navegador**
```
http://localhost:5173
```

---

## Estructura de carpetas

```
src/
├── components/
│   ├── NavBar/
│   │   ├── NavBar.jsx
│   │   └── CartWidget.jsx
│   ├── ItemListContainer/
│   │   └── ItemListContainer.jsx
│   ├── ItemList/
│   │   └── ItemList.jsx
│   ├── Item/
│   │   └── Item.jsx
│   ├── ItemDetailContainer/
│   │   └── ItemDetailContainer.jsx
│   ├── ItemDetail/
│   │   ├── ItemDetail.jsx
│   │   └── ItemCount.jsx
│   └── Cart/
│       ├── Cart.jsx
│       ├── CartItem.jsx
│       └── CheckoutForm.jsx
├── context/
│   └── CartContext.jsx
├── services/
│   ├── index.js
│   └── firestore/
│       ├── index.js
│       └── products.js
├── utils/
│   └── firebase.js
├── App.jsx
└── main.jsx
```

---

## Colecciones en Firebase Firestore

### `productos`
Almacena el catálogo completo de productos de la tienda.

```
productos/{id}
  ├── title: string
  ├── description: string
  ├── price: number
  ├── stock: number
  ├── category: string
  ├── categoryId: string
  └── image: string
```

### `ordenes`
Se genera un nuevo documento por cada compra confirmada.

```
ordenes/{id}
  ├── comprador
  │   ├── nombre: string
  │   ├── apellido: string
  │   ├── email: string
  │   └── telefono: string
  ├── productos: array
  ├── total: number
  ├── estado: string
  └── fecha: timestamp
```

---

## Autor

**Romina Ramon** — Proyecto Final React — 2025