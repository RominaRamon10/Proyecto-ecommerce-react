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
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                flexWrap: "wrap",
                gap: "8px"
              }}>

                {/* logo y nombre */}
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

                {/* carrito y botón menú */}
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

            {/* sidebar con el menú */}
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
