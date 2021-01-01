const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
let mainWindow;
function createWindow() {
    splash = new BrowserWindow({
        width: 400,
        height: 300,
        transparent: true,
        frame: false,
        alwaysOnTop: true});
    splash.loadURL(`file://${path.join(__dirname, "../src/static/splash.html")}`);

    mainWindow = new BrowserWindow({
        width: 900,
        height: 680,
        show: false});
    mainWindow.removeMenu();
    
    mainWindow.loadURL(
    isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "../build/index.html")}`
    );
    mainWindow.once('ready-to-show', () => {
        setTimeout(() => splash.destroy(),2000);
        setTimeout(() => mainWindow.show(),3500);
        
      });
    mainWindow.on("closed", () => (mainWindow = null));
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
    app.quit();
    }
});
app.on("activate", () => {
    if (mainWindow === null) {
    createWindow();
    }
});