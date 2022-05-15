
const activarConta = document.getElementById('activarConta');

activarConta.addEventListener('click', () =>{
    ipc.send('activarConta')
})