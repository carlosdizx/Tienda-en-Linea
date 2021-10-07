"use strict";
const http = require("http");
const fs = require("fs");
const servidor = (request, response) => {
    fs.readFile("./index.html", (err, texto) => {
        let textoHTML = texto.toString();
        console.log(textoHTML)
        response.writeHead(200, { "Content-type": "text/html; utf-8" });
        response.write(textoHTML);
        response.end();
    });
};
http.createServer(servidor).listen(3000);