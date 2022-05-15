var myArray = [];
let funcionarioAlt = [];
const addTreinamento = document.getElementById('addTreinamento');
const tablerrr = document.getElementById('myTreinamento');
const treinamentoText = document.getElementById('treinamentoText');
const treinamentoOk = document.getElementById('treinamentoOk');
const editTreinamento = document.getElementById('editTreinamento');
const colaboradorLista = document.getElementById('colaboradorLista');
const modelTitle = document.getElementById('modelTitle');
let diverso = '';
let diverso2 = '';
let colabora = '';
let titulo = '';
const empresa2 = localStorage.getItem('empresa');
const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2}`;
fetch(url3)
        .then(res => res.json())
        .then(content => {           
            const data = content[0]['funcionarios'];
            console.log(content[0]['funcionarios']);
            for (var i = 0; i < data.length; i++){
                myArray.push(content[0]['funcionarios'][i]['treinamentos'][0]);
                const ress = content[0]['funcionarios'][i]['treinamentos'];
                console.log(content[0]['funcionarios'][i]['treinamentos'][0]);
                var newRow = tablerrr.insertRow();
                var newCell1 = newRow.insertCell(0);
                var newCell2 = newRow.insertCell(1);
                var newCell3 = newRow.insertCell(2);
                var newCell4 = newRow.insertCell(3);
                var newCell5 = newRow.insertCell(4);
                var newCell6 = newRow.insertCell(5);
                var newCell7 = newRow.insertCell(6);
                var newCell8 = newRow.insertCell(7);
                var newCell9 = newRow.insertCell(8);
                var newCell10 = newRow.insertCell(9);
                var newCell11 = newRow.insertCell(10);
                var newCell12 = newRow.insertCell(11);
                funcionarioAlt.push(ress[i].colaborador);
                let treinementow23 = '';
                let descricao2 = '';
                let fornecedor2 = '';
                let investimento2 = '';
                let status2 = '';
                if(ress[i].treinamentosw == ""){
                    treinementow23 = '-';
                }else{
                    treinementow23 = ress[i].treinamentosw;
                }
                if(ress[i].descricao == ""){
                    descricao2 = '-';
                }else{
                    descricao2 = ress[i].descricao;
                }
                if(ress[i].fornecedor == ""){
                    fornecedor2 = '-';
                }else{
                    fornecedor2 = ress[i].fornecedor;
                }
                if(ress[i].investimento == ""){
                    investimento2 = '-';
                }else{
                    investimento2 = ress[i].investimento;
                }
                if(ress[i].status == ""){
                    status2 = '-';
                }else{
                    status2 = ress[i].status;
                }
                newCell1.innerHTML = `<div>${i+1}</div>`;
                newCell2.innerHTML = `<div class="colaborador" id=${ress[i]._id}>${ress[i].colaborador}</div>`;
                newCell3.innerHTML = `<div class="treinamento" id=${ress[i]._id}>${ress[i].tipoTreinamento}</div>`;
                newCell4.innerHTML = `<div class="treinamento2" id=${ress[i]._id}>${treinementow23}</div>`;
                newCell5.innerHTML = `<div class="descricao" id=${ress[i]._id}>${descricao2}</div>`;
                newCell6.innerHTML = `<div class="fornecedor" id=${ress[i]._id}>${fornecedor2}</div>`;
                newCell7.innerHTML = `<div class="duracao" id=${ress[i]._id}>${ress[i].duracao}</div>`;
                newCell8.innerHTML = `<div class="local" id=${ress[i]._id}>${ress[i].local}</div>`;
                newCell9.innerHTML = `<div class="inicio" id=${ress[i]._id}>${ress[i].inicio}</div>`;
                newCell10.innerHTML = `<div class="fim" id=${ress[i]._id}>${ress[i].fim}</div>`;
                newCell11.innerHTML = `<div class="investimento" id=${ress[i]._id}>${investimento2}</div>`;
                newCell12.innerHTML = `<div class="status" id=${ress[i]._id}>${status2}</div>`;
            }

            addTreinamento.addEventListener('click', (e) =>{
                e.preventDefault();
                $('#novoTreinamento').modal('show');
            });
            tablerrr.addEventListener('click', (e) =>{
                e.preventDefault();
                diverso = e.target.id;
                diverso2 = e.target.innerHTML;
                console.log(e.target.className)
                
                if(e.target.className == "colaborador") {
                    colabora = '';
                    titulo = '';
                    funcionarioAlt.forEach(rec => {
                        console.log(rec)
                        colabora += `<div class="text-center">
                        <h5 class="text-gray-900 mb-4">${rec}</h5>
                    </div>`;
                    });
                    titulo = 'Colaboradores';
                    colaboradorLista.innerHTML = colabora;
                    modelTitle.innerHTML = titulo;          
                    $('#modelColaboradores').modal('show'); 
                }
                if(e.target.className == "treinamento") {
                    colabora = '';
                    titulo = '';
                    tiposTreinamento1.forEach(rec => {
                        console.log(rec)
                        colabora += `<div class="text-center">
                        <h5 class="text-gray-900 mb-4">${rec}</h5>
                    </div>`;
                    });
                    titulo += 'Treinamentos';
                    colaboradorLista.innerHTML = colabora;
                    modelTitle.innerHTML = titulo;
                    $('#modelColaboradores').modal('show'); 
                }
                if(e.target.className == "treinamento2") {
                    document.getElementById('modelTitle2').innerHTML = 'Nome Treinamento'
                    $('#modelTreinamento6').modal('show'); 
                }

                if(e.target.className == "descricao") {
                    document.getElementById('modelTitle2').innerHTML = 'Descricao do Treinamento'
                    $('#modelTreinamento2').modal('show'); 
                }

                if(e.target.className == "fornecedor") {
                    document.getElementById('modelTitle2').innerHTML = 'Fornecedor do Treinamento'
                    $('#modelTreinamento2').modal('show'); 
                }

                if(e.target.className == "investimento") {
                    document.getElementById('modelTitle3').innerHTML = 'Investimento para o Treinamento'
                    $('#modelTreinamento3').modal('show'); 
                }

                if(e.target.className == "status") {
                    colabora = '';
                    titulo = '';
                    andamentoT.forEach(rec => {
                        console.log(rec)
                        colabora += `<div class="text-center">
                        <h5 class="text-gray-900 mb-4">${rec}</h5>
                    </div>`;
                    });
                    titulo = 'Status do Treinamento';
                    colaboradorLista.innerHTML = colabora;
                    modelTitle.innerHTML = titulo;          
                    $('#modelColaboradores').modal('show'); 
                }

                if(e.target.className == "local") {
                    colabora = '';
                    titulo = '';
                    localTreinamento1.forEach(rec => {
                        console.log(rec)
                        colabora += `<div class="text-center">
                        <h5 class="text-gray-900 mb-4">${rec}</h5>
                    </div>`;
                    });
                    titulo = 'Local do Treinamento';
                    colaboradorLista.innerHTML = colabora;
                    modelTitle.innerHTML = titulo;          
                    $('#modelColaboradores').modal('show'); 
                }
                
            });
        
            $(document).ready(function () {
                $('#tabbb').DataTable({
                "scrollX": true,
                "scrollY": 200,
                });
            });
            
        });


