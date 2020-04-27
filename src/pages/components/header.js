import React, { Component } from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";

//Existe un highordercomponent que se llama withRouter con el cual podremos obtener esto y no solo para componentes que estén por fuera de toda la lógica de rutas, sino también puedo ponerlo en un componente que esté demasiado anidado y así no pasar props tras props tras props

//Importo dicha función
import { withRouter } from "react-router";

class Header extends Component {
  //Mi evento me permitirá retroceder el navigation pero dentro de mi component header
  handleClick = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <header className="Header">
        <img src={logo} width={250} />
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="is-selected">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/videos" activeClassName="is-selected">
                Videos
              </NavLink>
            </li>
            <li>
              <NavLink to="/v" activeClassName="is-selected">
                Redirect
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" activeClassName="is-selected">
                Contacto
              </NavLink>
            </li>
            <li>
              <NavLink to="/perfil" activeClassName="is-selected">
                Perfil
              </NavLink>
            </li>
            {/*  Haré una navegación con un event hacia atras*/}
            <li>
              <a onClick={this.handleClick}>👈</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

//Decoraré mi ruta declarandolo como un highOrderComponent
export default withRouter(Header);
