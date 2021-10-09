"use strict";
const http = require("http");
const fs = require("fs");

const lectura = (request, response) => {
  fs.readFile("./index.html", (err, data) => {
    const datos = [];
  });
};

http.createServer(lectura).listen(3000);
