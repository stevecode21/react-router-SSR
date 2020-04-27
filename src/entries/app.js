import React from "react";
// Este render es recomendado si mi aplicación solamente va a renderizar en el cliente, pero si tengo un renderizado ya em el servidor, se recomienda utilizar otro método de react dom que se llama hydrate()
/*import { render } from "react-dom";*/
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "../pages/containers/app";

// function logger({ getState, dispatch}) {
//   return (next) => {
//     return (action) => {
//       console.log('este es mi viejo estado', getState().toJS())
//       console.log('vamos a enviar está acción', action);
//       const value = next(action)
//       console.log('este es mi nuevo estado', getState().toJS())
//       return value
//     }
//   }
// }

/**Todo lo que tiene que ver con Redux, no me sirve, ya que lo usaré desde SSR */

// const logger_ = ({ getState, dispatch }) => (next) => (action) => {
//   console.log("este es mi viejo estado", getState().toJS());
//   console.log("vamos a enviar está acción", action);
//   const value = next(action);
//   console.log("este es mi nuevo estado", getState().toJS());
//   return value;
// };

// const store = createStore(
//   reducer,
//   map(),
//   composeWithDevTools(applyMiddleware(logger, thunk))
// );

const homeContainer = document.getElementById("home-container");

//Este render es recomendado si mi aplicación solamente va a renderizar en el cliente, pero si tengo un renderizado ya em el servidor, se recomienda utilizar otro método de react dom que se llama hydrate(), ya que render siempre esta haciendo un "re-render" de mi aplicación, mientras que hydrate va a enlazar los eventos y a unirse a lo que ya construyó el server un hydrate es menos pesado y obtenemos el mismo resultado

/* render( */

hydrate(
  //En mi app.js del lado del cliente, solo usaré mi BrowserRouter renderizando mi aplicación desde el app.js del lado del servidor
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>,
  homeContainer
);
