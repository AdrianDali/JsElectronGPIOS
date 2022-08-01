const {createWindow} = require('./main')
const {app} = require('electron')

require('electron-reload')(__dirname)

// This method will be called when Electron has finished    
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
//app.on('ready', createWindow)
app.whenReady().then(createWindow)