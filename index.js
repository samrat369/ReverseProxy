// proxyServer.js

const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server instance
const proxy = httpProxy.createProxyServer({});

// Create an HTTP server that will handle proxy requests
const server = http.createServer((req, res) => {
  // Proxy all requests to http://localhost:3000
  proxy.web(req, res, { target: 'http://localhost:3000' });
});

// Listen for incoming requests on port 8000
const port = 8000;
server.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});