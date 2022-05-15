const configuracoes = document.getElementById('configuracoes');
const cadastro = document.getElementById('cadastro');
const relatorios = document.getElementById('relatorios');
const indicadores = document.getElementById('indicadores');
const instrucoes = document.getElementById('instrucoes');
const tabela = document.getElementById('geral');
const secundButton = document.getElementById('secundButton');
const parametros = document.getElementById('parametros');
const estruturaCargos = document.getElementById('estruturaCargos');
const addParametros2 = document.getElementById('addParametros2');
const ddlista = document.getElementById('ddlista');
const parametrosRH = document.getElementById('parametros');



let parametrosLista = '';
let parametrosLista1 = '';
let parametrosLista2 = '';
let parametrosLista3 = '';
let parametrosLista4 = '';
let parametrosLista5 = '';
let parametrosLista6 = '';
let parametrosLista7 = '';
let parametrosLista8 = '';
let parametrosLista9 = '';
let parametrosLista10 = '';
let parametrosLista11 = '';
let parametrosLista12 = '';
let tudoLista = '';

configuracoes.addEventListener('click', (e) => {
    e.preventDefault();
        window.location= '../src/rhConfiguracoes.html';
    
    
});

parametrosRH.addEventListener('click',(e) => {
    e.preventDefault();
    window.location= '../src/parametrosRH.html';
        
});
estruturaCargos.addEventListener('click',(e) => {
    e.preventDefault();
    window.location= '../src/estruturaCargosRH.html';
        
});

// Fim configuracoes

cadastro.addEventListener('click', (e) => {
    e.preventDefault();
    window.location= '../src/cadastroRH.html';    
});

relatorios.addEventListener('click', (e) => {
    e.preventDefault();
    window.location= '../src/relatorios.html';
});

indicadores.addEventListener('click', (e) => {
    e.preventDefault();
    secundButton.innerHTML = '';
    tabela.innerHTML = '<p>indicadores</p>';
});

instrucoes.addEventListener('click', (e) => {
    e.preventDefault();
    secundButton.innerHTML = '';
    tabela.innerHTML = '<p>instrucoes</p>';
});

