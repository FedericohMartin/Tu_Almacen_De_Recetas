import { NavLink } from "react-router-dom";

export const Navbar = () =>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src="/images/Iconos/food-app.svg" width="35" height="35" class="d-inline-block align-top" alt="" loading="lazy"/>
            Tu almacén de recetas
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/Nosotros">Nosotros<span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Menu">En el Menú</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Suscrip">Suscripciones</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Mercado">Mercado</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>