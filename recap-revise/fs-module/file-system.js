const fs = require("fs");

// synchronus reading
const data = fs.readFileSync("../../text.txt", "utf-8");
// console.log(`Synchronus data:\n${data}`);

// asynchronus data reading - (best practice - non blocking) - if you want to run the progarm just change the false to true.
false &&
    fs.readFile("../../text.txt", "utf-8", (err, data) => {
        if (err) console.log("Error occured: ", err);
        else console.log(`Asynchronus data:\n${data}`);
    });

// synchronus writing
fs.writeFileSync(
    "./data.txt",
    'const fruits = ["apple", "banana", "cherry"]',
    "utf-8"
);

// asynchronus writing

false &&
    fs.writeFile(
        "./asyncData.txt",
        'const fruits = ["apple", "banana", "cherry"]',
        "utf-8",
        (err) => {
            if (err) console.log("Error during file write: ", err);
            else console.log("File written successfully");
        }
    );

// appending in file - Async
false &&
    fs.appendFile("./data.txt", "\n\nconst append = true;", "utf-8", (err) => {
        if (err) console.log("Error when appending file: ", err);
        else console.log("File appended  successfully");
    });

// directory Operations (Folder)

// 1. checking if Folder exists or not.

false &&
    fs.stat("testFolder", (err, stats) => {
        if (!err) {
            console.log(stats ? "Directory exists." : "Directory not exists.");
            return true;
        }
        console.log(err);
        return false;
    });

// 2. directory create

false &&
    fs.mkdir("testFolder", (err) => {
        if (err)
            console.log(err.code === "EEXIST" ? "file already exists" : err);
        else console.log("Directory created successfully");
    });

// 3. directory delete
false &&
    fs.rmdir("testFolder", (err) => {
        if (err) console.log("Error deleting: ", err);
        else console.log("Folder deleted successfully");
    });
