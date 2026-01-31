// In your server.js
const { Hocuspocus } = require('@hocuspocus/server');

const server = new Hocuspocus({
  // Use Render's port if available, otherwise fallback to 1234 for local dev
  port: process.env.PORT ? parseInt(process.env.PORT) : 1234,
  
  // Ensure it binds to 0.0.0.0 to be reachable externally
  address: '0.0.0.0', 

  // ... your other config like extensions
});

server.listen();