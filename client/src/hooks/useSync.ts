import { useMemo, useEffect } from 'react';
import * as Y from 'yjs';
import { HocuspocusProvider } from '@hocuspocus/provider'; // <--- THIS IS THE FIX

export function useSync() {
  const ydoc = useMemo(() => new Y.Doc(), []);

  const provider = useMemo(() => {
    return new HocuspocusProvider({
      // Use your LIVE Render URL from your screenshot
      url: 'wss://zenithboard.onrender.com', 
      name: 'zenith-board-room',
      document: ydoc,
    });
  }, [ydoc]);

  useEffect(() => {
    return () => {
      provider.destroy();
      ydoc.destroy();
    };
  }, [provider, ydoc]);

  return { ydoc, provider };
}