const anual = document.getElementById('anual');
const mensal = document.getElementById('mensal');
const pedidos = document.getElementById('pedidos');
const conteud = document.getElementById('conteud2');
// const modelosCorpo = document.getElementById('modelosCorpo');
const caixaPedidos = document.getElementById('caixaPedidos');
const empresa2q = localStorage.getItem('empresa');
const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2q}`;
const totalEstoqueew = parseInt(localStorage.getItem('totalEstoqueew'));
const totalEstoqueew2 = parseInt(localStorage.getItem('totalEstoqueew2'));
function currencyFormat(num) {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
let cont = '';
let pedidoValor = '';
let activosNaoCorrentes = 0;
let activosNaoCorrentes1 = 0;
let activosTangiveis = 0;
let activosTangiveis1 = 0;
let activosTangiveisInvestimento = 0;
let activosTangiveisInvestimento1 = 0;
let activosIntangiveis = 0;
let activosIntangiveis1 = 0;
let activosBilogicos = 0;
let activosBilogicos1 = 0;
let date = new Date().getFullYear();
let balancoListas = [
  {
    'conta': 'Activos não Correntes',
    'períodon': `${activosNaoCorrentes}`,
    'períodon-1': `${activosNaoCorrentes1}`
  },
  {
    'conta': 'Activos Tangíveis',
    'períodon': `${activosTangiveis}`,
    'períodon-1': `${activosTangiveis1}`
  },
  {
    'conta': 'Activos Tangíveis de Investimento',
    'períodon': `${activosTangiveisInvestimento}`,
    'períodon-1': `${activosTangiveisInvestimento1}`
  },
  {
    'conta': 'Activos Intangíveis',
    'períodon': `${activosIntangiveis}`,
    'períodon-1': `${activosIntangiveis1}`
  },
  {
    'conta': 'Activos Biológico',
    'períodon': `${activosBilogicos}`,
    'períodon-1': `${activosBilogicos1}`
  },
];

mensal.innerHTML = String(totalEstoqueew).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00 Mt";
anual.innerHTML = String(totalEstoqueew2).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00 Mt";

function sociedade() {
  fetch(url3)
    .then(res => res.json())
    .then(content => {
      for (var i = 0; i < content[0]['mercado'].length; i++) {
        cont += `<div class="col-md-6 col-xl-6 mb-4">
                <div class="card text-center hov">
                  <div class="card-body text-black">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-black text-left mb-1">
                          <small><b>Cliente:</b> ${content[0]['mercado'][i]['nomeCliente']}</small>
                          </div>
                          <div class="text-xs font-weight-bold text-black text-left mb-1">
                          <small><b>Produto/Serviço:</b> ${content[0]['mercado'][i]['nomeProduto']}</small>
                          </div>
                          <div class="text-xs font-weight-bold text-black text-left mb-1">
                          <small><b>Preço:</b> ${content[0]['mercado'][i]['preco']}</small>
                          </div>
                          <div class="text-xs font-weight-bold text-black text-left mb-1">
                          <small><b>Quantidade:</b> ${content[0]['mercado'][i]['quantidade']}</small>
                          </div>
                      </div>
                  </div>
                  </div>          
                </div>
              </div>`;
      }
      conteud.innerHTML = cont;
    });
}
sociedade();
function sociedade2() {
  pedidos.innerHTML = pedidoValor;
  fetch(url3)
    .then(res => res.json())
    .then(content => {

      pedidoValor = content[0]['mercado'].length;

    });
}
setInterval(sociedade2, 1000);

caixaPedidos.addEventListener('click', (e) => {
  $('#exampleModalCenter4').modal('show');
});

// for (var i = 0; i < balancoListas.length; i++) {
//   var newRow = modelosCorpo.insertRow();
//   var newCell1 = newRow.insertCell(0);
//   var newCell2 = newRow.insertCell(1);
//   var newCell3 = newRow.insertCell(2);
//   newCell1.innerHTML = `<div class="total">${balancoListas[i]['conta']}</div>`;
//   newCell2.innerHTML = `<div class="debito">${currencyFormat(parseInt(balancoListas[i]['períodon']))}</div>`;
//   newCell3.innerHTML = `<div class="debito">${currencyFormat(parseInt(balancoListas[i]['períodon-1']))}</div>`;
// }

// $(document).ready(function () {
//   $('#modelosCabeca').DataTable({
//     "scrollX": true,
//     "scrollY": 200,
//   });
// });