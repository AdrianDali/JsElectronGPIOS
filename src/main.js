const {BrowserWindow, Notification} = require('electron');
//const {getConnection} = require("./database")
let window; 

function createWindow() {
    //Create the window 
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    //Load the index.html of the app
    window.loadFile('src/interface/index.html');
}

module.exports = {
    createWindow
}