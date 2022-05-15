const empresa2 = localStorage.getItem('empresa');
const myJornada = document.getElementById('myJornada');
const addJornada = document.getElementById('addJornada');
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
                console.log(content[0]['funcionarios'][i]['jornadas'][0]);
                const ress = content[0]['funcionarios'][i]['jornadas'];
                let domingo = 0;
                const domingo2 = content[0]['funcionarios'][i]['jornadas'][0]['diass'][0]['domingo'];
                let segunda = 0;
                const segunda2 = content[0]['funcionarios'][i]['jornadas'][0]['diass'][0]['segunda'];
                let terca = 0;
                const terca2 = content[0]['funcionarios'][i]['jornadas'][0]['diass'][0]['terca'];
                let quarta = 0;
                const quarta2 = content[0]['funcionarios'][i]['jornadas'][0]['diass'][0]['quarta'];
                let quinta = 0;
                const quinta2 = content[0]['funcionarios'][i]['jornadas'][0]['diass'][0]['quinta'];
                let sexta = 0;
                const sexta2 = content[0]['funcionarios'][i]['jornadas'][0]['diass'][0]['sexta'];
                let sabado = 0;
                const sabado2 = content[0]['funcionarios'][i]['jornadas'][0]['diass'][0]['sabado'];


                if (domingo2.length == 0){
                    domingo = 0;
                }else{
                    domingo = content[0]['funcionarios'][i]['jornadas'][0]['diass'][0]['domingo'][0]['dias'];
                    
                }
                if (segunda2.length == 0){
                    segunda = 0;
                }else{
                    segunda = content[0]['funcionarios'][i]['jornadas'][0]['diass'][0]['segunda'][0]['dias'];
                    
                }
                if (terca2.length == 0){
                    terca = 0;
                }else{
                    terca = content[0]['funcionarios'][i]['jornadas'][0]['diass'][0]['terca'][0]['dias'];
                    
                }
                if (quarta2.length == 0){
                    quarta = 0;
                }else{
                    quarta = content[0]['funcionarios'][i]['jornadas'][0]['diass'][0]['quarta'][0]['dias'];
                    
                }
                if (quinta2.length == 0){
                    quinta = 0;
                }else{
                    quinta = content[0]['funcionarios'][i]['jornadas'][0]['diass'][0]['quinta'][0]['dias'];
                    
                }
                if (sexta2.length == 0){
                    sexta = 0;
                }else{
                    sexta = content[0]['funcionarios'][i]['jornadas'][0]['diass'][0]['sexta'][0]['dias'];
                    
                }
                if (sabado2.length == 0){
                    sabado = 0;
                }else{
                    sabado = content[0]['funcionarios'][i]['jornadas'][0]['diass'][0]['sabado'][0]['dias'];
                    
                }
                
                var newRow = myJornada.insertRow();
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
                newCell1.innerHTML = i+1;
                newCell2.innerHTML = ress[i].mes;
                newCell3.innerHTML = ress[i].ano;
                newCell4.innerHTML = ress[i].tipoJornada;
                newCell5.innerHTML = `<div class="horasMes" id=${ress[i]._id}>${horasMes}</div>`;
                newCell6.innerHTML = `<div class="horasMesT" id=${ress[i]._id}>${horasMes - (parseInt(segunda)*8+parseInt(terca)*8
                    +parseInt(quarta)*8+parseInt(quinta)*8+parseInt(sexta)*8+parseInt(sabado)*8+parseInt(domingo)*8)}</div>`;
                newCell7.innerHTML = `<table>
                <tr>
                  <td class="segunda" id=${ress[i]._id}>${segunda}</td>
                  <td class="segunda1" id=${ress[i]._id}>${parseInt(segunda)*8}</td>
                  <td class="tipoAusencia" id=${ress[i]._id}>0</td>
                </tr>
            </table>`;
                newCell8.innerHTML = `<table>
                <tr>
                  <td class="terca" id=${ress[i]._id}>${terca}</td>
                  <td class="terca1" id=${ress[i]._id}>${parseInt(terca)*8}</td>
                  <td id="terca-min">0</td>
                </tr>
            </table>`;
                newCell9.innerHTML = `<table>
                <tr>
                  <td class="quarta" id=${ress[i]._id}>${quarta}</td>
                  <td class="quarta1" id=${ress[i]._id}>${parseInt(quarta)*8}</td>
                  <td id="quarta-min">0</td>
                </tr>
            </table>`;
                newCell10.innerHTML = `<table>
                <tr>
                  <td class="quinta" id=${ress[i]._id}>${quinta}</td>
                  <td class="quinta1" id=${ress[i]._id}>${parseInt(quinta)*8}</td>
                  <td id="quinta-min">0</td>
                </tr>
            </table>`;
                newCell11.innerHTML = `<table>
                <tr>
                  <td class="sexta" id=${ress[i]._id}>${sexta}</td>
                  <td class="sexta1" id=${ress[i]._id}>${parseInt(sexta)*8}</td>
                  <td id="sexta-min">0</td>
                </tr>
            </table>`;
                newCell12.innerHTML = `<table>
                <tr>
                  <td class="sabado" id=${ress[i]._id}>${sabado}</td>
                  <td class="sabado1" id=${ress[i]._id}>${parseInt(sabado)*8}</td>
                  <td id="sabado-min">0</td>
                </tr>
            </table>`;
                newCell13.innerHTML = `<table>
                <tr>
                  <td class="domingo" id=${ress[i]._id}>${domingo}</td>
                  <td class="domingo1" id=${ress[i]._id}>${parseInt(domingo)*8}</td>
                  <td id="domingo-min">0</td>
                </tr>
              </table>`;
            }
            addJornada.addEventListener('click', (e) =>{
                e.preventDefault();
                $('#novAusencia').modal('show');
                tiposJornadasTrabalho.forEach(rec => {
                    tipoAusenciass += `<option value="valor1">${rec}</option>`;
                });
                document.getElementById('jornadaSelect').innerHTML = tipoAusenciass;
                
            });
            myJornada.addEventListener('click', (e) =>{
                e.preventDefault();
                console.log(e.target.className);
                if(e.target.className == "horasMes") {
                    document.getElementById('modelTitle31').innerHTML = 'Total de Horas de Trabalho no Mês'
                    $('#modelJornadas5').modal('show'); 
                }
                if(e.target.className == "segunda") {
                    document.getElementById('modelTitle31').innerHTML = 'Total das faltas na Segunda'
                    $('#modelJornadas5').modal('show'); 
                }
                if(e.target.className == "terca") {
                    document.getElementById('modelTitle31').innerHTML = 'Total das faltas na Terca'
                    $('#modelJornadas5').modal('show'); 
                }
                if(e.target.className == "quarta") {
                    document.getElementById('modelTitle31').innerHTML = 'Total das faltas na Quarta'
                    $('#modelJornadas5').modal('show'); 
                }
                if(e.target.className == "quinta") {
                    document.getElementById('modelTitle31').innerHTML = 'Total das faltas na Quinta'
                    $('#modelJornadas5').modal('show'); 
                }
                if(e.target.className == "sexta") {
                    document.getElementById('modelTitle31').innerHTML = 'Total das faltas no Sexta'
                    $('#modelJornadas5').modal('show'); 
                }
                if(e.target.className == "sabado") {
                    document.getElementById('modelTitle31').innerHTML = 'Total das faltas no Sabado'
                    $('#modelJornadas5').modal('show'); 
                }
                if(e.target.className == "domingo") {
                    document.getElementById('modelTitle31').innerHTML = 'Total das faltas no Domingo'
                    $('#modelJornadas5').modal('show'); 
                }
            });
            $(document).ready(function () {
                $('#tabbb').DataTable({
                "scrollX": true,
                "scrollY": 200,
                });
            });
            
        });


