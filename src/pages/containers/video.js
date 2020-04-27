import React, { Component } from "react";
//Importo mi vídeo player
import VideoPlayer from "../../player/containers/video-player";
//Importamos el componente connect ya que vamos a conectar este componente a redux
import { connect } from "react-redux";
//Si no existe el video usaré mi componente para mostrar un mensaje, por lo cual importo mi componente NotFound
import NotFound from "../components/NotFound";

class Video extends Component {
  render() {
    //Si existe el id de mi video retornaré mi videoplayer con el vídeo
    if (this.props.existId) {
      return <VideoPlayer id={this.props.id} />;
    }
    //Si no retorname un mensaje de mi componente not found
    //No es necesario usar el else ya que cuando haya alguno de los dos return se acabará la función
    //Adicionalmente para evitar el error de push has undefinedle enviaré
    return <NotFound />;
  }
}

function mapStateToProps(state, props) {
  //Match me traerá el id que necesito
  const id = props.match.params.id;
  return {
    //Quiero saber si el id existe dentro de el mapa de estado
    existId: state.get("data").get("entities").get("media").has(id),
    //Luego le envio el id a mi elemento
    id: id,
  };
}

//Para obtener el id vamos a utilizar la conexión de los datos de redux
export default connect(mapStateToProps)(Video);
