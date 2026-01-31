import { HocuspocusProvider } from '@hocuspocus/provider';
// Find your HocuspocusProvider initialization
const provider = new HocuspocusProvider({
  // CHANGE THIS from localhost to your Render URL
  url: "wss://zenithboard.onrender.com", 
  name: "zenith-main-board", // The room/document name
});