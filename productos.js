const PRODUCTOS = [
  {
    id: 1,
    nombre: "Arroz Blanco",
    precio: 3000,
    path: "assets/imagenes/img_1.png",
  },
  { id: 2, nombre: "Azucar", precio: 3000, path: "assets/imagenes/img_2.png" },
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

const BOTONES = [];

const COMPRADOS = [];

cantidad = document.getElementById("cantidad");
subtotal = document.getElementById("subtotal");
descripcion = document.getElementById("descripcion");

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
                      <button class="btn btn-primary" id="btn-${
                        producto.id
                      }">Agregar</button>
                  </div>`);
}

for (let i = 0; i < PRODUCTOS.length; i++) {
  const btn = document.getElementById(`btn-${PRODUCTOS[i].id}`);
  BOTONES.push(btn);
}

const calcularSubTotal = () => {
  let total = 0;
  COMPRADOS.forEach((comprado) => {
    total += comprado.precio;
  });
  subtotal.textContent = "Subtotal $" + total;
};

const descripcionDeCompra = () => {
  let msg = "Descripcion: ";
  COMPRADOS.forEach((comprado) => {
    msg += comprado.nombre + "-";
  });
  descripcion.textContent = msg;
};

const buscarProducto = (id) => PRODUCTOS[id];
BOTONES.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    COMPRADOS.push(buscarProducto(index));
    calcularSubTotal();
    descripcionDeCompra();
    cantidad.textContent = "Cantidad comprados: " + COMPRADOS.length;
  });
});

for (let i = 0; i < PRODUCTOS.length; i++) {}
