import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h2>Mi Tienda</h2>

      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
