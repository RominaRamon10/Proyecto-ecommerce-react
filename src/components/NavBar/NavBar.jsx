import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {

  const closeOffcanvas = () => {
    const offcanvas = document.getElementById("menuCategorias");
    const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvas);
    bsOffcanvas?.hide();
  };

  return (

    <nav className="navbar navbar-dark bg-dark px-4 d-flex justify-content-between">

      <Link className="navbar-brand" to="/">
        Rofux
      </Link>

      <CartWidget />

      <button
        className="btn btn-outline-light"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#menuCategorias"
      >
        Menú
      </button>
      {/* // */}

      {/* // */}


      <div className="offcanvas offcanvas-end" id="menuCategorias">
        <div className="offcanvas-header">
          <h5>Categorías</h5>
          <button className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

            {/* // */}
            <div className="offcanvas-body">
              <ul className="list-group">
            <li className="list-group-item">
                <NavLink to="/" onClick={closeOffcanvas}>
                    Todos los productos
                </NavLink>
            </li>

            {/* // */}

            <li className="list-group-item">
              <NavLink
                to="/category/1"
                onClick={closeOffcanvas}
              >
                Remeras
              </NavLink>
            </li>

            <li className="list-group-item">
              <NavLink
                to="/category/2"
                onClick={closeOffcanvas}
              >
                Pantalones
              </NavLink>
            </li>

            <li className="list-group-item">
              <NavLink
                to="/category/3"
                onClick={closeOffcanvas}
              >
                Zapatillas
              </NavLink>
            </li>

            <li className="list-group-item">
              <NavLink
                to="/category/4"
                onClick={closeOffcanvas}
              >
                Buzos
              </NavLink>
            </li>

            <li className="list-group-item">
              <NavLink
                to="/category/5"
                onClick={closeOffcanvas}
              >
                Vestidos
              </NavLink>
            </li>

            <li className="list-group-item">
              <NavLink
                to="/category/6"
                onClick={closeOffcanvas}
              >
                Camperas
              </NavLink>
            </li>

            {/* // */}
              {/* ← NUEVO: link al carrito */}
              <li className="list-group-item">
                  <NavLink to="/cart" onClick={closeOffcanvas}>
                      Carrito
                  </NavLink>
              </li>

            {/* // */}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
