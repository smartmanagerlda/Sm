let list = document.querySelectorAll('.list');
let menuToggle = document.querySelector('.toggle');
let card2 = document.querySelector('.card2');
let title = document.querySelector('.title');
const body = document.getElementById('body');
const contrudo = document.getElementById('contrudo');
const token = localStorage.getItem('token');
let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
let nada = '';
for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
        let j = 0;
        while (j < list.length) {
            list[j++].className = 'list';
        }
        list[i].className = 'list active';
    }
}

menuToggle.onclick = function () {
    console.log('ok')
    menuToggle.classList.toggle('active');
    card2.classList.toggle('active');
}

body.addEventListener('click', (e) => {
    e.preventDefault();
    nada = '';
    if (e.target.id == "todoEstoque") {
        nada = '';
        nada = `<div id="centro">
        <div class="animate__animated animate__pulse card3 text-center mr-4">
          <div class="row align-items-center">
              <div class="col-md-6">
                <h1 class="mb-4 text-black"><span class="text-black">Todo Estoque</span></h1>
                <h3 class="mb-4 text-black">Total Bruto Esperado: <span id="totalBruto"></span></h3>
                <h3 class="mb-4 text-black">Total Lucro Esperadas: <span id="totalLucro"></span></h3>
                <h3 class="mb-4 text-black">Total do Estoque Vendido: <span id="totalEstoque"></span></h3>
                
              </div>
              <div class="col-md-6 d-none d-sm-none d-md-block">
                <img src="pics/Stocks2.png" alt="tours pics" class="img-fluid">
              </div>
            </div>
      </div>
      </div> 
      <div class="container mt-4" id="conteud">
        <div class="row" id="produtodd">
               
        </div>
    </div>`;
        contrudo.innerHTML = nada;
        const empresa2 = localStorage.getItem('empresa');
        const produtodd = document.getElementById('produtodd');
        const totalEstoque = document.getElementById('totalEstoque');
        const totalLucro1 = document.getElementById('totalLucro');
        const totalBruto1 = document.getElementById('totalBruto');
        const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2}`;
        let produtos = '';
        let totalEst = 0;
        let totalBruto = 0;
        let totalLucro = 0;

        if (navigator.onLine == true) {

            fetch(url3)
                .then(res => res.json())
                .then(content => {
                    const data = content[0]['categoria'];
                    console.log(content[0]['categoria'][0]['stock'][0]['produto']);
                    // console.log(data);
                    for (var i = 0; i < data.length; i++) {
                        const data1 = content[0]['categoria'][i]['stock'];
                        console.log(content[0]['categoria'][i]['stock']);
                        for (var j = 0; j < data1.length; j++) {
                            let imag = content[0]['categoria'][i]['stock'][j]['produto'][0]['img'];
                            let idd = content[0]['categoria'][i]['stock'][j]['produto'][0]['_id'];
                            let codigo = content[0]['categoria'][i]['stock'][j]['produto'][0]['codigo'];
                            let precoCusto = content[0]['categoria'][i]['stock'][j]['produto'][0]['precoCusto'];
                            let precoVenda = content[0]['categoria'][i]['stock'][j]['produto'][0]['precoVenda'];
                            let quantidade = content[0]['categoria'][i]['stock'][j]['produto'][0]['quantidade'];
                            let quantidadeActual = content[0]['categoria'][i]['stock'][j]['produto'][0]['quantidadeActual'];
                            let stockDeSeguranca = content[0]['categoria'][i]['stock'][j]['produto'][0]['stockDeSeguranca'];
                            let vendido = content[0]['categoria'][i]['stock'][j]['produto'][0]['vendido'];
                            let nomePros = content[0]['categoria'][i]['stock'][j]['nomeProduto'];
                            totalEst += parseInt(vendido);
                            let esperado = parseInt(precoVenda) * parseInt(quantidadeActual);
                            let lucro = esperado - parseInt(precoCusto) * parseInt(quantidadeActual);
                            totalBruto += parseInt(esperado);
                            totalLucro += parseInt(lucro);
                            produtos += `<div class="col-md-6 col-xl-4 mb-4">
                        <div class="card text-center">
                            <div class="card-body text-black">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2 text-center">                                        
                                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1 text-center">
                                            <img class="imagemTamanho" src="${imag}" alt="Imagem Estoque" id="${idd}">                                            
                                        </div>
                                        <hr class="text-black">
                                        <div class="h5 mb-0 font-weight-bold text-black text-center">${nomePros}</div>
                                        <br>
                                        <div class="h5 mb-0 font-weight-bold text-black text-left"><h6>${"Codigo do Produto: " + codigo}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-black text-left"><h6>${"Quantidade Inicial: " + quantidadeActual}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-black text-left"><h6>${"Total Esperado: " + String(esperado).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00 Mt"}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-black text-left"><h6>${"Lucro Esperado: " + String(lucro).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00 Mt"}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-black text-left"><h6>${"Venda: " + String(precoVenda).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00 Mt"}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-black text-left"><h6>${"Custo: " + String(precoCusto).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00 Mt"}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-black text-left"><h6>${"Quantidade Actual: " + quantidade}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-black text-left"><h6>${"Total Vendido: " + String(vendido).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00 Mt"}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-black text-left"><h6>${"Estoque de Seguranca: " + stockDeSeguranca}</h6></div>
                                        
                                    </div>
                                </div>
                            </div>          
                        </div>
                    </div> `;
                        }

                    }

                    produtodd.innerHTML = produtos;
                    totalEstoque.innerHTML = String(totalEst).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00 Mt";
                    totalLucro1.innerHTML = String(totalLucro).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00 Mt";
                    totalBruto1.innerHTML = String(totalBruto).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00 Mt";
                    localStorage.setItem('totalEstoqueew', totalEst);
                }); 
        } else {
            e.preventDefault();
            document.getElementById("alertaSucesso").innerHTML = `
                    <div class="alert alert-info" role="alert">
                                        <div class="text-center">
                                            <h6>Sem conecção a internet!!!</h6>
                                        </div> 
                    </div>`
                ;
            setTimeout(function () {
                document.getElementById("alertaSucesso").innerHTML = '';
            }, 8000);
        }
    }

    if (e.target.id == "addEstoque") {
        nada = '';
        nada = `<div id="centro">
      <div class="animate__animated animate__pulse card3 text-center mr-4 text-black">
        <div class="row align-items-center">
            <div class="col-md-6">
              <h1 class="mb-4 text-black"><span class="text-black">Adicionar Estoque</span></h1>
              <h3 class="mb-4 text-black">...</h3>
            </div>
            <div class="col-md-6 d-none d-sm-none d-md-block">
              <img src="pics/Stocks2.png" alt="tours pics" class="img-fluid">
            </div>
          </div>
    </div>
    </div>
    <div class="butoes m-4">
        <div class="row">
            <div class="col-md-4 col-xl-5 mb-4">
                <div class="card text-center text-black">
                    <a href="#" class="text-center btn btn-outline-dark btn-lg btn-block text-black" id="comCategoria">Com Categoria</a>   
                </div>
            </div>
          <div class="col-md-4 col-xl-5 mb-4">
            <div class="card text-center text-black">
                <a href="#" class="text-center btn btn-outline-dark btn-lg btn-block text-black" id="semCategoria">Sem Categoria</a>
              </div>          
            </div>
          </div>         
        </div>
    </div>
    
    `;
        contrudo.innerHTML = nada;
    }

    if (e.target.id == "edtEstoque") {
        function editarStock() {
            nada = '';
            nada = `<div id="centro">
        <div class="animate__animated animate__pulse card3 text-center mr-4 text-black">
          <div class="row align-items-center">
              <div class="col-md-6">
                <h1 class="mb-4 text-black"><span class="text-black">Editar Stock</span></h1>
                <h3 class="mb-4 text-black">...</h3>
              </div>
              <div class="col-md-6 d-none d-sm-none d-md-block">
                <img src="pics/Stocks2.png" alt="tours pics" class="img-fluid">
              </div>
            </div>
      </div>
      </div>
      <div class="container mt-4" id="conteud">
        <div class="row" id="produtodd">
               
        </div>
    </div>
    <!-- Modal -->
        <div class="modal fade" id="novoCadastro" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="novoTrin">Editar Stock</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                    <p>Quantidade Actual do Produto</p>
                    <input type="number" class="form-control mb-4" id="quantidaActualProduto">
                    <p>Preço Venda</p>
                    <input type="number" class="form-control mb-4" id="precovenda">
                    <p>Preço Custo</p>
                    <input type="number" class="form-control mb-4" id="precocusto">
                    <p>Stock de Segurança</p>
                    <input type="number" class="form-control mb-4" id="stockseguranca">
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-denger" id="naoremover">Cancelar</button>
                <button type="button" class="btn btn-primary" id="remover">Editar</button>
                </div>
            </div>
            </div>
        </div>
    `;

            contrudo.innerHTML = nada;
            const empresa2 = localStorage.getItem('empresa');
            const produtodd = document.getElementById('produtodd');
            const naoremover = document.getElementById('naoremover');
            const remover = document.getElementById('remover');
            const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2}`;
            let produtos = '';


            if (navigator.onLine == true) {

                fetch(url3)
                    .then(res => res.json())
                    .then(content => {
                        const data = content[0]['categoria'];
                        console.log(content[0]);

                        for (var i = 0; i < data.length; i++) {
                            const data1 = content[0]['categoria'][i]['stock'];
                            // console.log(content[0]['categoria'][i]['stock']);
                            for (var j = 0; j < data1.length; j++) {
                                let imag = content[0]['categoria'][i]['stock'][j]['produto'][0]['img'];
                                let idd = content[0]['categoria'][i]['stock'][j]['_id'];
                                let codigo = content[0]['categoria'][i]['stock'][j]['produto'][0]['codigo'];
                                let nomeCategoria2 = content[0]['categoria'][i]['nomeCategoria'];
                                let precoCusto = content[0]['categoria'][i]['stock'][j]['produto'][0]['precoCusto'];
                                let precoVenda = content[0]['categoria'][i]['stock'][j]['produto'][0]['precoVenda'];
                                let quantidade = content[0]['categoria'][i]['stock'][j]['produto'][0]['quantidade'];
                                let quantidadeActual = content[0]['categoria'][i]['stock'][j]['produto'][0]['quantidadeActual'];
                                let stockDeSeguranca = content[0]['categoria'][i]['stock'][j]['produto'][0]['stockDeSeguranca'];
                                let vendido = content[0]['categoria'][i]['stock'][j]['produto'][0]['vendido'];
                                let nomePros = content[0]['categoria'][i]['stock'][j]['nomeProduto'];

                                let esperado = parseInt(precoVenda) * parseInt(quantidadeActual);
                                let lucro = esperado - parseInt(precoCusto) * parseInt(quantidadeActual);

                                produtos += `<div class="col-md-6 col-xl-4 mb-4">
                            <div class="card text-center">
                                <div class="card-body text-black">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2 text-center">                                        
                                            <div class="text-xs font-weight-bold text-black text-uppercase mb-1 text-center">
                                                <img class="imagemTamanho" src="${imag}" alt="Imagem Estoque" id="${idd}">                                            
                                            </div>
                                            <hr class="text-black">
                                            <div class="h5 mb-0 font-weight-bold text-black text-center" id=${'nomeProduto' + idd}>${nomePros}</div>
                                            <br>
                                            <div class="h5 mb-0 font-weight-bold text-black text-left"><h6 id=${'nomeCategoria2' + idd}>${nomeCategoria2}</h6></div>
                                            <div class="h5 mb-0 font-weight-bold text-black text-left"><h6>Quantidade Inicial: </h6><h6 id=${'quantidadeInicial' + idd}>${quantidadeActual}</h6></div>
                                            <div class="h5 mb-0 font-weight-bold text-black text-left"><h6 id=${'total' + idd}>${"Total Esperado: " + String(esperado).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00 Mt"}</h6></div>
                                            <div class="h5 mb-0 font-weight-bold text-black text-left"><h6 id=${'lucro' + idd}>${"Lucro Esperado: " + String(lucro).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00 Mt"}</h6></div>
                                            <div class="h5 mb-0 font-weight-bold text-black text-left"><h6>Preço Venda: </h6><h6 id=${'venda' + idd}>${String(precoVenda).replace(/(.)(?=(\d{3})+$)/g, '$1.')}</h6></div>
                                            <div class="h5 mb-0 font-weight-bold text-black text-left"><h6>Preço Custo: </h6><h6 id=${'custo' + idd}>${String(precoCusto).replace(/(.)(?=(\d{3})+$)/g, '$1.')}</h6></div>
                                            <div class="h5 mb-0 font-weight-bold text-black text-left"><h6>Quantidade Actual: </h6><h6 id=${'quantidadeActual' + idd}>${quantidade}</h6></div>
                                            <div class="h5 mb-0 font-weight-bold text-black text-left"><h6>Estoque de Seguranca: </h6><h6 id=${'stockSeguranca' + idd}>${stockDeSeguranca}</h6></div>
                                            
                                        </div>
                                    </div>
                                </div>          
                            </div>
                        </div>`;
                            }

                        }
                        produtodd.innerHTML = produtos;
                        let codigoId = '';
                        let nomeCategoria2Id = '';
                        let nomeProdutoId = '';
                        let quantidadeInicialId = '';
                        let vendaId = '';
                        let custoId = '';
                        let quantidadeActualId = '';
                        let stockSegurancaId = '';
                        const codigoProduto = document.getElementById('codigoProduto');
                        const quantidaActualProduto = document.getElementById('quantidaActualProduto');
                        const precovenda = document.getElementById('precovenda');
                        const precocusto = document.getElementById('precocusto');
                        const stockseguranca1 = document.getElementById('stockseguranca');

                        produtodd.addEventListener('click', (e) => {

                            if (e.target.className == "imagemTamanho") {
                                $('#novoCadastro').modal('show');
                                console.log(e.target.id);
                                let codigo = `${'codigo' + e.target.id}`;
                                let nomeCategoria2 = `${'nomeCategoria2' + e.target.id}`;
                                let quantidadeActual = `${'quantidadeActual' + e.target.id}`;
                                let venda = `${'venda' + e.target.id}`;
                                let custo = `${'custo' + e.target.id}`;
                                let stockSeguranca = `${'stockSeguranca' + e.target.id}`;
                                let nomeProduto = `${'nomeProduto' + e.target.id}`;
                                const catg1 = document.getElementById(quantidadeActual);
                                const catg2 = document.getElementById(venda);
                                const catg3 = document.getElementById(custo);
                                const catg4 = document.getElementById(stockSeguranca);
                                const catg5 = document.getElementById(nomeCategoria2);
                                const catg6 = document.getElementById(nomeProduto);
                                quantidadeActualId = catg1.innerHTML;
                                custoId = catg3.innerHTML;
                                vendaId = catg2.innerHTML;
                                stockSegurancaId = catg4.innerHTML;
                                nomeCategoria2Id = catg5.innerHTML;
                                nomeProdutoId = catg6.innerHTML;
                            }
                            quantidaActualProduto.value = quantidadeActualId;
                            precovenda.value = vendaId;
                            precocusto.value = custoId;
                            stockseguranca1.value = stockSegurancaId;
                        });
                        naoremover.addEventListener('click', () => {
                            $('#novoCadastro').modal('hide');
                        });
                        remover.addEventListener('click', () => {
                            if (quantidaActualProduto.value != quantidadeActualId) {
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/addStockPequenasEmpresas2/quantidadeActual';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "quantidadeActual": `${parseInt(quantidaActualProduto.value)}`,
                                        "nomeCategoria": `${nomeCategoria2Id}`,
                                        "nomeProduto": `${nomeProdutoId}`,
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        $('#novoCadastro').modal('hide');
                                        var m = new Date();
                                        var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                        const usuarioLogs = localStorage.getItem('usuario');
                                        const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                        let logs = new Request(urlLogs, {
                                            method: 'PATCH',
                                            headers: h,
                                            body: JSON.stringify({
                                                "nomeFuncionario": `${usuarioLogs}`,
                                                "historico": `O Colaborador ${usuarioLogs} fez alterações no Stock`,
                                                "data": `${dateString}`
                                            })
                                        });
                                        fetch(logs)
                                            .then(ress => ress.json())
                                            .then(data5Logs => {
                                                console.log(data5Logs)
                                            });
                                        editarStock();
                                    })
                            }
                            if (precovenda.value != vendaId) {
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/addStockPequenasEmpresas2/precoVenda';
                                let pora21 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "precoVenda": `${precovenda.value}`,
                                        "nomeCategoria": `${nomeCategoria2Id}`,
                                        "nomeProduto": `${nomeProdutoId}`,
                                    })
                                });

                                fetch(pora21)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        $('#novoCadastro').modal('hide');
                                        var m = new Date();
                                        var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                        const usuarioLogs = localStorage.getItem('usuario');
                                        const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                        let logs = new Request(urlLogs, {
                                            method: 'PATCH',
                                            headers: h,
                                            body: JSON.stringify({
                                                "nomeFuncionario": `${usuarioLogs}`,
                                                "historico": `O Colaborador ${usuarioLogs} fez alterações no Stock`,
                                                "data": `${dateString}`
                                            })
                                        });
                                        fetch(logs)
                                            .then(ress => ress.json())
                                            .then(data5Logs => {
                                                console.log(data5Logs)
                                            });
                                        editarStock();
                                    })
                            }
                            if (stockseguranca1.value != stockSegurancaId) {
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/addStockPequenasEmpresas2/stockDeSeguranca';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "stockDeSeguranca": `${stockseguranca1.value}`,
                                        "nomeCategoria": `${nomeCategoria2Id}`,
                                        "nomeProduto": `${nomeProdutoId}`,
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        $('#novoCadastro').modal('hide');
                                        var m = new Date();
                                        var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                        const usuarioLogs = localStorage.getItem('usuario');
                                        const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                        let logs = new Request(urlLogs, {
                                            method: 'PATCH',
                                            headers: h,
                                            body: JSON.stringify({
                                                "nomeFuncionario": `${usuarioLogs}`,
                                                "historico": `O Colaborador ${usuarioLogs} fez alterações no Stock`,
                                                "data": `${dateString}`
                                            })
                                        });
                                        fetch(logs)
                                            .then(ress => ress.json())
                                            .then(data5Logs => {
                                                console.log(data5Logs)
                                            });
                                        editarStock();
                                    })
                            }
                            if (precocusto.value != custoId) {
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/addStockPequenasEmpresas2/precoCusto';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "precoCusto": `${precocusto.value}`,
                                        "nomeCategoria": `${nomeCategoria2Id}`,
                                        "nomeProduto": `${nomeProdutoId}`,
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        $('#novoCadastro').modal('hide');
                                        var m = new Date();
                                        var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                        const usuarioLogs = localStorage.getItem('usuario');
                                        const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                        let logs = new Request(urlLogs, {
                                            method: 'PATCH',
                                            headers: h,
                                            body: JSON.stringify({
                                                "nomeFuncionario": `${usuarioLogs}`,
                                                "historico": `O Colaborador ${usuarioLogs} fez alterações no Stock`,
                                                "data": `${dateString}`
                                            })
                                        });
                                        fetch(logs)
                                            .then(ress => ress.json())
                                            .then(data5Logs => {
                                                console.log(data5Logs)
                                            });
                                        editarStock();
                                    })
                            }
                            if (quantidaActualProduto.value != quantidadeActualId) {
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/addStockPequenasEmpresas2/quantidade';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "quantidade": `${parseInt(quantidaActualProduto.value)}`,
                                        "nomeCategoria": `${nomeCategoria2Id}`,
                                        "nomeProduto": `${nomeProdutoId}`,
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        $('#novoCadastro').modal('hide');
                                        var m = new Date();
                                        var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                        const usuarioLogs = localStorage.getItem('usuario');
                                        const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                        let logs = new Request(urlLogs, {
                                            method: 'PATCH',
                                            headers: h,
                                            body: JSON.stringify({
                                                "nomeFuncionario": `${usuarioLogs}`,
                                                "historico": `O Colaborador ${usuarioLogs} fez alterações no Stock`,
                                                "data": `${dateString}`
                                            })
                                        });
                                        fetch(logs)
                                            .then(ress => ress.json())
                                            .then(data5Logs => {
                                                console.log(data5Logs)
                                            });
                                        editarStock();
                                    })
                            }

                        });

                    });
            } else {
                e.preventDefault();
                document.getElementById("alertaSucesso").innerHTML = `
                        <div class="alert alert-info" role="alert">
                                            <div class="text-center">
                                                <h6>Sem conecção a internet!!!</h6>
                                            </div> 
                        </div>`
                    ;
                setTimeout(function () {
                    document.getElementById("alertaSucesso").innerHTML = '';
                }, 8000);
            }
        }
        editarStock()
    }

    if (e.target.id == "removEstoque") {
        function removerStock() {
            nada = '';
            nada = `<div id="centro">
        <div class="animate__animated animate__pulse card3 text-center mr-4 text-black">
          <div class="row align-items-center">
              <div class="col-md-6">
                <h1 class="mb-4 text-black"><span class="text-black">Remover Stock</span></h1>
                <h3 class="mb-4 text-black">...</h3>
              </div>
              <div class="col-md-6 d-none d-sm-none d-md-block">
                <img src="pics/Stocks2.png" alt="tours pics" class="img-fluid">
              </div>
            </div>
      </div>
      </div>
      <div class="container mt-4" id="conteud">
        <div class="row" id="produtodd">
               
        </div>
    </div>
    <div class="modal fade" id="modelCadastroo22" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="modelTitle">Remover Produto</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body" id="colaboradorLista">
                    <h5>Tem a Certeza de Que Deseja Remover O Stock Seleccionado?</h5>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="naoremover">Não</button>
                <button type="button" class="btn btn-danger" id="remover">Sim</button>
                </div>
            </div>
            </div>
        </div>
    `;
            contrudo.innerHTML = nada;
            const empresa2 = localStorage.getItem('empresa');
            const produtodd = document.getElementById('produtodd');
            const naoremover = document.getElementById('naoremover');
            const remover = document.getElementById('remover');
            const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2}`;
            let produtos = '';


            if (navigator.onLine == true) {

                fetch(url3)
                    .then(res => res.json())
                    .then(content => {
                        const data = content[0]['categoria'];
                        console.log(content[0]);

                        for (var i = 0; i < data.length; i++) {
                            const data1 = content[0]['categoria'][i]['stock'];
                            // console.log(content[0]['categoria'][i]['stock']);
                            for (var j = 0; j < data1.length; j++) {
                                let imag = content[0]['categoria'][i]['stock'][j]['produto'][0]['img'];
                                let idd = content[0]['categoria'][i]['stock'][j]['_id'];
                                let codigo = content[0]['categoria'][i]['stock'][j]['produto'][0]['codigo'];
                                let nomeCategoria2 = content[0]['categoria'][i]['nomeCategoria'];
                                let precoCusto = content[0]['categoria'][i]['stock'][j]['produto'][0]['precoCusto'];
                                let precoVenda = content[0]['categoria'][i]['stock'][j]['produto'][0]['precoVenda'];
                                let quantidade = content[0]['categoria'][i]['stock'][j]['produto'][0]['quantidade'];
                                let quantidadeActual = content[0]['categoria'][i]['stock'][j]['produto'][0]['quantidadeActual'];
                                let stockDeSeguranca = content[0]['categoria'][i]['stock'][j]['produto'][0]['stockDeSeguranca'];
                                let vendido = content[0]['categoria'][i]['stock'][j]['produto'][0]['vendido'];
                                let nomePros = content[0]['categoria'][i]['stock'][j]['nomeProduto'];

                                let esperado = parseInt(precoVenda) * parseInt(quantidadeActual);
                                let lucro = esperado - parseInt(precoCusto) * parseInt(quantidadeActual);

                                produtos += `<div class="col-md-6 col-xl-4 mb-4">
                        <div class="card text-center">
                            <div class="card-body text-black">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2 text-center">                                        
                                        <div class="text-xs font-weight-bold text-black text-uppercase mb-1 text-center">
                                            <img class="imagemTamanho" src="${imag}" alt="Imagem Estoque" id="${idd}">                                            
                                        </div>
                                        <hr class="text-black">
                                        <div class="h5 mb-0 font-weight-bold text-black text-center">${nomePros}</div>
                                        <br>
                                        <div class="h5 mb-0 font-weight-bold text-black text-left"><h6 id=${'nomeCategoria2' + idd}>${nomeCategoria2}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-black text-left"><h6>${"Codigo do Produto: " + codigo}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-black text-left"><h6>${"Quantidade Inicial: " + quantidadeActual}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-black text-left"><h6>${"Total Esperado: " + String(esperado).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00 Mt"}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-black text-left"><h6>${"Lucro Esperado: " + String(lucro).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00 Mt"}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-black text-left"><h6>${"Venda: " + String(precoVenda).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00 Mt"}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-black text-left"><h6>${"Custo: " + String(precoCusto).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00 Mt"}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-black text-left"><h6>${"Quantidade Actual: " + quantidade}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-black text-left"><h6>${"Total Vendido: " + String(vendido).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00 Mt"}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-black text-left"><h6>${"Estoque de Seguranca: " + stockDeSeguranca}</h6></div>
                                        
                                    </div>
                                </div>
                            </div>          
                        </div>
                    </div>`;
                            }

                        }
                        produtodd.innerHTML = produtos;
                        let porApagar = '';
                        let porApagarId = '';
                        produtodd.addEventListener('click', (e) => {

                            if (e.target.className == "imagemTamanho") {
                                $('#modelCadastroo22').modal('show');
                                console.log(e.target.id);
                                let categoVaria = `${'nomeCategoria2' + e.target.id}`;
                                console.log(categoVaria);
                                const catg = document.getElementById(categoVaria);
                                console.log(catg.innerHTML);
                                porApagar = catg.innerHTML;
                                porApagarId = e.target.id;
                            }

                        });
                        naoremover.addEventListener('click', () => {
                            $('#modelCadastroo22').modal('hide');
                        });
                        remover.addEventListener('click', () => {
                            e.preventDefault();

                            const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/stockPequenasRemover';
                            let pora2 = new Request(urlLogIn3, {
                                method: 'PATCH',
                                headers: h,
                                body: JSON.stringify({
                                    "id": `${porApagarId}`,
                                    "nomeCategoria": `${porApagar}`
                                })
                            });

                            fetch(pora2)
                                .then(ress => ress.json())
                                .then(data5 => {
                                    const { ipcRenderer } = require('electron');
                                    const ipc = ipcRenderer
                                    ipc.send('produtoRemovido')
                                    $('#modelCadastroo22').modal('hide');
                                    removerStock()

                                })

                        });

                    });
            } else {
                e.preventDefault();
                document.getElementById("alertaSucesso").innerHTML = `
                    <div class="alert alert-info" role="alert">
                                        <div class="text-center">
                                            <h6>Sem conecção a internet!!!</h6>
                                        </div> 
                    </div>`
                    ;
                setTimeout(function () {
                    document.getElementById("alertaSucesso").innerHTML = '';
                }, 8000);
            }
        }
        removerStock()
    }





    console.log(e.target.id);

});