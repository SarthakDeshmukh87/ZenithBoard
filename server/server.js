const { Server } = require('@hocuspocus/server');

const server = new Server({
  port: process.env.PORT ? parseInt(process.env.PORT) : 10000,
  address: '0.0.0.0', // Required for Render
  async onListen(data) {
    console.log(`🚀 Hocuspocus engine live on port ${data.port}`);
  },
});

server.listen();