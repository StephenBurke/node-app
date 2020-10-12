const http = require("http");

const hostname = process.env.hostname || "0.0.0.0";
const port = process.env.PORT || 3002;

// define our server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(
    "Hello World! This is text - we can respond with HTML, JSON, and more :)\n"
  );
});

// start listening
// use the server console to tell user where to find the server
// use backticks for template literals with embedded expressions
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
