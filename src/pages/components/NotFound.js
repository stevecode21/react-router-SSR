//Será un PureComponent
import React, { PureComponent } from "react";
import "./generic-page.css";
//Impoorto mi withRputer para decirle a mi componente que me permida enrutar mis botones
import { withRouter } from "react-router";

class NotFound extends PureComponent {
  handleForwardClick = () => {
    this.props.history.goForward();
  };
  handleBackClick = () => {
    //Ese método me permitirá retroceder en el historial de mi navegación
    // this.props.history.goBack();

    this.props.history.go(-2);
  };

  handleRandomClick = () => {
    const random = Math.round(Math.random() * (10 - 1) + 1);
    this.props.history.push(`/videos?id=${random}`, { id: random });
  };
  render() {
    return (
      <div className="Page NotFound">
        <h1>404</h1>
        <h3 className="SadFace">:(</h3>
        <h2>No hemos encontrado la página que buscabas</h2>
        <button className="Button" onClick={this.handleForwardClick}>
          Ir a la siguiente página 👉
        </button>
        <button className="Button" onClick={this.handleBackClick}>
          Ir a la ruta anterior 👈
        </button>
        <button className="Button" onClick={this.handleRandomClick}>
          Video random 🎈
        </button>
      </div>
    );
  }
}

//Configuro mi componente con withRouter
export default withRouter(NotFound);
