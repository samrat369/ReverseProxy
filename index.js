// proxyServer.js

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
//const auth = require('http-auth');

// Basic authentication middleware
// const basic = auth.basic({
//   realm: "Enter username and password.",
//   file: __dirname + "/.htpasswd" // Use a proper path for your .htpasswd file
// });

const app = express();

// Enable basic authentication for the reverse proxy
//app.use(auth.connect(basic));

// Create a proxy middleware with authentication
const proxyMiddleware = createProxyMiddleware({
  target: 'https://rpaccessmanagementfoundationlabproxyserv.onrender.com', // Replace with the target URL you want to proxy to
  changeOrigin: true,
  secure: true, // Set this to true if your target server uses HTTPS
  // Add any additional proxy options if needed
});

// Use the proxy middleware for specific routes
app.use('/', proxyMiddleware);

const port = 8000;
app.listen(port, () => {
  console.log(`Reverse proxy server is running on port ${port}`);
});
