const fs = require("fs");

const readStrem = fs.createReadStream(`${__dirname}/bigData.txt`, "utf-8");

readStrem.on("data", (chunk) => {
    console.log(chunk); // or we can use chunk.toString() if we don't use encoding on craeteReadStream().
});
