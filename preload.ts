import { contextBridge } from "electron";

// Expose safe APIs to the renderer
contextBridge.exposeInMainWorld("electronAPI", {
  ping: () => "pong"
});
