const { Server } = require('@hocuspocus/server');

const server = new Server({
  // 1. Tell it to listen on Render's port
  port: process.env.PORT ? parseInt(process.env.PORT) : 1234,
  
  // 2. Tell it to listen on ALL network interfaces (Required for Render)
  address: '0.0.0.0',

  // Optional: Add a log so you can see it working in Render's dashboard
  async onListen(data) {
    console.log(`🚀 Hocuspocus is running on port ${data.port}`);
  },
});

server.listen();