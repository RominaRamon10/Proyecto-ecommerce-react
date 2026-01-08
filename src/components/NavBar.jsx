import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid px-4">   
        <a className="navbar-brand" href="#">
            Rofux
        </a>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link" href="#">Remeras</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Pantalones</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Bolsos</a>
            </li>
        </ul>
        <CartWidget />
    </nav>
  );
};

export default NavBar;
