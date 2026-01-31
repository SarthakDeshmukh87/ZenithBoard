const { Server } = require('@hocuspocus/server');

/**
 * Hocuspocus Backend Configuration
 * This server handles the real-time syncing of your canvas data.
 */
const server = new Server({
  // Use the PORT provided by Render, otherwise default to 10000
  port: process.env.PORT ? parseInt(process.env.PORT) : 10000,
  
  // Bind to 0.0.0.0 so the server is accessible from the internet
  address: '0.0.0.0',

  // This runs when the server successfully starts
  async onListen(data) {
    console.log(`🚀 Hocuspocus is live on port ${data.port}`);
  },

  // Basic health check for Render
  async onConnect() {
    return true;
  }
});

// Start the engine
server.listen();