import { useEffect, useState, useMemo } from 'react'
import * as Y from 'yjs'
import { HocuspocusProvider } from '@hocuspocus/provider'

export function useSync() {
  const [isSynced, setIsSynced] = useState(false)

  // 1. Create a stable Yjs Document
  const ydoc = useMemo(() => new Y.Doc(), [])

  // 2. Setup the Hocuspocus Provider
  const provider = useMemo(() => {
    return new HocuspocusProvider({
      // Use your LIVE Render URL (not localhost)
      url: 'wss://zenithboard.onrender.com', 
      name: 'zenith-canvas-room',
      document: ydoc,
      onSynced: () => {
        setIsSynced(true)
        console.log('✅ Canvas synced with Render!')
      },
      onDisconnect: () => {
        setIsSynced(false)
        console.log('❌ Disconnected from server')
      }
    })
  }, [ydoc])

  // 3. Cleanup on unmount
  useEffect(() => {
    return () => {
      provider.destroy()
      ydoc.destroy()
    }
  }, [provider, ydoc])

  return { ydoc, provider, isSynced }
}