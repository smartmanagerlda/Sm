const { ipcRenderer } = require('electron');
const ipc = ipcRenderer
const caixa = document.getElementById('caixa');
const icon2 = document.getElementById('icon2');
const icon3 = document.getElementById('icon3');
const icon4 = document.getElementById('icon4');
const icon5 = document.getElementById('icon5');
const icon6 = document.getElementById('icon6');
const icon7 = document.getElementById('icon7');
const icon8 = document.getElementById('icon8');
const icon9 = document.getElementById('icon9');
const icon10 = document.getElementById('icon10');
const icon11 = document.getElementById('icon11');
const icon12 = document.getElementById('icon12');
const icon13 = document.getElementById('icon13');
const icon14 = document.getElementById('icon14');
const icon15 = document.getElementById('icon15');
const icon16 = document.getElementById('icon16');
let sair = document.querySelector('.sair');
sair.addEventListener('click', (e) =>{
    window.location= '../login.html';
});
icon2.addEventListener('click', () =>{
    ipc.send('icon2')
})
icon3.addEventListener('click', () =>{
    ipc.send('icon3')
})

icon4.addEventListener('click', () =>{
    ipc.send('icon4')
})


icon5.addEventListener('click', () =>{ 
    ipc.send('icon5')
})

icon6.addEventListener('click', () =>{
    ipc.send('icon6')
})

icon7.addEventListener('click', () =>{
    ipc.send('icon7') 
})

icon8.addEventListener('click', () =>{
    ipc.send('icon8')
})

icon9.addEventListener('click', () =>{
    ipc.send('icon9')
})

icon10.addEventListener('click', () =>{
    ipc.send('icon10')
})

icon11.addEventListener('click', () =>{
    ipc.send('icon11')
})

icon12.addEventListener('click', () =>{
    ipc.send('icon12')
})

icon13.addEventListener('click', () =>{
    ipc.send('icon13')
})

icon14.addEventListener('click', () =>{
    ipc.send('icon14')
})
icon15.addEventListener('click', () =>{
    ipc.send('icon15')
})
icon16.addEventListener('click', () =>{
    ipc.send('icon16')
})