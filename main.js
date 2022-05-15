const { app, BrowserWindow, Menu, ipcMain, dialog, Notification } = require('electron')
const path = require('path')
const ipc = ipcMain;
const { autoUpdater } = require('electron-updater');
const {PosPrinter} = require("electron-pos-printer");
var fs = require('fs');
let mainWindow;
let addWindow;
let addRH;
let financas;
let clientes;
let fornecedores;
let stock;
let funcionarios;
let diarioVende;
let folhaSalario;
let gestaoFilas;

let nomeIpressora;
let dimensaoImoressora;


// require('@electron/remote/main').initialize()
function createActivarConta() {
  // Create the browser window.
  addWindow = new BrowserWindow({
    width: 1200,
    height: 670,
    minWidth: 940,
    minHeight: 560,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      devTools: true,
      contextIsolation: false,
      webSecurity: false
    },
    icon: __dirname + '/icon.png'
  })

  // and load the index.html of the app.
  addWindow.loadFile('src/base/activarConta.html')
}
function createRH() {
  // Create the browser window.
  addRH = new BrowserWindow({
    width: 1200,
    height: 670,
    minWidth: 940,
    minHeight: 560,
    icon: __dirname + '/icon.png'
  })

  // and load the index.html of the app.
  addRH.loadFile('src/base/rH.html')
}
function createFinancas() {
  // Create the browser window.
  financas = new BrowserWindow({
    width: 1200,
    height: 670,
    minWidth: 940,
    minHeight: 560,
    icon: __dirname + '/icon.png'
  })

  // and load the index.html of the app.
  financas.loadFile('src/base/financas.html')
}
function createClientes() {
  // Create the browser window.
  clientes = new BrowserWindow({
    width: 1200,
    height: 670,
    minWidth: 940,
    minHeight: 560,
    icon: __dirname + '/icon.png'
  })

  // and load the index.html of the app.
  clientes.loadFile('src/base/clientes.html')
}



function createMenu1() {
  // Create the browser window.
  addWindow = new BrowserWindow({
    width: 1200,
    height: 670,
    minWidth: 940,
    minHeight: 560,
    icon: __dirname + '/icon.png'
  })

  // and load the index.html of the app.
  addWindow.loadFile('src/base/index.html')
}
function createFornecedores() {
  // Create the browser window.
  fornecedores = new BrowserWindow({
    width: 1200,
    height: 670,
    minWidth: 940,
    minHeight: 560,
    icon: __dirname + '/icon.png'
  })

  // and load the index.html of the app.
  fornecedores.loadFile('src/base/fornecedores.html')
}
function createEstrategias() {
  // Create the browser window.
  estrategias = new BrowserWindow({
    width: 1200,
    height: 670,
    minWidth: 940,
    minHeight: 560,
    icon: __dirname + '/icon.png'
  })

  // and load the index.html of the app.
  estrategias.loadFile('src/base/estrategias.html')
}
function createSocios() {
  // Create the browser window.
  socios = new BrowserWindow({
    width: 1200,
    height: 670,
    minWidth: 940,
    minHeight: 560,
    icon: __dirname + '/icon.png'
  })

  // and load the index.html of the app.
  socios.loadFile('src/base/sociedade.html')
}
function createReclamacoes() {
  // Create the browser window.
  socios = new BrowserWindow({
    width: 1200,
    height: 670,
    minWidth: 940,
    minHeight: 560,
    icon: __dirname + '/icon.png'
  })

  // and load the index.html of the app.
  socios.loadFile('src/base/reclamacoes.html')
}
function createTodoStock() {
  // Create the browser window.
  stock = new BrowserWindow({
    width: 1200,
    height: 670,
    minWidth: 940,
    minHeight: 560,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      devTools: true,
      contextIsolation: false,
      webSecurity: false
    },
    icon: __dirname + '/icon.png'
  })

  // and load the index.html of the app.
  stock.loadFile('src/base/todoStock.html')
  ipc.on('novoStock', () => {
    console.log('novoStock')
    const NOTIFICATION_TITLE = 'Novo Stock'
    const NOTIFICATION_BODY = 'Foi Inserido Um Novo Stock Na Sua Base de Dados'
    new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
  })
  ipc.on('erroNovoStock', () => {
    console.log('erroNovoStock')
    const NOTIFICATION_TITLE = 'Erro'
    const NOTIFICATION_BODY = 'Erro ao Inserir Novo Stock Na Base de Dados! Todos Os Campos Devem Ser Preenchidos'
    new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
  })
  ipc.on('produtoRemovido', () => {
    console.log('produtoRemovido')
    const NOTIFICATION_TITLE = 'Stock Removido'
    const NOTIFICATION_BODY = 'Foi Removido Um Stock Na Sua Base de Dados'
    new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
  })
  ipc.on('produtoEditado', () => {
    console.log('produtoEditado')
    const NOTIFICATION_TITLE = 'Stock Editado'
    const NOTIFICATION_BODY = 'Foi Editado Um Stock Na Sua Base de Dados'
    new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
  })

}
function createFuncionarios() {
  // Create the browser window.
  funcionarios = new BrowserWindow({
    width: 1200,
    height: 670,
    minWidth: 940,
    minHeight: 560,
    icon: __dirname + '/icon.png'
  })

  // and load the index.html of the app.
  funcionarios.loadFile('src/base/funcionarios.html')
}
function createDiarioVendas() {
  // Create the browser window.
  diarioVende = new BrowserWindow({
    width: 1200,
    height: 670,
    minWidth: 940,
    minHeight: 560,
    icon: __dirname + '/icon.png'
  })

  // and load the index.html of the app.
  diarioVende.loadFile('src/base/vendas.html')
}
function folhaSalario1() {
  // Create the browser window.
  folhaSalario = new BrowserWindow({
    width: 1200,
    height: 670,
    minWidth: 940,
    minHeight: 560,
    icon: __dirname + '/icon.png',
    
  })

  // and load the index.html of the app.
  folhaSalario.loadFile('src/base/folhaSalario.html')
}
function gestaoFilas1() {
  // Create the browser window.
  gestaoFilas = new BrowserWindow({
    width: 1200,
    height: 670,
    minWidth: 940,
    minHeight: 560,
    icon: __dirname + '/icon.png'
  })

  // and load the index.html of the app.
  gestaoFilas.loadFile('src/base/filas.html')
}
function createDevolucoes() {
  // Create the browser window.
  diarioVende = new BrowserWindow({
    width: 1200,
    height: 670,
    minWidth: 940,
    minHeight: 560,
    icon: __dirname + '/icon.png'
  })

  // and load the index.html of the app.
  diarioVende.loadFile('src/base/devolucoes.html')
}
function createRecibos() {
  // Create the browser window.
  diarioVende = new BrowserWindow({
    width: 1200,
    height: 670,
    minWidth: 940,
    minHeight: 560,
    icon: __dirname + '/icon.png'
  })

  // and load the index.html of the app.
  diarioVende.loadFile('src/base/recibos.html')
}

function createCaixa() {
  // Create the browser window.
  diarioVende = new BrowserWindow({
    width: 1200,
    height: 670,
    minWidth: 940,
    minHeight: 560,
    icon: __dirname + '/icon.png',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  })

  // and load the index.html of the app.
  diarioVende.loadFile('src/caixa.html')

  ipcMain.on('widthPage', (event, arg2) => {
    // const data2 = arg2;
    dimensaoImoressora = arg2;
  });
  
  ipcMain.on('printerName', (event, arg1) => {
    // const data1 = arg1;
    // console.log(data1);
    nomeIpressora = arg1;
  });
  
  ipcMain.on('print', (event, arg) => {
    const dataIm = JSON.parse(arg);
    console.log(dimensaoImoressora);
    console.log(nomeIpressora);
    // console.log(dataIm);
    PosPrinter.print(dataIm, {
      preview: false, // Preview in window or print
      width: `${dimensaoImoressora}`, //  width of content body
      margin: "0 0 0 0", // margin of content body
      copies: 1, // Number of copies to print
      printerName: `${nomeIpressora}`, // printerName: string, check it at webContent.getPrinters()
      timeOutPerLine: 500,
      silent: true,
    }).catch((error) => console.error(error));
  });
}

function createImpressora() {
  // Create the browser window.
  diarioVende = new BrowserWindow({
    width: 1200,
    height: 670,
    minWidth: 940,
    minHeight: 560,
    icon: __dirname + '/icon.png',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  })

  // and load the index.html of the app.
  diarioVende.loadFile('src/impressora.html')
}

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 670,
    minWidth: 940,
    minHeight: 560,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      devTools: true,
      contextIsolation: false,
    },
    icon: __dirname + '/icon.png' 
  })

  // and load the index.html of the app.
  mainWindow.loadFile('src/login.html');
  mainWindow.on('closed', () => app.quit());

  mainWindow.once('ready-to-show', () => {
    autoUpdater.checkForUpdatesAndNotify();
  });

  ipc.on('activarConta', () => {
    console.log('activarConta')
    createActivarConta()
  })

  ipc.on('print', (event, arg) => {
    const data = JSON.parse(arg)
    PosPrinter.print(data, {
      printerName: 'XPC-80',
      silent: true,
      preview: true
    }).catch(error => console.error(error));
  })

  ipc.on('icon2', () => {
    console.log('icon2')
    createMenu1()
  })

  ipc.on('caixa', () => {
    createCaixa()
  })

  ipc.on('impressora', () => {
    createImpressora()
  })

  ipc.on('icon3', () => {
    console.log('icon3')
    createRH()
  })

  ipc.on('icon4', () => {
    console.log('icon4')
    createFinancas()
  })

  ipc.on('icon5', () => {
    console.log('icon5')
    createClientes()
  })

  ipc.on('icon6', () => {
    console.log('icon6')
    createFornecedores()
  })

  ipc.on('icon7', () => {
    console.log('icon7')
    createEstrategias()
  })

  ipc.on('icon8', () => {
    console.log('icon8')
    createSocios()
  })

  ipc.on('icon9', () => {
    console.log('icon9')
    createTodoStock()
  })

  ipc.on('icon10', () => {
    console.log('icon10')
    createFuncionarios()
  })
  ipc.on('icon11', () => {
    console.log('icon11')
    createDiarioVendas()
  })
  ipc.on('icon12', () => {
    console.log('icon12')
    createReclamacoes()
  })
  ipc.on('icon13', () => {
    console.log('icon13')
    createDevolucoes()
  })
  ipc.on('icon14', () => {
    console.log('icon14')
    createRecibos()
  })
  ipc.on('icon15', () => {
    console.log('icon15')
    folhaSalario1()
  })
  ipc.on('icon16', () => {
    console.log('icon16')
    gestaoFilas1()
  })
}
app.whenReady().then(() => {
  // Esconder Programador
  createWindow()
  const mainMenu = Menu.buildFromTemplate(menuTemplete)
  //  Menu.setApplicationMenu(mainMenu)
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    // if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
const menuTemplete = [
  {
    label: 'Ficheiro',
    submenu: [

      {
        label: 'Fechar',
        accelerator: (() => {
          if (process.platform === 'darwin') {
            return 'Command+Q';
          } else {
            return 'Ctrl+Q';
          }
        })(),
        click() {
          app.quit();
        }
      }
    ]
  }
]
if (process.platform === 'darwin') {
  menuTemplete.unshift({});
}

ipcMain.on('app_version', (event) => {
  event.sender.send('app_version', { version: app.getVersion() });
});

autoUpdater.on('update-available', () => {
  mainWindow.webContents.send('update_available');
});

autoUpdater.on('update-downloaded', () => {
  mainWindow.webContents.send('update_downloaded');
});

ipcMain.on('restart_app', () => {
  autoUpdater.quitAndInstall();
});


