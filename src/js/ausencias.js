const empresa2 = localStorage.getItem('empresa');
const myAusencias = document.getElementById('myAusencias');
const addAusências = document.getElementById('addAusências');
const modelAusencias5 = document.getElementById('modelAusencias5');
const ausenciasLista = document.getElementById('ausenciasLista');
const modelTitle4 = document.getElementById('modelTitle4');
let colaboradors = '';
let tipoAusenciass = '';
let motivoss = '';
let motivosss = '';
let isto = "";
const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2}`;
fetch(url3)
        .then(res => res.json())
        .then(content => {           
            const data = content[0]['funcionarios'];
            for (var i = 0; i < data.length; i++){
                colaboradors = '';
                tipoAusenciass = '';
                motivoss = '';
                console.log(content[0]['funcionarios'][i]['ausencias'][0]);
                const ress = content[0]['funcionarios'][i]['ausencias'];
                let domingo = 0;
                const domingo2 = content[0]['funcionarios'][i]['ausencias'][0]['diass'][0]['domingo'];
                let segunda = 0;
                const segunda2 = content[0]['funcionarios'][i]['ausencias'][0]['diass'][0]['segunda'];
                let terca = 0;
                const terca2 = content[0]['funcionarios'][i]['ausencias'][0]['diass'][0]['terca'];
                let quarta = 0;
                const quarta2 = content[0]['funcionarios'][i]['ausencias'][0]['diass'][0]['quarta'];
                let quinta = 0;
                const quinta2 = content[0]['funcionarios'][i]['ausencias'][0]['diass'][0]['quinta'];
                let sexta = 0;
                const sexta2 = content[0]['funcionarios'][i]['ausencias'][0]['diass'][0]['sexta'];
                let sabado = 0;
                const sabado2 = content[0]['funcionarios'][i]['ausencias'][0]['diass'][0]['sabado'];


                if (domingo2.length == 0){
                    domingo = 0;
                }else{
                    domingo = content[0]['funcionarios'][i]['ausencias'][0]['diass'][0]['domingo'][0]['dias'];
                    
                }
                if (segunda2.length == 0){
                    segunda = 0;
                }else{
                    segunda = content[0]['funcionarios'][i]['ausencias'][0]['diass'][0]['segunda'][0]['dias'];
                    
                }
                if (terca2.length == 0){
                    terca = 0;
                }else{
                    terca = content[0]['funcionarios'][i]['ausencias'][0]['diass'][0]['terca'][0]['dias'];
                    
                }
                if (quarta2.length == 0){
                    quarta = 0;
                }else{
                    quarta = content[0]['funcionarios'][i]['ausencias'][0]['diass'][0]['quarta'][0]['dias'];
                    
                }
                if (quinta2.length == 0){
                    quinta = 0;
                }else{
                    quinta = content[0]['funcionarios'][i]['ausencias'][0]['diass'][0]['quinta'][0]['dias'];
                    
                }
                if (sexta2.length == 0){
                    sexta = 0;
                }else{
                    sexta = content[0]['funcionarios'][i]['ausencias'][0]['diass'][0]['sexta'][0]['dias'];
                    
                }
                if (sabado2.length == 0){
                    sabado = 0;
                }else{
                    sabado = content[0]['funcionarios'][i]['ausencias'][0]['diass'][0]['sabado'][0]['dias'];
                    
                }
                
                var newRow = myAusencias.insertRow();
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
                var newCell13 = newRow.insertCell(12);
                const horasMes = 27*8;
                
                colaboradors += `<option value="valor1">${ress[i].colaborador}</option>`;
                document.getElementById('colaboradorSelect').innerHTML = colaboradors;
                motivosss = `<div class="motivo" id=${ress[i]._id}>${ress[i].motivo}</div>`;
                newCell1.innerHTML = i+1;
                newCell2.innerHTML = ress[i].mes;
                newCell3.innerHTML = ress[i].ano;
                newCell4.innerHTML = ress[i].colaborador;
                newCell5.innerHTML = `<div class="tipoAusencia" id=${ress[i]._id}>${ress[i].tipoAusencia}</div>`;
                newCell6.innerHTML = motivosss
                newCell7.innerHTML = `<table>
                <tr>
                  <td class="segunda" id=${ress[i]._id}>${segunda}</td>
                  <td id="segunda-horas">${parseInt(segunda)*8}</td>
                  <td id="segunda-min">0</td>
                </tr>
            </table>`;
                newCell8.innerHTML = `<table>
                <tr>
                  <td class="terca" id=${ress[i]._id}>${terca}</td>
                  <td id="terca-horas">${parseInt(terca)*8}</td>
                  <td id="terca-min">0</td>
                </tr>
            </table>`;
                newCell9.innerHTML = `<table>
                <tr>
                  <td class="quarta" id=${ress[i]._id}>${quarta}</td>
                  <td id="quarta-horas">${parseInt(quarta)*8}</td>
                  <td id="quarta-min">0</td>
                </tr>
            </table>`;
                newCell10.innerHTML = `<table>
                <tr>
                  <td class="quinta" id=${ress[i]._id}">${quinta}</td>
                  <td id="quinta-horas">${parseInt(quinta)*8}</td>
                  <td id="quinta-min">0</td>
                </tr>
            </table>`;
                newCell11.innerHTML = `<table>
                <tr>
                  <td class="sexta" id=${ress[i]._id}>${sexta}</td>
                  <td id="sexta-horas">${parseInt(sexta)*8}</td>
                  <td id="sexta-min">0</td>
                </tr>
            </table>`;
                newCell12.innerHTML = `<table>
                <tr>
                  <td class="sabado" id=${ress[i]._id}>${sabado}</td>
                  <td id="sabado-horas">${parseInt(sabado)*8}</td>
                  <td id="sabado-min">0</td>
                </tr>
            </table>`;
                newCell13.innerHTML = `<table>
                <tr>
                  <td class="domingo" id=${ress[i]._id}>${domingo}</td>
                  <td id="domingo-horas">${parseInt(domingo)*8}</td>
                  <td id="domingo-min">0</td>
                </tr>
              </table>`;
            }
            const select = document.getElementById('tipoAusenciaSelect');
            addAusências.addEventListener('click', (e) =>{
                e.preventDefault();
                $('#novAusencia').modal('show');
                tiposAusencias.forEach(rec => {
                    tipoAusenciass += `<option value="valor1">${rec}</option>`;
                });
                document.getElementById('tipoAusenciaSelect').innerHTML = tipoAusenciass;
                let ti = '';
                
                ti = select.options[select.selectedIndex].innerHTML;
                console.log(ti)
                if(ti === 'Ausência Planejada'){
                    motivoss = '';                    
                    ausenciaPlanejada.forEach(rec => {
                        motivoss += `<option value="valor1">${rec}</option>`;
                    });
                    document.getElementById('motivoAusenciaSelect').innerHTML = motivoss;
                }else{
                    motivoss = '';
                    ausenciaNaoPlanejada.forEach(rec => {
                        motivoss += `<option value="valor1">${rec}</option>`;
                    });
                    document.getElementById('motivoAusenciaSelect').innerHTML = motivoss;
                }
            });

            select.addEventListener('change', (event) => {
                let tis = event.target.value;
                console.log(tis);
                ti2 = select.options[select.selectedIndex].innerHTML;
                if(ti2 === 'Ausência Planejada'){
                    motivoss = '';                    
                    ausenciaPlanejada.forEach(rec => {
                        motivoss += `<option value="valor1">${rec}</option>`;
                    });
                    document.getElementById('motivoAusenciaSelect').innerHTML = motivoss;
                }else{
                    motivoss = '';
                    ausenciaNaoPlanejada.forEach(rec => {
                        motivoss += `<option value="valor1">${rec}</option>`;
                    });
                    document.getElementById('motivoAusenciaSelect').innerHTML = motivoss;
            }
            })
            myAusencias.addEventListener('click', (e) =>{
                e.preventDefault();
                if(e.target.className == "segunda") {
                    document.getElementById('modelTitle31').innerHTML = 'Total das Faltas na Segunda'
                    $('#modelTreinamento5').modal('show'); 
                }
                if(e.target.className == "tipoAusencia") {
                    colabora = '';
                    isto = "";
                    titulo = '';
                    isto = e.target.innerHTML
                    console.log("==>"+e.target.innerHTML)
                    tiposAusencias.forEach(rec => {
                        colabora += `<div class="text-center">
                        <h5 class="text-gray-900 mb-4">${rec}</h5>
                    </div>`;
                    });
                    titulo = 'Tipo da Ausencia';
                    ausenciasLista.innerHTML = colabora;
                    modelTitle4.innerHTML = titulo;          
                    $('#modelAusencias5').modal('show'); 
                }
                if(e.target.className == "motivo") {
                    colabora = '';
                    titulo = '';
                    if(isto === "Ausência Planejada"){
                        ausenciaPlanejada.forEach(rec => {
                            colabora += `<div class="text-center">
                            <h5 class="text-gray-900 mb-4" id="${rec}">${rec}</h5>
                        </div>`;
                        });
                        titulo = 'Motivo da Ausência';
                        ausenciasLista.innerHTML = colabora;
                        modelTitle4.innerHTML = titulo;          
                        $('#modelAusencias5').modal('show');
                        ausenciasLista.addEventListener('click', (e) =>{
                            console.log(e.target.id)
                            $('#modelAusencias5').modal('hide');
                        })
                        
                    }else{
                        ausenciaNaoPlanejada.forEach(rec => {
                            colabora += `<div class="text-center">
                            <h5 class="text-gray-900 mb-4" id="${rec}">${rec}</h5>
                        </div>`;
                        });
                        titulo = ' Motivo da Ausência';
                        ausenciasLista.innerHTML = colabora;
                        modelTitle4.innerHTML = titulo;          
                        $('#modelAusencias5').modal('show');
                        ausenciasLista.addEventListener('click', (e) =>{
                            console.log(e.target.id)
                            $('#modelAusencias5').modal('hide');
                        })
                    }
                     
                }
            });
            myAusencias.addEventListener('click', (e) =>{
                e.preventDefault();
                if(e.target.className == "terca") {
                    document.getElementById('modelTitle31').innerHTML = 'Total das Faltas na Terca'
                    $('#modelTreinamento5').modal('show'); 
                }
            });
            myAusencias.addEventListener('click', (e) =>{
                e.preventDefault();

                console.log(e.target.className)
                if(e.target.className == "quarta") {
                    document.getElementById('modelTitle31').innerHTML = 'Total das Faltas na Quarta'
                    $('#modelTreinamento5').modal('show'); 
                }
            });
            myAusencias.addEventListener('click', (e) =>{
                e.preventDefault();

                console.log(e.target.className)
                if(e.target.className == "quinta") {
                    document.getElementById('modelTitle31').innerHTML = 'Total das Faltas na Quinta'
                    $('#modelTreinamento5').modal('show'); 
                }
            });
            myAusencias.addEventListener('click', (e) =>{
                e.preventDefault();

                console.log(e.target.className)
                if(e.target.className == "sexta") {
                    document.getElementById('modelTitle31').innerHTML = 'Total das Faltas na Sexta'
                    $('#modelTreinamento5').modal('show'); 
                }
            });
            myAusencias.addEventListener('click', (e) =>{
                e.preventDefault();

                console.log(e.target.className)
                if(e.target.className == "sabado") {
                    document.getElementById('modelTitle31').innerHTML = 'Total das Faltas no Sabado'
                    $('#modelTreinamento5').modal('show'); 
                }
            });
            myAusencias.addEventListener('click', (e) =>{
                e.preventDefault();

                console.log(e.target.className)
                if(e.target.className == "domingo") {
                    document.getElementById('modelTitle31').innerHTML = 'Total das Faltas no Domingo'
                    $('#modelTreinamento5').modal('show'); 
                }
            });
            $(document).ready(function () {
                $('#tabbb').DataTable({
                "scrollX": true,
                "scrollY": 200,
                });
            });
            
        });


