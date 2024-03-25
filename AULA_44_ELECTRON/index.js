const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("./index.html");
  //   win.loadURL("https://auditoria.085.digital/");
};

app.whenReady().then(createWindow);