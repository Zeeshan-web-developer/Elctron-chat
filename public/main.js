const { app, BrowserWindow } = require("electron");
const url = "http://localhost:3000/";

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      nativeWindowOpen: true,
    },
  });
  win.loadURL(url);
}
app.on("ready", createWindow);
