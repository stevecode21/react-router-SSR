import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./media.css";
//Importaremos el component Link from React Router
import { Link } from "react-router-dom";

class Media extends PureComponent {
  state = {
    author: "Leonidas Esteban",
  };
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     author: props.author
  //   }
  // //   this.handleClick = this.handleClick.bind(this);
  // }
  handleClick = (event) => {
    // console.log(this.props.image)
    // this.setState({
    //   author: 'Ricardo Celis',
    // })
    this.props.openModal(this.props.id);
  };
  render() {
    const styles = {
      container: {
        color: "#44546b",
        cursor: "pointer",
        width: 260,
        border: "1px solid red",
      },
    };
    return (
      //Lo que haré aquí será envolver todo el content en un Link
      <Link
        //al cual le enviaré un objeto por to en donde mi pathname será "/videos",
        to={{
          pathname: "/videos",
          //Pondré un query de busqueda para la ruta de acuerdo al id de mi video (dinámico)
          search: `?id=${this.props.id}`,
          //Otra cosa que también configuraré será la propiedad state, al cual le mandaré un objeto donde puedo configurarle customs segun la condicion en la que se encuentre
          state: {
            //Que el nodo modal esté prendido
            modal: true,
            //Y el id sea el del video
            id: this.props.id,
          },
        }}
      >
        <div className="Media" onClick={this.handleClick}>
          <div className="Media-cover">
            <img
              src={this.props.cover}
              alt=""
              width={260}
              height={160}
              className="Media-image"
            />
          </div>
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </Link>
    );
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(["video", "audio"]),
};

export default Media;
