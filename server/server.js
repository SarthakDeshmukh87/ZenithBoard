const { Hocuspocus } = require('@hocuspocus/server');

const server = new Hocuspocus({
  // Use Render's port
  port: process.env.PORT ? parseInt(process.env.PORT) : 1234,
  address: '0.0.0.0',
  
  // Add a simple check to see if it's working
  onListen() {
    console.log('✅ ZenithBoard Sync Server is live!');
  },
});

// Use the instance method correctly
server.listen();