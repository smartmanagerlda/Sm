const empresa2 = localStorage.getItem('empresa');
const produtodd = document.getElementById('produtodd');
const totalEstoque = document.getElementById('totalEstoque');
const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2}`;
let produtos = '';
let totalEst = 0;

if (navigator.onLine == true){
    
    fetch(url3)
    .then(res => res.json())
    .then(content => { 
        const data = content[0]['categoria'];
        console.log(content[0]['categoria'][0]['stock'][0]['produto']);
        // console.log(data);
        for (var i = 0; i < data.length; i++){
            const data1 = content[0]['categoria'][i]['stock'];
            // console.log(content[0]['categoria'][i]['stock']);
            for (var j = 0; j < data1.length; j++){
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
                let esperado = parseInt(precoVenda)*parseInt(quantidadeActual);
                let lucro = esperado - parseInt(precoCusto)*parseInt(quantidadeActual);
                produtos += `<div class="col-md-6 col-xl-4 mb-4">
                <div class="card text-center">
                    <div class="card-body text-white">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2 text-center">
                                <div class="h5 mb-0 font-weight-bold text-gray-800 text-center">${nomePros}</div>
                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1 text-center">
                                    <img class="imagemTamanho" src="${imag}" alt="Imagem Estoque" id="${idd}"></div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 text-left">${"Codigo do Produto: "+codigo}</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 text-left">${"Quantidade Inicial: "+quantidadeActual}</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 text-left">${"Total Esperado: "+ String(esperado).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00 Mt"}</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 text-left">${"Lucro Esperado: "+ String(lucro).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00 Mt"}</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 text-left">${"Venda: "+ String(precoVenda).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00 Mt"}</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 text-left">${"Custo: "+ String(precoCusto).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00 Mt"}</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 text-left">${"Quantidade: "+quantidade}</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 text-left">${"Total Vendido: "+ String(vendido).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00 Mt"}</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 text-left">${"Estoque de Seguranca: "+stockDeSeguranca}</div>
                                
                            </div>
                        </div>
                    </div>          
                </div>
            </div> `;
            }        
            
        }

        produtodd.innerHTML = produtos;
        totalEstoque.innerHTML = String(totalEst).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00 Mt";
    });
}else{
    e.preventDefault();
        document.getElementById("alertaSucesso").innerHTML = `
            <div class="alert alert-info" role="alert">
                                <div class="text-center">
                                    <h6>Sem conecção a internet!!!</h6>
                                </div> 
            </div>`
            ;
            setTimeout(function() {
                document.getElementById("alertaSucesso").innerHTML = '';
            }, 8000);
}