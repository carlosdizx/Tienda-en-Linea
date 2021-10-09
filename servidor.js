"use strict";
const http = require("http");
const fs = require("fs");
const url = require("url");

const servidor = (request, response) => {};

http
  .createServer(function (request, response) {
    fs.readFile("index.html", (err, texto) => {
      if (request.url.indexOf("?") > 0) {
        const parametros = request.url.split("?")[1];
        const variables = parametros.split("&");
        let total = 0;
        let subtotal = 0;
        let cantidad = 0;
        let existeDescuento = false;
        for (let i = 0; i < variables.length; i += 1) {
          if (i % 2 === 0) {
            const precio = variables[i].split("=")[1];
            const cantidadActual = variables[i + 1].split("=")[1];
            if (cantidadActual) {
              cantidad += parseInt(variables[i + 1].split("=")[1]);
              if (cantidadActual >= 10) {
                total += precio * cantidadActual * 0.9;
                existeDescuento = true;
              } else {
                total += precio * cantidadActual;
              }
              subtotal += precio * cantidadActual;
            }
          }
        }
        const textoHTML = texto
          .toString()
          .replace("{cantidad}", "Cantidad: " + cantidad.toString())
          .replace("{subtotal}", "Subtotal: " + subtotal.toString())
          .replace(
            "{descuento}",
            existeDescuento ? "Descuento aplicado" : "No hay descuento"
          )
          .replace("{total}", "Total: " + total.toString());

        response.writeHead(200, { "Content-Type": "text/html;" });
        response.write(textoHTML);
        response.end();
      } else {
        response.writeHead(200, { "Content-Type": "text/html;" });
        response.write(texto.toString());
        response.end();
      }
    });
  })
  .listen(3000);
