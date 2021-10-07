"use strict";
const http = require("http");
const fs = require("fs");

const PRODUCTOS = [
  {
    id: 1,
    nombre: "Arroz Blanco",
    precio: 3000,
    path: "assets/imagenes/img_1.png",
  },
  {
    id: 2,
    nombre: "Azucar Alkosto",
    precio: 3200,
    path: "assets/imagenes/img_2.png",
  },
  {
    id: 3,
    nombre: "Sal del Himalaya",
    precio: 5000,
    path: "assets/imagenes/img_3.png",
  },
  { id: 4, nombre: "Panela", precio: 1500, path: "assets/imagenes/img_4.png" },
  {
    id: 5,
    nombre: "Jabon Dove",
    precio: 3500,
    path: "assets/imagenes/img_5.png",
  },
  {
    id: 6,
    nombre: "Champu Gliss",
    precio: 10000,
    path: "assets/imagenes/img_6.png",
  },
  {
    id: 7,
    nombre: "Harina Pan",
    precio: 4000,
    path: "assets/imagenes/img_7.png",
  },
  {
    id: 8,
    nombre: "Tuqeñas Limon",
    precio: 1200,
    path: "assets/imagenes/img_8.png",
  },
  {
    id: 9,
    nombre: "Leche larga vida",
    precio: 3000,
    path: "assets/imagenes/img_9.png",
  },
  {
    id: 10,
    nombre: "Queso Casero",
    precio: 6500,
    path: "assets/imagenes/img_10.png",
  },
  {
    id: 11,
    nombre: "CUM_mis Colacteos",
    precio: 6000,
    path: "assets/imagenes/img_11.png",
  },
  {
    id: 12,
    nombre: "Queso crema",
    precio: 3700,
    path: "assets/imagenes/img_12.png",
  },
];

const servidor = (request, response) => {
  response.writeHead(200, { "Content-type": "text/html; utf-8" });
  PRODUCTOS.forEach(producto => {
      console.log(producto)
  });
  response.write("xd");
  response.end();
};
http.createServer(servidor).listen(3000);
