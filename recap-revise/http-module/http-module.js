const http = require("http");

// creating the server
const server = http.createServer((req, res) => {
    console.log("Requested URL:", req.url);
    console.log("Method:", req.method);
    // extracting user-agent from header
    const user_agent_header = JSON.stringify(
        req.headers["user-agent"],
        null,
        2
    );
    // detecting browser
    let browser = user_agent_header.toLowerCase().includes("edg")
        ? "Microsoft Edge Browser"
        : user_agent_header.split("/")[0] + `"`;

    // setting http headers (optional)
    // res.writeHead(200);

    // writing final responses
    res.write("<h1>Hello World</h1>");

    // checking route and method
    if (req.url == "/") {
        return res.end(
            `<h2>Hello from http server! you're on a ${browser}. <br/><br/>The request method is : ${req.method} </h2>`
        );
    } else if (req.url == "/about" && req.method == "GET") {
        return res.end("this is about page and GET rq");
    } else if (req.url == "/about" && req.method == "POST") {
        res.writeHead(401);
        return res.end(
            "sorry! you're not authorized for writing /about route."
        );
    } else if (req.url.startsWith("/u/")) {
        const uName = req.url.split("/")[2]; // /user/mohammad → "mohammad"
        return res.end(`Profile of ${uName}`);
    }

    // if route not matches
    res.end(`<h1>404 - Not Found </h1>`);
});

// starting/listening the server on specific port.
server.listen(3000, () => {
    console.log("server listening on localhost:3000 port");
});
