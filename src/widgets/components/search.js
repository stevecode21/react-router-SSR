import React from "react";
import "./search.css";
//Importaré Prompt de react-router
import { Prompt } from "react-router";

// function Search(props) {
//   return (
//     <form action=""></form>
//   )
// }

const Search = (props) => (
  <form className="Search" onSubmit={props.handleSubmit}>
    {/* Llamo mi componente Prompt */}
    {/* when recibe un booleano, por defecto es true, sin embargo, quiero validar lo que solo pase este Prompt cuando haya texto en mi searchbar */}
    {/* Y adicionalmente le paso un mensaje a mi user para que no deje la página o asegurarle */}
    <Prompt
      when={props.prompt}
      message="¿Estás seguro de querer dejar la página?"
    />
    <input
      ref={props.setRef}
      type="text"
      placeholder="Busca tu video favorito"
      className="Search-input"
      name="search"
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
);

export default Search;
