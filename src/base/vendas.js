var funcionarioAlt = []
let diverso = '';
let diverso2 = '';
let colabora = '';
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
const myAltTab = document.getElementById('myAltTab');
const empresa2q = localStorage.getItem('empresa');
const altFuncionariorLista = document.getElementById('altFuncionariorLista');
const modelTitle = document.getElementById('modelTitle');
const verrr = document.getElementById('verrr');
var valorAnual = 0;
const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2q}`;
fetch(url3)
        .then(res => res.json())
        .then(content => {           
            const data = content[0]['diarioDeVendas'];
            console.log(content[0])
            function greet() {
                
            }
            for (var i = 0; i < data.length; i++){
                let currentTimeDate = new Date(content[0]['diarioDeVendas'][i].data);  
                var currentDay = weekday[currentTimeDate.getDay()];
                var currentDate  = currentTimeDate.getDate();
                var currentMonth = month[currentTimeDate.getMonth()];
                var CurrentYear = currentTimeDate.getFullYear();
                var fullDate = `${currentDate} ${currentMonth} ${CurrentYear}`;
                var hours   =  currentTimeDate.getHours();
                var minutes =  currentTimeDate.getMinutes();
                minutes = minutes < 10 ? '0'+minutes : minutes;
                var AMPM = hours >= 12 ? ' da Tarde' : ' da Manhã';
                if(hours === 12){
                    hours=12;
            
                }else{
            
                    hours = hours%12;
            
                }
                var currentTime = `${hours}:${minutes}${AMPM}`;
                var dia = `${fullDate} ${currentDay} ${currentTime}`;

                var newRow = myAltTab.insertRow();
                var newCell1 = newRow.insertCell(0);
                var newCell2 = newRow.insertCell(1);
                var newCell3 = newRow.insertCell(2);
                var newCell4 = newRow.insertCell(3);
                var newCell5 = newRow.insertCell(4);
                var newCell6 = newRow.insertCell(5);
                newCell1.innerHTML = `<div>${i+1}</div>`;
                newCell2.innerHTML = `<div class="nomeColabora" id=${content[0]['diarioDeVendas'][i]._id}>${content[0]['diarioDeVendas'][i].nome_produto}</div>`;
                newCell3.innerHTML = `<div class="cargo" id=${content[0]['diarioDeVendas'][i]._id}>${content[0]['diarioDeVendas'][i].precoVenda}</div>`;
                newCell4.innerHTML = `<div class="de" id=${content[0]['diarioDeVendas'][i]._id}>${content[0]['diarioDeVendas'][i].quantidade}</div>`;
                newCell5.innerHTML = `<div class="ate" id=${content[0]['diarioDeVendas'][i]._id}>${dia}</div>`;
                newCell6.innerHTML = `<div class="valor-calculado" id=${content[0]['diarioDeVendas'][i]._id}>${parseInt(content[0]['diarioDeVendas'][i].quantidade)*parseInt(content[0]['diarioDeVendas'][i].precoVenda)}</div>`;
            }
           

              function updateSum() {
                console.log('updateSum');
                var valorCalculado = 0;
                $( "tbody .valor-calculado" ).each(function() {                    
                  valorCalculado += parseInt($( this ).text());
                });
                $( "#qtdtotal" ).text(String(valorCalculado).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00 Mt");
              }
              function updateSumAnual() {
                var valorAnual = 0;
                $( "tbody .valor-calculado" ).each(function() {                    
                    valorAnual += parseInt($( this ).text());
                });
                localStorage.setItem('totalEstoqueew2', valorAnual);
              }
              updateSumAnual()
              verrr.addEventListener('click', (e) =>{
                updateSum();
              });
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
                "scrollY": 500,
                });
            });
            
        });

