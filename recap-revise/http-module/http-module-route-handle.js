const http = require("http");
const fs = require("fs");
const { productAdd } = require("./handlers/productsHandlers");

const products = require("./products.json");

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET")
        return res.end("Hello, This is Homepage.");

    if (req.url === "/about" && req.method === "GET")
        return res.end("This is about page.");

    if (req.url === "/products" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(data));
    }

    if (req.url === "/products" && req.method === "POST") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            productAdd(products, body);
        });

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Product added successfully" }));
        return;
    }

    return res.end("404 not found");
});

const port = 3000;
server.listen(port, () => {
    console.log("Server running on port: ", port);
});
