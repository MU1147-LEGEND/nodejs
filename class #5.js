// event, http module

const EventEmitter = require("events");
const http = require("http");

const emitter = new EventEmitter();

// listen to the events / registered
emitter.on("bellRing", () => {
    console.log("Ring Ring Ring");
});
// 2
emitter.on("click", () => {
    console.log("Clicked");
});

// take params
emitter.on("watching", (name) => {
    console.log(`${name} is watching us`);
});

// raise an event / call
emitter.emit("bellRing"); // make sure the raise event after registering the event. not before.
emitter.emit("click");
// with params
emitter.emit("watching", "Allah"); // on the event listener we can take anything like object, array, string, nums.

// http module

// creating a server
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        // ("/ ") is for homepage or base directory.
        res.write("Hello Bro \n");
        res.write("Want my API?");
    } else if (req.url === "/about") {
        res.write("This is about us page.");
    } else {
        res.write("Forbidden path");
    }

    // ending
    res.end();
});

// server.on("connection", (socket) => {
//     console.log("New Connection...");
// });

// starting the server on specific post.
server.listen(3000);

console.log("Listening on port 3000");
