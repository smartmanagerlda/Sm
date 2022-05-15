var funcionarioAlt = []
let diverso = '';
let diverso2 = '';
let colabora = '';
const myAltTab = document.getElementById('myAltTab');
const empresa2q = localStorage.getItem('empresa');
const altFuncionariorLista = document.getElementById('altFuncionariorLista');
const modelTitle = document.getElementById('modelTitle');
const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2q}`;
fetch(url3)
        .then(res => res.json())
        .then(content => {           
            const data = content[0]['clientes'];
            console.log(content[0])
            for (var i = 0; i < data.length; i++){
                const ress = content[0]['clientes'];
                console.log(content[0]['clientes']);
                var newRow = myAltTab.insertRow();
                var newCell1 = newRow.insertCell(0);
                var newCell2 = newRow.insertCell(1);
                var newCell3 = newRow.insertCell(2);
                var newCell4 = newRow.insertCell(3);
                var newCell5 = newRow.insertCell(4);
                var newCell6 = newRow.insertCell(5);
                var newCell7 = newRow.insertCell(6);

                newCell1.innerHTML = `<div>${i+1}</div>`;
                newCell2.innerHTML = `<div class="nomeColabora" id=${ress[i]._id}>${ress[i].nomeFuncionario}</div>`;
                newCell3.innerHTML = `<div class="cargo" id=${ress[i]._id}>${ress[i].avenida}</div>`;
                newCell4.innerHTML = `<div class="de" id=${ress[i]._id}>${ress[i].cidade}</div>`;
                newCell5.innerHTML = `<div class="ate" id=${ress[i]._id}>${ress[i].provincia}</div>`;
                newCell6.innerHTML = `<div class="jornada" id=${ress[i]._id}>${ress[i].contacto}</div>`;
                newCell7.innerHTML = `<div class="escolaridade" id=${ress[i]._id}>${ress[i].dataDesligamento}</div>`;
            }

            myAltTab.addEventListener('click', (e) =>{
                e.preventDefault();
                if(e.target.className == "escolaridade") {
                    colabora = '';
                    titulo = '';
                    nivelEscolaridade.forEach(rec => {
                        console.log(rec)
                        colabora += `<div class="text-center">
                        <h5 class="text-gray-900 mb-4">${rec}</h5>
                    </div>`;
                    });
                    titulo = 'Nivel de Escolaridade';
                    altFuncionariorLista.innerHTML = colabora;
                    modelTitle.innerHTML = titulo;          
                    $('#modelAltFuncionario').modal('show'); 
                }
                
                if(e.target.className == "cargo") {
                    colabora = '';
                    titulo = '';
                    cargosT.forEach(rec => {
                        console.log(rec)
                        colabora += `<div class="text-center">
                        <h5 class="text-gray-900 mb-4">${rec}</h5>
                    </div>`;
                    });
                    titulo = 'Cargos';
                    altFuncionariorLista.innerHTML = colabora;
                    modelTitle.innerHTML = titulo;          
                    $('#modelAltFuncionario').modal('show'); 
                }
                if(e.target.className == "jornada") {
                    colabora = '';
                    titulo = '';
                    tiposJornadasTrabalho.forEach(rec => {
                        console.log(rec)
                        colabora += `<div class="text-center">
                        <h5 class="text-gray-900 mb-4">${rec}</h5>
                    </div>`;
                    });
                    titulo = 'Jornada do Colaborador';
                    altFuncionariorLista.innerHTML = colabora;
                    modelTitle.innerHTML = titulo;          
                    $('#modelAltFuncionario').modal('show'); 
                }
                if(e.target.className == "de") {
                    document.getElementById('modelTitle2').innerHTML = 'Inicio das Actividades do Colaborador'
                    $('#modelaltFuncionario2').modal('show'); 
                }
                if(e.target.className == "ate") {
                    document.getElementById('modelTitle2').innerHTML = 'Fim das Actividades do Colaborador'
                    $('#modelaltFuncionario2').modal('show'); 
                }
            });
            $(document).ready(function () {
                $('#tabbb').DataTable({
                "scrollX": true,
                "scrollY": 200,
                });
            });
            
        });

