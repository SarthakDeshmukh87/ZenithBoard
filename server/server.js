// Change this line
const PORT = process.env.PORT || 1234; 

// Ensure your server listens like this
server.listen(PORT, '0.0.0.0', () => {
  console.log(`ZenithBoard Sync Server is running on port ${PORT}`);
});