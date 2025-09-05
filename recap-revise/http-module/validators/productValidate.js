const app = {};

app.validateProductAdd = (product) => {
    if (typeof product.name !== "string") return false;
    if (typeof product.price !== "number" || product.price <= 0) return false;
    if (typeof product.category !== "string") return false;
    return true;
};

module.exports = app;
