import React from "react";
import "./modal.css";
import { Link } from "react-router-dom";

function Modal(props) {
  return (
    <div className="Modal">
      {props.children}
      {/* Meto mi button dentro del link */}
      <Link
        to={{
          pathname: "/videos",
          state: {
            //En este caso el modal será falso ya que se cierra
            modal: false,
          },
        }}
      >
        <button onClick={props.handleClick} className="Modal-close" />
      </Link>
    </div>
  );
}

export default Modal;
