
const addProduto = document.getElementById('maisProduto');
const servicoCotacao = document.getElementById('servicoCotacao');
const removProduto = document.getElementById('removProduto');
const cansCompra = document.getElementById('cansCompra');
const finalCompra = document.getElementById('finalCompra');
const finalCotacao = document.getElementById('finalCotacao');
// const provisorio = document.getElementById('provisorio');
const confirmarCompra = document.getElementById('confProduto');
const maisProduto = document.getElementById('addProduto');
const maisProduto1 = document.getElementById('addProduto1');
const maisProdutoCaixa = document.getElementById('maisProdutoCaixa');
const codigo = document.getElementById('codigo');
const nomeClienteCaixa = document.getElementById('nomeClienteCaixa');
const rrNome = document.getElementById('rrNome');
const quantidade = document.getElementById('quantidade');
const quantStock = document.getElementById('quantStock');
const codStock = document.getElementById('codStock');
const discStock = document.getElementById('discStock');
const discpStock = document.getElementById('discpStock');
const ivaStock = document.getElementById('ivaStock');
const precounStock = document.getElementById('precounStock');
const precotStock = document.getElementById('precotStock');
const stockTotal11 = document.getElementById('stockTotal11');
const rrProduto = document.getElementById('rrProduto');
const cod1 = document.getElementById('cod1');
const produto1 = document.getElementById('produto1'); 
// const hora = document.getElementById('hora');
const token = localStorage.getItem('token');
const qant1 = document.getElementById('qant1');
const disc1 = document.getElementById('disc1');
const vendaDiaria = document.getElementById('vendaDiaria');
const un1 = document.getElementById('preço/un1');
const stockTotal = document.getElementById('stockTotal');
const fecharRecibo = document.getElementById('fecharRecibo');
const fecharRecibo2 = document.getElementById('fecharRecibo2');
const fecharCotacao = document.getElementById('fecharCotacao');
const fecharCotacao1 = document.getElementById('fecharCotacao1');
const nomeClienteCotacao = document.getElementById('nomeClienteCotacao');
const impressora = document.getElementById('impressora');
const listaTotal = document.querySelector('.lista');
const recibo23 = document.querySelector('.recibo23');
const recibo23Cot = document.querySelector('.recibo23Cot');
const recibo23Cota = document.querySelector('.recibo23Cota');
let recibo23F = '';
let recibo23F1 = '';
let output = '';
let outputRec = '';
let fiura = '';
let nomeClienteCotacao2 = ''; 
let clienteNomeCaixa2 = '';
const empresa = localStorage.getItem('empresa');
const usuario23 = localStorage.getItem('usuario');
const data = [];
const dataHistoricoVendas = [];
const produtosSugestao = [];
const reciboVolatel = [];
var dataImpressao = [];
var totalRec = 0;
var vDiario = 0;

var dataImprimir = "";
var horaImprimir = "";

const empresaNUIT = localStorage.getItem('empresaNUITa');
const bancoNIB = localStorage.getItem('bancoNIBa');
const avenidaLocalizacao = localStorage.getItem('avenidaLocalizacaoa');

const nomeEpresa23id = document.getElementById('nomeEpresa23');
const nomeEpresa233id = document.getElementById('nomeEpresa233');
const avenidaLocalizacaoid = document.getElementById('avenidaLocalizacao23');
const bancoNIBid = document.getElementById('bancoNIB23');
const empresaNUITid = document.getElementById('empresaNUIT23');

const sairCaixa = document.getElementById('sairCaixa');

const nomeEpresa233id2 = document.getElementById('nomeEpresa243');
const avenidaLocalizacaoid2 = document.getElementById('avenidaLocalizacao243');
const bancoNIBid2 = document.getElementById('bancoNIB243');
const empresaNUITid2 = document.getElementById('empresaNUIT243');

const nomeEpresa233id21 = document.getElementById('nomeEpresa243a');
const avenidaLocalizacaoid21 = document.getElementById('avenidaLocalizacao243a');
const bancoNIBid21 = document.getElementById('bancoNIB243a');
const empresaNUITid21 = document.getElementById('empresaNUIT243a');
const nomeClienteCot = document.getElementById('nomeClienteCot');
const searchInput = document.querySelector('.search-input');

const nomeClienteProdutosValue = document.getElementById('nomeClienteProdutosValue');
const nomeClienteProdutos = document.getElementById('nomeClienteProdutos');
const cliente23e = document.getElementById('cliente23e');
const contactoEmpresa = document.getElementById('contactoEmpresa');

var currentTime = '';
nomeEpresa23id.innerHTML = empresa;
nomeEpresa233id.innerHTML = empresa;
avenidaLocalizacaoid.innerHTML = avenidaLocalizacao;
bancoNIBid.innerHTML = bancoNIB;
empresaNUITid.innerHTML = empresaNUIT;

nomeEpresa233id2.innerHTML = empresa;
avenidaLocalizacaoid2.innerHTML = avenidaLocalizacao;
bancoNIBid2.innerHTML = bancoNIB;
empresaNUITid2.innerHTML = empresaNUIT;

nomeEpresa233id21.innerHTML = empresa;
avenidaLocalizacaoid21.innerHTML = avenidaLocalizacao;
bancoNIBid21.innerHTML = bancoNIB;
empresaNUITid21.innerHTML = empresaNUIT;
console.log(token)

// const {ipcRenderer} = require('electron');
let { remote } = require("electron");
// console.log(process.versions.electron);

const { PosPrinter } = remote.require("electron-pos-printer");
// const {PosPrinter} = require("electron-pos-printer"); //dont work in production (??)

// const path = require("path");

let webContents = remote.getCurrentWebContents();
let printers = webContents.getPrinters(); //list the printers
console.log(printers);

printers.map((item, index) => {
  //write in the screen the printers for choose
  document.getElementById("list_printers").innerHTML +=
    ' <input type="radio" id="printer_' +
    index +
    '" name="printer" value="' +
    item.name +
    '"><label for="printer_' +
    index +
    '">' +
    item.name +
    "</label><br>";
});

const confirmarImpressora = document.getElementById('confirmarImpressora');
confirmarImpressora.addEventListener('click', (e) => {
    e.preventDefault(); 
    servicoCotacao.disabled = false;
    addProduto.disabled = false;

});



let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
function currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
// import { jsPDF } from "jspdf";
// Data
const empresa2 = localStorage.getItem('empresa');
const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2}`;
fetch(url3)
    .then(res => res.json())
    .then(content => {

        for (let i = 0; i < content[0]['categoria'].length; i++) {
            for (let j = 0; j < content[0]['categoria'][i]['stock'].length; j++) {
                produtosSugestao.push({ produto: content[0]['categoria'][i]['stock'][j]['nomeProduto'] })
            }
        }

    })

const painelSugestao = document.querySelector('.suggestions');
searchInput.addEventListener('keyup', function () {
    const input = searchInput.value;
    painelSugestao.innerHTML = '';
    const sugestoes = produtosSugestao.filter(function (produtos) {
        return produtos.produto.toLowerCase().startsWith(input);
    })
    sugestoes.forEach(function (sugerido) {
        const div11 = document.createElement('div');
        div11.innerHTML = sugerido.produto;
        painelSugestao.appendChild(div11);
    })
    if (input === '') {
        painelSugestao.innerHTML = '';
    }
});
painelSugestao.addEventListener('click', function (e) {
    console.log(e.target.innerHTML)
    codigo.value = e.target.innerHTML;
    painelSugestao.innerHTML = '';
});
function greet() {
    let currentTimeDate = new Date();
    var weekday = new Array(7);
    weekday[0] = "Domingo";
    weekday[1] = "Segunda-Feira";
    weekday[2] = "Terça-Feira";
    weekday[3] = "Quarta-Feira";
    weekday[4] = "Quinta-Feira";
    weekday[5] = "Sexta-Feira";
    weekday[6] = "Sábado";

    var month = new Array();
    month[0] = "Jan";
    month[1] = "Fev";
    month[2] = "Mar";
    month[3] = "Abr";
    month[4] = "Mio";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Ago";
    month[8] = "Set";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dez";


    var currentDay = weekday[currentTimeDate.getDay()];
    var currentDate = currentTimeDate.getDate();
    var currentMonth = month[currentTimeDate.getMonth()];
    var CurrentYear = currentTimeDate.getFullYear();
    var fullDate = `${currentDate} ${currentMonth} ${CurrentYear}`;
    var hours = currentTimeDate.getHours();
    var minutes = currentTimeDate.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var AMPM = hours >= 12 ? ' da Tarde' : ' da Manhã';
    if (hours === 12) {
        hours = 12;

    } else {

        hours = hours % 12;

    }
    currentTime = `${hours}:${minutes}${AMPM}`;
    document.getElementById("hora").innerHTML = currentTime;
    document.getElementById("horaRecibo").innerHTML = currentTime;
    document.getElementById("day").innerHTML = currentDay;
    document.getElementById("date").innerHTML = fullDate;
    document.getElementById("data23").innerHTML = fullDate;
    document.getElementById("data23a").innerHTML = fullDate;
    document.getElementById("operador23e").innerHTML = usuario23;
    document.getElementById("operador23ea").innerHTML = usuario23;
    dataImprimir = fullDate;
    horaImprimir = currentTime;
}
setInterval(greet, 1000);

// Fim Data
const reciboF = document.querySelector('.recibo')
const reciboF2 = document.querySelector('.recibo24')
const reciboF21 = document.querySelector('.recibo241')
const reciboF21a = document.querySelector('.recibo241a')
document.getElementById("total").innerHTML = currencyFormat(totalRec) + " Mt";

const vendidoDoDia = parseInt(localStorage.getItem('vendido'));
vendaDiaria.innerHTML = "Vendido: " + currencyFormat(vendidoDoDia) + " Mt";
confirmarCompra.addEventListener('click', (e) => {
    totalRec = 0;
    e.preventDefault();
    fiura = '';
    document.querySelector(".figure").innerHTML = fiura;
    confirmarCompra.disabled = true;
    finalCompra.disabled = false;
    finalCotacao.disabled = false;
    addProduto.disabled = false;
    removProduto.disabled = false;
    // cansCompra.disabled = true;
    // ivaStock
    reciboVolatel.forEach(rec => {
        console.log(rec[0].pqty)
        console.log(rec[0].precounStock)
        if (rec[0].ivaStock == "17%") {
            totalRec += parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock)) + parseInt((rec[0].pqty)) * (0.17 * parseInt((rec[0].precounStock)));
        } else {
            totalRec += parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock));
        }
        
        outputRec += `
        <div class="container-fluid text-black">       
                                    <div class="row">
                                        <div class="col-md">
                                            <small id="Produto">${rec[0].nomeProduto}</small>
                                        </div>
                                        <div class="col-md">
                                            <small id="Qant">${rec[0].pqty}</small>
                                        </div>
                                        <div class="col-md">
                                            <small id="Preço/Un">${rec[0].precounStock}</small>
                                        </div>
                                                                            
                                    </div>
                                </div>`;
    })
    reciboF.innerHTML = outputRec;
    const totalIva23F = parseInt(totalRec);
    const totalRecF = parseFloat(totalRec);
    document.getElementById("total").innerHTML = currencyFormat(totalRecF) + " Mt";

});
maisProdutoCaixa.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("alertaSucesso").innerHTML = '';
    const pcode = nomeClienteCaixa.value;
    if (pcode == '') {
        $('#exampleModalServicosCotacoes').modal('hide');
        document.getElementById("alertaSucesso").innerHTML = `
        <div class="alert alert-danger" role="alert">
                            <div class="text-center">
                                <h6>O Nome do Cliente em Branco</h6>
                            </div> 
        </div>`
            ;
        setTimeout(function () {
            document.getElementById("alertaSucesso").innerHTML = '';
        }, 4000);
    }
    else {
        const empresa2 = localStorage.getItem('empresa');
        const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2}`;
        fetch(url3)
            .then(res => res.json())
            .then(content => {
                if (content[0]['mercado'].length === 0) {
                    document.getElementById("alertaSucesso").innerHTML = '';
                    $('#exampleModalServicosCotacoes').modal('hide'); //hide modal
                    document.getElementById("alertaSucesso").innerHTML = `
                <div class="alert alert-warning" role="alert">
                                    <div class="text-center">
                                        <h6>Cliente não encontrado..</h6>
                                    </div> 
                </div>`
                        ;
                    setTimeout(function () {
                        document.getElementById("alertaSucesso").innerHTML = '';
                    }, 4000);
                } else {

                    $('#exampleModalServicosCotacoes').modal('hide'); //hide modal
                    for (var i = 0; i < content[0]['mercado'].length; i++) {
                        let clienteNomeCaixa = content[0]['mercado'][i]['nomeCliente']
                        if (clienteNomeCaixa == pcode) {
                            let precoProduto = content[0]['mercado'][i]['preco'];
                            let totalp = parseInt(content[0]['mercado'][i]['quantidade']);
                            let discStock2 = "0.00";
                            let discpStock2 = "0.00";
                            let ivaStock2 = "17%";
                            let imgProduto2 = content[0]['mercado'][i]['img'];
                            let codigoProduto = 'P/S';
                            output = '';
                            outputRec = '';

                            fiura = `
                                <div class="col-md-4 col-sm-4">
                                    <div class="thumbnail">
                                        <img src="${imgProduto2}"
                                        class="img-responsive" id="Myimg" style="min-height:100px; width:100px;">
                                    </div>
                                </div>`;
                            document.querySelector(".figure").innerHTML = fiura;
                            quantStock.value = content[0]['mercado'][i]['quantidade'];
                            codStock.value = 'P/S';
                            discStock.value = discStock2;
                            discpStock.value = discpStock2;
                            ivaStock.value = ivaStock2;
                            precounStock.value = precoProduto;
                            precotStock.value = parseInt(content[0]['mercado'][i]['quantidade']) * parseInt(content[0]['mercado'][i]['preco']);
                            const arrayProduto = [
                                {
                                    "quantStock": `${content[0]['mercado'][i]['quantidade']}`,
                                    "nomeProduto": `${content[0]['mercado'][i]['nomeProduto']}`,
                                    "codStock": `${codigoProduto}`,
                                    "precounStock": `${precoProduto}`,
                                    "precotStock": `${parseInt(content[0]['mercado'][i]['quantidade']) * parseInt(content[0]['mercado'][i]['preco'])}`,
                                    "discStock": `${discStock.value}`,
                                    "discpStock": `${discpStock.value}`,
                                    "ivaStock": `${ivaStock.value}`,
                                    "quantidadeProduto": `${content[0]['mercado'][i]['quantidade']}`,
                                    "imgg": `${imgProduto2}`,
                                    "pqty": `${totalp}`
                                }
                            ];
                            reciboVolatel.push(arrayProduto);
                            data.push(arrayProduto);
                            
                            confirmarCompra.disabled = false;
                            addProduto.disabled = true;
                            removProduto.disabled = true;
                            cansCompra.disabled = false;
                            finalCompra.disabled = true;

                        } else {
                            document.getElementById("alertaSucesso").innerHTML = '';
                            $('#exampleModalServicosCotacoes').modal('hide'); //hide modal
                            document.getElementById("alertaSucesso").innerHTML = `
                        <div class="alert alert-info" role="alert">
                                            <div class="text-center">
                                                <h6>Produto seleccionado...</h6>
                                            </div> 
                        </div>`
                                ;
                            setTimeout(function () {
                                document.getElementById("alertaSucesso").innerHTML = '';
                            }, 4000);
                        }
                    }
                    for (var i = 0; i < content[0]['mercado'].length; i++) {
                        let clienteNomeCaixa = content[0]['mercado'][i]['nomeCliente']
                        console.log(clienteNomeCaixa);
                        if (clienteNomeCaixa == nomeClienteCaixa.value) {
                            clienteNomeCaixa2 = nomeClienteCaixa.value;

                        }
                    }
                }

            })
    }

});
$('#myModal').modal('hide'); //hide modal
servicoCotacao.addEventListener('click', (e) => {
    e.preventDefault();
    $('#exampleModalServicosCotacoes').modal('show');
});

impressora.addEventListener('click', (e) => {
    e.preventDefault();
    $('#exampleImpressora').modal('show');
});

maisProduto.addEventListener('click', (e) => {
    e.preventDefault();
    const pcode = codigo.value;
    const pqty = quantidade.value;
    console.log('lLUcas');
    document.getElementById("alertaSucesso").innerHTML = '';
    if (pcode == '' || pqty == '') {
        $('#exampleModalCenter').modal('hide'); //hide modal
        document.getElementById("alertaSucesso").innerHTML = `
        <div class="alert alert-danger" role="alert">
                            <div class="text-center">
                                <h6>O Nome do Produto e/ou Quandiade em Falta</h6>
                            </div> 
        </div>`
            ;
        setTimeout(function () {
            document.getElementById("alertaSucesso").innerHTML = '';
        }, 4000);
    }
    else {
        const url = `https://stocksmanager1.herokuapp.com/stocksEmpresa3/${codigo.value}/${empresa}`;
        fetch(url)
            .then(res => res.json())
            .then(content => {
                console.log(content['result'][0]);
                if (content.result.length === 0) {
                    document.getElementById("alertaSucesso").innerHTML = '';
                    console.log('Produto nao encontrado..');
                    console.log(codigo.value)
                    console.log(empresa)
                    $('#exampleModalCenter').modal('hide'); //hide modal
                    document.getElementById("alertaSucesso").innerHTML = `
                <div class="alert alert-warning" role="alert">
                                    <div class="text-center">
                                        <h6>Produto nao encontrado...</h6>
                                    </div> 
                </div>`
                        ;
                    setTimeout(function () {
                        document.getElementById("alertaSucesso").innerHTML = '';
                    }, 4000);
                } else {

                    const produtos = content['result'][0]['list'][0]['stock'];
                    console.log(content['result'][0]['list'][0]['stock'].length);
                    $('#exampleModalCenter').modal('hide'); //hide modal

                    for (let i = 0; i < produtos.length; i++) {
                        console.log("Lucas" + produtos.length);
                        const categoriaProduto = content['result'][0]['list'][0]['nomeCategoria'];
                        const nomeProduto = content['result'][0]['list'][0]['stock'][i]['nomeProduto'];
                        const codigoProduto = content['result'][0]['list'][0]['stock'][i]['produto'][0]['codigo'];
                        const imgProduto = content['result'][0]['list'][0]['stock'][i]['produto'][0]['img'];
                        const precoProduto = content['result'][0]['list'][0]['stock'][i]['produto'][0]['precoVenda'];
                        const quantidadeProduto = content['result'][0]['list'][0]['stock'][i]['produto'][0]['quantidade'];
                        const quantidadeInicial = content['result'][0]['list'][0]['stock'][i]['produto'][0]['quantidadeActual'];
                        const totalp = pqty * precoProduto;
                        const discStock2 = "0.00";
                        const discpStock2 = "0.00";
                        const ivaStock2 = "17%";

                        if (nomeProduto == codigo.value) {
                            output = '';
                            outputRec = '';

                            fiura = `
                                <div class="col-md-4 col-sm-4">
                                    <div class="thumbnail">
                                        <img src="${imgProduto}"
                                        class="img-responsive" id="Myimg" style="min-height:100px; width:100px;">
                                    </div>
                                </div>`;
                            document.querySelector(".figure").innerHTML = fiura;
                            console.log('ok')
                            quantStock.value = quantidade.value;
                            codStock.value = codigoProduto;
                            discStock.value = discStock2;
                            discpStock.value = discpStock2;
                            ivaStock.value = ivaStock2;
                            precounStock.value = precoProduto;
                            precotStock.value = totalp;
                            stockTotal11.value = quantidadeProduto;
                            const arrayProduto = [
                                {
                                    "quantStock": `${quantidade.value}`,
                                    "nomeProduto": `${nomeProduto}`,
                                    "categoriaProduto": `${categoriaProduto}`,
                                    "codStock": `${codigoProduto}`,
                                    "precounStock": `${precoProduto}`,
                                    "precotStock": `${totalp}`,
                                    "discStock": `${discStock.value}`,
                                    "discpStock": `${discpStock.value}`,
                                    "ivaStock": `${ivaStock.value}`,
                                    "quantidadeProduto": `${quantidadeProduto}`,
                                    "quantidadeInicial": `${quantidadeInicial}`,
                                    "pqty": `${pqty}`,
                                    "imgg": `${imgProduto}`,
                                }
                            ];
                            reciboVolatel.push(arrayProduto);
                            data.push(arrayProduto);
                            confirmarCompra.disabled = false;
                            addProduto.disabled = true;
                            removProduto.disabled = true;
                            cansCompra.disabled = false;
                            finalCompra.disabled = true;

                        }
                    }
                }

            })
    }

});

maisProduto1.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Luccas')
    const pcode = codigo.value;
    const pqty = quantidade.value;
    console.log('lLUcas');
    document.getElementById("alertaSucesso").innerHTML = '';
    if (pcode == '' || pqty == '') {
        $('#exampleModalCenter').modal('hide'); //hide modal
        document.getElementById("alertaSucesso").innerHTML = `
        <div class="alert alert-danger" role="alert">
                            <div class="text-center">
                                <h6>O Nome do Produto e/ou Quandiade em Falta</h6>
                            </div> 
        </div>`
            ;
        setTimeout(function () {
            document.getElementById("alertaSucesso").innerHTML = '';
        }, 4000);
    }
    else {
        const url = `https://stocksmanager1.herokuapp.com/stocksEmpresa3/${codigo.value}/${empresa}`;
        fetch(url)
            .then(res => res.json())
            .then(content => {
                console.log(content['result'][0]);
                if (content.result.length === 0) {
                    document.getElementById("alertaSucesso").innerHTML = '';
                    console.log('Produto nao encontrado..');
                    console.log(codigo.value)
                    console.log(empresa)
                    $('#exampleModalCenter').modal('hide'); //hide modal
                    document.getElementById("alertaSucesso").innerHTML = `
                <div class="alert alert-warning" role="alert">
                                    <div class="text-center">
                                        <h6>Produto nao encontrado...</h6>
                                    </div> 
                </div>`
                        ;
                    setTimeout(function () {
                        document.getElementById("alertaSucesso").innerHTML = '';
                    }, 4000);
                } else {

                    const produtos = content['result'][0]['list'][0]['stock'];
                    console.log(content['result'][0]['list'][0]['stock'].length);
                    $('#exampleModalCenter').modal('hide'); //hide modal

                    for (let i = 0; i < produtos.length; i++) {
                        console.log("Lucas" + produtos.length);
                        const categoriaProduto = content['result'][0]['list'][0]['nomeCategoria'];
                        const nomeProduto = content['result'][0]['list'][0]['stock'][i]['nomeProduto'];
                        const codigoProduto = content['result'][0]['list'][0]['stock'][i]['produto'][0]['codigo'];
                        const imgProduto = content['result'][0]['list'][0]['stock'][i]['produto'][0]['img'];
                        const precoProduto = content['result'][0]['list'][0]['stock'][i]['produto'][0]['precoVenda'];
                        const quantidadeProduto = content['result'][0]['list'][0]['stock'][i]['produto'][0]['quantidade'];
                        const quantidadeInicial = content['result'][0]['list'][0]['stock'][i]['produto'][0]['quantidadeActual'];
                        const totalp = pqty * precoProduto;
                        const discStock2 = "0.00";
                        const discpStock2 = "0.00";
                        const ivaStock2 = "0%";

                        if (nomeProduto == codigo.value) {
                            output = '';
                            outputRec = '';

                            fiura = `
                                <div class="col-md-4 col-sm-4">
                                    <div class="thumbnail">
                                        <img src="${imgProduto}"
                                        class="img-responsive" id="Myimg" style="min-height:100px; width:100px;">
                                    </div>
                                </div>`;
                            document.querySelector(".figure").innerHTML = fiura;
                            console.log('ok')
                            quantStock.value = quantidade.value;
                            codStock.value = codigoProduto;
                            discStock.value = discStock2;
                            discpStock.value = discpStock2;
                            ivaStock.value = ivaStock2;
                            precounStock.value = precoProduto;
                            precotStock.value = totalp;
                            stockTotal11.value = quantidadeProduto;
                            const arrayProduto = [
                                {
                                    "quantStock": `${quantidade.value}`,
                                    "nomeProduto": `${nomeProduto}`,
                                    "categoriaProduto": `${categoriaProduto}`,
                                    "codStock": `${codigoProduto}`,
                                    "precounStock": `${precoProduto}`,
                                    "precotStock": `${totalp}`,
                                    "discStock": `${discStock.value}`,
                                    "discpStock": `${discpStock.value}`,
                                    "ivaStock": `${ivaStock.value}`,
                                    "quantidadeProduto": `${quantidadeProduto}`,
                                    "quantidadeInicial": `${quantidadeInicial}`,
                                    "pqty": `${pqty}`,
                                    "imgg": `${imgProduto}`,
                                }
                            ];
                            reciboVolatel.push(arrayProduto);
                            data.push(arrayProduto);
                            confirmarCompra.disabled = false;
                            addProduto.disabled = true;
                            removProduto.disabled = true;
                            cansCompra.disabled = false;
                            finalCompra.disabled = true;

                        }
                    }
                }

            })
    }

});

nomeClienteProdutos.addEventListener('click', (e) => {
    $('#exampleModalVendaProdutos').modal('hide'); //close modal
    cliente23e.innerHTML = nomeClienteProdutosValue.value;
    e.preventDefault();
    recibo23F1 = "";
    recibo23F = "";
    let comIvaP = 0;
    let totalSemIvas = 0;
    totalRec = 0;
    reciboVolatel.forEach(rec => {
        if (rec[0].ivaStock == "17%") {
            totalRec += parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock)) + parseInt((rec[0].pqty)) * (0.17 * parseInt((rec[0].precounStock)));
            totalSemIvas += parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock));
            comIvaP += parseInt((rec[0].pqty)) * (0.17 * parseInt((rec[0].precounStock)));
        } else {
            totalRec += parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock));
            totalSemIvas += parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock));
        }
        recibo23F1 += `
        <div class="container-fluid text-black">
                                    <div class="row">
                                        <div class="col-md">
                                            <small>${rec[0].codStock}</small>              
                                        </div>
                                        <div class="col-md">
                                            <small>${rec[0].nomeProduto}</small>                    
                                        </div>
                                        <div class="col-md">
                                            <small>${rec[0].pqty}</small>
                                        </div>
                                        <div class="col-md">
                                            <small>${(currencyFormat(parseInt((rec[0].precounStock))))}</small>                   
                                        </div>
                                        <div class="col-md">
                                            <small>NA</small>                   
                                        </div>
                                        <div class="col-md">
                                            <small>${rec[0].discpStock}</small>                  
                                        </div> 
                                        <div class="col-md">
                                            <small>${currencyFormat((parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock))))}</small>                 
                                        </div>                                   
                                    </div>
                                    <hr style="border-top: dotted 2px;" /> 
                                </div>`;
        recibo23F += `
        <div class="container-fluid text-black">
                                    <div class="row">
                                        <div class="col-md">
                                            <small>${rec[0].codStock}</small>              
                                        </div>
                                        <div class="col-md">
                                            <small>${rec[0].nomeProduto}</small>                    
                                        </div>
                                        <div class="col-md">
                                            <small>${rec[0].pqty}</small>
                                        </div>
                                        <div class="col-md">
                                            <small>${(currencyFormat(parseInt((rec[0].precounStock))))}</small>                   
                                        </div>
                                        <div class="col-md">
                                            <small>NA</small>                   
                                        </div>
                                        <div class="col-md">
                                            <small>${rec[0].discpStock}</small>                  
                                        </div> 
                                        <div class="col-md">
                                            <small>${currencyFormat((parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock))))}</small>                 
                                        </div>                                  
                                    </div>
                                    <hr style="border-top: dotted 2px;" /> 
                                </div>`;
    });
    // const totalIva23F = parseInt(totalRec) * 0.17
    // const totalRecF = parseFloat(totalRec)
    document.getElementById("total23").innerHTML = currencyFormat(totalRec) + " Mt";
    document.getElementById("totalDesc23").innerHTML = discpStock.value;
    document.getElementById("totalsemIva23").innerHTML = currencyFormat(parseInt(totalSemIvas)) + " Mt";
    document.getElementById("totalIva23").innerHTML = currencyFormat(parseFloat(comIvaP)) + " Mt";
    reciboF2.innerHTML = recibo23F1;
    $('#exampleModalCenter4').modal('show'); //open modal

});

finalCompra.addEventListener('click', (e) => {
    $('#exampleModalVendaProdutos').modal('show'); //open modal
});

finalCotacao.addEventListener('click', (e) => {
    e.preventDefault();
    $('#exampleModalServicosCotacoes2').modal('show');
});

sairCaixa.addEventListener('click', (e) => {
    e.preventDefault();
    var m = new Date();
    var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
    const usuarioLogs = localStorage.getItem('usuario');
    const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
    let logs = new Request(urlLogs, {
        method: 'PATCH',
        headers: h,
        body: JSON.stringify({
            "nomeFuncionario": `${usuarioLogs}`,
            "historico": `O Colaborador ${usuarioLogs} fechou o Caixa`,
            "data": `${dateString}`
        })
    });
    fetch(logs)
        .then(ress => ress.json())
        .then(data5Logs => {
            console.log(data5Logs)
            const urlLogs1 = 'https://stocksmanager1.herokuapp.com/logsVendas';
            let logs1 = new Request(urlLogs1, {
                method: 'PATCH',
                headers: h,
                body: JSON.stringify({
                    "nomeFuncionario": `${usuarioLogs}`,
                    "historico": `O Colaborador ${usuarioLogs} Vendeu ${currencyFormat(vDiario)} Mt`,
                    "data": `${dateString}`
                })
            });
            fetch(logs1)
                .then(ress1 => ress1.json())
                .then(data5Logs1 => {
                    localStorage.setItem('vendido', '0');
                    window.location = 'login.html';
                });
        });
});

cansCompra.addEventListener('click', (e) => {
    e.preventDefault();
    reciboVolatel.length = 0;
    data.length = 0;
    totalRec = 0;
    document.getElementById("total").innerHTML = totalRec + ",00 Mt";
    outputRec = '';
    reciboF.innerHTML = outputRec;
    document.querySelector(".figure").innerHTML = '';
    removProduto.disabled = true;
    cansCompra.disabled = true;
    confirmarCompra.disabled = true;
    addProduto.disabled = false;
    finalCompra.disabled = true;
    document.getElementById("alertaSucesso").innerHTML = `
                <div class="alert alert-info" role="alert">
                                    <div class="text-center">
                                        <h6>Compra cancelada com sucesso!!!</h6>
                                    </div> 
                </div>`
        ;
    setTimeout(function () {
        document.getElementById("alertaSucesso").innerHTML = '';
    }, 4000);
});
rrProduto.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(data[0]);
    let estado = 'off';
    let valor = 0;
    $('#exampleModalCenter1').modal('hide'); //hide modal
    let removerNome = rrNome.value;
    for (var i = 0; i < data[0].length; i++) {

        if (data[0][i]['nomeProduto'] == removerNome) {

            console.log('ok');
            valor = i;
            estado = 'on';

            // i--; 
        }
    }
    if (estado === 'on') {
        estado = 'off';
        if (reciboVolatel.length == 0) {
            removProduto.disabled = true;
            cansCompra.disabled = true;
            finalCompra.disabled = true;
            data.length = 0;
            totalRec = 0;
            document.getElementById("total").innerHTML = totalRec + ",00 Mt";
            outputRec = '';
            reciboF.innerHTML = outputRec;
            document.getElementById("alertaSucesso").innerHTML = `
            <div class="alert alert-info" role="alert">
                                <div class="text-center">
                                    <h6>Todos os Produtos foram removidos!!!</h6>
                                </div> 
            </div>`
                ;
            setTimeout(function () {
                document.getElementById("alertaSucesso").innerHTML = '';
            }, 4000);

        } else {
            outputRec = '';
            data.splice(valor, 1);
            reciboVolatel.splice(valor, 1);
            reciboVolatel.forEach(rec => {
                console.log(rec)
                outputRec += `
                <div class="container-fluid text-black">       
                                            <div class="row">
                                                <div class="col-md">
                                                    <h6 id="Produto">${rec[0].nomeProduto}</h6>                    
                                                </div>
                                                <div class="col-md">
                                                    <h6 id="Qant">${rec[0].pqty}</h6>
                                                </div>
                                                <div class="col-md">
                                                    <h6 id="Preço/Un">${rec[0].precounStock}</h6>                    
                                                </div>                                    
                                            </div>
                                        </div>`;
            })
            reciboF.innerHTML = outputRec;
            document.getElementById("alertaSucesso").innerHTML = `
            <div class="alert alert-info" role="alert">
                                <div class="text-center">
                                    <h6>Produto removido com sucesso!!!</h6>
                                </div> 
            </div>`
                ;
            setTimeout(function () {
                document.getElementById("alertaSucesso").innerHTML = '';
            }, 4000);
        }


    }
    else {
        document.getElementById("alertaSucesso").innerHTML = `
                <div class="alert alert-info" role="alert">
                                    <div class="text-center">
                                        <h6>Nome do produto nao encontrado na lista actual!!!</h6>
                                    </div> 
                </div>`
            ;
        setTimeout(function () {
            document.getElementById("alertaSucesso").innerHTML = '';
        }, 4000);
    }
});
var dataDiaHoje = Date.now();
fecharRecibo.addEventListener('click', (e) => {
    e.preventDefault();
    
    removProduto.disabled = true;
    cansCompra.disabled = true;
    addProduto.disabled = false;
    finalCompra.disabled = true;
    finalCotacao.disabled = true;

    totalRec = 0;
    vDiario = 0;
    outputRec = '';
    const previw = '';
    recibo23F1 = '';
    reciboVolatel.length = 0;
    document.getElementById("total").innerHTML = totalRec + " Mt";
    const urlLogIn311 = 'https://stocksmanager1.herokuapp.com/delete_mercado';
    let pora211a = new Request(urlLogIn311, {
        method: 'PATCH',
        headers: h,
        body: JSON.stringify({
            "nomeCliente": `${clienteNomeCaixa2}`
        })
    });

    fetch(pora211a)
        .then(ress => ress.json())
        .then(data5 => {
        })
    reciboF.innerHTML = outputRec;
    data.forEach(rec => {
        const arrayProduto = [
            {
                "quantStock": `${rec[0].quantStock}`,
                "nomeProduto": `${rec[0].nomeProduto}`,
                "codStock": `${rec[0].codStock}`,
                "precounStock": `${rec[0].precounStock}`,
                "precotStock": `${rec[0].precotStock}`,
                "discStock": `${rec[0].discStock}`,
                "discpStock": `${rec[0].discpStock}`,
                "ivaStock": `${rec[0].ivaStock}`,
                "quantidadeProduto": `${rec[0].quantidadeProduto}`,
                "imgg": `${rec[0].imgg}`,
                "pqty": `${rec[0].pqty}`
            }
        ];
        dataHistoricoVendas.push(arrayProduto);
        const urlLogIn3a = 'https://stocksmanager1.herokuapp.com/recibo2Pequenas';
        let varQuari = parseInt(rec[0].quantidadeProduto) - parseInt(rec[0].pqty);
        let pora2a = new Request(urlLogIn3a, {
            method: 'PATCH',
            headers: h,
            body: JSON.stringify({
                "quantidade": rec[0].pqty,
                "nome_produto": rec[0].nomeProduto,
                "precoVenda": rec[0].precounStock
            })
        });
        fetch(pora2a)
            .then(ress => ress.json())
            .then(data5 => {
            });

        const urlLogIn31 = 'https://stocksmanager1.herokuapp.com/addStockPequenasEmpresas2/quantidade';
        let pora21 = new Request(urlLogIn31, {
            method: 'PATCH',
            headers: h,
            body: JSON.stringify({
                "quantidade": varQuari,
                "nomeProduto": rec[0].nomeProduto,
                "nomeCategoria": rec[0].categoriaProduto
            })
        });

        fetch(pora21)
            .then(ress => ress.json())
            .then(data5 => {
            });
        

        let vendido = parseInt((rec[0].precounStock)) * (parseInt(rec[0].quantidadeInicial) - varQuari)

        const urlLogIn31c = 'https://stocksmanager1.herokuapp.com/vendasPequenasDD';
        let pora21c = new Request(urlLogIn31c, {
            method: 'PATCH',
            headers: h,
            body: JSON.stringify({
                "vendido": vendido,
                "quantidadeActual": varQuari,
                "nomeProduto": rec[0].nomeProduto,
                "nomeCategoria": rec[0].categoriaProduto
            })
        });
    
        fetch(pora21c)
            .then(ress => ress.json())
            .then(data5 => {
                
            var opt = {
                margin:       1,
                filename:     `Recibo-${dataDiaHoje}.pdf`,
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 1 },
                jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            html2pdf().set(opt)
            .from(recibo23)
            .save();
        });


    });
    dataHistoricoVendas.forEach(rec => {
        if (rec[0].ivaStock == "17%") {
            vDiario += parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock)) + parseFloat((parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock))) * 0.17);
            localStorage.setItem('vendido', `${vDiario + vendidoDoDia}`);
            output += `
                            <div class="p-1 mb-2 mt-2 bg-gradient-primary text-white">
                                <div class="container-fluid text-black">       
                                    <div class="row">
                                        <div class="col-md">
                                            <small>${rec[0].codStock}</small>               
                                        </div>
                                        <div class="col-md">
                                            <small>${rec[0].nomeProduto}</small>                  
                                        </div>
                                        <div class="col-md">
                                            <small>${rec[0].pqty}</small> 
                                        </div>
                                        <div class="col-md">
                                            <small>NA</small>              
                                        </div>
                                        <div class="col-md">
                                            <small>${(currencyFormat(parseInt((rec[0].precounStock))))}</small>                   
                                        </div>
                                        <div class="col-md">
                                        <small>${(rec[0].quantidadeProduto)}</small>
                                        </div>
                                        <div class="col-md">
                                            <small>${currencyFormat(parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock)) + parseFloat((parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock))) * 0.17))}</small> 

                                        </div>
                                    </div>
                                </div>      
                            </div>`;
        } else {
            totalRec += parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock));
            vDiario += parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock));
            localStorage.setItem('vendido', `${vDiario + vendidoDoDia}`);
            output += `
                            <div class="p-1 mb-2 mt-2 bg-gradient-primary text-white">
                                <div class="container-fluid text-black">       
                                    <div class="row">
                                        <div class="col-md">
                                            <small>${rec[0].codStock}</small>               
                                        </div>
                                        <div class="col-md">
                                            <small>${rec[0].nomeProduto}</small>                  
                                        </div>
                                        <div class="col-md">
                                            <small>${rec[0].pqty}</small> 
                                        </div>
                                        <div class="col-md">
                                            <small>NA</small>              
                                        </div>
                                        <div class="col-md">
                                            <small>${(currencyFormat(parseInt((rec[0].precounStock))))}</small>                   
                                        </div>
                                        <div class="col-md">
                                        <small>${(rec[0].quantidadeProduto)}</small>
                                        </div>
                                        <div class="col-md">
                                            <small>${currencyFormat(parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock)))}</small> 

                                        </div>
                                    </div>
                                </div>      
                            </div>`;
        }
        
    });
    console.log(dataHistoricoVendas);
    listaTotal.innerHTML = output;
    vendaDiaria.innerHTML = "Vendido: " + currencyFormat(vDiario + vendidoDoDia) + " Mt";
    data.length = 0;
    codigo.value = '';
    quantidade.value = '';

    previw = `
    <div class="col-md text-center">
                        <input type="text" class="form-control" id="quantStock">              
                    </div>
                    <div class="col-md">
                        <input type="text" class="form-control" id="codStock">                   
                    </div>
                    <div class="col-md">
                        <input type="text" class="form-control" id="discStock">
                    </div>
                    <div class="col-md">
                        <input type="text" class="form-control" id="discpStock">               
                    </div>
                    <div class="col-md">
                        <input type="text" class="form-control" id="ivaStock">                     
                    </div>
                    <div class="col-md">
                        <input type="text" class="form-control" id="precounStock"> 
                    </div>
                    <div class="col-md">
                        <input type="text" class="form-control" id="precotStock">
                    </div>`;

    document.querySelector(".previw").innerHTML = previw;
    document.getElementById("alertaSucesso").innerHTML = `
        <div class="alert alert-primary" role="alert">
                            <div class="text-center">
                                <h6>Venda realizada com sucesso!!!</h6>
                            </div> 
        </div>`
        ;
    setTimeout(function () {
        document.getElementById("alertaSucesso").innerHTML = '';
    }, 4000);

});
fecharRecibo2.addEventListener('click', (e) => {
    e.preventDefault();
    $('#exampleModalCenterProcessandoImpressao').modal('show'); //open modal
    removProduto.disabled = true;
    cansCompra.disabled = true;
    addProduto.disabled = false;
    finalCompra.disabled = true;
    finalCotacao.disabled = true;

    totalRec = 0;
    vDiario = 0;
    outputRec = '';
    let previw = '';
    recibo23F1 = '';
    reciboVolatel.length = 0;
    document.getElementById("total").innerHTML = totalRec + " Mt";
    const urlLogIn311 = 'https://stocksmanager1.herokuapp.com/delete_mercado';
    let pora211a = new Request(urlLogIn311, {
        method: 'PATCH',
        headers: h,
        body: JSON.stringify({
            "nomeCliente": `${clienteNomeCaixa2}`
        })
    });

    fetch(pora211a)
        .then(ress => ress.json())
        .then(data5 => {
        })
    reciboF.innerHTML = outputRec;
    data.forEach(rec => {
        const arrayProduto = [
            {
                "quantStock": `${rec[0].quantStock}`,
                "nomeProduto": `${rec[0].nomeProduto}`,
                "codStock": `${rec[0].codStock}`,
                "precounStock": `${rec[0].precounStock}`,
                "precotStock": `${rec[0].precotStock}`,
                "discStock": `${rec[0].discStock}`,
                "discpStock": `${rec[0].discpStock}`,
                "ivaStock": `${rec[0].ivaStock}`,
                "quantidadeProduto": `${rec[0].quantidadeProduto}`,
                "imgg": `${rec[0].imgg}`,
                "pqty": `${rec[0].pqty}`
            }
        ];
        dataHistoricoVendas.push(arrayProduto);
        const urlLogIn3a = 'https://stocksmanager1.herokuapp.com/recibo2Pequenas';
        let varQuari = parseInt(rec[0].quantidadeProduto) - parseInt(rec[0].pqty);
        let pora2a = new Request(urlLogIn3a, {
            method: 'PATCH',
            headers: h,
            body: JSON.stringify({
                "quantidade": rec[0].pqty,
                "nome_produto": rec[0].nomeProduto,
                "precoVenda": rec[0].precounStock
            })
        });
        fetch(pora2a)
            .then(ress => ress.json())
            .then(data5 => {
            });

        const urlLogIn31 = 'https://stocksmanager1.herokuapp.com/addStockPequenasEmpresas2/quantidade';
        let pora21 = new Request(urlLogIn31, {
            method: 'PATCH',
            headers: h,
            body: JSON.stringify({
                "quantidade": varQuari,
                "nomeProduto": rec[0].nomeProduto,
                "nomeCategoria": rec[0].categoriaProduto
            })
        });

        fetch(pora21)
            .then(ress => ress.json())
            .then(data5 => {
            });
        

        let vendido = parseInt((rec[0].precounStock)) * (parseInt(rec[0].quantidadeInicial) - varQuari)

        const urlLogIn31c = 'https://stocksmanager1.herokuapp.com/vendasPequenasDD';
        let pora21c = new Request(urlLogIn31c, {
            method: 'PATCH',
            headers: h,
            body: JSON.stringify({
                "vendido": vendido,
                "quantidadeActual": varQuari,
                "nomeProduto": rec[0].nomeProduto,
                "nomeCategoria": rec[0].categoriaProduto
            })
        });
    
        fetch(pora21c)
            .then(ress => ress.json())
            .then(data5 => {});
        
        

        previw = `
        <div class="col-md text-center">
                            <input type="text" class="form-control" id="quantStock">              
                        </div>
                        <div class="col-md">
                            <input type="text" class="form-control" id="codStock">                   
                        </div>
                        <div class="col-md">
                            <input type="text" class="form-control" id="discStock">
                        </div>
                        <div class="col-md">
                            <input type="text" class="form-control" id="discpStock">               
                        </div>
                        <div class="col-md">
                            <input type="text" class="form-control" id="ivaStock">                     
                        </div>
                        <div class="col-md">
                            <input type="text" class="form-control" id="precounStock"> 
                        </div>
                        <div class="col-md">
                            <input type="text" class="form-control" id="precotStock">
                        </div>`;

        document.querySelector(".previw").innerHTML = previw;
        document.getElementById("alertaSucesso").innerHTML = `
            <div class="alert alert-primary" role="alert">
                                <div class="text-center">
                                    <h6>Venda realizada com sucesso!!!</h6>
                                </div> 
            </div>`
            ;
        setTimeout(function () {
            document.getElementById("alertaSucesso").innerHTML = '';
        }, 4000);

    });
    dataHistoricoVendas.forEach(rec => {
        if (rec[0].ivaStock == "17%") {
            vDiario += parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock)) + parseFloat((parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock))) * 0.17);
            localStorage.setItem('vendido', `${vDiario + vendidoDoDia}`);
            output += `
                            <div class="p-1 mb-2 mt-2 bg-gradient-primary text-white">
                                <div class="container-fluid text-black">       
                                    <div class="row">
                                        <div class="col-md">
                                            <small>${rec[0].codStock}</small>               
                                        </div>
                                        <div class="col-md">
                                            <small>${rec[0].nomeProduto}</small>                  
                                        </div>
                                        <div class="col-md">
                                            <small>${rec[0].pqty}</small> 
                                        </div>
                                        <div class="col-md">
                                            <small>NA</small>              
                                        </div>
                                        <div class="col-md">
                                            <small>${(currencyFormat(parseInt((rec[0].precounStock))))}</small>                   
                                        </div>
                                        <div class="col-md">
                                        <small>${(rec[0].quantidadeProduto)}</small>
                                        </div>
                                        <div class="col-md">
                                            <small>${currencyFormat(parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock)) + parseFloat((parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock))) * 0.17))}</small> 

                                        </div>
                                    </div>
                                </div>      
                            </div>`;
        } else {
            totalRec += parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock));
            vDiario += parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock));
            localStorage.setItem('vendido', `${vDiario + vendidoDoDia}`);
            output += `
                            <div class="p-1 mb-2 mt-2 bg-gradient-primary text-white">
                                <div class="container-fluid text-black">       
                                    <div class="row">
                                        <div class="col-md">
                                            <small>${rec[0].codStock}</small>               
                                        </div>
                                        <div class="col-md">
                                            <small>${rec[0].nomeProduto}</small>                  
                                        </div>
                                        <div class="col-md">
                                            <small>${rec[0].pqty}</small> 
                                        </div>
                                        <div class="col-md">
                                            <small>NA</small>              
                                        </div>
                                        <div class="col-md">
                                            <small>${(currencyFormat(parseInt((rec[0].precounStock))))}</small>                   
                                        </div>
                                        <div class="col-md">
                                        <small>${(rec[0].quantidadeProduto)}</small>
                                        </div>
                                        <div class="col-md">
                                            <small>${currencyFormat(parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock)))}</small> 

                                        </div>
                                    </div>
                                </div>      
                            </div>`;
        }
        
    });
    console.log(dataHistoricoVendas);
    listaTotal.innerHTML = output;
    vendaDiaria.innerHTML = "Vendido: " + currencyFormat(vDiario + vendidoDoDia) + " Mt";
    let printerName;
            let widthPage;

            var p = document.getElementsByName("printer");
            var w = document.getElementsByName("width");

            for (var i = 0, length = p.length; i < length; i++) {
                if (p[i].checked) {
                printerName = p[i].value;

                break;
                }
            }

            for (var i = 0, length = w.length; i < length; i++) {
                if (w[i].checked) {
                widthPage = w[i].value;

                break;
                }
            }
            dataImpressao.push(
                {
                type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
                value: `${empresa}<br>${avenidaLocalizacao}<br>NUIT: ${empresaNUIT}<br>Tel: ${contactoEmpresa.value}`,
                style: `text-align:center;`,
                css: { "font-weight": "100", "font-size": "14px", "margin": "0px", "padding": "0px"},
                },
                {
                type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
                value: "-------------------<br>",
                style: `text-align:center;`,
                css: { "font-size": "12px" },
                },
                { 
                type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table'
                value:
                    `Venda a Dinheiro<br><br>No ${Math.floor(Math.random() * 1000) + 1}<br><br>Data: ${dataImprimir}<br>Hora: ${horaImprimir}<br>Caixa: ${usuario23}<br>Cliente: ${nomeClienteProdutosValue.value}<br>`,
            
                css: {
                    "font-size": "10px",
                    "font-family": "sans-serif",
                    "text-align": "left",
                    "margin": "0px",
                    "padding": "0px"
                },
                },
                {
                type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table'
                value:
                    "-------------------<br>Produto----------Qt----------P.Un<br>",
            
                css: {
                    "font-size": "10px",
                    "font-family": "sans-serif",
                    "text-align": "center",
                    "margin": "0px",
                    "padding": "0px"
                },
                },
                
            );
            
            var totalDasVendasImprimirIVA = 0;
            var totalDasVendasImprimir = 0;
            var IVAtotalDasVendasImprimir = 0;
            data.forEach(rec => {                
                if (rec[0].ivaStock == "17%") {
                    totalDasVendasImprimirIVA += parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock)) + parseFloat((parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock))) * 0.17);
                    totalDasVendasImprimir += parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock));
                    IVAtotalDasVendasImprimir += parseFloat((parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock))) * 0.17);
                    dataImpressao.push(
                        {
                            type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table'
                            value:
                                `${rec[0].nomeProduto.substring(0, 8)}*___${rec[0].pqty}___${currencyFormat(parseInt((rec[0].precounStock)))}`,
                        
                            css: {
                                "font-size": "10px",
                                "font-family": "sans-serif",
                                "text-align": "center",
                                "margin": "0px",
                                "padding": "0px"
                            },
                            },
                    );
                } else {
                    totalDasVendasImprimir += parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock));
                    totalDasVendasImprimirIVA += parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock));
                    dataImpressao.push(
                        {
                            type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table'
                            value:
                                `${rec[0].nomeProduto.substring(0, 8)}___${rec[0].pqty}___${currencyFormat(parseInt((rec[0].precounStock)))}`,
                        
                            css: {
                                "font-size": "10px",
                                "font-family": "sans-serif",
                                "text-align": "center",
                                "margin": "0px",
                                "padding": "0px"
                            },
                            },
                    );
                }
                
                
            });
            dataImpressao.push(
                {
                    type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
                    value: `<br>Total Items: ${currencyFormat(totalDasVendasImprimir)} Mt`,
                    css: {
                        "font-size": "10px",
                        "font-family": "sans-serif",
                        "text-align": "right",
                        "margin": "0px",
                        "padding": "0px"
                    },
                    },
                    {
                    type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
                    value: `Total IVA: ${currencyFormat(IVAtotalDasVendasImprimir)} Mt`,
                    css: {
                        "font-size": "10px",
                        "font-family": "sans-serif",
                        "text-align": "right",
                        "margin": "0px",
                        "padding": "0px"
                    },
                    },
                    {
                    type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
                    value: `Total Desc: ${currencyFormat(0)} Mt`,
                    css: {
                        "font-size": "10px",
                        "font-family": "sans-serif",
                        "text-align": "right",
                        "margin": "0px",
                        "padding": "0px"
                    },
                    },
                    {
                    type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
                    value: `Total: ${currencyFormat(totalDasVendasImprimirIVA)} Mt<br>`,
                    css: {
                        "font-size": "10px",
                        "font-family": "sans-serif",
                        "text-align": "right",
                        "margin": "0px",
                        "padding": "0px"
                    },
                    },
                    {
                        type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
                        value: "<br>* Produto Tributável<br><br>",
                        css: {
                            "font-size": "10px",
                            "font-family": "sans-serif",
                            "text-align": "left",
                            "margin": "0px",
                            "padding": "0px"
                        },
                        },
                    {
                    type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
                    value: `Processado por:`,
                    css: {
                        "font-size": "10px",
                        "font-family": "sans-serif",
                        "text-align": "center",
                        "margin": "0px",
                        "padding": "0px"
                    },
                    },
                    {
                        type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
                        value: `Systems Manager, Lda.`,
                        css: {
                            "font-size": "10px",
                            "font-family": "sans-serif",
                            "text-align": "center",
                            "margin": "0px",
                            "padding": "0px"
                        },
                        },
                );
            const options = {
                preview: false, // Preview in window or print
                width: `${widthPage}`, //  width of content body
                margin: "0 0 0 0", // margin of content body
                copies: 1, // Number of copies to print
                printerName: `${printerName}`, // printerName: string, check it at webContent.getPrinters()
                timeOutPerLine: 800,
                silent: true,
                // pageSize: { height: 301000, width: 71000 }
            }

            if (printerName && widthPage) {
                PosPrinter.print(dataImpressao, options)
                .then(() => {
                    
                })
                .catch((error) => {
                    console.log(error);
                    console.error(error);
                });
            } else {
                alert("Select the printer and the width");
            }
            data.length = 0;
                    codigo.value = '';
                    quantidade.value = '';

});
nomeClienteCotacao.addEventListener('click', (e) => {
    e.preventDefault();

    nomeClienteCotacao2 = document.getElementById("nomeClienteCotacao11a").value;
    nomeClienteCot.innerHTML = nomeClienteCotacao2;
    recibo23F1 = "";
    recibo23F = "";
    reciboVolatel.forEach(rec => {
        recibo23F1 += `
        <div class="container-fluid text-black">
                                    <div class="row">
                                        <div class="col-md">
                                            <small>${rec[0].codStock}</small>              
                                        </div>
                                        <div class="col-md">
                                            <small>${rec[0].nomeProduto}</small>                    
                                        </div>
                                        <div class="col-md">
                                            <small>${rec[0].pqty}</small>
                                        </div>
                                        <div class="col-md">
                                            <small>${(currencyFormat(parseInt((rec[0].precounStock))))}</small>                   
                                        </div>
                                        <div class="col-md">
                                            <small>NA</small>                   
                                        </div>
                                        <div class="col-md">
                                            <small>${rec[0].discpStock}</small>                  
                                        </div> 
                                        <div class="col-md">
                                            <small>${currencyFormat((parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock))))}</small>                 
                                        </div>                                    
                                    </div>
                                    <hr style="border-top: dotted 2px;" /> 
                                </div>`;
        recibo23F += `
        <div class="container-fluid text-black">
                                    <div class="row">
                                        <div class="col-md">
                                            <small>${rec[0].codStock}</small>              
                                        </div>
                                        <div class="col-md">
                                            <small>${rec[0].nomeProduto}</small>                    
                                        </div>
                                        <div class="col-md">
                                            <small>${rec[0].pqty}</small>
                                        </div>
                                        <div class="col-md">
                                            <small>${(currencyFormat(parseInt((rec[0].precounStock))))}</small>                   
                                        </div>
                                        <div class="col-md">
                                            <small>NA</small>                   
                                        </div>
                                        <div class="col-md">
                                            <small>${rec[0].discpStock}</small>                  
                                        </div> 
                                        <div class="col-md">
                                            <small>${currencyFormat((parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock))))}</small>                 
                                        </div>                                     
                                    </div>
                                    <hr style="border-top: dotted 2px;" /> 
                                </div>`;
    })
    const totalIva23F = parseInt(totalRec) * 0.17
    const totalRecF = parseFloat(totalIva23F) + parseFloat(totalRec)
    document.getElementById("total23a").innerHTML = currencyFormat(totalRecF) + " Mt";
    document.getElementById("totalDesc23a").innerHTML = discpStock.value;
    document.getElementById("totalsemIva23a").innerHTML = currencyFormat(parseInt(totalRec)) + " Mt";
    document.getElementById("totalIva23a").innerHTML = currencyFormat(parseFloat(totalIva23F)) + " Mt";
    reciboF21.innerHTML = recibo23F1;
    $('#exampleModalCenter5').modal('show'); //open modal
    $('#exampleModalServicosCotacoes2').modal('hide');

});
fecharCotacao.addEventListener('click', (e) => {
    e.preventDefault();
    var dataDiaHoje = Date.now();
    var opt = {
        margin:       1,
        filename:     `Cotação-${dataDiaHoje}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 1 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

    html2pdf().set(opt)
    .from(recibo23Cot)
    .save();
    removProduto.disabled = true;
    cansCompra.disabled = true;
    addProduto.disabled = false;
    finalCompra.disabled = true;
    finalCotacao.disabled = true;;
    data.forEach(rec => {
        const urlLogIn3a = 'https://stocksmanager1.herokuapp.com/mercado';
        let pora2a = new Request(urlLogIn3a, {
            method: 'PATCH',
            headers: h,
            body: JSON.stringify({
                "quantidade": rec[0].pqty,
                "nomeProduto": rec[0].nomeProduto,
                "preco": rec[0].precounStock,
                "img": rec[0].imgg,
                "idade": "",
                "nomeCliente": `${nomeClienteCotacao2}`,
            })
        });
        fetch(pora2a)
            .then(ress => ress.json())
            .then(data5 => {
            });
    });

    outputRec = '';
    reciboF.innerHTML = outputRec;
    reciboVolatel.length = 0;
    data.length = 0;
    codigo.value = '';
    quantidade.value = '';
    totalRec = 0;
    document.getElementById("total").innerHTML = currencyFormat(totalRec) + " Mt";
    document.getElementById("alertaSucesso").innerHTML = `
        <div class="alert alert-primary" role="alert">
                            <div class="text-center">
                                <h6>Cotação finalizada com sucesso!!!</h6>
                            </div> 
        </div>`
        ;
    setTimeout(function () {
        document.getElementById("alertaSucesso").innerHTML = '';
    }, 4000);
    location.reload();
});
fecharCotacao1.addEventListener('click', (e) => {
    e.preventDefault();
    var dataDiaHoje = Date.now();
    var opt = {
        margin:       1,
        filename:     `Cotação-${dataDiaHoje}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 1 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

    html2pdf().set(opt)
    .from(recibo23Cota)
    .save();
    removProduto.disabled = true;
    cansCompra.disabled = true;
    addProduto.disabled = false;
    finalCompra.disabled = true;
    finalCotacao.disabled = true;

    outputRec = '';
    reciboF.innerHTML = outputRec;
    reciboVolatel.length = 0;
    data.length = 0;
    codigo.value = '';
    quantidade.value = '';
    totalRec = 0;
    document.getElementById("total").innerHTML = currencyFormat(totalRec) + " Mt";
    document.getElementById("alertaSucesso").innerHTML = `
        <div class="alert alert-primary" role="alert">
                            <div class="text-center">
                                <h6>Cotação finalizada com sucesso!!!</h6>
                            </div> 
        </div>`
        ;
    setTimeout(function () {
        document.getElementById("alertaSucesso").innerHTML = '';
    }, 4000);
    location.reload();
});
