const {contextBridge, ipcRenderer} = require("electron");

contextBridge.exposeInMainWorld("generateqrcode", {
    generate: (saida, conteudo) => ipcRenderer.invoke("gq", saida, conteudo),
});