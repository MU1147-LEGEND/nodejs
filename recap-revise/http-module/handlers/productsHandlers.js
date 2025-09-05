const fs = require("fs");
const { validateProductAdd } = require("../validators/productValidate");

const handler = {};

handler.productAdd = (products, body) => {
    const product = JSON.parse(body);
    
    if (!validateProductAdd(product)) {
        console.log("Error adding product");
        return;
    }

    products.push(product);
    fs.writeFile(
        "./products.json",
        JSON.stringify(products, null, 2),
        (err) => {
            if (!err) console.log("Success!");
            else console.log("Failed", err);
        }
    );
};

module.exports = handler;
