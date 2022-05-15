var myArray = [];
const empresa2 = localStorage.getItem('empresa');
const tablerrr = document.getElementById('myTableee');
const addFuncionario = document.getElementById('addFuncionario');
const colaboradorLista = document.getElementById('colaboradorLista');
const modelTitle = document.getElementById('modelTitle');
const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2}`;
fetch(url3)
        .then(res => res.json())
        .then(content => {
            console.log(content[0]['funcionarios']);
            const data = content[0]['funcionarios'];
            for (var i = 0; i < data.length; i++){
                var newRow = tablerrr.insertRow();
                var newCell1 = newRow.insertCell(0);
                var newCell2 = newRow.insertCell(1);
                var newCell3 = newRow.insertCell(2);
                var newCell4 = newRow.insertCell(3);
                var newCell5 = newRow.insertCell(4);
                var newCell6 = newRow.insertCell(5);
                var newCell7 = newRow.insertCell(6);
                var newCell8 = newRow.insertCell(7);
                let dataDesligamento = '';
                let tipoDesligamento = '';
                let tempoEmpresa = '';
                if(data[i].dataDesligamento == ""){
                    dataDesligamento = '-';
                }else{
                    dataDesligamento = data[i].dataDesligamento;
                }
                if(data[i].tipoDesligamento == ""){
                    tipoDesligamento = '-';
                }else{
                    tipoDesligamento = data[i].tipoDesligamento;
                }
                if(data[i].tempoEmpresa == ""){
                    tempoEmpresa = '-';
                }else{
                    tempoEmpresa = data[i].tempoEmpresa;
                }
                newCell1.innerHTML = i+1;
                newCell2.innerHTML = `<div class="nomeFuncionario" id=${data[i]._id}>${data[i].nomeFuncionario}</div>`;
                newCell3.innerHTML = `<div class="genero" id=${data[i]._id}>${data[i].genero}</div>`;
                newCell4.innerHTML = `<div class="dataNascimento" id=${data[i]._id}>${data[i].dataNascimento}</div>`;
                newCell5.innerHTML = `<div class="dataAdmissao" id=${data[i]._id}>${data[i].dataAdmissao}</div>`;
                newCell6.innerHTML = `<div class="dataDesligamento" id=${data[i]._id}>${dataDesligamento}</div>`;
                newCell7.innerHTML = `<div class="tipoDesligamento" id=${data[i]._id}>${tipoDesligamento}</div>`;
                newCell8.innerHTML = `<div class="tempoEmpresa" id=${data[i]._id}>${tempoEmpresa}</div>`;
                
        
            }
            addFuncionario.addEventListener('click', (e) =>{
                e.preventDefault();
                $('#novoCadastro').modal('show');
            });
            tablerrr.addEventListener('click', (e) =>{
                e.preventDefault();
                if(e.target.className == "tipoDesligamento") {
                    colabora = '';
                    titulo = '';
                    tiposDesligamentos.forEach(rec => {
                        colabora += `<div class="text-center">
                        <h5 class="text-gray-900 mb-4">${rec}</h5>
                    </div>`;
                    });
                    titulo = 'Tipo de Desligamento';
                    colaboradorLista.innerHTML = colabora;
                    modelTitle.innerHTML = titulo;          
                    $('#modelCadastroo22').modal('show'); 
                }
                if(e.target.className == "dataDesligamento") {
                    document.getElementById('modelTitle3').innerHTML = 'Data de Desligamento'
                    $('#modelCadastro3').modal('show'); 
                }
                if(e.target.className == "tempoEmpresa") {
                    document.getElementById('modelTitle3').innerHTML = 'Tempo de Empresa'
                    $('#modelCadastro3').modal('show'); 
                }
                
            })
            
            $(document).ready(function () {
                $('#tabbb').DataTable({
                "scrollX": true,
                "scrollY": 200,
                });
            });
            
});
