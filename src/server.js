/* Haré un refactos de mi app de la siguiente manera */

import express from "express";
//Es necesario importar react para usar cualquier componente de esta
import React from "react";
import App from "../dist/ssr/app";
import { StaticRouter } from "react-router";
//Importaré react dom server, para poder renderizar mi componentes desde el server, ya que el método render no funciona aquí
import reactDOMServer from "react-dom/server";
const app = express();
//Para evitar que cualquier ruta que yo envíe me renderice algo, y asi mismo lograr que se lean los archivos estáticos lo que haré será usar app.use al cual le envío un parametro para que lea los archivos estáticos que esté en dist
app.use(express.static("dist"));
//Para usar desde el SSR arreglaré el problema del renderizado de las imágenes y sean leidas desde mi carpeta de imagenes para que así sean utilizadas de la manera correcta; con otra ruta estática
app.use("/images", express.static("images"));

app.get("*", (req, res) => {
  //   console.log(req.url);

  //Renderizaré mi componente con el metodo renderToString que me permitirá renderizar en mi servidor
  //Lo igualo a una constante html

  const html = reactDOMServer.renderToString(
    //Otra cosa que tenemos que saber del StaticRouter hay que mandarle un parametro requerido el cual es (location)
    <StaticRouter
      // location -> Que ubicación quiero yo renderizar), por eso se llama static router, ya que no renderizará de forma dinámica, tengo que decirle qué ruta quiero pasarle a app para que renderice, como ya tenemos peticios dinamicas que hará mi cliente, le diré que la location será igual a la petición
      location={req.url}
      //El segundo parámetro que le puedo pasar es el contexto, para pasarle algunas variables que vengan desde el server a mi aplicación
      context={{
        //En este caso lo que le pasaré será algo simple como un nombre
        name: "Stiven",
      }}
    >
      <App />
    </StaticRouter>
  );
  //En lugar del hola mundo, imprimiré todo mi html con lo que he obtenido de de reactDOMServer
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Platzi Video</title>
        <link rel="stylesheet" href="/css/app.css">
    </head>
    <body>
        <div id="home-container">${html}</div>
        <div id="modal-container"></div>
        <!-- <script src="http://localhost:9000/js/app.js"></script> -->
        <script src="/js/app.js"></script>
    </body>
    </html>
  `);
  res.end();
});

app.listen(3000);
console.log("El server prendió en el puerto 3000");
