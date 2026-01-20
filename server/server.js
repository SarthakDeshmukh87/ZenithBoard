const { Server } = require('@hocuspocus/server');

// Initialize the server using the "new" keyword
const server = new Server({
  port: 1234,
  
  async onConnect(data) {
    console.log(`👋 New user connected to room: ${data.documentName}`);
  },

  async onDisconnect(data) {
    console.log(`🏃 User left room: ${data.documentName}`);
  }
});

// Start the server
server.listen();

console.log('🚀 ZenithBoard Sync Server is running on ws://localhost:1234');
