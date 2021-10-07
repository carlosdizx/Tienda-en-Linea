"use strict";
const http = require("http");
const fs = require("fs");

const PRODUCTOS = [
  {
    id: 1,
    nombre: "Arroz Blanco",
    precio: 3000,
    path: "https://www.merkadomi.com/wp-content/uploads/2019/06/arroz-diana-3000.png",
  },
  {
    id: 2,
    nombre: "Azucar Alkosto",
    precio: 3200,
    path: "https://comfandivirtual.com.co/supermercados/69603-large_default/azucar-manuelita-refinada-bolsa-plas-1000gr.jpg",
  },
  {
    id: 3,
    nombre: "Sal del Himalaya",
    precio: 5000,
    path: "https://m.media-amazon.com/images/I/81OUEMsLSUL._SX425_.jpg",
  },
  {
    id: 4,
    nombre: "Panela",
    precio: 1500,
    path: "https://s.cornershopapp.com/product-images/2992305.jpg?versionId=wnh1rNMynBD7WVm0FBpwKUSC9lzVjg2g",
  },
  {
    id: 5,
    nombre: "Jabon Dove",
    precio: 3500,
    path: "https://www.jdh.com.co/wp-content/uploads/2020/08/jabon-dove-coco-x-3-unidades-1-600x600.jpg",
  },
  {
    id: 6,
    nombre: "Champu Gliss",
    precio: 10000,
    path: "https://phantom-telva.unidadeditorial.es/9d7740c5a7b879ca5924f081d2c4d60f/resize/640/assets/multimedia/imagenes/2020/02/25/15826274434346.jpg",
  },
  {
    id: 7,
    nombre: "Harina Pan",
    precio: 4000,
    path: "https://venemprende.shop/wp-content/uploads/2021/05/22.png",
  },
  {
    id: 8,
    nombre: "Tuqeñas Limon",
    precio: 1200,
    path: "https://xn--tuqueas-8za.com/wp-content/uploads/2018/07/limon-papas.png",
  },
  {
    id: 9,
    nombre: "Leche larga vida",
    precio: 3000,
    path: "https://images.jumpseller.com/store/fanero/4792261/Leche_entera_Colacteos.jpg?1595982998",
  },
  {
    id: 10,
    nombre: "Queso Casero",
    precio: 6500,
    path: "https://insumosyalimentos.com.co/391-medium_default/queso-casero-colac-x-1000gr.jpg",
  },
  {
    id: 11,
    nombre: "Kumis Colacteos",
    precio: 6000,
    path: "https://mercaldas.vteximg.com.br/arquivos/ids/186432-1300-1300/Kumis-colacteos-x210-g.jpg?v=637076285320770000",
  },
  {
    id: 12,
    nombre: "Queso crema",
    precio: 3700,
    path: "https://jumbocolombiafood.vteximg.com.br/arquivos/ids/198588-1000-1000/7702434701746.jpg?v=636250315216970000",
  },
];
const BOTONES = [];
const COMPRADOS = [];

const crearHTML = (request, response) => {
  let textoHTML = "";
  fs.readFile("./plantilla.html", (error, texto) => {
    textoHTML = texto.toString();
    let textoProductos = "";

    PRODUCTOS.forEach((producto) => {
      textoProductos += `<div class="col-sm-6 card">
                  <img src="${
                    producto.path
                  }" width="450" height="450" class="card-img-top" />
                      <div class="card-footer">
                        precio ${producto.precio}
                      </div>
                      <div class="card-body">
                        <h4>${[producto.nombre]}</h4>
                      </div>
                      <input type="text" class="form-control" placeholder="Ingrese la cantidad" name="${producto.nombre}">
                  </div>`;
    });
    BOTONES.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        alert("Click " + index);
      });
    });
    textoHTML = textoHTML.replace("{productos}", textoProductos);
    response.writeHead(200, { "Content-type": "text/html; utf-8" });
    response.write(textoHTML);
    response.end();
  });
};

http.createServer(crearHTML).listen(3000);
