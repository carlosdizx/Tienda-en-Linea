const PRODUCTOS = [
  { nombre: "Arroz Blanco", precio: 3000, path: "assets/imagenes/img_1.png" },
  { nombre: "Azucar", precio: 3000, path: "assets/imagenes/img_2.png" },
  {
    nombre: "Sal del Himalaya",
    precio: 5000,
    path: "assets/imagenes/img_3.png",
  },
  { nombre: "Panela", precio: 1500, path: "assets/imagenes/img_4.png" },
  { nombre: "Jabon Dove", precio: 3500, path: "assets/imagenes/img_5.png" },
  { nombre: "Champu Gliss", precio: 10000, path: "assets/imagenes/img_6.png" },
  { nombre: "Harina Pan", precio: 4000, path: "assets/imagenes/img_7.png" },
  { nombre: "Tuqeñas Limon", precio: 1200, path: "assets/imagenes/img_8.png" },
  { nombre: "Leche larga vida", precio: 3000, path: "assets/imagenes/img_9.png" },
  { nombre: "Queso Casero", precio: 6500, path: "assets/imagenes/img_10.png" },
  { nombre: "CUM_mis Colacteos", precio: 6000, path: "assets/imagenes/img_11.png" },
  { nombre: "Queso crema", precio: 3000, path: "assets/imagenes/img_12.png" },
];

for (let i = 0; i < PRODUCTOS.length; i++) {
  const producto = PRODUCTOS[i];
  document.write(`<div class="col-sm-6 card">
                  <img src="${
                    producto.path
                  }" width="450" height="450" class="card-img-top" />
                      <div class="card-footer">
                        precio ${producto.precio}
                      </div>
                      <div class="card-body">
                        <h4>${[producto.nombre]}</h4>
                      </div>
                  </div>`);
}
