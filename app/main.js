const { app, BrowserWindow, Menu } = require('electron');

let mainWindow = null;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

if (process.env.NODE_ENV === 'development') {
  require('electron-debug')();
  const path = require('path');
  const p = path.join(__dirname, '..', 'app', 'node_modules');
  require('module').globalPaths.push(p);
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});


const installExtensions = () => {
  if (process.env.NODE_ENV === 'development') {
    const installer = require('electron-devtools-installer');

    const extensions = [
      'REACT_DEVELOPER_TOOLS',
      'REDUX_DEVTOOLS'
    ];
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
    return Promise.all(extensions.map(name => installer.default(installer[name], forceDownload)));
  }

  return Promise.resolve([]);
};

app.on('ready', () =>
  installExtensions()
    .then(() => {
      const { screen } = require('electron');
      mainWindow = new BrowserWindow({
        show: false,
        width: screen.getPrimaryDisplay().size.width,
        height: screen.getPrimaryDisplay().size.height,
        icon: `${__dirname}/icon.png`
      });

      mainWindow.loadURL(`file://${__dirname}/app.html`);

      mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.show();
        mainWindow.focus();
      });

      mainWindow.on('closed', () => {
        mainWindow = null;
      });

      if (process.env.NODE_ENV === 'development') {
        mainWindow.openDevTools();
        mainWindow.webContents.on('context-menu', (e, props) => {
          const { x, y } = props;
          Menu.buildFromTemplate([{
            label: 'Inspect element',
            click() {
              mainWindow.inspectElement(x, y);
            }
          }]).popup(mainWindow);
        });
      }
    }));
