const { Server } = require('@hocuspocus/server');

const server = new Server({
  // Port configuration for Render
  port: process.env.PORT ? parseInt(process.env.PORT) : 1234,
  
  // Important: Bind to 0.0.0.0 for external access on Render
  address: '0.0.0.0',

  async onListen(data) {
    console.log(`🚀 ZenithBoard Sync Server is live on port ${data.port}`);
  },
});

// Start the server
server.listen();