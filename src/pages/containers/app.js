import React from "react";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Map as map } from "immutable";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "../../reducers/index";
import Videos from "./videos";
import Home from "../components/home";
import Contacto from "../components/contacto";
import NotFound from "../components/NotFound";
import Header from "../components/header.js";
//Importo mi componente Video
import Video from "./video";

import { Route, Switch, Redirect } from "react-router-dom";

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

const logger_ = ({ getState, dispatch }) => (next) => (action) => {
  console.log("este es mi viejo estado", getState().toJS());
  console.log("vamos a enviar está acción", action);
  const value = next(action);
  console.log("este es mi nuevo estado", getState().toJS());
  return value;
};

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(applyMiddleware(logger, thunk))
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/videos" component={Videos} />
            {/* Crearemos una nueva ruta dinámica (:id) para que cargue por id y le renderizaremos un componente nuevo llamado Video*/}
            <Route exact path="/videos/:id" component={Video} />
            <Redirect from="/v" to="videos" />
            {/* Haremos otro redirect que cuando yo entre a /v/id del video me redireccionará a la ruta correcta, se pueden hacer redirects mucho más complejos*/}
            <Redirect from="/v/:id" to="videos/:id" />

            <Route exact path="/contacto" component={Contacto} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </Provider>
    );
  }
}

//Exporto mi componente
export default App;
