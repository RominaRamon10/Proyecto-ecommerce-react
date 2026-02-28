// import { NavLink, Link } from "react-router-dom";
// import CartWidget from "./CartWidget";

// const NavBar = () => {

//   const closeOffcanvas = () => {
//     const offcanvas = document.getElementById("menuCategorias");
//     const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvas);
//     bsOffcanvas?.hide();
//   };

//   return (

//     <nav className="navbar navbar-dark bg-dark px-4 d-flex justify-content-between">

//       <Link className="navbar-brand" to="/">
//         Rofux
//       </Link>

//       <CartWidget />

//       <button
//         className="btn btn-outline-light"
//         type="button"
//         data-bs-toggle="offcanvas"
//         data-bs-target="#menuCategorias"
//       >
//         Menú
//       </button>

//       <div className="offcanvas offcanvas-end" id="menuCategorias">
//         <div className="offcanvas-header">
//           <h5>Categorías</h5>
//           <button className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         </div>

//             {/* // */}
//             <div className="offcanvas-body">
//               <ul className="list-group">
//             <li className="list-group-item">
//                 <NavLink to="/" onClick={closeOffcanvas}>
//                     Todos los productos
//                 </NavLink>
//             </li>

//             {/* // */}

//             <li className="list-group-item">
//               <NavLink
//                 to="/category/1"
//                 onClick={closeOffcanvas}
//               >
//                 Remeras
//               </NavLink>
//             </li>

//             <li className="list-group-item">
//               <NavLink
//                 to="/category/2"
//                 onClick={closeOffcanvas}
//               >
//                 Pantalones
//               </NavLink>
//             </li>

//             <li className="list-group-item">
//               <NavLink
//                 to="/category/3"
//                 onClick={closeOffcanvas}
//               >
//                 Zapatillas
//               </NavLink>
//             </li>

//             <li className="list-group-item">
//               <NavLink
//                 to="/category/4"
//                 onClick={closeOffcanvas}
//               >
//                 Buzos
//               </NavLink>
//             </li>

//             <li className="list-group-item">
//               <NavLink
//                 to="/category/5"
//                 onClick={closeOffcanvas}
//               >
//                 Vestidos
//               </NavLink>
//             </li>

//             <li className="list-group-item">
//               <NavLink
//                 to="/category/6"
//                 onClick={closeOffcanvas}
//               >
//                 Camperas
//               </NavLink>
//             </li>

//             {/* // */}
//               {/* ← NUEVO: link al carrito */}
//               <li className="list-group-item">
//                   <NavLink to="/cart" onClick={closeOffcanvas}>
//                       Carrito
//                   </NavLink>
//               </li>

//             {/* // */}

//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;



///////////////////////////////////
// import { Link, useNavigate } from "react-router-dom"
// import { PanelMenu } from "primereact/panelmenu"
// import { Sidebar } from "primereact/sidebar"
// import { Button } from "primereact/button"
// import { useState } from "react"
// import CartWidget from "./CartWidget"

// const NavBar = () => {
//     const [visible, setVisible] = useState(false)
//     const navigate = useNavigate()

//     // Función para navegar y cerrar el menú
//     const handleNavigate = (path) => {
//         navigate(path)
//         setVisible(false)
//     }

//     // Estructura del menú con secciones y sus items
//     const menuItems = [
//         {
//             label: "Categorías",
//             icon: "pi pi-tag",
//             items: [
//                 {
//                     label: "Remeras",
//                     icon: "pi pi-chevron-right",
//                     command: () => handleNavigate("/category/1")
//                 },
//                 {
//                     label: "Pantalones",
//                     icon: "pi pi-chevron-right",
//                     command: () => handleNavigate("/category/2")
//                 },
//                 {
//                     label: "Zapatillas",
//                     icon: "pi pi-chevron-right",
//                     command: () => handleNavigate("/category/3")
//                 },
//                 {
//                     label: "Buzos",
//                     icon: "pi pi-chevron-right",
//                     command: () => handleNavigate("/category/4")
//                 },
//                 {
//                     label: "Vestidos",
//                     icon: "pi pi-chevron-right",
//                     command: () => handleNavigate("/category/5")
//                 },
//                 {
//                     label: "Camperas",
//                     icon: "pi pi-chevron-right",
//                     command: () => handleNavigate("/category/6")
//                 }
//             ]
//         },
//         {
//             label: "Todos los productos",
//             icon: "pi pi-list",
//             items: [
//                 {
//                     label: "Ver todos los productos",
//                     icon: "pi pi-chevron-right",
//                     command: () => handleNavigate("/")
//                 }
//             ]
//         },
//         {
//             label: "Ir al carrito",
//             icon: "pi pi-shopping-cart",
//             items: [
//                 {
//                     label: "Ver carrito",
//                     icon: "pi pi-chevron-right",
//                     command: () => handleNavigate("/cart")
//                 }
//             ]
//         }
//     ]

//     return (
//         <nav className="navbar navbar-dark bg-dark px-4 d-flex justify-content-between align-items-center">

//             {/* Logo */}
//             <Link className="navbar-brand" to="/">
//                 Rofux
//             </Link>

//             {/* CartWidget */}
//             <CartWidget />

//             {/* Botón para abrir el menú */}
//             <Button
//                 icon="pi pi-bars"
//                 label="Menú"
//                 className="p-button-outlined p-button-light"
//                 onClick={() => setVisible(true)}
//             />

//             {/* Sidebar de PrimeReact */}
//             <Sidebar
//                 visible={visible}
//                 position="right"
//                 onHide={() => setVisible(false)}
//                 header={<h4 style={{ margin: 0 }}>Menú</h4>}
//             >
//                 <PanelMenu
//                     model={menuItems}
//                     style={{ width: "100%" }}
//                 />
//             </Sidebar>

//         </nav>
//     )
// }

// export default NavBar

//////////////////////// MODIFICACION 1

import { Link, useNavigate } from "react-router-dom"
import { PanelMenu } from "primereact/panelmenu"
import { Sidebar } from "primereact/sidebar"
import { Button } from "primereact/button"
import { Avatar } from "primereact/avatar"
import { useState } from "react"
import CartWidget from "./CartWidget"

const NavBar = () => {
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()

    const handleNavigate = (path) => {
        navigate(path)
        setVisible(false)
    }

    const menuItems = [
        {
            label: "Categorías",
            icon: "pi pi-tag",
            items: [
                { label: "Remeras",    icon: "pi pi-chevron-right", command: () => handleNavigate("/category/1") },
                { label: "Pantalones", icon: "pi pi-chevron-right", command: () => handleNavigate("/category/2") },
                { label: "Zapatillas", icon: "pi pi-chevron-right", command: () => handleNavigate("/category/3") },
                { label: "Buzos",      icon: "pi pi-chevron-right", command: () => handleNavigate("/category/4") },
                { label: "Vestidos",   icon: "pi pi-chevron-right", command: () => handleNavigate("/category/5") },
                { label: "Camperas",   icon: "pi pi-chevron-right", command: () => handleNavigate("/category/6") }
            ]
        },
        {
            label: "Todos los productos",
            icon: "pi pi-list",
            items: [
                { label: "Ver todos los productos", icon: "pi pi-chevron-right", command: () => handleNavigate("/") }
            ]
        },
        {
            label: "Ir al carrito",
            icon: "pi pi-shopping-cart",
            items: [
                { label: "Ver carrito", icon: "pi pi-chevron-right", command: () => handleNavigate("/cart") }
            ]
        }
    ]

    return (
        <>
            <nav style={{
                backgroundColor: "#b2d8e8",
                padding: "12px 16px",      // menos padding en celular
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                flexWrap: "wrap",          // ← se acomoda si no entra todo
                gap: "8px"                 // ← espacio entre elementos si se rompe
              }}>

                {/* Logo + Nombre */}
                <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
                    <Avatar
                        icon="pi pi-shopping-bag"
                        style={{
                            backgroundColor: "#4a90b8",
                            color: "white",
                            width: "42px",
                            height: "42px"
                        }}
                        shape="circle"
                    />
                    <span style={{
                        fontSize: "22px",
                        fontWeight: "bold",
                        color: "#1a3c4e",
                        letterSpacing: "1px"
                    }}>
                        Rofux
                    </span>
                </Link>

                {/* Carrito + Botón menú juntos */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <CartWidget />
                    <Button
                        icon="pi pi-bars"
                        label="Menú"
                        onClick={() => setVisible(true)}
                        style={{
                            backgroundColor: "#4a90b8",
                            border: "none",
                            borderRadius: "8px",
                            fontWeight: "bold"
                        }}
                    />
                </div>

            </nav>

            {/* Sidebar con el menú */}
            <Sidebar
                visible={visible}
                position="right"
                onHide={() => setVisible(false)}
                header={
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <i className="pi pi-bars" style={{ color: "#4a90b8", fontSize: "18px" }} />
                        <span style={{ fontWeight: "bold", fontSize: "18px", color: "#1a3c4e" }}>
                            Menú
                        </span>
                    </div>
                }
            >
                <PanelMenu
                    model={menuItems}
                    style={{ width: "100%" }}
                />
            </Sidebar>
        </>
    )
}

export default NavBar
