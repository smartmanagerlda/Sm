let list = document.querySelectorAll('.list');
let menuToggle = document.querySelector('.toggle');
let card2 = document.querySelector('.card2');
let title = document.querySelector('.title');
const body = document.getElementById('body');
const contrudo = document.getElementById('contrudo');
let listaAno = [];
let listaAno2 = [];
const empresa2 = localStorage.getItem('empresa');
const token = localStorage.getItem('token');
let nada = '';

function rhPtincipal() {
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
        if (e.target.id == "config") {
            nada = '';
            nada = `<div id="centro">
            <div class="animate__animated animate__pulse card3 text-center mr-4 text-black">
              <div class="row align-items-center">
                  <div class="col-md-6">
                    <h1 class="mb-4 text-black"><span class="text-black">Configurações</span></h1>
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
                    <div class="card text-center">
                        <a href="#" class="text-center btn btn-lg btn-block" id="parametros">Parâmetros</a>   
                    </div>
                </div>
              <div class="col-md-4 col-xl-5 mb-4">
                <div class="card text-center">
                    <a href="#" class="text-center btn btn-lg btn-block" id="cargos">Cargos</a>
                  </div>          
                </div>
              </div>         
            </div>
            </div>
          <div id="cargos"></div>
          <div id="parametro"></div>`;
            contrudo.innerHTML = nada;
        }

        if (e.target.id == "relatorio") {
            nada = '';
            nada = `<div id="centro">
          <div class="animate__animated animate__pulse card3 text-center mr-4">
            <div class="row align-items-center">
                <div class="col-md-6">
                  <h1 class="mb-4 text-black"><span class="text-black">Relatórios</span></h1>
                  <h3 class="mb-4 text-black">...</h3>
                </div>
                <div class="col-md-6 d-none d-sm-none d-md-block">
                  <img src="pics/Stocks2.png" alt="tours pics" class="img-fluid">
                </div>
              </div>
        </div>
        </div>
        <div class="text-center card4">
            <div class="row p-3">
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="perfil" >Perfil</a>                                                     
                                    </div>
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="altFunc2">Rotatividade</a>
                                    </div>
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="absent">Absenteismo</a>
                                    </div>
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="recrSelecc2"><h6>Rec. e Selecção</h6></a>
                                    </div>
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="financ">Financeiro</a>
                                    </div>
    
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="treinamentosRelatorio">Treinamentos</a>
                                    </div>
    
                                </div>
            </div>`;
            contrudo.innerHTML = nada;
        }
        if (e.target.id == "indicadores") {
            nada = '';
            nada = `<div id="centro">
        <div class="animate__animated animate__pulse card3 text-center mr-4 text-black">
          <div class="row align-items-center">
              <div class="col-md-6">
                <h1 class="mb-4 text-black"><span class="text-black">Indicadores</span></h1>
                <h3 class="mb-4 text-black">...</h3>
              </div>
              <div class="col-md-6 d-none d-sm-none d-md-block">
                <img src="pics/Stocks2.png" alt="tours pics" class="img-fluid">
              </div>
            </div>
      </div>
      </div>
        <div class="text-center card4">
            <h4 class="text-center text-black">Indicadores de Perfil</h4>
        </div>
        <div class="container" id="graficoss">
        <div class="row">
        <div class="col-md-6 col-xl-4 mb-4">
            <div class="card text-center">
            <div class="card-body text-black">
                <canvas id="pieChart"></canvas>             
            </div>
            </div>
        </div>
        <div class="col-md-6 col-xl-4 mb-4">
            <div class="card text-center">
            <div class="card-body text-black">
                <canvas id="myChart"></canvas>
            </div>
            </div>
        </div>
        <div class="col-md-6 col-xl-4 mb-4">
            <div class="card text-center">
            <div class="card-body text-black">
                <canvas id="horizontalBar"></canvas>
            </div>
            </div>
        </div>
        <div class="col-md-6 col-xl-4 mb-4">
            <div class="card text-center">
            <div class="card-body text-black">
                <canvas id="horizontalBar1"></canvas>
            </div>
            </div>
        </div>       
        </div>
        
        </div>

        <div class="text-center card4">
            <h4 class="text-center text-black">Indicadores de Rotatividade</h4>
        </div>
        <div class="container" id="graficoss1">
            <div class="row">
                <div class="col-md-6 col-xl-4 mb-4">
                    <div class="card text-center">
                    <div class="card-body text-black">
                        <canvas id="pieChart1"></canvas>             
                    </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4 mb-4">
                    <div class="card text-center">
                    <div class="card-body text-black">
                        <canvas id="myChart1"></canvas>
                    </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4 mb-4">
                    <div class="card text-center">
                    <div class="card-body text-black">
                        <canvas id="horizontalBar11"></canvas>
                    </div>
                    </div>
                </div>
                       
        </div>        
        </div>

        <div class="text-center card4">
            <h4 class="text-center text-black">Indicadores de Absenteismo</h4>
        </div>
        <div class="container" id="graficoss3">
            <div class="row">
                <div class="col-md-6 col-xl-4 mb-4">
                    <div class="card text-center">
                    <div class="card-body text-black">
                        <canvas id="pieChart2"></canvas>             
                    </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4 mb-4">
                    <div class="card text-center">
                    <div class="card-body text-black">
                        <canvas id="myChart2"></canvas>
                    </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4 mb-4">
                    <div class="card text-center">
                    <div class="card-body text-black">
                        <canvas id="horizontalBar12"></canvas>
                    </div>
                    </div>
                </div>
                       
        </div>        
        </div>
        
    
    `;
            contrudo.innerHTML = nada;

            const pespecializacao = parseInt(localStorage.getItem('especializacao'));
            const ensinoTecnico = parseInt(localStorage.getItem('ensinoTecnico'));
            const ensinoFundamental = parseInt(localStorage.getItem('ensinoFundamental'));
            const ensinoMedio = parseInt(localStorage.getItem('ensinoMedio'));
            const superiorIncompleto = parseInt(localStorage.getItem('superiorIncompleto'));
            const superiorCompleto = parseInt(localStorage.getItem('superiorCompleto'));
            const posGraduacao = parseInt(localStorage.getItem('posGraduacao'));
            const mestre = parseInt(localStorage.getItem('mestre'));
            const doutor = parseInt(localStorage.getItem('doutor'));
            var ctx2 = document.getElementById("pieChart").getContext('2d');
            var myChart = new Chart(ctx2, {
                type: 'bar',
                data: {
                    labels: ["E.F.", "E.M.", "E.T", "S.I", "S.C", "E", "Dr", "Me", "P.G"],
                    datasets: [{
                        label: 'Nível Acadêmico',
                        data: [ensinoFundamental, ensinoMedio, ensinoTecnico, superiorIncompleto,
                            superiorCompleto, pespecializacao, posGraduacao, mestre, doutor],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });

            const femenino = parseInt(localStorage.getItem('femenino'));
            const masculino = parseInt(localStorage.getItem('masculino'));
            var ctx = document.getElementById("myChart").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["Femenino", "Masculino"],
                    datasets: [{
                        label: 'Gênero',
                        data: [femenino, masculino],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });

            const ate18 = parseInt(localStorage.getItem('ate18'));
            const ate22 = parseInt(localStorage.getItem('ate22'));
            const ate26 = parseInt(localStorage.getItem('ate26'));
            const ate30 = parseInt(localStorage.getItem('ate30'));
            const ate34 = parseInt(localStorage.getItem('ate34'));
            const ate38 = parseInt(localStorage.getItem('ate38'));
            const ate42 = parseInt(localStorage.getItem('ate42'));
            const ate46 = parseInt(localStorage.getItem('ate46'));
            const ate50 = parseInt(localStorage.getItem('ate50'));
            const ate54 = parseInt(localStorage.getItem('ate54'));
            const ate58 = parseInt(localStorage.getItem('ate58'));
            const ate62 = parseInt(localStorage.getItem('ate62'));
            const ate66 = parseInt(localStorage.getItem('ate66'));
            const ate70 = parseInt(localStorage.getItem('ate70'));
            const mais70 = parseInt(localStorage.getItem('mais70'));

            var ctx3 = document.getElementById("horizontalBar").getContext('2d');
            var myChart = new Chart(ctx3, {
                type: 'bar',
                data: {
                    labels: ["14-18", "18-22", "22-26", "26-30", "30-34", "34-38", "38-42", "42-46", "46-50",
                        "50-54", "54-58", "58-62", "62-66", "66-70", "70-..."],
                    datasets: [{
                        label: 'Faixa Etária',
                        data: [ate18, ate22, ate26, ate30, ate34, ate38, ate42, ate46, ate50, ate54, ate58, ate62, ate66,
                            ate70, mais70],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });


            const ate50a = parseInt(localStorage.getItem('>6'));
            const ate18a = parseInt(localStorage.getItem('1-2'));
            const ate22a = parseInt(localStorage.getItem('2-3'));
            const ate26a = parseInt(localStorage.getItem('3-5'));
            const ate30a = parseInt(localStorage.getItem('5-7'));
            const ate34a = parseInt(localStorage.getItem('7-10'));
            const ate38a = parseInt(localStorage.getItem('10-15'));
            const ate42a = parseInt(localStorage.getItem('15-20'));
            const ate46a = parseInt(localStorage.getItem('20>'));

            var ctx3 = document.getElementById("horizontalBar1").getContext('2d');
            var myChart = new Chart(ctx3, {
                type: 'bar',
                data: {
                    labels: ["<1", "1-2", "2-3", "3-5", "5-7", "7-10", "10-15", "15-20", ">20"],
                    datasets: [{
                        label: 'Tempo de Empresa (Anos)',
                        data: [ate50a, ate18a, ate22a, ate26a, ate30a, ate34a, ate38a, ate42a, ate46a],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });

            const contratacoes = parseInt(localStorage.getItem('contratacoes'));
            const desligamentos = parseInt(localStorage.getItem('desligamentos'));
            var ctx = document.getElementById("myChart1").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["Contratações", "Desligamentos"],
                    datasets: [{
                        label: 'Rotatividade',
                        data: [contratacoes, desligamentos],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });

            const jan = parseInt(localStorage.getItem('jan'));
            const fev = parseInt(localStorage.getItem('fev'));
            const mar = parseInt(localStorage.getItem('mar'));
            const abr = parseInt(localStorage.getItem('abr'));
            const mai = parseInt(localStorage.getItem('mai'));
            const jun = parseInt(localStorage.getItem('jun'));
            const jul = parseInt(localStorage.getItem('jul'));
            const ago = parseInt(localStorage.getItem('ago'));
            const set = parseInt(localStorage.getItem('set'));
            const out = parseInt(localStorage.getItem('out'));
            const nov = parseInt(localStorage.getItem('nov'));
            const dez = parseInt(localStorage.getItem('dez'));

            var ctx3 = document.getElementById("horizontalBar11").getContext('2d');
            var myChart = new Chart(ctx3, {
                type: 'bar',
                data: {
                    labels: ["Jan", "Fev", "Mar", "Abr", "Maio", "Jun", "Jul", "Ago", "Set",
                        "Out", "Nov", "Dez"],
                    datasets: [{
                        label: 'Variação Funcionário',
                        data: [jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });

            const jan1 = parseInt(localStorage.getItem('jan1'));
            const fev1 = parseInt(localStorage.getItem('fev1'));
            const mar1 = parseInt(localStorage.getItem('mar1'));
            const abr1 = parseInt(localStorage.getItem('abr1'));
            const mai1 = parseInt(localStorage.getItem('mai1'));
            const jun1 = parseInt(localStorage.getItem('jun1'));
            const jul1 = parseInt(localStorage.getItem('jul1'));
            const ago1 = parseInt(localStorage.getItem('ago1'));
            const set1 = parseInt(localStorage.getItem('set1'));
            const out1 = parseInt(localStorage.getItem('out1'));
            const nov1 = parseInt(localStorage.getItem('nov1'));
            const dez1 = parseInt(localStorage.getItem('dez1'));

            var ctx3 = document.getElementById("pieChart1").getContext('2d');
            var myChart = new Chart(ctx3, {
                type: 'bar',
                data: {
                    labels: ["Jan", "Fev", "Mar", "Abr", "Maio", "Jun", "Jul", "Ago", "Set",
                        "Out", "Nov", "Dez"],
                    datasets: [{
                        label: 'Desligamento Recem Contratados',
                        data: [jan1, fev1, mar1, abr1, mai1, jun1, jul1, ago1, set1, out1, nov1, dez1],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });

            const jan1t = parseInt(localStorage.getItem('jan1t'));
            const fev1t = parseInt(localStorage.getItem('fev1t'));
            const mar1t = parseInt(localStorage.getItem('mar1t'));
            const abr1t = parseInt(localStorage.getItem('abr1t'));
            const mai1t = parseInt(localStorage.getItem('mai1t'));
            const jun1t = parseInt(localStorage.getItem('jun1t'));
            const jul1t = parseInt(localStorage.getItem('jul1t'));
            const ago1t = parseInt(localStorage.getItem('ago1t'));
            const set1t = parseInt(localStorage.getItem('set1t'));
            const out1t = parseInt(localStorage.getItem('out1t'));
            const nov1t = parseInt(localStorage.getItem('nov1t'));
            const dez1t = parseInt(localStorage.getItem('dez1t'));

            var ctx3 = document.getElementById("myChart2").getContext('2d');
            var myChart = new Chart(ctx3, {
                type: 'bar',
                data: {
                    labels: ["Jan", "Fev", "Mar", "Abr", "Maio", "Jun", "Jul", "Ago", "Set",
                        "Out", "Nov", "Dez"],
                    datasets: [{
                        label: 'Total de Horas de Trabalho',
                        data: [jan1t, fev1t, mar1t, abr1t, mai1t, jun1t, jul1t, ago1t, set1t, out1t, nov1t, dez1t],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });

            const jan1a = parseInt(localStorage.getItem('jan1a'));
            const fev1a = parseInt(localStorage.getItem('fev1a'));
            const mar1a = parseInt(localStorage.getItem('mar1a'));
            const abr1a = parseInt(localStorage.getItem('abr1a'));
            const mai1a = parseInt(localStorage.getItem('mai1a'));
            const jun1a = parseInt(localStorage.getItem('jun1a'));
            const jul1a = parseInt(localStorage.getItem('jul1a'));
            const ago1a = parseInt(localStorage.getItem('ago1a'));
            const set1a = parseInt(localStorage.getItem('set1a'));
            const out1a = parseInt(localStorage.getItem('out1a'));
            const nov1a = parseInt(localStorage.getItem('nov1a'));
            const dez1a = parseInt(localStorage.getItem('dez1a'));

            var ctx3 = document.getElementById("pieChart2").getContext('2d');
            var myChart = new Chart(ctx3, {
                type: 'bar',
                data: {
                    labels: ["Jan", "Fev", "Mar", "Abr", "Maio", "Jun", "Jul", "Ago", "Set",
                        "Out", "Nov", "Dez"],
                    datasets: [{
                        label: 'Total dos Colaboradores',
                        data: [jan1a, fev1a, mar1a, abr1a, mai1a, jun1a, jul1a, ago1a, set1a, out1a, nov1a, dez1a],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });

            const totalNaoJustificadas = parseInt(localStorage.getItem('totalNaoJustificadas'));
            const totalJustificadas = parseInt(localStorage.getItem('totalJustificadas'));

            var ctx3 = document.getElementById("horizontalBar12").getContext('2d');
            var myChart = new Chart(ctx3, {
                type: 'bar',
                data: {
                    labels: ["Planejadas", "N. Planejadas"],
                    datasets: [{
                        label: 'Ausências',
                        data: [totalJustificadas, totalNaoJustificadas],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });

        }

        if (e.target.id == "perfil") {
            nada = '';
            nada = `<div id="centro">
          <div class="animate__animated animate__pulse card3 text-center mr-4">
            <div class="row align-items-center">
                <div class="col-md-6">
                  <h1 class="mb-4 text-black"><span class="text-black">Relatórios</span></h1>
                  <h3 class="mb-4 text-black">Perfil da Empresa</h3>
                </div>
                <div class="col-md-6 d-none d-sm-none d-md-block">
                  <img src="pics/Stocks2.png" alt="tours pics" class="img-fluid">
                </div>
              </div>
        </div>
        </div>
        <div class="text-center card4">
            <div class="row p-3">
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="perfil" >Perfil</a>                                                     
                                    </div>
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="altFunc2">Rotatividade</a>
                                    </div>
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="absent">Absenteismo</a>
                                    </div>
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="recrSelecc2"><h6>Rec. e Selecção</h6></a>
                                    </div>
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="financ">Financeiro</a>
                                    </div>
    
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="treinamentosRelatorio">Treinamentos</a>
                                    </div>
    
                                </div>
                      </div>
                      <div class="text-center card5">
                          <h1 class="h4 text-black mb-4">Nivel Academico</h1>
                      </div>
                      <div class="text-center cardTab cardTab animate__animated animate__pulse">
                      <table class="table m-2" id="tabbb">
                          <thead>
                          <tr class="bg-gradient-primary text-center text-black">
                            <th scope="col">Escolaridade</th>
                            <th>Janeiro</th>
                            <th>Fevereiro</th>
                            <th>Marco</th>
                            <th>Abril</th>
                            <th>Maio</th>
                            <th>Junho</th>
                            <th>Julho</th>
                            <th>Agosto</th>
                            <th>Setembro</th>
                            <th>Outubro</th>
                            <th>Novembro</th>
                            <th>Dezembro</th>
                          </tr>
                        </thead>
                        <tbody id="myTableeee" class="tt text-center text-black">                     
                        </tbody>
                      </table>
                      </div>
    
                      <div class="text-center card5">
                          <h1 class="h4 text-black mb-4">Genêro</h1>
                      </div>
                      <div class="text-center cardTab cardTab animate__animated animate__pulse">
                          <table class="table m-2" id="tabbb2">
                          <thead>
                            <tr class="bg-gradient-primary text-center text-black">
                              <th scope="col">Genêro</th>
                              <th>Janeiro</th>
                              <th>Fevereiro</th>
                              <th>Marco</th>
                              <th>Abril</th>
                              <th>Maio</th>
                              <th>Junho</th>
                              <th>Julho</th>
                              <th>Agosto</th>
                              <th>Setembro</th>
                              <th>Outubro</th>
                              <th>Novembro</th>
                              <th>Dezembro</th>
                            </tr>
                          </thead>
                          <tbody id="myTabGenero" class="tt text-center text-black">                     
                          </tbody>
                      </table>
                      </div>
    
    
                      <div class="text-center card5">
                          <h1 class="h4 text-black mb-4">Faixa Etaria</h1>
                      </div>
                      <div class="text-center cardTab cardTab animate__animated animate__pulse">
                      <table class="table m-2" id="tabbb3">
                      <thead>
                        <tr class="bg-gradient-primary text-center text-black">
                          <th scope="col">Faixa Etaria(anos)</th>
                          <th>Janeiro</th>
                          <th>Fevereiro</th>
                          <th>Marco</th>
                          <th>Abril</th>
                          <th>Maio</th>
                          <th>Junho</th>
                          <th>Julho</th>
                          <th>Agosto</th>
                          <th>Setembro</th>
                          <th>Outubro</th>
                          <th>Novembro</th>
                          <th>Dezembro</th>
                        </tr>
                      </thead>
                      <tbody id="myTabEtaria" class="tt text-center text-black">                     
                      </tbody>
                  </table>
                      </div>
    
                      <div class="text-center card5">
                          <h1 class="h4 text-black mb-4">Tempo de Empresa</h1>
                      </div>
                      <div class="text-center cardTab cardTab animate__animated animate__pulse">
                      <table class="table m-2" id="tabbb4">
                      <thead>
                        <tr class="bg-gradient-primary text-center text-black">
                          <th scope="col">Tempo de Empresa</th>
                          <th>Janeiro</th>
                          <th>Fevereiro</th>
                          <th>Marco</th>
                          <th>Abril</th>
                          <th>Maio</th>
                          <th>Junho</th>
                          <th>Julho</th>
                          <th>Agosto</th>
                          <th>Setembro</th>
                          <th>Outubro</th>
                          <th>Novembro</th>
                          <th>Dezembro</th>
                        </tr>
                      </thead>
                      <tbody id="myTabTEmpresa" class="tt text-center text-black">                     
                      </tbody>
                  </table>
                      </div>
            
            `;
            contrudo.innerHTML = nada;
            const tablerrr = document.getElementById('myTableeee');
            const myTabGenero = document.getElementById('myTabGenero');
            const myTabEtaria = document.getElementById('myTabEtaria');
            const myTabTEmpresa = document.getElementById('myTabTEmpresa');
            colabora = '';
            titulo = '';
            let i = 0;
            let ira = 0;
            const empresa2 = localStorage.getItem('empresa');
            const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2}`;

            nivelEscolaridade.forEach(rec => {

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
                var newCell13 = newRow.insertCell(12);

                newCell1.innerHTML = `<div id=${i + rec}>${rec}</div>`;
                newCell2.innerHTML = `<div id=${"janeiro" + i}>-</div>`;
                newCell3.innerHTML = `<div id=${"fevereiro" + i}>-</div>`;
                newCell4.innerHTML = `<div id=${"marco" + i}>-</div>`;
                newCell5.innerHTML = `<div id=${"abril" + i}>-</div>`;
                newCell6.innerHTML = `<div id=${"maio" + i}>-</div>`;
                newCell7.innerHTML = `<div id=${"junho" + i}>-</div>`;
                newCell8.innerHTML = `<div id=${"julho" + i}>-</div>`;
                newCell9.innerHTML = `<div id=${"agosto" + i}>-</div>`;
                newCell10.innerHTML = `<div id=${"setembro" + i}>-</div>`;
                newCell11.innerHTML = `<div id=${"outubrp" + i}>-</div>`;
                newCell12.innerHTML = `<div id=${"novembro" + i}>-</div>`;
                newCell13.innerHTML = `<div id=${"desembro" + i}>-</div>`;

                i++

            });
            tablerrr.addEventListener('click', (e) => {
                e.preventDefault();
                alert(e.target.id)
            });
            let escolaridadeLista = [];
            let contagem = [];
            const d = new Date('2021-11-07')
            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
            console.log(`${mo}`);
            fetch(url3)
                .then(res => res.json())
                .then(content => {
                    const data1 = content[0]['altFuncio'];
                    for (var j = 0; j < data1.length; j++) {
                        escolaridadeLista.push(content[0]['altFuncio'][j]['escolaridade'])
                    }
                    const countUnique = escolaridadeLista => {
                        const counts = {};
                        for (var i = 0; i < escolaridadeLista.length; i++) {
                            counts[escolaridadeLista[i]] = 1 + (counts[escolaridadeLista[i]] || 0);
                        };
                        return counts;
                    };
                    console.log(countUnique(escolaridadeLista));
                    contagem.push(countUnique(escolaridadeLista))
                    console.log(contagem[0]['Especialização']);
                    localStorage.setItem('especializacao', contagem[0]['Especialização']);
                    localStorage.setItem('ensinoTecnico', contagem[0]['Ensino Técnico']);
                    localStorage.setItem('ensinoFundamental', contagem[0]['Ensino Fundamental']);
                    localStorage.setItem('ensinoMedio', contagem[0]['Ensino Médio']);
                    localStorage.setItem('superiorIncompleto', contagem[0]['Superior Incompleto']);
                    localStorage.setItem('superiorCompleto', contagem[0]['Superior Completo']);
                    localStorage.setItem('posGraduacao', contagem[0]['Pós-Graduação']);
                    localStorage.setItem('mestre', contagem[0]['Mestre']);
                    localStorage.setItem('doutor', contagem[0]['Doutor']);
                    console.log(content[0]['altFuncio']);
                    for (var i = 0; i < escolaridadeLista.length; i++) {
                        if (escolaridadeLista[i] == "Especialização") {
                            const d = new Date(content[0]['altFuncio'][i]['de'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro5"}`)
                                mes.innerHTML = `${contagem[0]['Especialização']}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro5"}`)
                                mes.innerHTML = `${contagem[0]['Especialização']}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco5"}`)
                                mes.innerHTML = `${contagem[0]['Especialização']}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril5"}`)
                                mes.innerHTML = `${contagem[0]['Especialização']}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio5"}`)
                                mes.innerHTML = `${contagem[0]['Especialização']}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho5"}`)
                                mes.innerHTML = `${contagem[0]['Especialização']}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho5"}`)
                                mes.innerHTML = `${contagem[0]['Especialização']}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto5"}`)
                                mes.innerHTML = `${contagem[0]['Especialização']}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro5"}`)
                                mes.innerHTML = `${contagem[0]['Especialização']}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp5"}`)
                                mes.innerHTML = `${contagem[0]['Especialização']}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro5"}`)
                                mes.innerHTML = `${contagem[0]['Especialização']}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro5"}`)
                                mes.innerHTML = `${contagem[0]['Especialização']}`
                            }

                        }
                        if (escolaridadeLista[i] == "Ensino Técnico") {
                            const d = new Date(content[0]['altFuncio'][i]['de'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro2"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Técnico']}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro2"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Técnico']}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco2"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Técnico']}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril2"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Técnico']}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio2"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Técnico']}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho2"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Técnico']}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho2"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Técnico']}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto2"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Técnico']}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro2"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Técnico']}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp2"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Técnico']}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro2"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Técnico']}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro2"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Técnico']}`
                            }

                        }
                        if (escolaridadeLista[i] == "Ensino Fundamental") {
                            const d = new Date(content[0]['altFuncio'][i]['de'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro0"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Fundamental']}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro0"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Fundamental']}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco0"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Fundamental']}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril0"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Fundamental']}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio0"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Fundamental']}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho0"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Fundamental']}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho0"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Fundamental']}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto0"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Fundamental']}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro0"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Fundamental']}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp0"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Fundamental']}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro0"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Fundamental']}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro0"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Fundamental']}`
                            }

                        }
                        if (escolaridadeLista[i] == "Ensino Médio") {
                            const d = new Date(content[0]['altFuncio'][i]['de'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Médio']}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Médio']}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Médio']}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Médio']}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Médio']}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Médio']}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Médio']}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Médio']}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Médio']}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Médio']}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Médio']}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1"}`)
                                mes.innerHTML = `${contagem[0]['Ensino Médio']}`
                            }

                        }
                        if (escolaridadeLista[i] == "Superior Incompleto") {
                            const d = new Date(content[0]['altFuncio'][i]['de'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro3"}`)
                                mes.innerHTML = `${contagem[0]['Superior Incompleto']}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro3"}`)
                                mes.innerHTML = `${contagem[0]['Superior Incompleto']}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco3"}`)
                                mes.innerHTML = `${contagem[0]['Superior Incompleto']}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril3"}`)
                                mes.innerHTML = `${contagem[0]['Superior Incompleto']}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio3"}`)
                                mes.innerHTML = `${contagem[0]['Superior Incompleto']}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho3"}`)
                                mes.innerHTML = `${contagem[0]['Superior Incompleto']}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho3"}`)
                                mes.innerHTML = `${contagem[0]['Superior Incompleto']}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto3"}`)
                                mes.innerHTML = `${contagem[0]['Superior Incompleto']}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro"}`)
                                mes.innerHTML = `${contagem[0]['Superior Incompleto']}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp3"}`)
                                mes.innerHTML = `${contagem[0]['Superior Incompleto']}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro3"}`)
                                mes.innerHTML = `${contagem[0]['Superior Incompleto']}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro3"}`)
                                mes.innerHTML = `${contagem[0]['Superior Incompleto']}`
                            }

                        }
                        if (escolaridadeLista[i] == "Superior Completo") {
                            const d = new Date(content[0]['altFuncio'][i]['de'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro4"}`)
                                mes.innerHTML = `${contagem[0]['Superior Completo']}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro4"}`)
                                mes.innerHTML = `${contagem[0]['Superior Completo']}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco4"}`)
                                mes.innerHTML = `${contagem[0]['Superior Completo']}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril4"}`)
                                mes.innerHTML = `${contagem[0]['Superior Completo']}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio4"}`)
                                mes.innerHTML = `${contagem[0]['Superior Completo']}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho4"}`)
                                mes.innerHTML = `${contagem[0]['Superior Completo']}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho4"}`)
                                mes.innerHTML = `${contagem[0]['Superior Completo']}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto4"}`)
                                mes.innerHTML = `${contagem[0]['Superior Completo']}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro4"}`)
                                mes.innerHTML = `${contagem[0]['Superior Completo']}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp4"}`)
                                mes.innerHTML = `${contagem[0]['Superior Completo']}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro4"}`)
                                mes.innerHTML = `${contagem[0]['Superior Completo']}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro4"}`)
                                mes.innerHTML = `${contagem[0]['Superior Completo']}`
                            }

                        }
                        if (escolaridadeLista[i] == "Pós-Graduação") {
                            const d = new Date(content[0]['altFuncio'][i]['de'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro6"}`)
                                mes.innerHTML = `${contagem[0]['Pós-Graduação']}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro6"}`)
                                mes.innerHTML = `${contagem[0]['Pós-Graduação']}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco6"}`)
                                mes.innerHTML = `${contagem[0]['Pós-Graduação']}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril6"}`)
                                mes.innerHTML = `${contagem[0]['Pós-Graduação']}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio6"}`)
                                mes.innerHTML = `${contagem[0]['Pós-Graduação']}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho6"}`)
                                mes.innerHTML = `${contagem[0]['Pós-Graduação']}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho6"}`)
                                mes.innerHTML = `${contagem[0]['Pós-Graduação']}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto6"}`)
                                mes.innerHTML = `${contagem[0]['Pós-Graduação']}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro6"}`)
                                mes.innerHTML = `${contagem[0]['Pós-Graduação']}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp6"}`)
                                mes.innerHTML = `${contagem[0]['Pós-Graduação']}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro6"}`)
                                mes.innerHTML = `${contagem[0]['Pós-Graduação']}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro6"}`)
                                mes.innerHTML = `${contagem[0]['Pós-Graduação']}`
                            }

                        }
                        if (escolaridadeLista[i] == "Mestre") {
                            const d = new Date(content[0]['altFuncio'][i]['de'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro7"}`)
                                mes.innerHTML = `${contagem[0]['Mestre']}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro7"}`)
                                mes.innerHTML = `${contagem[0]['Mestre']}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco7"}`)
                                mes.innerHTML = `${contagem[0]['Mestre']}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril7"}`)
                                mes.innerHTML = `${contagem[0]['Mestre']}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio7"}`)
                                mes.innerHTML = `${contagem[0]['Mestre']}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho7"}`)
                                mes.innerHTML = `${contagem[0]['Mestre']}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho7"}`)
                                mes.innerHTML = `${contagem[0]['Mestre']}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto7"}`)
                                mes.innerHTML = `${contagem[0]['Mestre']}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro7"}`)
                                mes.innerHTML = `${contagem[0]['Mestre']}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp7"}`)
                                mes.innerHTML = `${contagem[0]['Mestre']}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro7"}`)
                                mes.innerHTML = `${contagem[0]['Mestre']}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro7"}`)
                                mes.innerHTML = `${contagem[0]['Mestre']}`
                            }

                        }
                        if (escolaridadeLista[i] == "Doutor") {
                            const d = new Date(content[0]['altFuncio'][i]['de'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro8"}`)
                                mes.innerHTML = `${contagem[0]['Doutor']}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro8"}`)
                                mes.innerHTML = `${contagem[0]['Doutor']}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco8"}`)
                                mes.innerHTML = `${contagem[0]['Doutor']}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril8"}`)
                                mes.innerHTML = `${contagem[0]['Doutor']}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio8"}`)
                                mes.innerHTML = `${contagem[0]['Doutor']}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho8"}`)
                                mes.innerHTML = `${contagem[0]['Doutor']}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho8"}`)
                                mes.innerHTML = `${contagem[0]['Doutor']}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto8"}`)
                                mes.innerHTML = `${contagem[0]['Doutor']}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro8"}`)
                                mes.innerHTML = `${contagem[0]['Doutor']}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp8"}`)
                                mes.innerHTML = `${contagem[0]['Doutor']}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro8"}`)
                                mes.innerHTML = `${contagem[0]['Doutor']}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro8"}`)
                                mes.innerHTML = `${contagem[0]['Doutor']}`
                            }

                        }
                    }
                });

            let g = 0;
            generoT.forEach(rec => {

                var newRow = myTabGenero.insertRow();
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

                newCell1.innerHTML = `<div id=${g + rec}>${rec}</div>`;
                newCell2.innerHTML = `<div id=${"janeiro1" + g}>-</div>`;
                newCell3.innerHTML = `<div id=${"fevereiro1" + g}>-</div>`;
                newCell4.innerHTML = `<div id=${"marco1" + g}>-</div>`;
                newCell5.innerHTML = `<div id=${"abril1" + g}>-</div>`;
                newCell6.innerHTML = `<div id=${"maio1" + g}>-</div>`;
                newCell7.innerHTML = `<div id=${"junho1" + g}>-</div>`;
                newCell8.innerHTML = `<div id=${"julho1" + g}>-</div>`;
                newCell9.innerHTML = `<div id=${"agosto1" + g}>-</div>`;
                newCell10.innerHTML = `<div id=${"setembro1" + g}>-</div>`;
                newCell11.innerHTML = `<div id=${"outubrp1" + g}>-</div>`;
                newCell12.innerHTML = `<div id=${"novembro1" + g}>-</div>`;
                newCell13.innerHTML = `<div id=${"desembro1" + g}>-</div>`;

                g++
            });

            let generoLista = [];
            let contagem2 = [];
            myTabGenero.addEventListener('click', (e) => {
                e.preventDefault();
                alert(e.target.id)
            });
            fetch(url3)
                .then(res => res.json())
                .then(content => {
                    const data1 = content[0]['funcionarios'];
                    for (var j = 0; j < data1.length; j++) {
                        generoLista.push(content[0]['funcionarios'][j]['genero'])
                    }
                    const countUnique = generoLista => {
                        const counts = {};
                        for (var i = 0; i < generoLista.length; i++) {
                            counts[generoLista[i]] = 1 + (counts[generoLista[i]] || 0);
                        };
                        return counts;
                    };
                    console.log(countUnique(generoLista));
                    contagem2.push(countUnique(generoLista))
                    console.log(contagem2[0]['Femenino']);
                    console.log(content[0]['funcionarios'][0]['genero']);
                    localStorage.setItem('femenino', contagem2[0]['Femenino']);
                    localStorage.setItem('masculino', contagem2[0]['Masculino']);
                    for (var i = 0; i < generoLista.length; i++) {
                        if (generoLista[i] == "Femenino") {
                            const d = new Date(content[0]['altFuncio'][i]['de'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro10"}`)
                                mes.innerHTML = `${contagem2[0]['Femenino']}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro10"}`)
                                mes.innerHTML = `${contagem2[0]['Femenino']}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco10"}`)
                                mes.innerHTML = `${contagem2[0]['Femenino']}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril10"}`)
                                mes.innerHTML = `${contagem2[0]['Femenino']}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio10"}`)
                                mes.innerHTML = `${contagem2[0]['Femenino']}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho10"}`)
                                mes.innerHTML = `${contagem2[0]['Femenino']}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho10"}`)
                                mes.innerHTML = `${contagem2[0]['Femenino']}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto10"}`)
                                mes.innerHTML = `${contagem2[0]['Femenino']}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro10"}`)
                                mes.innerHTML = `${contagem2[0]['Femenino']}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp10"}`)
                                mes.innerHTML = `${contagem2[0]['Femenino']}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro15"}`)
                                mes.innerHTML = `${contagem2[0]['Femenino']}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro10"}`)
                                mes.innerHTML = `${contagem2[0]['Femenino']}`
                            }

                        }
                        if (generoLista[i] == "Masculino") {
                            const d = new Date(content[0]['altFuncio'][i]['de'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro11"}`)
                                mes.innerHTML = `${contagem2[0]['Masculino']}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro11"}`)
                                mes.innerHTML = `${contagem2[0]['Masculino']}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco11"}`)
                                mes.innerHTML = `${contagem2[0]['Masculino']}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril11"}`)
                                mes.innerHTML = `${contagem2[0]['Masculino']}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio11"}`)
                                mes.innerHTML = `${contagem2[0]['Masculino']}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho11"}`)
                                mes.innerHTML = `${contagem2[0]['Masculino']}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho11"}`)
                                mes.innerHTML = `${contagem2[0]['Masculino']}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto11"}`)
                                mes.innerHTML = `${contagem2[0]['Masculino']}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro11"}`)
                                mes.innerHTML = `${contagem2[0]['Masculino']}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp11"}`)
                                mes.innerHTML = `${contagem2[0]['Masculino']}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro11"}`)
                                mes.innerHTML = `${contagem2[0]['Masculino']}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro11"}`)
                                mes.innerHTML = `${contagem2[0]['Masculino']}`
                            }

                        }
                    }
                });

            let f = 0;
            faixaEtaria.forEach(rec => {

                var newRow = myTabEtaria.insertRow();
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

                newCell1.innerHTML = `<div id=${f + rec}>${rec}</div>`;
                newCell2.innerHTML = `<div id=${"janeiro1a" + f}>-</div>`;
                newCell3.innerHTML = `<div id=${"fevereiro1a" + f}>-</div>`;
                newCell4.innerHTML = `<div id=${"marco1a" + f}>-</div>`;
                newCell5.innerHTML = `<div id=${"abril1a" + f}>-</div>`;
                newCell6.innerHTML = `<div id=${"maio1a" + f}>-</div>`;
                newCell7.innerHTML = `<div id=${"junho1a" + f}>-</div>`;
                newCell8.innerHTML = `<div id=${"julho1a" + f}>-</div>`;
                newCell9.innerHTML = `<div id=${"agosto1a" + f}>-</div>`;
                newCell10.innerHTML = `<div id=${"setembro1a" + f}>-</div>`;
                newCell11.innerHTML = `<div id=${"outubrp1a" + f}>-</div>`;
                newCell12.innerHTML = `<div id=${"novembro1a" + f}>-</div>`;
                newCell13.innerHTML = `<div id=${"desembro1a" + f}>-</div>`;

                f++
            });


            myTabEtaria.addEventListener('click', (e) => {
                e.preventDefault();
                alert(e.target.id)
            });
            fetch(url3)
                .then(res => res.json())
                .then(content => {
                    const data1 = content[0]['funcionarios'];
                    let ate18 = 0;
                    let ate22 = 0;
                    let ate26 = 0;
                    let ate30 = 0;
                    let ate34 = 0;
                    let ate38 = 0;
                    let ate42 = 0;
                    let ate46 = 0;
                    let ate50 = 0;
                    let ate54 = 0;
                    let ate58 = 0;
                    let ate62 = 0;
                    let ate66 = 0;
                    let ate70 = 0;
                    let mais70 = 0;
                    var d = new Date();
                    var n = d.getFullYear();
                    for (var i = 0; i < data1.length; i++) {
                        var start = new Date(`${content[0]['funcionarios'][i]['dataNascimento']}`);
                        let faixa = n - start.getFullYear();
                        console.log(faixa)
                        if ((14 < faixa) && (faixa <= 18)) {
                            ate18++
                        }
                        if ((18 < faixa) && (faixa <= 22)) {
                            ate22++
                        }
                        if ((22 < faixa) && (faixa <= 26)) {
                            ate26++
                        }
                        if ((26 < faixa) && (faixa <= 30)) {
                            ate30++
                        }
                        if ((30 < faixa) && (faixa <= 34)) {
                            ate34++
                        }
                        if ((34 < faixa) && (faixa <= 38)) {
                            ate38++
                        }
                        if ((38 < faixa) && (faixa <= 42)) {
                            ate42++
                        }
                        if ((42 < faixa) && (faixa <= 46)) {
                            ate46++
                        }
                        if ((46 < faixa) && (faixa <= 50)) {
                            ate50++
                        }
                        if ((50 < faixa) && (faixa <= 54)) {
                            ate54++
                        }
                        if ((54 < faixa) && (faixa <= 58)) {
                            ate58++
                        }
                        if ((58 < faixa) && (faixa <= 62)) {
                            ate62++
                        }
                        if ((62 < faixa) && (faixa <= 66)) {
                            ate66++
                        }
                        if ((66 < faixa) && (faixa <= 70)) {
                            ate70++
                        }
                        if (70 < faixa) {
                            mais70++
                        }

                    };

                    for (var i = 0; i < content[0]['funcionarios'].length; i++) {
                        var start = new Date(`${content[0]['funcionarios'][i]['dataNascimento']}`);
                        let faixa1 = n - start.getFullYear();
                        if ((14 < faixa1) && (faixa1 <= 18)) {
                            const d = new Date(content[0]['funcionarios'][i]['dataNascimento'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1a0"}`)
                                mes.innerHTML = `${ate18}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1a0"}`)
                                mes.innerHTML = `${ate18}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1a0"}`)
                                mes.innerHTML = `${ate18}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1a0"}`)
                                mes.innerHTML = `${ate18}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1a0"}`)
                                mes.innerHTML = `${ate18}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1a0"}`)
                                mes.innerHTML = `${ate18}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1a0"}`)
                                mes.innerHTML = `${ate18}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1a0"}`)
                                mes.innerHTML = `${ate18}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1a0"}`)
                                mes.innerHTML = `${ate18}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1a0"}`)
                                mes.innerHTML = `${ate18}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1a0"}`)
                                mes.innerHTML = `${ate18}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1a0"}`)
                                mes.innerHTML = `${ate18}`
                            }

                        }
                        if ((18 < faixa1) && (faixa1 <= 22)) {
                            const d = new Date(content[0]['funcionarios'][i]['dataNascimento'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1a1"}`)
                                mes.innerHTML = `${ate22}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1a1"}`)
                                mes.innerHTML = `${ate22}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1a1"}`)
                                mes.innerHTML = `${ate22}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1a1"}`)
                                mes.innerHTML = `${ate22}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1a1"}`)
                                mes.innerHTML = `${ate22}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1a1"}`)
                                mes.innerHTML = `${ate22}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1a1"}`)
                                mes.innerHTML = `${ate22}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1a1"}`)
                                mes.innerHTML = `${ate22}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1a1"}`)
                                mes.innerHTML = `${ate22}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1a1"}`)
                                mes.innerHTML = `${ate22}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1a1"}`)
                                mes.innerHTML = `${ate22}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1a1"}`)
                                mes.innerHTML = `${ate22}`
                            }

                        }
                        if ((22 < faixa1) && (faixa1 <= 26)) {
                            const d = new Date(content[0]['funcionarios'][i]['dataNascimento'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1a2"}`)
                                mes.innerHTML = `${ate26}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1a2"}`)
                                mes.innerHTML = `${ate26}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1a2"}`)
                                mes.innerHTML = `${ate26}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1a2"}`)
                                mes.innerHTML = `${ate26}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1a2"}`)
                                mes.innerHTML = `${ate26}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1a2"}`)
                                mes.innerHTML = `${ate26}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1a2"}`)
                                mes.innerHTML = `${ate26}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1a2"}`)
                                mes.innerHTML = `${ate26}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1a2"}`)
                                mes.innerHTML = `${ate26}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1a2"}`)
                                mes.innerHTML = `${ate26}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1a2"}`)
                                mes.innerHTML = `${ate26}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1a2"}`)
                                mes.innerHTML = `${ate26}`
                            }

                        }
                        if ((26 < faixa1) && (faixa1 <= 30)) {
                            const d = new Date(content[0]['funcionarios'][i]['dataNascimento'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1a3"}`)
                                mes.innerHTML = `${ate30}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1a3"}`)
                                mes.innerHTML = `${ate30}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1a3"}`)
                                mes.innerHTML = `${ate30}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1a3"}`)
                                mes.innerHTML = `${ate30}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1a3"}`)
                                mes.innerHTML = `${ate30}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1a3"}`)
                                mes.innerHTML = `${ate30}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1a3"}`)
                                mes.innerHTML = `${ate30}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1a3"}`)
                                mes.innerHTML = `${ate30}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1a3"}`)
                                mes.innerHTML = `${ate30}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1a3"}`)
                                mes.innerHTML = `${ate30}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1a3"}`)
                                mes.innerHTML = `${ate30}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1a3"}`)
                                mes.innerHTML = `${ate30}`
                            }

                        }
                        if ((30 < faixa1) && (faixa1 <= 34)) {
                            const d = new Date(content[0]['funcionarios'][i]['dataNascimento'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1a4"}`)
                                mes.innerHTML = `${ate34}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1a4"}`)
                                mes.innerHTML = `${ate34}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1a4"}`)
                                mes.innerHTML = `${ate34}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1a4"}`)
                                mes.innerHTML = `${ate34}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1a4"}`)
                                mes.innerHTML = `${ate34}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1a4"}`)
                                mes.innerHTML = `${ate34}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1a4"}`)
                                mes.innerHTML = `${ate34}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1a4"}`)
                                mes.innerHTML = `${ate34}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1a4"}`)
                                mes.innerHTML = `${ate34}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1a4"}`)
                                mes.innerHTML = `${ate34}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1a4"}`)
                                mes.innerHTML = `${ate34}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1a4"}`)
                                mes.innerHTML = `${ate34}`
                            }
                        }
                        if ((34 < faixa1) && (faixa1 <= 38)) {
                            const d = new Date(content[0]['funcionarios'][i]['dataNascimento'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1a5"}`)
                                mes.innerHTML = `${ate38}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1a5"}`)
                                mes.innerHTML = `${ate38}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1a5"}`)
                                mes.innerHTML = `${ate38}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1a5"}`)
                                mes.innerHTML = `${ate38}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1a5"}`)
                                mes.innerHTML = `${ate38}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1a5"}`)
                                mes.innerHTML = `${ate38}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1a5"}`)
                                mes.innerHTML = `${ate38}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1a5"}`)
                                mes.innerHTML = `${ate38}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1a5"}`)
                                mes.innerHTML = `${ate38}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1a5"}`)
                                mes.innerHTML = `${ate38}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1a5"}`)
                                mes.innerHTML = `${ate38}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1a5"}`)
                                mes.innerHTML = `${ate38}`
                            }
                        }
                        if ((38 < faixa1) && (faixa1 <= 42)) {
                            const d = new Date(content[0]['funcionarios'][i]['dataNascimento'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1a6"}`)
                                mes.innerHTML = `${ate42}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1a6"}`)
                                mes.innerHTML = `${ate42}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1a6"}`)
                                mes.innerHTML = `${ate42}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1a6"}`)
                                mes.innerHTML = `${ate42}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1a6"}`)
                                mes.innerHTML = `${ate42}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1a6"}`)
                                mes.innerHTML = `${ate42}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1a6"}`)
                                mes.innerHTML = `${ate42}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1a6"}`)
                                mes.innerHTML = `${ate42}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1a6"}`)
                                mes.innerHTML = `${ate42}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1a6"}`)
                                mes.innerHTML = `${ate42}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1a6"}`)
                                mes.innerHTML = `${ate42}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1a6"}`)
                                mes.innerHTML = `${ate42}`
                            }
                        }
                        if ((42 < faixa1) && (faixa1 <= 46)) {
                            const d = new Date(content[0]['funcionarios'][i]['dataNascimento'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1a7"}`)
                                mes.innerHTML = `${ate46}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1a7"}`)
                                mes.innerHTML = `${ate46}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1a7"}`)
                                mes.innerHTML = `${ate46}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1a7"}`)
                                mes.innerHTML = `${ate46}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1a7"}`)
                                mes.innerHTML = `${ate46}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1a7"}`)
                                mes.innerHTML = `${ate46}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1a7"}`)
                                mes.innerHTML = `${ate46}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1a7"}`)
                                mes.innerHTML = `${ate46}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1a7"}`)
                                mes.innerHTML = `${ate46}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1a7"}`)
                                mes.innerHTML = `${ate46}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1a7"}`)
                                mes.innerHTML = `${ate46}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1a7"}`)
                                mes.innerHTML = `${ate46}`
                            }
                        }
                        if ((46 < faixa1) && (faixa1 <= 50)) {
                            const d = new Date(content[0]['funcionarios'][i]['dataNascimento'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1a8"}`)
                                mes.innerHTML = `${ate50}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1a8"}`)
                                mes.innerHTML = `${ate50}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1a8"}`)
                                mes.innerHTML = `${ate50}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1a8"}`)
                                mes.innerHTML = `${ate50}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1a8"}`)
                                mes.innerHTML = `${ate50}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1a8"}`)
                                mes.innerHTML = `${ate50}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1a8"}`)
                                mes.innerHTML = `${ate50}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1a8"}`)
                                mes.innerHTML = `${ate50}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1a8"}`)
                                mes.innerHTML = `${ate50}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1a8"}`)
                                mes.innerHTML = `${ate50}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1a8"}`)
                                mes.innerHTML = `${ate50}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1a8"}`)
                                mes.innerHTML = `${ate50}`
                            }
                        }
                        if ((50 < faixa1) && (faixa1 <= 54)) {
                            const d = new Date(content[0]['funcionarios'][i]['dataNascimento'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1a9"}`)
                                mes.innerHTML = `${ate54}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1a9"}`)
                                mes.innerHTML = `${ate54}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1a9"}`)
                                mes.innerHTML = `${ate54}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1a9"}`)
                                mes.innerHTML = `${ate54}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1a9"}`)
                                mes.innerHTML = `${ate54}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1a9"}`)
                                mes.innerHTML = `${ate54}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1a9"}`)
                                mes.innerHTML = `${ate54}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1a9"}`)
                                mes.innerHTML = `${ate54}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1a9"}`)
                                mes.innerHTML = `${ate54}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1a9"}`)
                                mes.innerHTML = `${ate54}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1a9"}`)
                                mes.innerHTML = `${ate54}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1a9"}`)
                                mes.innerHTML = `${ate54}`
                            }
                        }
                        if ((54 < faixa1) && (faixa1 <= 58)) {
                            const d = new Date(content[0]['funcionarios'][i]['dataNascimento'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1a10"}`)
                                mes.innerHTML = `${ate58}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1a10"}`)
                                mes.innerHTML = `${ate58}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1a10"}`)
                                mes.innerHTML = `${ate58}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1a10"}`)
                                mes.innerHTML = `${ate58}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1a10"}`)
                                mes.innerHTML = `${ate58}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1a10"}`)
                                mes.innerHTML = `${ate58}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1a10"}`)
                                mes.innerHTML = `${ate58}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1a10"}`)
                                mes.innerHTML = `${ate58}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1a10"}`)
                                mes.innerHTML = `${ate58}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1a10"}`)
                                mes.innerHTML = `${ate58}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1a10"}`)
                                mes.innerHTML = `${ate58}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1a10"}`)
                                mes.innerHTML = `${ate58}`
                            }
                        }
                        if ((58 < faixa1) && (faixa1 <= 62)) {
                            const d = new Date(content[0]['funcionarios'][i]['dataNascimento'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1a11"}`)
                                mes.innerHTML = `${ate62}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1a11"}`)
                                mes.innerHTML = `${ate62}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1a11"}`)
                                mes.innerHTML = `${ate62}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1a11"}`)
                                mes.innerHTML = `${ate62}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1a11"}`)
                                mes.innerHTML = `${ate62}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1a11"}`)
                                mes.innerHTML = `${ate62}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1a11"}`)
                                mes.innerHTML = `${ate62}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1a11"}`)
                                mes.innerHTML = `${ate62}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1a11"}`)
                                mes.innerHTML = `${ate62}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1a11"}`)
                                mes.innerHTML = `${ate62}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1a11"}`)
                                mes.innerHTML = `${ate62}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1a11"}`)
                                mes.innerHTML = `${ate62}`
                            }
                        }
                        if ((62 < faixa1) && (faixa1 <= 66)) {
                            const d = new Date(content[0]['funcionarios'][i]['dataNascimento'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1a12"}`)
                                mes.innerHTML = `${ate66}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1a12"}`)
                                mes.innerHTML = `${ate66}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1a12"}`)
                                mes.innerHTML = `${ate66}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1a12"}`)
                                mes.innerHTML = `${ate66}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1a12"}`)
                                mes.innerHTML = `${ate66}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1a12"}`)
                                mes.innerHTML = `${ate66}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1a12"}`)
                                mes.innerHTML = `${ate66}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1a12"}`)
                                mes.innerHTML = `${ate66}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1a12"}`)
                                mes.innerHTML = `${ate66}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1a12"}`)
                                mes.innerHTML = `${ate66}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1a12"}`)
                                mes.innerHTML = `${ate66}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1a12"}`)
                                mes.innerHTML = `${ate66}`
                            }
                        }
                        if ((66 < faixa1) && (faixa1 <= 70)) {
                            const d = new Date(content[0]['funcionarios'][i]['dataNascimento'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1a13"}`)
                                mes.innerHTML = `${ate70}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1a13"}`)
                                mes.innerHTML = `${ate70}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1a13"}`)
                                mes.innerHTML = `${ate70}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1a13"}`)
                                mes.innerHTML = `${ate70}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1a13"}`)
                                mes.innerHTML = `${ate70}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1a13"}`)
                                mes.innerHTML = `${ate70}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1a13"}`)
                                mes.innerHTML = `${ate70}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1a13"}`)
                                mes.innerHTML = `${ate70}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1a13"}`)
                                mes.innerHTML = `${ate70}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1a13"}`)
                                mes.innerHTML = `${ate70}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1a13"}`)
                                mes.innerHTML = `${ate70}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1a13"}`)
                                mes.innerHTML = `${ate70}`
                            }
                        }
                        if (70 < faixa1) {
                            const d = new Date(content[0]['funcionarios'][i]['dataNascimento'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1a14"}`)
                                mes.innerHTML = `${mais70}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1a14"}`)
                                mes.innerHTML = `${mais70}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1a14"}`)
                                mes.innerHTML = `${mais70}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1a14"}`)
                                mes.innerHTML = `${mais70}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1a14"}`)
                                mes.innerHTML = `${mais70}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1a14"}`)
                                mes.innerHTML = `${mais70}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1a14"}`)
                                mes.innerHTML = `${mais70}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1a14"}`)
                                mes.innerHTML = `${mais70}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1a14"}`)
                                mes.innerHTML = `${mais70}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1a14"}`)
                                mes.innerHTML = `${mais70}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1a14"}`)
                                mes.innerHTML = `${mais70}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1a14"}`)
                                mes.innerHTML = `${mais70}`
                            }
                        }
                    }
                    localStorage.setItem('ate18', ate18);
                    localStorage.setItem('ate22', ate22);
                    localStorage.setItem('ate26', ate26);
                    localStorage.setItem('ate30', ate30);
                    localStorage.setItem('ate34', ate34);
                    localStorage.setItem('ate38', ate38);
                    localStorage.setItem('ate42', ate42);
                    localStorage.setItem('ate46', ate46);
                    localStorage.setItem('ate50', ate50);
                    localStorage.setItem('ate54', ate54);
                    localStorage.setItem('ate58', ate58);
                    localStorage.setItem('ate62', ate62);
                    localStorage.setItem('ate66', ate66);
                    localStorage.setItem('ate70', ate70);
                    localStorage.setItem('mais70', mais70);
                });

            let t = 0;
            tempoEmpressass.forEach(rec => {

                var newRow = myTabTEmpresa.insertRow();
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

                newCell1.innerHTML = `<div id=${f + rec}>${rec}</div>`;
                newCell2.innerHTML = `<div id=${"janeiro1ab" + t}>-</div>`;
                newCell3.innerHTML = `<div id=${"fevereiro1ab" + t}>-</div>`;
                newCell4.innerHTML = `<div id=${"marco1ab" + t}>-</div>`;
                newCell5.innerHTML = `<div id=${"abril1ab" + t}>-</div>`;
                newCell6.innerHTML = `<div id=${"maio1ab" + t}>-</div>`;
                newCell7.innerHTML = `<div id=${"junho1ab" + t}>-</div>`;
                newCell8.innerHTML = `<div id=${"julho1ab" + t}>-</div>`;
                newCell9.innerHTML = `<div id=${"agosto1ab" + t}>-</div>`;
                newCell10.innerHTML = `<div id=${"setembro1ab" + t}>-</div>`;
                newCell11.innerHTML = `<div id=${"outubrp1ab" + t}>-</div>`;
                newCell12.innerHTML = `<div id=${"novembro1ab" + t}>-</div>`;
                newCell13.innerHTML = `<div id=${"desembro1ab" + t}>-</div>`;

                t++
            })
            myTabTEmpresa.addEventListener('click', (e) => {
                e.preventDefault();
                alert(e.target.id)
            });
            fetch(url3)
                .then(res => res.json())
                .then(content => {
                    const data1 = content[0]['altFuncio'];
                    console.log("Lucas Coutinho Marcelino" + data1.length)
                    let ate18 = 0;
                    let ate22 = 0;
                    let ate26 = 0;
                    let ate30 = 0;
                    let ate34 = 0;
                    let ate38 = 0;
                    let ate15 = 0;
                    let ate20 = 0;
                    let mais20 = 0;
                    var d = new Date();
                    var n = d.getFullYear();
                    for (var i = 0; i < data1.length; i++) {
                        var start = new Date(`${content[0]['altFuncio'][i]['de']}`);
                        let faixa = n - start.getFullYear();
                        console.log(faixa)
                        if (1 >= faixa) {
                            ate18++
                        }
                        if ((1 < faixa) && (faixa <= 2)) {
                            ate22++
                        }
                        if ((2 < faixa) && (faixa <= 3)) {
                            ate26++
                        }
                        if ((3 < faixa) && (faixa <= 5)) {
                            ate30++
                        }
                        if ((5 < faixa) && (faixa <= 7)) {
                            ate34++
                        }
                        if ((7 < faixa) && (faixa <= 10)) {
                            ate38++
                        }
                        if ((10 < faixa) && (faixa <= 15)) {
                            ate15++
                        }
                        if ((15 < faixa) && (faixa <= 20)) {
                            ate20++
                        }
                        if (20 < faixa) {
                            mais20++
                        }

                    };

                    for (var i = 0; i < content[0]['altFuncio'].length; i++) {
                        var start = new Date(`${content[0]['altFuncio'][i]['de']}`);
                        let faixa1 = n - start.getFullYear();
                        if (1 > faixa1) {
                            const d = new Date(content[0]['altFuncio'][i]['de'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1ab0"}`)
                                mes.innerHTML = `${ate18}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1ab0"}`)
                                mes.innerHTML = `${ate18}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1ab0"}`)
                                mes.innerHTML = `${ate18}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1ab0"}`)
                                mes.innerHTML = `${ate18}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1ab0"}`)
                                mes.innerHTML = `${ate18}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1ab0"}`)
                                mes.innerHTML = `${ate18}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1ab0"}`)
                                mes.innerHTML = `${ate18}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1ab0"}`)
                                mes.innerHTML = `${ate18}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1ab0"}`)
                                mes.innerHTML = `${ate18}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1ab0"}`)
                                mes.innerHTML = `${ate18}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1ab0"}`)
                                mes.innerHTML = `${ate18}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1ab0"}`)
                                mes.innerHTML = `${ate18}`
                            }

                        }
                        if ((1 < faixa1) && (faixa1 <= 2)) {
                            const d = new Date(content[0]['altFuncio'][i]['de'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1ab1"}`)
                                mes.innerHTML = `${ate22}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1ab1"}`)
                                mes.innerHTML = `${ate22}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1ab1"}`)
                                mes.innerHTML = `${ate22}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1ab1"}`)
                                mes.innerHTML = `${ate22}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1ab1"}`)
                                mes.innerHTML = `${ate22}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1ab1"}`)
                                mes.innerHTML = `${ate22}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1ab1"}`)
                                mes.innerHTML = `${ate22}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1ab1"}`)
                                mes.innerHTML = `${ate22}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1ab1"}`)
                                mes.innerHTML = `${ate22}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1ab1"}`)
                                mes.innerHTML = `${ate22}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1ab1"}`)
                                mes.innerHTML = `${ate22}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1ab1"}`)
                                mes.innerHTML = `${ate22}`
                            }

                        }
                        if ((2 < faixa1) && (faixa1 <= 3)) {
                            const d = new Date(content[0]['altFuncio'][i]['de'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1ab2"}`)
                                mes.innerHTML = `${ate26}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1ab2"}`)
                                mes.innerHTML = `${ate26}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1ab2"}`)
                                mes.innerHTML = `${ate26}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1ab2"}`)
                                mes.innerHTML = `${ate26}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1ab2"}`)
                                mes.innerHTML = `${ate26}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1ab2"}`)
                                mes.innerHTML = `${ate26}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1ab2"}`)
                                mes.innerHTML = `${ate26}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1ab2"}`)
                                mes.innerHTML = `${ate26}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1ab2"}`)
                                mes.innerHTML = `${ate26}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1ab2"}`)
                                mes.innerHTML = `${ate26}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1ab2"}`)
                                mes.innerHTML = `${ate26}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1ab2"}`)
                                mes.innerHTML = `${ate26}`
                            }

                        }
                        if ((3 < faixa1) && (faixa1 <= 5)) {
                            const d = new Date(content[0]['altFuncio'][i]['de'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1ab3"}`)
                                mes.innerHTML = `${ate30}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1ab3"}`)
                                mes.innerHTML = `${ate30}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1ab3"}`)
                                mes.innerHTML = `${ate30}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1ab3"}`)
                                mes.innerHTML = `${ate30}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1ab3"}`)
                                mes.innerHTML = `${ate30}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1ab3"}`)
                                mes.innerHTML = `${ate30}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1ab3"}`)
                                mes.innerHTML = `${ate30}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1ab3"}`)
                                mes.innerHTML = `${ate30}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1ab3"}`)
                                mes.innerHTML = `${ate30}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1ab3"}`)
                                mes.innerHTML = `${ate30}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1ab3"}`)
                                mes.innerHTML = `${ate30}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1ab3"}`)
                                mes.innerHTML = `${ate30}`
                            }

                        }
                        if ((5 < faixa1) && (faixa1 <= 7)) {
                            const d = new Date(content[0]['altFuncio'][i]['de'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1ab4"}`)
                                mes.innerHTML = `${ate34}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1ab4"}`)
                                mes.innerHTML = `${ate34}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1ab4"}`)
                                mes.innerHTML = `${ate34}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1ab4"}`)
                                mes.innerHTML = `${ate34}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1ab4"}`)
                                mes.innerHTML = `${ate34}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1ab4"}`)
                                mes.innerHTML = `${ate34}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1ab4"}`)
                                mes.innerHTML = `${ate34}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1ab4"}`)
                                mes.innerHTML = `${ate34}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1ab4"}`)
                                mes.innerHTML = `${ate34}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1ab4"}`)
                                mes.innerHTML = `${ate34}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1ab4"}`)
                                mes.innerHTML = `${ate34}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1ab4"}`)
                                mes.innerHTML = `${ate34}`
                            }
                        }
                        if ((7 < faixa1) && (faixa1 <= 10)) {
                            const d = new Date(content[0]['altFuncio'][i]['de'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1ab5"}`)
                                mes.innerHTML = `${ate38}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1ab5"}`)
                                mes.innerHTML = `${ate38}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1ab5"}`)
                                mes.innerHTML = `${ate38}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1ab5"}`)
                                mes.innerHTML = `${ate38}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1ab5"}`)
                                mes.innerHTML = `${ate38}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1ab5"}`)
                                mes.innerHTML = `${ate38}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1ab5"}`)
                                mes.innerHTML = `${ate38}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1ab5"}`)
                                mes.innerHTML = `${ate38}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1ab5"}`)
                                mes.innerHTML = `${ate38}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1ab5"}`)
                                mes.innerHTML = `${ate38}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1ab5"}`)
                                mes.innerHTML = `${ate38}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1ab5"}`)
                                mes.innerHTML = `${ate38}`
                            }
                        }
                        if ((10 < faixa1) && (faixa1 <= 15)) {
                            const d = new Date(content[0]['altFuncio'][i]['de'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1ab6"}`)
                                mes.innerHTML = `${ate15}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1ab6"}`)
                                mes.innerHTML = `${ate15}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1ab6"}`)
                                mes.innerHTML = `${ate15}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1ab6"}`)
                                mes.innerHTML = `${ate15}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1ab6"}`)
                                mes.innerHTML = `${ate15}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1ab6"}`)
                                mes.innerHTML = `${ate15}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1ab6"}`)
                                mes.innerHTML = `${ate15}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1ab6"}`)
                                mes.innerHTML = `${ate15}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1ab6"}`)
                                mes.innerHTML = `${ate15}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1ab6"}`)
                                mes.innerHTML = `${ate15}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1ab6"}`)
                                mes.innerHTML = `${ate15}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1ab6"}`)
                                mes.innerHTML = `${ate15}`
                            }
                        }
                        if ((15 < faixa1) && (faixa1 <= 20)) {
                            const d = new Date(content[0]['altFuncio'][i]['de'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1ab7"}`)
                                mes.innerHTML = `${ate20}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1ab7"}`)
                                mes.innerHTML = `${ate20}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1ab7"}`)
                                mes.innerHTML = `${ate20}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1ab7"}`)
                                mes.innerHTML = `${ate20}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1ab7"}`)
                                mes.innerHTML = `${ate20}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1ab7"}`)
                                mes.innerHTML = `${ate20}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1ab7"}`)
                                mes.innerHTML = `${ate20}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1ab7"}`)
                                mes.innerHTML = `${ate20}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1ab7"}`)
                                mes.innerHTML = `${ate20}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1ab7"}`)
                                mes.innerHTML = `${ate20}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1ab7"}`)
                                mes.innerHTML = `${ate20}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1ab7"}`)
                                mes.innerHTML = `${ate20}`
                            }
                        }
                        if (20 < faixa1) {
                            const d = new Date(content[0]['altFuncio'][i]['de'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeiro1ab8"}`)
                                mes.innerHTML = `${mais20}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereiro1ab8"}`)
                                mes.innerHTML = `${mais20}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marco1ab8"}`)
                                mes.innerHTML = `${mais20}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abril1ab8"}`)
                                mes.innerHTML = `${mais20}`
                            }
                            if (mo == "May") {
                                let mes = document.getElementById(`${"maio1ab8"}`)
                                mes.innerHTML = `${mais20}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junho1ab8"}`)
                                mes.innerHTML = `${mais20}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julho1ab8"}`)
                                mes.innerHTML = `${mais20}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agosto1ab8"}`)
                                mes.innerHTML = `${mais20}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembro1ab8"}`)
                                mes.innerHTML = `${mais20}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrp1ab8"}`)
                                mes.innerHTML = `${mais20}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembro1ab8"}`)
                                mes.innerHTML = `${mais20}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembro1ab8"}`)
                                mes.innerHTML = `${mais20}`
                            }
                        }
                    }
                    localStorage.setItem('>6', ate18);
                    localStorage.setItem('1-2', ate22);
                    localStorage.setItem('2-3', ate26);
                    localStorage.setItem('3-5', ate30);
                    localStorage.setItem('5-7', ate34);
                    localStorage.setItem('7-10', ate38);
                    localStorage.setItem('10-15', ate15);
                    localStorage.setItem('15-20', ate20);
                    localStorage.setItem('20>', mais20);
                });
            $(document).ready(function () {
                $('#tabbb').DataTable({
                    "scrollX": true,
                    "scrollY": 550,
                });
            });

            $(document).ready(function () {
                $('#tabbb2').DataTable({
                    "scrollX": true,
                    "scrollY": 150,
                });
            });

            $(document).ready(function () {
                $('#tabbb3').DataTable({
                    "scrollX": true,
                    "scrollY": 550,
                });
            });
            $(document).ready(function () {
                $('#tabbb4').DataTable({
                    "scrollX": true,
                    "scrollY": 550,
                });
            });
        }
        if (e.target.id == "altFunc2") {
            nada = '';
            nada = `<div id="centro">
          <div class="animate__animated animate__pulse card3 text-center mr-4">
            <div class="row align-items-center">
                <div class="col-md-6">
                  <h1 class="mb-4 text-black"><span class="text-primary">Relatórios</span></h1>
                  <h3 class="mb-4 text-black">Relatório de Rotatividade</h3>
                </div>
                <div class="col-md-6 d-none d-sm-none d-md-block">
                  <img src="pics/Stocks2.png" alt="tours pics" class="img-fluid">
                </div>
              </div>
        </div>
        </div>
        <div class="text-center card4">
            <div class="row p-3">
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="perfil">Perfil</a>                                                     
                                    </div>
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="altFunc2">Rotatividade</a>
                                    </div>
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="absent">Absenteismo</a>
                                    </div>
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="recrSelecc2"><h6>Rec. e Selecção</h6></a>
                                    </div>
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="financ">Financeiro</a>
                                    </div>
    
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="treinamentosRelatorio">Treinamentos</a>
                                    </div>
    
                                </div>
                      </div>
                      <div class="text-center card5">
                          <h1 class="h4 text-black mb-4">Rotatividade</h1>
                      </div>
                      <div class="text-center cardTab cardTab animate__animated animate__pulse">
                      <table class="table m-2" id="tabbb">
                              <thead>
                                <tr class="bg-gradient-primary text-center text-black">
                                  <th scope="col"></th>
                                  <th>Janeiro</th>
                                  <th>Fevereiro</th>
                                  <th>Marco</th>
                                  <th>Abril</th>
                                  <th>Maio</th>
                                  <th>Junho</th>
                                  <th>Julho</th>
                                  <th>Agosto</th>
                                  <th>Setembro</th>
                                  <th>Outubro</th>
                                  <th>Novembro</th>
                                  <th>Dezembro</th>
                                  <th>Ano</th>
                                </tr>
                              </thead>
                              <tbody id="myTableeee" class="tt text-center text-black"">                     
                              </tbody>
                          </table>
                      </div>
    
                      <div class="text-center card5">
                          <h1 class="h4 text-black mb-4">Variacao Mensal dos Funcionarios</h1>
                      </div>
                      <div class="text-center cardTab cardTab animate__animated animate__pulse">
                      <table class="table m-2" id="tabbb2">
                      <thead>
                        <tr class="bg-gradient-primary text-center text-black">
                          <th scope="col"></th>
                          <th>Janeiro</th>
                          <th>Fevereiro</th>
                          <th>Marco</th>
                          <th>Abril</th>
                          <th>Maio</th>
                          <th>Junho</th>
                          <th>Julho</th>
                          <th>Agosto</th>
                          <th>Setembro</th>
                          <th>Outubro</th>
                          <th>Novembro</th>
                          <th>Dezembro</th>
                          <th>Ano</th>
                        </tr>
                      </thead>
                      <tbody id="myTabGenero" class="tt text-center text-black"">                     
                      </tbody>
                  </table>
                      </div>
    
    
                      <div class="text-center card5">
                          <h1 class="h4 text-black mb-4">Turnover</h1>
                      </div>
                      <div class="text-center cardTab cardTab animate__animated animate__pulse">
                      <table class="table m-2" id="tabbb3">
                              <thead>
                                <tr class="bg-gradient-primary text-center text-black">
                                  <th scope="col"></th>
                                  <th>Janeiro</th>
                                  <th>Fevereiro</th>
                                  <th>Marco</th>
                                  <th>Abril</th>
                                  <th>Maio</th>
                                  <th>Junho</th>
                                  <th>Julho</th>
                                  <th>Agosto</th>
                                  <th>Setembro</th>
                                  <th>Outubro</th>
                                  <th>Novembro</th>
                                  <th>Dezembro</th>
                                  <th>Ano</th>
                                </tr>
                              </thead>
                              <tbody id="myTabEtaria" class="tt text-center text-black"">                     
                              </tbody>
                          </table>
                      </div>
    
                      <div class="text-center card5">
                          <h1 class="h4 text-black mb-4">Taxa de Rotatividade Admissional</h1>
                      </div>
                      <div class="text-center cardTab cardTab animate__animated animate__pulse">
                      <table class="table m-2" id="tabbb4">
                              <thead>
                                <tr class="bg-gradient-primary text-center text-black">
                                  <th scope="col"></th>
                                  <th>Janeiro</th>
                                  <th>Fevereiro</th>
                                  <th>Marco</th>
                                  <th>Abril</th>
                                  <th>Maio</th>
                                  <th>Junho</th>
                                  <th>Julho</th>
                                  <th>Agosto</th>
                                  <th>Setembro</th>
                                  <th>Outubro</th>
                                  <th>Novembro</th>
                                  <th>Dezembro</th>
                                  <th>Ano</th>
                                </tr>
                              </thead>
                              <tbody id="myTabTEmpresa" class="tt text-center text-black"">                     
                              </tbody>
                          </table>
                      </div>
    
    
                      <div class="text-center card5">
                      <h1 class="h4 text-black mb-4">Taxa de Rotatividade Demissional</h1>
                      </div>
                      <div class="text-center cardTab cardTab animate__animated animate__pulse">
                      <table class="table m-2" id="tabbb5">
                                  <thead>
                                    <tr class="bg-gradient-primary text-center text-black">
                                      <th scope="col"></th>
                                      <th>Janeiro</th>
                                      <th>Fevereiro</th>
                                      <th>Marco</th>
                                      <th>Abril</th>
                                      <th>Maio</th>
                                      <th>Junho</th>
                                      <th>Julho</th>
                                      <th>Agosto</th>
                                      <th>Setembro</th>
                                      <th>Outubro</th>
                                      <th>Novembro</th>
                                      <th>Dezembro</th>
                                      <th>Ano</th>
                                    </tr>
                                  </thead>
                                  <tbody id="myTabTEmpresaD" class="tt text-center text-black"">                     
                                  </tbody>
                              </table>
                      </div>
    
                      <div class="text-center card5">
                      <h1 class="h4 text-black mb-4">Desligamento de Recem Contratados</h1>
                      </div>
                      <div class="text-center cardTab cardTab animate__animated animate__pulse">
                      <table class="table m-2" id="tabbb6">
                              <thead>
                                <tr class="bg-gradient-primary text-center text-black">
                                  <th scope="col"></th>
                                  <th>Janeiro</th>
                                  <th>Fevereiro</th>
                                  <th>Marco</th>
                                  <th>Abril</th>
                                  <th>Maio</th>
                                  <th>Junho</th>
                                  <th>Julho</th>
                                  <th>Agosto</th>
                                  <th>Setembro</th>
                                  <th>Outubro</th>
                                  <th>Novembro</th>
                                  <th>Dezembro</th>
                                  <th>Ano</th>
                                </tr>
                              </thead>
                              <tbody id="myTabTEmpresaD2" class="tt text-center text-black"">                     
                              </tbody>
                          </table>
                      </div>
    
    
    
                      <div class="text-center card5">
                      <h1 class="h4 text-black mb-4">Desligamentos</h1>
                      </div>
                      <div class="text-center cardTab cardTab animate__animated animate__pulse">
                      <div class="col-md">
                          <table class="table m-2" id="tabbb7">
                              <thead>
                                <tr class="bg-gradient-primary text-center text-black">
                                  <th scope="col">Tipos de Desligamentos</th>
                                  <th>Janeiro</th>
                                  <th>Fevereiro</th>
                                  <th>Marco</th>
                                  <th>Abril</th>
                                  <th>Maio</th>
                                  <th>Junho</th>
                                  <th>Julho</th>
                                  <th>Agosto</th>
                                  <th>Setembro</th>
                                  <th>Outubro</th>
                                  <th>Novembro</th>
                                  <th>Dezembro</th>
                                  <th>Ano</th>
                                </tr>
                              </thead>
                              <tbody id="myTabTEmpresaD3" class="tt text-center text-black">                     
                              </tbody>
                              
                          </table>
                          
                          
                      </div>
                      </div>
                      <div class="text-left text-black card5 mb-4">
                      <h4 class="text-center text-black">Legenda</h4>
                      <hr>
                              <p class="ml-4 text-black">A.E.P: Acordo Entre as Partes</p>
                              <p class="ml-4 text-black">D.C: Demissão Consensual</p>
                              <p class="ml-4 text-black">D.J.C: Demissão por Justa Causa</p>
                              <p class="ml-4 text-black">D.S.J.C: Demissão Sem Justa Causa</p>
                              <p class="ml-4 text-black">P.D.F: Pedido de Demissão Pelo Funcionário</p>
                              <p class="ml-4 text-black">T.C.E: Término do Contrato de Estágio</p>
                      </div>
            
            `;
            contrudo.innerHTML = nada;
            const tablerrr = document.getElementById('myTableeee');
            const myTabGenero = document.getElementById('myTabGenero');
            const myTabEtaria = document.getElementById('myTabEtaria');
            const myTabTEmpresa = document.getElementById('myTabTEmpresa');
            const myTabTEmpresaD = document.getElementById('myTabTEmpresaD');
            const myTabTEmpresaD2 = document.getElementById('myTabTEmpresaD2');
            const myTabTEmpresaD3 = document.getElementById('myTabTEmpresaD3');
            colabora = '';
            titulo = '';
            let i = 0;
            let ira = 0;
            const empresa2 = localStorage.getItem('empresa');
            const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2}`;
            contrat.forEach(rec => {

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
                var newCell13 = newRow.insertCell(12);
                var newCell14 = newRow.insertCell(13);

                newCell1.innerHTML = `<div id=${i + rec}>${rec}</div>`;
                newCell2.innerHTML = `<div id=${"janeiro" + i}>-</div>`;
                newCell3.innerHTML = `<div id=${"fevereiro" + i}>-</div>`;
                newCell4.innerHTML = `<div id=${"marco" + i}>-</div>`;
                newCell5.innerHTML = `<div id=${"abril" + i}>-</div>`;
                newCell6.innerHTML = `<div id=${"maio" + i}>-</div>`;
                newCell7.innerHTML = `<div id=${"junho" + i}>-</div>`;
                newCell8.innerHTML = `<div id=${"julho" + i}>-</div>`;
                newCell9.innerHTML = `<div id=${"agosto" + i}>-</div>`;
                newCell10.innerHTML = `<div id=${"setembro" + i}>-</div>`;
                newCell11.innerHTML = `<div id=${"outubrp" + i}>-</div>`;
                newCell12.innerHTML = `<div id=${"novembro" + i}>-</div>`;
                newCell13.innerHTML = `<div id=${"desembro" + i}>-</div>`;
                newCell14.innerHTML = `<div id=${"ano" + i}>-</div>`;

                i++
            });
            tablerrr.addEventListener('click', (e) => {
                e.preventDefault();
                alert(e.target.id)
            });
            let jan = 0;
            let feb = 0;
            let mar = 0;
            let apr = 0;
            let may = 0;
            let jun = 0;
            let jul = 0;
            let aug = 0;
            let sep = 0;
            let oct = 0;
            let nov = 0;
            let dez = 0;
            let jan1 = 0;
            let feb1 = 0;
            let mar1 = 0;
            let apr1 = 0;
            let may1 = 0;
            let jun1 = 0;
            let jul1 = 0;
            let aug1 = 0;
            let sep1 = 0;
            let oct1 = 0;
            let nov1 = 0;
            let dez1 = 0;
            let variaTotal = 0;
            fetch(url3)
                .then(res => res.json())
                .then(content => {
                    const data1 = content[0]['funcionarios'];
                    console.log(content[0]['funcionarios'])
                    let desligamento = 0;
                    let naEmpresa = 0;


                    let verdade = true;
                    var d = new Date();
                    var n = d.getFullYear();
                    for (var i = 0; i < data1.length; i++) {
                        var desliga = content[0]['funcionarios'][i]['dataDesligamento'];
                        if (desliga === "") {
                            if (verdade) {
                                const d = new Date(content[0]['funcionarios'][i]['dataAdmissao'])
                                const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                                console.log(`${mo}`);
                                if (mo == "Jan") {
                                    jan++
                                    let mes = document.getElementById(`${"janeiro0"}`)
                                    mes.innerHTML = `${jan}`
                                }
                                if (mo == "Feb") {
                                    feb++
                                    let mes = document.getElementById(`${"fevereiro0"}`)
                                    mes.innerHTML = `${feb}`
                                }
                                if (mo == "Mar") {
                                    mar++
                                    let mes = document.getElementById(`${"marco0"}`)
                                    mes.innerHTML = `${mar}`
                                }
                                if (mo == "Apr") {
                                    apr++
                                    let mes = document.getElementById(`${"abril0"}`)
                                    mes.innerHTML = `${apr}`
                                }
                                if (mo == "May") {
                                    may++
                                    let mes = document.getElementById(`${"maio0"}`)
                                    mes.innerHTML = `${may}`
                                }
                                if (mo == "Jun") {
                                    jun++
                                    let mes = document.getElementById(`${"junho0"}`)
                                    mes.innerHTML = `${jun}`
                                }
                                if (mo == "Jul") {
                                    jul++
                                    let mes = document.getElementById(`${"julho0"}`)
                                    mes.innerHTML = `${jul}`
                                }
                                if (mo == "Aug") {
                                    aug++
                                    let mes = document.getElementById(`${"agosto0"}`)
                                    mes.innerHTML = `${aug}`
                                }
                                if (mo == "Sep") {
                                    sep++
                                    let mes = document.getElementById(`${"setembro0"}`)
                                    mes.innerHTML = `${sep}`
                                }
                                if (mo == "Oct") {
                                    oct++
                                    let mes = document.getElementById(`${"outubrp0"}`)
                                    mes.innerHTML = `${oct}`
                                }
                                if (mo == "Nov") {
                                    nov++
                                    let mes = document.getElementById(`${"novembro0"}`)
                                    mes.innerHTML = `${nov}`
                                }
                                if (mo == "Dec") {
                                    dez++
                                    let mes = document.getElementById(`${"desembro0"}`)
                                    mes.innerHTML = `${dez}`
                                }

                            }
                        } else {
                            if (verdade) {
                                const dea = content[0]['funcionarios'][i]['dataDesligamento']
                                let mo = "";
                                if (dea === "") {
                                    console.log('vazio')
                                } else {
                                    const d = new Date(dea)
                                    mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
                                }
                                console.log(`${mo}`);
                                if (mo == "Jan") {
                                    jan1++
                                    let mes = document.getElementById(`${"janeiro1"}`)
                                    mes.innerHTML = `${jan1}`
                                }
                                if (mo == "Feb") {
                                    feb1++
                                    let mes = document.getElementById(`${"fevereiro1"}`)
                                    mes.innerHTML = `${feb1}`
                                }
                                if (mo == "Mar") {
                                    mar1++
                                    let mes = document.getElementById(`${"marco1"}`)
                                    mes.innerHTML = `${mar1}`
                                }
                                if (mo == "Apr") {
                                    apr1++
                                    let mes = document.getElementById(`${"abril1"}`)
                                    mes.innerHTML = `${apr1}`
                                }
                                if (mo == "May") {
                                    may1++
                                    let mes = document.getElementById(`${"maio1"}`)
                                    mes.innerHTML = `${may1}`
                                }
                                if (mo == "Jun") {
                                    jun1++
                                    let mes = document.getElementById(`${"junho1"}`)
                                    mes.innerHTML = `${jun1}`
                                }
                                if (mo == "Jul") {
                                    jul1++
                                    let mes = document.getElementById(`${"julho1"}`)
                                    mes.innerHTML = `${jul1}`
                                }
                                if (mo == "Aug") {
                                    aug1++
                                    let mes = document.getElementById(`${"agosto1"}`)
                                    mes.innerHTML = `${aug1}`
                                }
                                if (mo == "Sep") {
                                    sep1++
                                    let mes = document.getElementById(`${"setembro1"}`)
                                    mes.innerHTML = `${sep1}`
                                }
                                if (mo == "Oct") {
                                    oct1++
                                    let mes = document.getElementById(`${"outubrp1"}`)
                                    mes.innerHTML = `${oct1}`
                                }
                                if (mo == "Nov") {
                                    nov1++
                                    let mes = document.getElementById(`${"novembro1"}`)
                                    mes.innerHTML = `${nov1}`
                                }
                                if (mo == "Dec") {
                                    dez1++
                                    let mes = document.getElementById(`${"desembro1"}`)
                                    mes.innerHTML = `${dez1}`
                                }

                            }
                        }

                    };
                    let ano = jan + feb + mar + apr + may + jun + jul + aug + sep + oct + nov + dez;
                    let ano1 = jan1 + feb1 + mar1 + apr1 + may1 + jun1 + jul1 + aug1 + sep1 + oct1 + nov1 + dez1;
                    localStorage.setItem('contratacoes', ano);
                    localStorage.setItem('desligamentos', ano1);
                    let anoTotal = document.getElementById(`${"ano0"}`)
                    anoTotal.innerHTML = `${ano}`
                    let anoTotal1 = document.getElementById(`${"ano1"}`)
                    anoTotal1.innerHTML = `${ano1}`
                    let janTotal = document.getElementById(`${"janeiro2"}`)
                    janTotal.innerHTML = `${jan + jan1}`
                    let febTotal = document.getElementById(`${"fevereiro2"}`)
                    febTotal.innerHTML = `${feb + feb1}`
                    let marTotal = document.getElementById(`${"marco2"}`)
                    marTotal.innerHTML = `${mar + mar1}`
                    let aprTotal = document.getElementById(`${"abril2"}`)
                    aprTotal.innerHTML = `${apr + apr1}`
                    let mayTotal = document.getElementById(`${"maio2"}`)
                    mayTotal.innerHTML = `${may + may1}`
                    let junTotal = document.getElementById(`${"junho2"}`)
                    junTotal.innerHTML = `${jun + jun1}`
                    let julTotal = document.getElementById(`${"julho2"}`)
                    julTotal.innerHTML = `${jul + jul1}`
                    let augTotal = document.getElementById(`${"agosto2"}`)
                    augTotal.innerHTML = `${aug + aug1}`
                    let sepTotal = document.getElementById(`${"setembro2"}`)
                    sepTotal.innerHTML = `${sep + sep1}`
                    let octTotal = document.getElementById(`${"outubrp2"}`)
                    octTotal.innerHTML = `${oct + oct1}`
                    let novTotal = document.getElementById(`${"novembro2"}`)
                    novTotal.innerHTML = `${nov + nov1}`
                    let dezTotal = document.getElementById(`${"desembro2"}`)
                    dezTotal.innerHTML = `${dez + dez1}`
                    let ano2 = parseInt(jan + jan1) + parseInt(feb + feb1) + parseInt(mar + mar1)
                        + parseInt(apr + apr1) + parseInt(may + may1) + parseInt(jun + jun1) + parseInt(jul + jul1) + parseInt(aug + aug1)
                        + parseInt(sep + sep1) + parseInt(oct + oct1) + parseInt(nov + nov1) + parseInt(dez + dez1);
                    let ano2Total = document.getElementById(`${"ano2"}`)
                    ano2Total.innerHTML = `${ano2}`
                    variaTotal += ano2;

                });

            let v = 0;
            variacaoMensal.forEach(rec => {

                var newRow = myTabGenero.insertRow();
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
                var newCell14 = newRow.insertCell(13);

                newCell1.innerHTML = `<div id=${i + rec}>${rec}</div>`;
                newCell2.innerHTML = `<div id=${"janeiroq" + v}>-</div>`;
                newCell3.innerHTML = `<div id=${"fevereiroq" + v}>-</div>`;
                newCell4.innerHTML = `<div id=${"marcoq" + v}>-</div>`;
                newCell5.innerHTML = `<div id=${"abrilq" + v}>-</div>`;
                newCell6.innerHTML = `<div id=${"maioq" + v}>-</div>`;
                newCell7.innerHTML = `<div id=${"junhoq" + v}>-</div>`;
                newCell8.innerHTML = `<div id=${"julhoq" + v}>-</div>`;
                newCell9.innerHTML = `<div id=${"agostoq" + v}>-</div>`;
                newCell10.innerHTML = `<div id=${"setembroq" + v}>-</div>`;
                newCell11.innerHTML = `<div id=${"outubrpq" + v}>-</div>`;
                newCell12.innerHTML = `<div id=${"novembroq" + v}>-</div>`;
                newCell13.innerHTML = `<div id=${"desembroq" + v}>-</div>`;
                newCell14.innerHTML = `<div id=${"anoq" + v}>-</div>`;

                v++
            });
            myTabGenero.addEventListener('click', (e) => {
                e.preventDefault();
                alert(e.target.id)
            });
            fetch(url3)
                .then(res => res.json())
                .then(content => {
                    const data1 = content[0]['funcionarios'];
                    console.log(content[0]['funcionarios'])
                    let desligamento = 0;
                    let naEmpresa = 0;


                    let verdade = true;
                    for (var i = 0; i < data1.length; i++) {
                        var desliga = content[0]['funcionarios'][i]['dataDesligamento'];
                        if (desliga === "") {
                            if (verdade) {
                                const d = new Date(content[0]['funcionarios'][i]['dataAdmissao'])
                                const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                                console.log(`${mo}`);
                                if (mo == "Jan") {
                                    let mes = document.getElementById(`${"janeiroq0"}`)
                                    mes.innerHTML = `${jan}`
                                }
                                if (mo == "Feb") {
                                    let mes = document.getElementById(`${"fevereiroq0"}`)
                                    mes.innerHTML = `${feb}`
                                }
                                if (mo == "Mar") {
                                    let mes = document.getElementById(`${"marcoq0"}`)
                                    mes.innerHTML = `${mar}`
                                }
                                if (mo == "Apr") {
                                    let mes = document.getElementById(`${"abrilq0"}`)
                                    mes.innerHTML = `${apr}`
                                }
                                if (mo == "May") {
                                    may++
                                    let mes = document.getElementById(`${"maioq0"}`)
                                    mes.innerHTML = `${may}`
                                }
                                if (mo == "Jun") {
                                    let mes = document.getElementById(`${"junhoq0"}`)
                                    mes.innerHTML = `${jun}`
                                }
                                if (mo == "Jul") {
                                    let mes = document.getElementById(`${"julhoq0"}`)
                                    mes.innerHTML = `${jul}`
                                }
                                if (mo == "Aug") {
                                    let mes = document.getElementById(`${"agostoq0"}`)
                                    mes.innerHTML = `${aug}`
                                }
                                if (mo == "Sep") {
                                    let mes = document.getElementById(`${"setembroq0"}`)
                                    mes.innerHTML = `${sep}`
                                }
                                if (mo == "Oct") {
                                    let mes = document.getElementById(`${"outubrpq0"}`)
                                    mes.innerHTML = `${oct}`
                                }
                                if (mo == "Nov") {
                                    let mes = document.getElementById(`${"novembroq0"}`)
                                    mes.innerHTML = `${nov}`
                                }
                                if (mo == "Dec") {
                                    let mes = document.getElementById(`${"desembroq0"}`)
                                    mes.innerHTML = `${dez}`
                                }

                            }
                            if (verdade) {
                                const d = new Date(content[0]['funcionarios'][i]['dataAdmissao'])
                                const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                                console.log(`${mo}`);
                                if (mo == "Jan") {
                                    let mes = document.getElementById(`${"janeiroq1"}`)
                                    mes.innerHTML = `${jan - jan1}`
                                }
                                if (mo == "Feb") {
                                    let mes = document.getElementById(`${"fevereiroq1"}`)
                                    mes.innerHTML = `${feb - feb1}`
                                }
                                if (mo == "Mar") {
                                    let mes = document.getElementById(`${"marcoq1"}`)
                                    mes.innerHTML = `${mar - mar1}`
                                }
                                if (mo == "Apr") {
                                    let mes = document.getElementById(`${"abrilq1"}`)
                                    mes.innerHTML = `${apr - apr1}`
                                }
                                if (mo == "May") {
                                    let mes = document.getElementById(`${"maioq1"}`)
                                    mes.innerHTML = `${may - may1}`
                                }
                                if (mo == "Jun") {
                                    let mes = document.getElementById(`${"junhoq1"}`)
                                    mes.innerHTML = `${jun - jun1}`
                                }
                                if (mo == "Jul") {
                                    let mes = document.getElementById(`${"julhoq1"}`)
                                    mes.innerHTML = `${jul - jul1}`
                                }
                                if (mo == "Aug") {
                                    let mes = document.getElementById(`${"agostoq1"}`)
                                    mes.innerHTML = `${aug - aug1}`
                                }
                                if (mo == "Sep") {
                                    let mes = document.getElementById(`${"setembroq1"}`)
                                    mes.innerHTML = `${sep - sep1}`
                                }
                                if (mo == "Oct") {
                                    let mes = document.getElementById(`${"outubrpq1"}`)
                                    mes.innerHTML = `${oct - oct1}`
                                }
                                if (mo == "Nov") {
                                    let mes = document.getElementById(`${"novembroq1"}`)
                                    mes.innerHTML = `${nov - nov1}`
                                }
                                if (mo == "Dec") {
                                    let mes = document.getElementById(`${"desembroq1"}`)
                                    mes.innerHTML = `${dez - dez1}`
                                }

                            }
                            if (verdade) {
                                const d = new Date(content[0]['funcionarios'][i]['dataAdmissao'])
                                const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                                console.log(`${mo}`);
                                if (mo == "Jan") {
                                    let mes = document.getElementById(`${"janeiroq2"}`)
                                    mes.innerHTML = `${jan - (jan - jan1)}`
                                }
                                if (mo == "Feb") {
                                    let mes = document.getElementById(`${"fevereiroq2"}`)
                                    mes.innerHTML = `${feb - (feb - feb1)}`
                                }
                                if (mo == "Mar") {
                                    let mes = document.getElementById(`${"marcoq2"}`)
                                    mes.innerHTML = `${mar - (mar - mar1)}`
                                }
                                if (mo == "Apr") {
                                    let mes = document.getElementById(`${"abrilq2"}`)
                                    mes.innerHTML = `${apr - (apr - apr1)}`
                                }
                                if (mo == "May") {
                                    let mes = document.getElementById(`${"maioq2"}`)
                                    mes.innerHTML = `${may - (may - may1)}`
                                }
                                if (mo == "Jun") {
                                    let mes = document.getElementById(`${"junhoq2"}`)
                                    mes.innerHTML = `${jun - (jun - jun1)}`
                                }
                                if (mo == "Jul") {
                                    let mes = document.getElementById(`${"julhoq2"}`)
                                    mes.innerHTML = `${jul - (jul - jul1)}`
                                }
                                if (mo == "Aug") {
                                    let mes = document.getElementById(`${"agostoq2"}`)
                                    mes.innerHTML = `${aug - (aug - aug1)}`
                                }
                                if (mo == "Sep") {
                                    let mes = document.getElementById(`${"setembroq2"}`)
                                    mes.innerHTML = `${sep - (sep - sep1)}`
                                }
                                if (mo == "Oct") {
                                    let mes = document.getElementById(`${"outubrpq2"}`)
                                    mes.innerHTML = `${oct - (oct - oct1)}`
                                }
                                if (mo == "Nov") {
                                    let mes = document.getElementById(`${"novembroq2"}`)
                                    mes.innerHTML = `${nov - (nov - nov1)}`
                                }
                                if (mo == "Dec") {
                                    let mes = document.getElementById(`${"desembroq2"}`)
                                    mes.innerHTML = `${dez - (dez - dez1)}`
                                }

                            }
                            if (verdade) {
                                const d = new Date(content[0]['funcionarios'][i]['dataAdmissao'])
                                const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                                console.log(`${mo}`);
                                if (mo == "Jan") {
                                    let mes = document.getElementById(`${"janeiroq3"}`)
                                    mes.innerHTML = `${((jan - (jan - jan1)) / jan) * 100}` + "%"
                                }
                                if (mo == "Feb") {
                                    let mes = document.getElementById(`${"fevereiroq3"}`)
                                    mes.innerHTML = `${((feb - (feb - feb1)) / feb) * 100}` + "%"
                                }
                                if (mo == "Mar") {
                                    let mes = document.getElementById(`${"marcoq3"}`)
                                    mes.innerHTML = `${((mar - (mar - mar1)) / mar) * 100}` + "%"
                                }
                                if (mo == "Apr") {
                                    let mes = document.getElementById(`${"abrilq3"}`)
                                    mes.innerHTML = `${((apr - (apr - apr1)) / apr) * 100}` + "%"
                                }
                                if (mo == "May") {
                                    let mes = document.getElementById(`${"maioq3"}`)
                                    mes.innerHTML = `${((may - (may - may1)) / may) * 100}` + "%"
                                }
                                if (mo == "Jun") {
                                    let mes = document.getElementById(`${"junhoq3"}`)
                                    mes.innerHTML = `${((jun - (jun - jun1)) / jun) * 100}` + "%"
                                }
                                if (mo == "Jul") {
                                    let mes = document.getElementById(`${"julhoq3"}`)
                                    mes.innerHTML = `${((jul - (jul - jul1)) / jul) * 100}` + "%"
                                }
                                if (mo == "Aug") {
                                    let mes = document.getElementById(`${"agostoq3"}`)
                                    mes.innerHTML = `${((aug - (aug - aug1)) / aug) * 100}` + "%"
                                }
                                if (mo == "Sep") {
                                    let mes = document.getElementById(`${"setembroq3"}`)
                                    mes.innerHTML = `${((sep - (sep - sep1)) / sep) * 100}` + "%"
                                }
                                if (mo == "Oct") {
                                    let mes = document.getElementById(`${"outubrpq3"}`)
                                    mes.innerHTML = `${((oct - (oct - oct1)) / oct) * 100}` + "%"
                                }
                                if (mo == "Nov") {
                                    let mes = document.getElementById(`${"novembroq3"}`)
                                    mes.innerHTML = `${((nov - (nov - nov1)) / nov) * 100}` + "%"
                                }
                                if (mo == "Dec") {
                                    let mes = document.getElementById(`${"desembroq3"}`)
                                    mes.innerHTML = `${((dez - (dez - dez1)) / dez) * 100}` + "%"
                                }

                            }
                        }

                    };
                    localStorage.setItem('jan', jan - (jan - jan1));
                    localStorage.setItem('fev', feb - (feb - feb1));
                    localStorage.setItem('mar', mar - (mar - mar1));
                    localStorage.setItem('abr', apr - (apr - apr1));
                    localStorage.setItem('mai', may - (may - may1));
                    localStorage.setItem('jun', jun - (jun - jun1));
                    localStorage.setItem('jul', jul - (jul - jul1));
                    localStorage.setItem('ago', aug - (aug - aug1));
                    localStorage.setItem('set', sep - (sep - sep1));
                    localStorage.setItem('out', oct - (oct - oct1));
                    localStorage.setItem('nov', nov - (nov - nov1));
                    localStorage.setItem('dez', dez - (dez - dez1));

                    let ano = jan + feb + mar + apr + may + jun + jul + aug + sep + oct + nov + dez;
                    let ano1 = jan1 + feb1 + mar1 + apr1 + may1 + jun1 + jul1 + aug1 + sep1 + oct1 + nov1 + dez1;
                    let anoTotal = document.getElementById(`${"anoq0"}`)
                    anoTotal.innerHTML = `${ano}`
                    let anoTotal1 = document.getElementById(`${"anoq1"}`)
                    anoTotal1.innerHTML = `${variaTotal}`
                    let variacaoTotal1 = document.getElementById(`${"anoq2"}`)
                    variacaoTotal1.innerHTML = `${variaTotal - ano}`
                    let taxaVariacaoTotal1 = document.getElementById(`${"anoq3"}`)
                    let zz = ((ano - (ano - ano1)) / ano) * 100;
                    taxaVariacaoTotal1.innerHTML = `${zz}` + "%";
                    console.log(zz)

                });
            let va = 0;
            turnOver.forEach(rec => {

                var newRow = myTabEtaria.insertRow();
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
                var newCell14 = newRow.insertCell(13);

                newCell1.innerHTML = `<div id=${i + rec}>${rec}</div>`;
                newCell2.innerHTML = `<div id=${"janeirov" + va}>-</div>`;
                newCell3.innerHTML = `<div id=${"fevereirov" + va}>-</div>`;
                newCell4.innerHTML = `<div id=${"marcov" + va}>-</div>`;
                newCell5.innerHTML = `<div id=${"abrilv" + va}>-</div>`;
                newCell6.innerHTML = `<div id=${"maiov" + va}>-</div>`;
                newCell7.innerHTML = `<div id=${"junhov" + va}>-</div>`;
                newCell8.innerHTML = `<div id=${"julhov" + va}>-</div>`;
                newCell9.innerHTML = `<div id=${"agostov" + va}>-</div>`;
                newCell10.innerHTML = `<div id=${"setembrov" + va}>-</div>`;
                newCell11.innerHTML = `<div id=${"outubrpv" + va}>-</div>`;
                newCell12.innerHTML = `<div id=${"novembrov" + va}>-</div>`;
                newCell13.innerHTML = `<div id=${"desembrov" + va}>-</div>`;
                newCell14.innerHTML = `<div id=${"anov" + va}>-</div>`;

                va++
            });

            myTabEtaria.addEventListener('click', (e) => {
                e.preventDefault();
                alert(e.target.id)
            });
            fetch(url3)
                .then(res => res.json())
                .then(content => {
                    const data1 = content[0]['funcionarios'];
                    console.log(content[0]['funcionarios'])


                    let verdade = true;
                    for (var i = 0; i < data1.length; i++) {
                        var desliga = content[0]['funcionarios'][i]['dataDesligamento'];
                        if (desliga === "") {
                            if (verdade) {
                                const d = new Date(content[0]['funcionarios'][i]['dataAdmissao'])
                                const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                                console.log(`${mo}`);
                                if (mo == "Jan") {
                                    let mes = document.getElementById(`${"janeirov0"}`)
                                    mes.innerHTML = `${parseInt((((jan + jan1) / 2) / (data1.length - jan1)) * 100)}` + "%"
                                }
                                if (mo == "Feb") {
                                    let mes = document.getElementById(`${"fevereirov0"}`)
                                    mes.innerHTML = `${parseInt((((feb + feb1) / 2) / (data1.length - feb1)) * 100)}` + "%"
                                }
                                if (mo == "Mar") {
                                    let mes = document.getElementById(`${"marcov0"}`)
                                    mes.innerHTML = `${parseInt((((mar + mar1) / 2) / (data1.length - mar1)) * 100)}` + "%"
                                }
                                if (mo == "Apr") {
                                    let mes = document.getElementById(`${"abrilv0"}`)
                                    mes.innerHTML = `${parseInt((((apr + apr1) / 2) / (data1.length - apr1)) * 100)}` + "%"
                                }
                                if (mo == "May") {
                                    may++
                                    let mes = document.getElementById(`${"maiov0"}`)
                                    mes.innerHTML = `${parseInt((((may + may1) / 2) / (data1.length - may1)) * 100)}` + "%"
                                }
                                if (mo == "Jun") {
                                    let mes = document.getElementById(`${"junhov0"}`)
                                    mes.innerHTML = `${parseInt((((jun + jun1) / 2) / (data1.length - jun1)) * 100)}` + "%"
                                }
                                if (mo == "Jul") {
                                    let mes = document.getElementById(`${"julhov0"}`)
                                    mes.innerHTML = `${parseInt((((jul + jul1) / 2) / (data1.length - jul1)) * 100)}` + "%"
                                }
                                if (mo == "Aug") {
                                    let mes = document.getElementById(`${"agostov0"}`)
                                    mes.innerHTML = `${parseInt((((aug + aug1) / 2) / (data1.length - aug1)) * 100)}` + "%"
                                }
                                if (mo == "Sep") {
                                    let mes = document.getElementById(`${"setembrov0"}`)
                                    mes.innerHTML = `${parseInt((((sep + sep1) / 2) / (data1.length - sep1)) * 100)}` + "%"
                                }
                                if (mo == "Oct") {
                                    let mes = document.getElementById(`${"outubrpv0"}`)
                                    mes.innerHTML = `${parseInt((((oct + oct1) / 2) / (data1.length - oct1)) * 100)}` + "%"
                                }
                                if (mo == "Nov") {
                                    let mes = document.getElementById(`${"novembrov0"}`)
                                    mes.innerHTML = `${parseInt((((nov + nov1) / 2) / (data1.length - nov1)) * 100)}` + "%"
                                }
                                if (mo == "Dec") {
                                    let mes = document.getElementById(`${"desembrov0"}`)
                                    mes.innerHTML = `${parseInt((((dez + dez1) / 2) / (data1.length - dez1)) * 100)}` + "%"
                                }

                            }
                            if (verdade) {
                                const d = new Date(content[0]['funcionarios'][i]['dataAdmissao'])
                                const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                                console.log(`${mo}`);
                                if (mo == "Jan") {
                                    let mes = document.getElementById(`${"janeirov1"}`)
                                    mes.innerHTML = `${data1.length - jan1}`
                                }
                                if (mo == "Feb") {
                                    let mes = document.getElementById(`${"fevereirov1"}`)
                                    mes.innerHTML = `${data1.length - feb1}`
                                }
                                if (mo == "Mar") {
                                    let mes = document.getElementById(`${"marcov1"}`)
                                    mes.innerHTML = `${data1.length - mar1}`
                                }
                                if (mo == "Apr") {
                                    let mes = document.getElementById(`${"abrilv1"}`)
                                    mes.innerHTML = `${data1.length - apr1}`
                                }
                                if (mo == "May") {
                                    let mes = document.getElementById(`${"maiov1"}`)
                                    mes.innerHTML = `${data1.length - may1}`
                                }
                                if (mo == "Jun") {
                                    let mes = document.getElementById(`${"junhov1"}`)
                                    mes.innerHTML = `${data1.length - jun1}`
                                }
                                if (mo == "Jul") {
                                    let mes = document.getElementById(`${"julhov1"}`)
                                    mes.innerHTML = `${data1.length - jul1}`
                                }
                                if (mo == "Aug") {
                                    let mes = document.getElementById(`${"agostov1"}`)
                                    mes.innerHTML = `${data1.length - aug1}`
                                }
                                if (mo == "Sep") {
                                    let mes = document.getElementById(`${"setembrov1"}`)
                                    mes.innerHTML = `${data1.length - sep1}`
                                }
                                if (mo == "Oct") {
                                    let mes = document.getElementById(`${"outubrpv1"}`)
                                    mes.innerHTML = `${data1.length - oct1}`
                                }
                                if (mo == "Nov") {
                                    let mes = document.getElementById(`${"novembrov1"}`)
                                    mes.innerHTML = `${data1.length - nov1}`
                                }
                                if (mo == "Dec") {
                                    let mes = document.getElementById(`${"desembrov1"}`)
                                    mes.innerHTML = `${data1.length - dez1}`
                                }

                            }
                        }

                    };
                    let ano = jan + feb + mar + apr + may + jun + jul + aug + sep + oct + nov + dez;
                    let ano1 = jan1 + feb1 + mar1 + apr1 + may1 + jun1 + jul1 + aug1 + sep1 + oct1 + nov1 + dez1;
                    let anoTotal = document.getElementById(`${"ano0"}`)
                    anoTotal.innerHTML = `${ano}`
                    let anoTotal1 = document.getElementById(`${"anov1"}`)
                    anoTotal1.innerHTML = `${ano}`
                    let variacaoTotal1 = document.getElementById(`${"anoq12"}`)
                    // variacaoTotal1.innerHTML = `${variaTotal-ano}`
                    let taxaVariacaoTotal1 = document.getElementById(`${"anov0"}`)
                    let zz = parseInt((((ano + ano1) / 2) / (data1.length - ano1)) * 100);
                    taxaVariacaoTotal1.innerHTML = `${zz}` + "%";
                    console.log(zz)

                });
            let va1 = 0;
            taxaAdimissional.forEach(rec => {

                var newRow = myTabTEmpresa.insertRow();
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
                var newCell14 = newRow.insertCell(13);

                newCell1.innerHTML = `<div id=${va1 + rec}>${rec}</div>`;
                newCell2.innerHTML = `<div id=${"janeirov1" + va1}>-</div>`;
                newCell3.innerHTML = `<div id=${"fevereirov1" + va1}>-</div>`;
                newCell4.innerHTML = `<div id=${"marcov1" + va1}>-</div>`;
                newCell5.innerHTML = `<div id=${"abrilv1" + va1}>-</div>`;
                newCell6.innerHTML = `<div id=${"maiov1" + va1}>-</div>`;
                newCell7.innerHTML = `<div id=${"junhov1" + va1}>-</div>`;
                newCell8.innerHTML = `<div id=${"julhov1" + va1}>-</div>`;
                newCell9.innerHTML = `<div id=${"agostov1" + va1}>-</div>`;
                newCell10.innerHTML = `<div id=${"setembrov1" + va1}>-</div>`;
                newCell11.innerHTML = `<div id=${"outubrpv1" + va1}>-</div>`;
                newCell12.innerHTML = `<div id=${"novembrov1" + va1}>-</div>`;
                newCell13.innerHTML = `<div id=${"desembrov1" + va1}>-</div>`;
                newCell14.innerHTML = `<div id=${"anovv1" + va1}>-</div>`;

                va1++
            })
            myTabTEmpresa.addEventListener('click', (e) => {
                e.preventDefault();
                alert(e.target.id)
            });
            fetch(url3)
                .then(res => res.json())
                .then(content => {
                    const data1 = content[0]['funcionarios'];
                    console.log(content[0]['funcionarios'])


                    let verdade = true;
                    for (var i = 0; i < data1.length; i++) {
                        var desliga = content[0]['funcionarios'][i]['dataDesligamento'];
                        if (desliga === "") {
                            if (verdade) {
                                const d = new Date(content[0]['funcionarios'][i]['dataAdmissao'])
                                const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                                console.log(`${mo}`);
                                if (mo == "Jan") {
                                    let mes = document.getElementById(`${"janeirov10"}`)
                                    mes.innerHTML = `${parseInt(((jan) / (data1.length - jan1)) * 100)}` + "%"
                                }
                                if (mo == "Feb") {
                                    let mes = document.getElementById(`${"fevereirov10"}`)
                                    mes.innerHTML = `${parseInt(((feb) / (data1.length - feb1)) * 100)}` + "%"
                                }
                                if (mo == "Mar") {
                                    let mes = document.getElementById(`${"marcov10"}`)
                                    mes.innerHTML = `${parseInt(((mar) / (data1.length - mar1)) * 100)}` + "%"
                                }
                                if (mo == "Apr") {
                                    let mes = document.getElementById(`${"abrilv10"}`)
                                    mes.innerHTML = `${parseInt(((apr) / (data1.length - apr1)) * 100)}` + "%"
                                }
                                if (mo == "May") {
                                    may++
                                    let mes = document.getElementById(`${"maiov10"}`)
                                    mes.innerHTML = `${parseInt(((may) / (data1.length - may1)) * 100)}` + "%"
                                }
                                if (mo == "Jun") {
                                    let mes = document.getElementById(`${"junhov10"}`)
                                    mes.innerHTML = `${parseInt(((jun) / (data1.length - jun1)) * 100)}` + "%"
                                }
                                if (mo == "Jul") {
                                    let mes = document.getElementById(`${"julhov10"}`)
                                    mes.innerHTML = `${parseInt(((jul) / (data1.length - jul1)) * 100)}` + "%"
                                }
                                if (mo == "Aug") {
                                    let mes = document.getElementById(`${"agostov10"}`)
                                    mes.innerHTML = `${parseInt(((aug) / (data1.length - aug1)) * 100)}` + "%"
                                }
                                if (mo == "Sep") {
                                    let mes = document.getElementById(`${"setembrov10"}`)
                                    mes.innerHTML = `${parseInt(((sep) / (data1.length - sep1)) * 100)}` + "%"
                                }
                                if (mo == "Oct") {
                                    let mes = document.getElementById(`${"outubrpv10"}`)
                                    mes.innerHTML = `${parseInt(((oct) / (data1.length - oct1)) * 100)}` + "%"
                                }
                                if (mo == "Nov") {
                                    let mes = document.getElementById(`${"novembrov10"}`)
                                    mes.innerHTML = `${parseInt(((nov) / (data1.length - nov1)) * 100)}` + "%"
                                }
                                if (mo == "Dec") {
                                    let mes = document.getElementById(`${"desembrov10"}`)
                                    mes.innerHTML = `${parseInt(((dez) / (data1.length - dez1)) * 100)}` + "%"
                                }

                            }
                        }

                    };
                    let ano = jan + feb + mar + apr + may + jun + jul + aug + sep + oct + nov + dez;
                    let ano1 = jan1 + feb1 + mar1 + apr1 + may1 + jun1 + jul1 + aug1 + sep1 + oct1 + nov1 + dez1;

                    let anovv10 = document.getElementById("anovv10")
                    let zz2 = parseInt(((ano) / (data1.length - ano1)) * 100);
                    anovv10.innerHTML = `${zz2}` + "%";

                });
            let va12 = 0;
            taxaAdimissionald.forEach(rec => {

                var newRow = myTabTEmpresaD.insertRow();
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
                var newCell14 = newRow.insertCell(13);

                newCell1.innerHTML = `<div id=${va12 + rec}>${rec}</div>`;
                newCell2.innerHTML = `<div id=${"janeirovp1" + va12}>-</div>`;
                newCell3.innerHTML = `<div id=${"fevereirovp1" + va12}>-</div>`;
                newCell4.innerHTML = `<div id=${"marcovp1" + va12}>-</div>`;
                newCell5.innerHTML = `<div id=${"abrilvp1" + va12}>-</div>`;
                newCell6.innerHTML = `<div id=${"maiovp1" + va12}>-</div>`;
                newCell7.innerHTML = `<div id=${"junhovp1" + va12}>-</div>`;
                newCell8.innerHTML = `<div id=${"julhovp1" + va12}>-</div>`;
                newCell9.innerHTML = `<div id=${"agostovp1" + va12}>-</div>`;
                newCell10.innerHTML = `<div id=${"setembrovp1" + va12}>-</div>`;
                newCell11.innerHTML = `<div id=${"outubrpvp1" + va12}>-</div>`;
                newCell12.innerHTML = `<div id=${"novembrovp1" + va12}>-</div>`;
                newCell13.innerHTML = `<div id=${"desembrovp1" + va12}>-</div>`;
                newCell14.innerHTML = `<div id=${"anovvp1" + va12}>-</div>`;

                va12++
            })
            myTabTEmpresaD.addEventListener('click', (e) => {
                e.preventDefault();
                alert(e.target.id)
            });
            fetch(url3)
                .then(res => res.json())
                .then(content => {
                    const data1 = content[0]['funcionarios'];
                    console.log(content[0]['funcionarios'])


                    let verdade = true;
                    for (var i = 0; i < data1.length; i++) {
                        var desliga = content[0]['funcionarios'][i]['dataDesligamento'];
                        if (desliga === "") {
                            if (verdade) {
                                const d = new Date(content[0]['funcionarios'][i]['dataAdmissao'])
                                const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                                console.log(`${mo}`);
                                if (mo == "Jan") {
                                    let mes = document.getElementById(`${"janeirovp10"}`)
                                    mes.innerHTML = `${parseInt(((jan1) / (data1.length - jan1)) * 100)}` + "%"
                                }
                                if (mo == "Feb") {
                                    let mes = document.getElementById(`${"fevereirovp10"}`)
                                    mes.innerHTML = `${parseInt(((feb1) / (data1.length - feb1)) * 100)}` + "%"
                                }
                                if (mo == "Mar") {
                                    let mes = document.getElementById(`${"marcovp10"}`)
                                    mes.innerHTML = `${parseInt(((mar1) / (data1.length - mar1)) * 100)}` + "%"
                                }
                                if (mo == "Apr") {
                                    let mes = document.getElementById(`${"abrilvp10"}`)
                                    mes.innerHTML = `${parseInt(((apr1) / (data1.length - apr1)) * 100)}` + "%"
                                }
                                if (mo == "May") {
                                    may++
                                    let mes = document.getElementById(`${"maiovp10"}`)
                                    mes.innerHTML = `${parseInt(((may1) / (data1.length - may1)) * 100)}` + "%"
                                }
                                if (mo == "Jun") {
                                    let mes = document.getElementById(`${"junhovp10"}`)
                                    mes.innerHTML = `${parseInt(((jun1) / (data1.length - jun1)) * 100)}` + "%"
                                }
                                if (mo == "Jul") {
                                    let mes = document.getElementById(`${"julhovp10"}`)
                                    mes.innerHTML = `${parseInt(((jul1) / (data1.length - jul1)) * 100)}` + "%"
                                }
                                if (mo == "Aug") {
                                    let mes = document.getElementById(`${"agostovp10"}`)
                                    mes.innerHTML = `${parseInt(((aug1) / (data1.length - aug1)) * 100)}` + "%"
                                }
                                if (mo == "Sep") {
                                    let mes = document.getElementById(`${"setembrovp10"}`)
                                    mes.innerHTML = `${parseInt(((sep1) / (data1.length - sep1)) * 100)}` + "%"
                                }
                                if (mo == "Oct") {
                                    let mes = document.getElementById(`${"outubrpvp10"}`)
                                    mes.innerHTML = `${parseInt(((oct1) / (data1.length - oct1)) * 100)}` + "%"
                                }
                                if (mo == "Nov") {
                                    let mes = document.getElementById(`${"novembrovp10"}`)
                                    mes.innerHTML = `${parseInt(((nov1) / (data1.length - nov1)) * 100)}` + "%"
                                }
                                if (mo == "Dec") {
                                    let mes = document.getElementById(`${"desembrovp10"}`)
                                    mes.innerHTML = `${parseInt(((dez1) / (data1.length - dez1)) * 100)}` + "%"
                                }

                            }
                        }

                    };
                    let ano = jan + feb + mar + apr + may + jun + jul + aug + sep + oct + nov + dez;
                    let ano1 = jan1 + feb1 + mar1 + apr1 + may1 + jun1 + jul1 + aug1 + sep1 + oct1 + nov1 + dez1;

                    let anovv10 = document.getElementById("anovvp10")
                    let zz2 = parseInt(((ano1) / (data1.length - ano1)) * 100);
                    anovv10.innerHTML = `${zz2}` + "%";

                });

            let vc = 0;
            taxaAdimissionald2.forEach(rec => {

                var newRow = myTabTEmpresaD2.insertRow();
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
                var newCell14 = newRow.insertCell(13);

                newCell1.innerHTML = `<div id=${vc + rec}>${rec}</div>`;
                newCell2.innerHTML = `<div id=${"janeiroc" + vc}>-</div>`;
                newCell3.innerHTML = `<div id=${"fevereiroc" + vc}>-</div>`;
                newCell4.innerHTML = `<div id=${"marcoc" + vc}>-</div>`;
                newCell5.innerHTML = `<div id=${"abrilc" + vc}>-</div>`;
                newCell6.innerHTML = `<div id=${"maioc" + vc}>-</div>`;
                newCell7.innerHTML = `<div id=${"junhoc" + vc}>-</div>`;
                newCell8.innerHTML = `<div id=${"julhoc" + vc}>-</div>`;
                newCell9.innerHTML = `<div id=${"agostoc" + vc}>-</div>`;
                newCell10.innerHTML = `<div id=${"setembroc" + vc}>-</div>`;
                newCell11.innerHTML = `<div id=${"outubroc" + vc}>-</div>`;
                newCell12.innerHTML = `<div id=${"novembroc" + vc}>-</div>`;
                newCell13.innerHTML = `<div id=${"desembroc" + vc}>-</div>`;
                newCell14.innerHTML = `<div id=${"anoc" + vc}>-</div>`;

                vc++
            })


            myTabTEmpresaD2.addEventListener('click', (e) => {
                e.preventDefault();
                alert(e.target.id)
            });
            fetch(url3)
                .then(res => res.json())
                .then(content => {
                    const data1 = content[0]['funcionarios'];
                    console.log(content[0]['funcionarios'])


                    let verdade = true;
                    let janr = 0;
                    let febr = 0;
                    let marr = 0;
                    let aprr = 0;
                    let mayr = 0;
                    let junr = 0;
                    let julr = 0;
                    let augr = 0;
                    let sepr = 0;
                    let octr = 0;
                    let novr = 0;
                    let dezr = 0;
                    let jan1r = 0;
                    let feb1r = 0;
                    let mar1r = 0;
                    let apr1r = 0;
                    let may1r = 0;
                    let jun1r = 0;
                    let jul1r = 0;
                    let aug1r = 0;
                    let sep1r = 0;
                    let oct1r = 0;
                    let nov1r = 0;
                    let dez1r = 0;
                    for (var i = 0; i < data1.length; i++) {
                        var desliga = content[0]['funcionarios'][i]['dataDesligamento'];
                        var dataAdmissao = content[0]['funcionarios'][i]['dataAdmissao'];
                        var d = new Date(desliga);
                        var n = d.getUTCMonth() + 1;
                        var hoj = new Date(dataAdmissao);
                        var hoje = hoj.getUTCMonth() + 1;
                        console.log("=>" + hoje - n)
                        console.log("=>" + n)
                        var hoje2 = hoje - n;
                        if (hoje2 <= 6) {
                            const dea = content[0]['funcionarios'][i]['dataDesligamento']
                            let mo = "";
                            if (dea === "") {
                                console.log('vazio')
                            } else {
                                const d = new Date(dea)
                                mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
                            }
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                janr++
                                let mes = document.getElementById(`${"janeiroc0"}`)
                                mes.innerHTML = `${janr}`
                            }
                            if (mo == "Feb") {
                                febr++
                                let mes = document.getElementById(`${"fevereiroc0"}`)
                                mes.innerHTML = `${febr}`
                            }
                            if (mo == "Mar") {
                                marr++
                                let mes = document.getElementById(`${"marcoc0"}`)
                                mes.innerHTML = `${marr}`
                            }
                            if (mo == "Apr") {
                                aprr++
                                let mes = document.getElementById(`${"abrilc0"}`)
                                mes.innerHTML = `${aprr}`
                            }
                            if (mo == "May") {
                                mayr++
                                let mes = document.getElementById(`${"maioc0"}`)
                                mes.innerHTML = `${mayr}`
                            }
                            if (mo == "Jun") {
                                junr++
                                let mes = document.getElementById(`${"junhoc0"}`)
                                mes.innerHTML = `${junr}`
                            }
                            if (mo == "Jul") {
                                julr++
                                let mes = document.getElementById(`${"julhoc0"}`)
                                mes.innerHTML = `${julr}`
                            }
                            if (mo == "Aug") {
                                augr++
                                let mes = document.getElementById(`${"agostoc0"}`)
                                mes.innerHTML = `${augr}`
                            }
                            if (mo == "Sep") {
                                sepr++
                                let mes = document.getElementById(`${"setembroc0"}`)
                                mes.innerHTML = `${sepr}`
                            }
                            if (mo == "Oct") {
                                octr++
                                let mes = document.getElementById(`${"outubroc0"}`)
                                mes.innerHTML = `${octr}`
                            }
                            if (mo == "Nov") {
                                novr++
                                let mes = document.getElementById(`${"novembroc0"}`)
                                mes.innerHTML = `${novr}`
                            }
                            if (mo == "Dec") {
                                dezr++
                                let mes = document.getElementById(`${"desembroc0"}`)
                                mes.innerHTML = `${dezr}`
                            }
                            menor6++
                        }
                        if (hoje <= 6) {
                            const dea = content[0]['funcionarios'][i]['dataAdmissao']
                            let mo = "";
                            if (dea === "") {
                                console.log('vazio')
                            } else {
                                const d = new Date(dea)
                                mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
                            }
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                jan1r++
                                let mes = document.getElementById(`${"janeiroc1"}`)
                                mes.innerHTML = `${jan1r + janr}`
                            }
                            if (mo == "Feb") {
                                feb1r++
                                let mes = document.getElementById(`${"fevereiroc1"}`)
                                mes.innerHTML = `${feb1r + febr}`
                            }
                            if (mo == "Mar") {
                                mar1r++
                                let mes = document.getElementById(`${"marcoc1"}`)
                                mes.innerHTML = `${mar1r + marr}`
                            }
                            if (mo == "Apr") {
                                apr1r++
                                let mes = document.getElementById(`${"abrilc1"}`)
                                mes.innerHTML = `${apr1r + aprr}`
                            }
                            if (mo == "May") {
                                may1r++
                                let mes = document.getElementById(`${"maioc1"}`)
                                mes.innerHTML = `${may1r + mayr}`
                            }
                            if (mo == "Jun") {
                                jun1r++
                                let mes = document.getElementById(`${"junhoc1"}`)
                                mes.innerHTML = `${jun1r + junr}`
                            }
                            if (mo == "Jul") {
                                jul1r++
                                let mes = document.getElementById(`${"julhoc1"}`)
                                mes.innerHTML = `${jul1r + julr}`
                            }
                            if (mo == "Aug") {
                                aug1r++
                                let mes = document.getElementById(`${"agostoc1"}`)
                                mes.innerHTML = `${aug1r + augr}`
                            }
                            if (mo == "Sep") {
                                sep1r++
                                let mes = document.getElementById(`${"setembroc1"}`)
                                mes.innerHTML = `${sep1r + sepr}`
                            }
                            if (mo == "Oct") {
                                oct1r++
                                let mes = document.getElementById(`${"outubroc1"}`)
                                mes.innerHTML = `${oct1r + octr}`
                            }
                            if (mo == "Nov") {
                                nov1r++
                                let mes = document.getElementById(`${"novembroc1"}`)
                                mes.innerHTML = `${nov1r + novr}`
                            }
                            if (mo == "Dec") {
                                dez1r++
                                let mes = document.getElementById(`${"desembroc1"}`)
                                mes.innerHTML = `${dez1r + dezr}`
                            }
                        }
                        let ano = janr + febr + marr + aprr + mayr + junr + julr + augr + sepr + octr + novr + dezr;
                        let ano1 = jan1r + feb1r + mar1r + apr1r + may1r + jun1r + jul1r + aug1r + sep1r + oct1r + nov1r + dez1r;
                        let anoc = document.getElementById("anoc0")
                        anoc.innerHTML = `${ano}`;
                        let anoc1 = document.getElementById("anoc1")
                        anoc1.innerHTML = `${ano1}`;
                        localStorage.setItem('jan1', janr);
                        localStorage.setItem('fev1', febr);
                        localStorage.setItem('mar1', marr);
                        localStorage.setItem('abr1', aprr);
                        localStorage.setItem('mai1', mayr);
                        localStorage.setItem('jun1', junr);
                        localStorage.setItem('jul1', julr);
                        localStorage.setItem('ago1', augr);
                        localStorage.setItem('set1', sepr);
                        localStorage.setItem('out1', octr);
                        localStorage.setItem('nov1', novr);
                        localStorage.setItem('dez1', dezr);

                    };


                });
            let vc1 = 0;
            taxaAdimissionald3.forEach(rec => {

                var newRow = myTabTEmpresaD3.insertRow();
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
                var newCell14 = newRow.insertCell(13);

                newCell1.innerHTML = `<div id=${vc1 + rec}>${rec}</div>`;
                newCell2.innerHTML = `<div id=${"janeiroc1" + vc1}>-</div>`;
                newCell3.innerHTML = `<div id=${"fevereiroc1" + vc1}>-</div>`;
                newCell4.innerHTML = `<div id=${"marcoc1" + vc1}>-</div>`;
                newCell5.innerHTML = `<div id=${"abrilc1" + vc1}>-</div>`;
                newCell6.innerHTML = `<div id=${"maioc1" + vc1}>-</div>`;
                newCell7.innerHTML = `<div id=${"junhoc1" + vc1}>-</div>`;
                newCell8.innerHTML = `<div id=${"julhoc1" + vc1}>-</div>`;
                newCell9.innerHTML = `<div id=${"agostoc1" + vc1}>-</div>`;
                newCell10.innerHTML = `<div id=${"setembroc1" + vc1}>-</div>`;
                newCell11.innerHTML = `<div id=${"outubroc1" + vc1}>-</div>`;
                newCell12.innerHTML = `<div id=${"novembroc1" + vc1}>-</div>`;
                newCell13.innerHTML = `<div id=${"desembroc1" + vc1}>-</div>`;
                newCell14.innerHTML = `<div id=${"anoc1" + vc1}>-</div>`;

                vc1++
            })
            myTabTEmpresaD3.addEventListener('click', (e) => {
                e.preventDefault();
                alert(e.target.id)
            });
            fetch(url3)
                .then(res => res.json())
                .then(content => {
                    const data1 = content[0]['funcionarios'];
                    let escolaridadeLista = [];
                    let contagem = [];
                    for (var j = 0; j < data1.length; j++) {
                        let tipoDesligamento = content[0]['funcionarios'][j]['tipoDesligamento'];
                        if (tipoDesligamento === "") {
                            console.log("Nenhum")
                        } else {
                            escolaridadeLista.push(content[0]['funcionarios'][j]['tipoDesligamento']);
                            const countUnique = escolaridadeLista => {
                                const counts = {};
                                for (var i = 0; i < escolaridadeLista.length; i++) {
                                    counts[escolaridadeLista[i]] = 1 + (counts[escolaridadeLista[i]] || 0);
                                };
                                return counts;
                            };
                            console.log(countUnique(escolaridadeLista));
                            contagem.push(countUnique(escolaridadeLista))
                            for (var i = 0; i < escolaridadeLista.length; i++) {
                                if (escolaridadeLista[i] == "Demissão por Justa Causa") {
                                    const d = new Date(content[0]['funcionarios'][i]['dataDesligamento'])
                                    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                                    console.log(`${mo}`);
                                    if (mo == "Jan") {
                                        let mes = document.getElementById(`${"janeiroc10"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão por Justa Causa']}`
                                    }
                                    if (mo == "Feb") {
                                        let mes = document.getElementById(`${"fevereiroc10"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão por Justa Causa']}`
                                    }
                                    if (mo == "Mar") {
                                        let mes = document.getElementById(`${"marcoc10"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão por Justa Causa']}`
                                    }
                                    if (mo == "Apr") {
                                        let mes = document.getElementById(`${"abrilc10"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão por Justa Causa']}`
                                    }
                                    if (mo == "May") {
                                        let mes = document.getElementById(`${"maioc10"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão por Justa Causa']}`
                                    }
                                    if (mo == "Jun") {
                                        let mes = document.getElementById(`${"junhoc10"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão por Justa Causa']}`
                                    }
                                    if (mo == "Jul") {
                                        let mes = document.getElementById(`${"julhoc10"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão por Justa Causa']}`
                                    }
                                    if (mo == "Aug") {
                                        let mes = document.getElementById(`${"agostoc10"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão por Justa Causa']}`
                                    }
                                    if (mo == "Sep") {
                                        let mes = document.getElementById(`${"setembroc10"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão por Justa Causa']}`
                                    }
                                    if (mo == "Oct") {
                                        let mes = document.getElementById(`${"outubroc10"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão por Justa Causa']}`
                                    }
                                    if (mo == "Nov") {
                                        let mes = document.getElementById(`${"novembroc10"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão por Justa Causa']}`
                                    }
                                    if (mo == "Dec") {
                                        let mes = document.getElementById(`${"desembro5c10"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão por Justa Causa']}`
                                    }
                                }
                                if (escolaridadeLista[i] == "Demissão Sem Justa Causa") {
                                    const d = new Date(content[0]['funcionarios'][i]['dataDesligamento'])
                                    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                                    console.log(`${mo}`);
                                    if (mo == "Jan") {
                                        let mes = document.getElementById(`${"janeiroc11"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão Sem Justa Causa']}`
                                    }
                                    if (mo == "Feb") {
                                        let mes = document.getElementById(`${"fevereiroc11"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão Sem Justa Causa']}`
                                    }
                                    if (mo == "Mar") {
                                        let mes = document.getElementById(`${"marcoc11"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão Sem Justa Causa']}`
                                    }
                                    if (mo == "Apr") {
                                        let mes = document.getElementById(`${"abrilc11"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão Sem Justa Causa']}`
                                    }
                                    if (mo == "May") {
                                        let mes = document.getElementById(`${"maioc11"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão Sem Justa Causa']}`
                                    }
                                    if (mo == "Jun") {
                                        let mes = document.getElementById(`${"junhoc11"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão Sem Justa Causa']}`
                                    }
                                    if (mo == "Jul") {
                                        let mes = document.getElementById(`${"julhoc11"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão Sem Justa Causa']}`
                                    }
                                    if (mo == "Aug") {
                                        let mes = document.getElementById(`${"agostoc112"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão Sem Justa Causa']}`
                                    }
                                    if (mo == "Sep") {
                                        let mes = document.getElementById(`${"setembroc11"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão Sem Justa Causa']}`
                                    }
                                    if (mo == "Oct") {
                                        let mes = document.getElementById(`${"outubroc11"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão Sem Justa Causa']}`
                                    }
                                    if (mo == "Nov") {
                                        let mes = document.getElementById(`${"novembroc11"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão Sem Justa Causa']}`
                                    }
                                    if (mo == "Dec") {
                                        let mes = document.getElementById(`${"desembroc11"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão Sem Justa Causa']}`
                                    }

                                }
                                if (escolaridadeLista[i] == "Pedido de Demissão Pelo Funcionário") {
                                    const d = new Date(content[0]['funcionarios'][i]['dataDesligamento'])
                                    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                                    console.log(`${mo}`);
                                    if (mo == "Jan") {
                                        let mes = document.getElementById(`${"janeiroc12"}`)
                                        mes.innerHTML = `${contagem[0]['Pedido de Demissão Pelo Funcionário']}`
                                    }
                                    if (mo == "Feb") {
                                        let mes = document.getElementById(`${"fevereiroc12"}`)
                                        mes.innerHTML = `${contagem[0]['Pedido de Demissão Pelo Funcionário']}`
                                    }
                                    if (mo == "Mar") {
                                        let mes = document.getElementById(`${"marcoc12"}`)
                                        mes.innerHTML = `${contagem[0]['Pedido de Demissão Pelo Funcionário']}`
                                    }
                                    if (mo == "Apr") {
                                        let mes = document.getElementById(`${"abrilc12"}`)
                                        mes.innerHTML = `${contagem[0]['Pedido de Demissão Pelo Funcionário']}`
                                    }
                                    if (mo == "May") {
                                        let mes = document.getElementById(`${"maioc12"}`)
                                        mes.innerHTML = `${contagem[0]['Pedido de Demissão Pelo Funcionário']}`
                                    }
                                    if (mo == "Jun") {
                                        let mes = document.getElementById(`${"junhoc12"}`)
                                        mes.innerHTML = `${contagem[0]['Pedido de Demissão Pelo Funcionário']}`
                                    }
                                    if (mo == "Jul") {
                                        let mes = document.getElementById(`${"julhoc12"}`)
                                        mes.innerHTML = `${contagem[0]['Pedido de Demissão Pelo Funcionário']}`
                                    }
                                    if (mo == "Aug") {
                                        let mes = document.getElementById(`${"agostoc12"}`)
                                        mes.innerHTML = `${contagem[0]['Pedido de Demissão Pelo Funcionário']}`
                                    }
                                    if (mo == "Sep") {
                                        let mes = document.getElementById(`${"setembroc12"}`)
                                        mes.innerHTML = `${contagem[0]['Pedido de Demissão Pelo Funcionário']}`
                                    }
                                    if (mo == "Oct") {
                                        let mes = document.getElementById(`${"outubroc12"}`)
                                        mes.innerHTML = `${contagem[0]['Pedido de Demissão Pelo Funcionário']}`
                                    }
                                    if (mo == "Nov") {
                                        let mes = document.getElementById(`${"novembroc12"}`)
                                        mes.innerHTML = `${contagem[0]['Pedido de Demissão Pelo Funcionário']}`
                                    }
                                    if (mo == "Dec") {
                                        let mes = document.getElementById(`${"desembroc12"}`)
                                        mes.innerHTML = `${contagem[0]['Pedido de Demissão Pelo Funcionário']}`
                                    }

                                }
                                if (escolaridadeLista[i] == "Acordo Entre as Partes") {
                                    const d = new Date(content[0]['funcionarios'][i]['dataDesligamento'])
                                    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                                    console.log(`${mo}`);
                                    if (mo == "Jan") {
                                        let mes = document.getElementById(`${"janeiroc13"}`)
                                        mes.innerHTML = `${contagem[0]['Acordo Entre as Partes']}`
                                    }
                                    if (mo == "Feb") {
                                        let mes = document.getElementById(`${"fevereiroc13"}`)
                                        mes.innerHTML = `${contagem[0]['Acordo Entre as Partes']}`
                                    }
                                    if (mo == "Mar") {
                                        let mes = document.getElementById(`${"marcoc13"}`)
                                        mes.innerHTML = `${contagem[0]['Acordo Entre as Partes']}`
                                    }
                                    if (mo == "Apr") {
                                        let mes = document.getElementById(`${"abrilc13"}`)
                                        mes.innerHTML = `${contagem[0]['Acordo Entre as Partes']}`
                                    }
                                    if (mo == "May") {
                                        let mes = document.getElementById(`${"maioc13"}`)
                                        mes.innerHTML = `${contagem[0]['Acordo Entre as Partes']}`
                                    }
                                    if (mo == "Jun") {
                                        let mes = document.getElementById(`${"junhoc13"}`)
                                        mes.innerHTML = `${contagem[0]['Acordo Entre as Partes']}`
                                    }
                                    if (mo == "Jul") {
                                        let mes = document.getElementById(`${"julhoc13"}`)
                                        mes.innerHTML = `${contagem[0]['Acordo Entre as Partes']}`
                                    }
                                    if (mo == "Aug") {
                                        let mes = document.getElementById(`${"agostoc13"}`)
                                        mes.innerHTML = `${contagem[0]['Acordo Entre as Partes']}`
                                    }
                                    if (mo == "Sep") {
                                        let mes = document.getElementById(`${"setembroc13"}`)
                                        mes.innerHTML = `${contagem[0]['Acordo Entre as Partes']}`
                                    }
                                    if (mo == "Oct") {
                                        let mes = document.getElementById(`${"outubroc13"}`)
                                        mes.innerHTML = `${contagem[0]['Acordo Entre as Partes']}`
                                    }
                                    if (mo == "Nov") {
                                        let mes = document.getElementById(`${"novembroc13"}`)
                                        mes.innerHTML = `${contagem[0]['Acordo Entre as Partes']}`
                                    }
                                    if (mo == "Dec") {
                                        let mes = document.getElementById(`${"desembroc13"}`)
                                        mes.innerHTML = `${contagem[0]['Acordo Entre as Partes']}`
                                    }

                                }
                                if (escolaridadeLista[i] == "Demissão Consensual") {
                                    const d = new Date(content[0]['funcionarios'][i]['dataDesligamento'])
                                    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                                    console.log(`${mo}`);
                                    if (mo == "Jan") {
                                        let mes = document.getElementById(`${"janeiroc14"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão Consensual']}`
                                    }
                                    if (mo == "Feb") {
                                        let mes = document.getElementById(`${"fevereiroc14"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão Consensual']}`
                                    }
                                    if (mo == "Mar") {
                                        let mes = document.getElementById(`${"marcoc14"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão Consensual']}`
                                    }
                                    if (mo == "Apr") {
                                        let mes = document.getElementById(`${"abrilc14"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão Consensual']}`
                                    }
                                    if (mo == "May") {
                                        let mes = document.getElementById(`${"maioc14"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão Consensual']}`
                                    }
                                    if (mo == "Jun") {
                                        let mes = document.getElementById(`${"junhoc14"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão Consensual']}`
                                    }
                                    if (mo == "Jul") {
                                        let mes = document.getElementById(`${"julho3"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão Consensual']}`
                                    }
                                    if (mo == "Aug") {
                                        let mes = document.getElementById(`${"agostoc14"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão Consensual']}`
                                    }
                                    if (mo == "Sep") {
                                        let mes = document.getElementById(`${"setembroc14"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão Consensual']}`
                                    }
                                    if (mo == "Oct") {
                                        let mes = document.getElementById(`${"outubroc14"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão Consensual']}`
                                    }
                                    if (mo == "Nov") {
                                        let mes = document.getElementById(`${"novembroc14"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão Consensual']}`
                                    }
                                    if (mo == "Dec") {
                                        let mes = document.getElementById(`${"desembroc14"}`)
                                        mes.innerHTML = `${contagem[0]['Demissão Consensual']}`
                                    }

                                }
                                if (escolaridadeLista[i] == "Término do Contrato de Estágio") {
                                    const d = new Date(content[0]['funcionarios'][i]['dataDesligamento'])
                                    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                                    console.log(`${mo}`);
                                    if (mo == "Jan") {
                                        let mes = document.getElementById(`${"janeiroc15"}`)
                                        mes.innerHTML = `${contagem[0]['Término do Contrato de Estágio']}`
                                    }
                                    if (mo == "Feb") {
                                        let mes = document.getElementById(`${"fevereiroc15"}`)
                                        mes.innerHTML = `${contagem[0]['Término do Contrato de Estágio']}`
                                    }
                                    if (mo == "Mar") {
                                        let mes = document.getElementById(`${"marcoc15"}`)
                                        mes.innerHTML = `${contagem[0]['Término do Contrato de Estágio']}`
                                    }
                                    if (mo == "Apr") {
                                        let mes = document.getElementById(`${"abrilc15"}`)
                                        mes.innerHTML = `${contagem[0]['Término do Contrato de Estágio']}`
                                    }
                                    if (mo == "May") {
                                        let mes = document.getElementById(`${"maioc15"}`)
                                        mes.innerHTML = `${contagem[0]['Término do Contrato de Estágio']}`
                                    }
                                    if (mo == "Jun") {
                                        let mes = document.getElementById(`${"junhoc15"}`)
                                        mes.innerHTML = `${contagem[0]['Término do Contrato de Estágio']}`
                                    }
                                    if (mo == "Jul") {
                                        let mes = document.getElementById(`${"julhoc15"}`)
                                        mes.innerHTML = `${contagem[0]['Término do Contrato de Estágio']}`
                                    }
                                    if (mo == "Aug") {
                                        let mes = document.getElementById(`${"agostoc15"}`)
                                        mes.innerHTML = `${contagem[0]['Término do Contrato de Estágio']}`
                                    }
                                    if (mo == "Sep") {
                                        let mes = document.getElementById(`${"setembroc15"}`)
                                        mes.innerHTML = `${contagem[0]['Término do Contrato de Estágio']}`
                                    }
                                    if (mo == "Oct") {
                                        let mes = document.getElementById(`${"outubroc15"}`)
                                        mes.innerHTML = `${contagem[0]['Término do Contrato de Estágio']}`
                                    }
                                    if (mo == "Nov") {
                                        let mes = document.getElementById(`${"novembroc15"}`)
                                        mes.innerHTML = `${contagem[0]['Término do Contrato de Estágio']}`
                                    }
                                    if (mo == "Dec") {
                                        let mes = document.getElementById(`${"desembroc15"}`)
                                        mes.innerHTML = `${contagem[0]['Término do Contrato de Estágio']}`
                                    }

                                }
                            }
                        }
                    }



                });

            $(document).ready(function () {
                $('#tabbb').DataTable({
                    "scrollX": true,
                    "scrollY": 200,
                });
            });

            $(document).ready(function () {
                $('#tabbb2').DataTable({
                    "scrollX": true,
                    "scrollY": 300,
                });
            });

            $(document).ready(function () {
                $('#tabbb3').DataTable({
                    "scrollX": true,
                    "scrollY": 200,
                });
            });
            $(document).ready(function () {
                $('#tabbb4').DataTable({
                    "scrollX": true,
                    "scrollY": 100,
                });
            });
            $(document).ready(function () {
                $('#tabbb5').DataTable({
                    "scrollX": true,
                    "scrollY": 100,
                });
            });

            $(document).ready(function () {
                $('#tabbb6').DataTable({
                    "scrollX": true,
                    "scrollY": 200,
                });
            });

            $(document).ready(function () {
                $('#tabbb7').DataTable({
                    "scrollX": true,
                    "scrollY": 350,
                });
            });
        }

        if (e.target.id == "absent") {
            nada = '';
            nada = `<div id="centro">
        <div class="animate__animated animate__pulse card3 text-center mr-4">
          <div class="row align-items-center">
              <div class="col-md-6">
                <h1 class="mb-4 text-black"><span class="text-black">Relatórios</span></h1>
                <h3 class="mb-4 text-black">Relatório de Absenteismo</h3>
              </div>
              <div class="col-md-6 d-none d-sm-none d-md-block">
                <img src="pics/Stocks2.png" alt="tours pics" class="img-fluid">
              </div>
            </div>
      </div>
      </div>
      <div class="text-center card4">
          <div class="row p-3">
                                  <div class="col-md">
                                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="perfil" >Perfil</a>                                                     
                                  </div>
                                  <div class="col-md">
                                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="altFunc2">Rotatividade</a>
                                  </div>
                                  <div class="col-md">
                                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="absent">Absenteismo</a>
                                  </div>
                                  <div class="col-md">
                                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="recrSelecc2"><h6>Rec. e Selecção</h6></a>
                                  </div>
                                  <div class="col-md">
                                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="financ">Financeiro</a>
                                  </div>
    
                                  <div class="col-md">
                                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="treinamentosRelatorio">Treinamentos</a>
                                  </div>
    
                              </div>
                    </div>
                    <div class="text-center card5">
                        <h1 class="h4 text-black mb-4">Quantidade de Colaboradores</h1>
                    </div>
                    <div class="text-center cardTab cardTab animate__animated animate__pulse">
                    <table class="table m-2" id="tabbb">
                            <thead>
                              <tr class="bg-gradient-primary text-center text-black">
                                <th scope="col"></th>
                                <th>Janeiro</th>
                                <th>Fevereiro</th>
                                <th>Marco</th>
                                <th>Abril</th>
                                <th>Maio</th>
                                <th>Junho</th>
                                <th>Julho</th>
                                <th>Agosto</th>
                                <th>Setembro</th>
                                <th>Outubro</th>
                                <th>Novembro</th>
                                <th>Dezembro</th>
                                <th>Ano</th>
                              </tr>
                            </thead>
                            <tbody id="myTableeee" class="tt text-center text-black"">                     
                            </tbody>
                        </table>
                    </div>
    
                    <div class="text-center card5">
                        <h1 class="h4 text-black mb-4">Total de horas de trabalho</h1>
                    </div>
                    <div class="text-center cardTab cardTab animate__animated animate__pulse">
                    <table class="table m-2" id="tabbb2">
                    <thead>
                      <tr class="bg-gradient-primary text-center text-black">
                        <th scope="col"></th>
                        <th>Janeiro</th>
                        <th>Fevereiro</th>
                        <th>Marco</th>
                        <th>Abril</th>
                        <th>Maio</th>
                        <th>Junho</th>
                        <th>Julho</th>
                        <th>Agosto</th>
                        <th>Setembro</th>
                        <th>Outubro</th>
                        <th>Novembro</th>
                        <th>Dezembro</th>
                        <th>Ano</th>
                      </tr>
                    </thead>
                    <tbody id="myTabGenero" class="tt text-center text-black"">                     
                    </tbody>
                </table>
                    </div>
    
    
                    <div class="text-center card5">
                        <h1 class="h4 text-black mb-4">Tipo de Ausências</h1>
                    </div>
                    <div class="text-center cardTab cardTab animate__animated animate__pulse">
                    <table class="table m-2" id="tabbb3">
                            <thead>
                              <tr class="bg-gradient-primary text-center text-black">
                                <th scope="col"></th>
                                <th>Janeiro</th>
                                <th>Fevereiro</th>
                                <th>Marco</th>
                                <th>Abril</th>
                                <th>Maio</th>
                                <th>Junho</th>
                                <th>Julho</th>
                                <th>Agosto</th>
                                <th>Setembro</th>
                                <th>Outubro</th>
                                <th>Novembro</th>
                                <th>Dezembro</th>
                                <th>Ano</th>
                              </tr>
                            </thead>
                            <tbody id="myTabEtaria" class="tt text-center text-black"">                     
                            </tbody>
                        </table>
                    </div>
    
                    <div class="text-center card5">
                        <h1 class="h4 text-black mb-4">Taxa de Absenteismo</h1>
                    </div>
                    <div class="text-center cardTab cardTab animate__animated animate__pulse">
                    <table class="table m-2" id="tabbb4">
                            <thead>
                              <tr class="bg-gradient-primary text-center text-black">
                                <th scope="col"></th>
                                <th>Janeiro</th>
                                <th>Fevereiro</th>
                                <th>Marco</th>
                                <th>Abril</th>
                                <th>Maio</th>
                                <th>Junho</th>
                                <th>Julho</th>
                                <th>Agosto</th>
                                <th>Setembro</th>
                                <th>Outubro</th>
                                <th>Novembro</th>
                                <th>Dezembro</th>
                                <th>Ano</th>
                              </tr>
                            </thead>
                            <tbody id="myTabTEmpresa" class="tt text-center text-black"">                     
                            </tbody>
                        </table>
                    </div>
    
    
                    <div class="text-center card5">
                    <h1 class="h4 text-black mb-4">Gravidade</h1>
                    </div>
                    <div class="text-center cardTab cardTab animate__animated animate__pulse">
                    <table class="table m-2" id="tabbb5">
                                <thead>
                                  <tr class="bg-gradient-primary text-center text-black">
                                    <th scope="col"></th>
                                    <th>Janeiro</th>
                                    <th>Fevereiro</th>
                                    <th>Marco</th>
                                    <th>Abril</th>
                                    <th>Maio</th>
                                    <th>Junho</th>
                                    <th>Julho</th>
                                    <th>Agosto</th>
                                    <th>Setembro</th>
                                    <th>Outubro</th>
                                    <th>Novembro</th>
                                    <th>Dezembro</th>
                                    <th>Ano</th>
                                  </tr>
                                </thead>
                                <tbody id="myTabTEmpresaD" class="tt text-center text-black"">                     
                                </tbody>
                            </table>
                    </div>
    
                    <div class="text-center card5">
                    <h1 class="h4 text-black mb-4">Ausências Planejadas</h1>
                    </div>
                    <div class="text-center cardTab cardTab animate__animated animate__pulse">
                    <table class="table m-2" id="tabbb6">
                            <thead>
                              <tr class="bg-gradient-primary text-center text-black">
                                <th scope="col"></th>
                                <th>Janeiro</th>
                                <th>Fevereiro</th>
                                <th>Marco</th>
                                <th>Abril</th>
                                <th>Maio</th>
                                <th>Junho</th>
                                <th>Julho</th>
                                <th>Agosto</th>
                                <th>Setembro</th>
                                <th>Outubro</th>
                                <th>Novembro</th>
                                <th>Dezembro</th>
                                <th>Ano</th>
                              </tr>
                            </thead>
                            <tbody id="myTabTEmpresaD2" class="tt text-center text-black"">                     
                            </tbody>
                        </table>
                    </div>
    
    
    
                    <div class="text-center card5">
                    <h1 class="h4 text-black mb-4">Ausências não Planejadas</h1>
                    </div>
                    <div class="text-center cardTab cardTab animate__animated animate__pulse">
                    <div class="col-md">
                        <table class="table m-2" id="tabbb7">
                            <thead>
                              <tr class="bg-gradient-primary text-center text-black">
                                <th scope="col">Tipos de Desligamentos</th>
                                <th>Janeiro</th>
                                <th>Fevereiro</th>
                                <th>Marco</th>
                                <th>Abril</th>
                                <th>Maio</th>
                                <th>Junho</th>
                                <th>Julho</th>
                                <th>Agosto</th>
                                <th>Setembro</th>
                                <th>Outubro</th>
                                <th>Novembro</th>
                                <th>Dezembro</th>
                                <th>Ano</th>
                              </tr>
                            </thead>
                            <tbody id="myTabTEmpresaD3" class="tt text-center text-black">                     
                            </tbody>
                        </table>
                    </div>
                    </div>
          
          `;
            contrudo.innerHTML = nada;
            const tablerrr = document.getElementById('myTableeee');
            const myTabGenero = document.getElementById('myTabGenero');
            const myTabEtaria = document.getElementById('myTabEtaria');
            const myTabTEmpresa = document.getElementById('myTabTEmpresa');
            const myTabTEmpresaD = document.getElementById('myTabTEmpresaD');
            const myTabTEmpresaD2 = document.getElementById('myTabTEmpresaD2');
            const myTabTEmpresaD3 = document.getElementById('myTabTEmpresaD3');
            colabora = '';
            titulo = '';
            const empresa2 = localStorage.getItem('empresa');
            const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2}`;
            let v = 0;
            let justificada = 0;
            let naoJustificada = 0;
            let justificada1 = 0;
            let naoJustificada1 = 0;
            let justificada2 = 0;
            let naoJustificada2 = 0;
            let justificada3 = 0;
            let naoJustificada3 = 0;
            let justificada4 = 0;
            let naoJustificada4 = 0;
            let justificada5 = 0;
            let naoJustificada5 = 0;
            let justificada6 = 0;
            let naoJustificada6 = 0;
            let justificada7 = 0;
            let naoJustificada7 = 0;
            let justificada8 = 0;
            let naoJustificada8 = 0;
            let justificada9 = 0;
            let naoJustificada9 = 0;
            let justificada10 = 0;
            let naoJustificada10 = 0;
            let justificada11 = 0;
            let naoJustificada11 = 0;
            let jan = 0;
            let feb = 0;
            let mar = 0;
            let apr = 0;
            let may = 0;
            let jun = 0;
            let jul = 0;
            let aug = 0;
            let sep = 0;
            let oct = 0;
            let nov = 0;
            let dez = 0;
            let jan1 = 0;
            let feb1 = 0;
            let mar1 = 0;
            let apr1 = 0;
            let may1 = 0;
            let jun1 = 0;
            let jul1 = 0;
            let aug1 = 0;
            let sep1 = 0;
            let oct1 = 0;
            let nov1 = 0;
            let dez1 = 0;
            let totalTodasFaltas = 0;
            let totalJustificadas = 0;
            let totalNaoJustificadas = 0;
            let segundaj = 0;
            let tercaj = 0;
            let quartaj = 0;
            let quintaj = 0;
            let sextaj = 0;
            let sabadoj = 0;
            let domingoj = 0;
            let segundaf = 0;
            let tercaf = 0;
            let quartaf = 0;
            let quintaf = 0;
            let sextaf = 0;
            let sabadof = 0;
            let domingof = 0;
            let segundam = 0;
            let tercam = 0;
            let quartam = 0;
            let quintam = 0;
            let sextam = 0;
            let sabadom = 0;
            let domingom = 0;
            let segundaa = 0;
            let tercaa = 0;
            let quartaa = 0;
            let quintaa = 0;
            let sextaa = 0;
            let sabadoa = 0;
            let domingoa = 0;
            let segunda1 = 0;
            let terca1 = 0;
            let quarta1 = 0;
            let quinta1 = 0;
            let sexta1 = 0;
            let sabado1 = 0;
            let domingo1 = 0;
            let segunda12 = 0;
            let terca12 = 0;
            let quarta12 = 0;
            let quinta12 = 0;
            let sexta12 = 0;
            let sabado12 = 0;
            let domingo12 = 0;
            let segunda13 = 0;
            let terca13 = 0;
            let quarta13 = 0;
            let quinta13 = 0;
            let sexta13 = 0;
            let sabado13 = 0;
            let domingo13 = 0;
            let segunda14 = 0;
            let terca14 = 0;
            let quarta14 = 0;
            let quinta14 = 0;
            let sexta14 = 0;
            let sabado14 = 0;
            let domingo14 = 0;
            let segunda15 = 0;
            let terca15 = 0;
            let quarta15 = 0;
            let quinta15 = 0;
            let sexta15 = 0;
            let sabado15 = 0;
            let domingo15 = 0;
            let segunda16 = 0;
            let terca16 = 0;
            let quarta16 = 0;
            let quinta16 = 0;
            let sexta16 = 0;
            let sabado16 = 0;
            let domingo16 = 0;
            let segunda17 = 0;
            let terca17 = 0;
            let quarta17 = 0;
            let quinta17 = 0;
            let sexta17 = 0;
            let sabado17 = 0;
            let domingo17 = 0;
            let segunda18 = 0;
            let terca18 = 0;
            let quarta18 = 0;
            let quinta18 = 0;
            let sexta18 = 0;
            let sabado18 = 0;
            let domingo18 = 0;
            let variaTotal = 0;
            variacaoMensal1.forEach(rec => {
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
                var newCell13 = newRow.insertCell(12);
                var newCell14 = newRow.insertCell(13);

                newCell1.innerHTML = `<div id=${v + rec}>${rec}</div>`;
                newCell2.innerHTML = `<div id=${"janeirot" + v}>-</div>`;
                newCell3.innerHTML = `<div id=${"fevereirot" + v}>-</div>`;
                newCell4.innerHTML = `<div id=${"marcot" + v}>-</div>`;
                newCell5.innerHTML = `<div id=${"abrilt" + v}>-</div>`;
                newCell6.innerHTML = `<div id=${"maiot" + v}>-</div>`;
                newCell7.innerHTML = `<div id=${"junhot" + v}>-</div>`;
                newCell8.innerHTML = `<div id=${"julhot" + v}>-</div>`;
                newCell9.innerHTML = `<div id=${"agostot" + v}>-</div>`;
                newCell10.innerHTML = `<div id=${"setembrot" + v}>-</div>`;
                newCell11.innerHTML = `<div id=${"outubrot" + v}>-</div>`;
                newCell12.innerHTML = `<div id=${"novembrot" + v}>-</div>`;
                newCell13.innerHTML = `<div id=${"desembrot" + v}>-</div>`;
                newCell14.innerHTML = `<div id=${"anot" + v}>-</div>`;

                v++
            });
            tablerrr.addEventListener('click', (e) => {
                e.preventDefault();
                alert(e.target.id)
            });
            fetch(url3)
                .then(res => res.json())
                .then(content => {
                    const data1 = content[0]['funcionarios'];
                    console.log(content[0]['funcionarios'])
                    const mesHoje = new Date();
                    let mesAgora = mesHoje.getMonth();
                    console.log(mesAgora);
                    if (mesAgora == 1) {
                        let janeirot0 = document.getElementById(`${"janeirot0"}`)
                        janeirot0.innerHTML = `${data1.length - feb1 - jan1}`
                        let mesaj = data1.length - jan1

                        localStorage.setItem('jan1a', mesaj);
                    }
                    if (mesAgora == 2) {
                        let janeirot0 = document.getElementById(`${"janeirot0"}`)
                        janeirot0.innerHTML = `${data1.length - jan1}`
                        let fevereirot0 = document.getElementById(`${"fevereirot0"}`)
                        fevereirot0.innerHTML = `${data1.length - feb1}`
                        let mesaj = data1.length - jan1
                        let mesaf = data1.length - feb1

                        localStorage.setItem('jan1a', mesaj);
                        localStorage.setItem('fev1a', mesaf);
                    }
                    if (mesAgora == 3) {
                        let janeirot0 = document.getElementById(`${"janeirot0"}`)
                        janeirot0.innerHTML = `${data1.length - jan1}`
                        let fevereirot0 = document.getElementById(`${"fevereirot0"}`)
                        fevereirot0.innerHTML = `${data1.length - feb1}`
                        let marcot0 = document.getElementById(`${"marcot0"}`)
                        marcot0.innerHTML = `${data1.length - mar1}`
                        let mesaj = data1.length - jan1
                        let mesaf = data1.length - feb1
                        let mesam = data1.length - mar1

                        localStorage.setItem('jan1a', mesaj);
                        localStorage.setItem('fev1a', mesaf);
                        localStorage.setItem('mar1a', mesam);
                    }
                    if (mesAgora == 4) {
                        let janeirot0 = document.getElementById(`${"janeirot0"}`)
                        janeirot0.innerHTML = `${data1.length - jan1}`
                        let fevereirot0 = document.getElementById(`${"fevereirot0"}`)
                        fevereirot0.innerHTML = `${data1.length - feb1}`
                        let marcot0 = document.getElementById(`${"marcot0"}`)
                        marcot0.innerHTML = `${data1.length - mar1}`
                        let abrilt0 = document.getElementById(`${"abrilt0"}`)
                        abrilt0.innerHTML = `${data1.length - apr1}`
                        let mesaj = data1.length - jan1
                        let mesaf = data1.length - feb1
                        let mesam = data1.length - mar1
                        let mesaa = data1.length - apr1

                        localStorage.setItem('jan1a', mesaj);
                        localStorage.setItem('fev1a', mesaf);
                        localStorage.setItem('mar1a', mesam);
                        localStorage.setItem('abr1a', mesaa);
                    }
                    if (mesAgora == 5) {
                        let janeirot0 = document.getElementById(`${"janeirot0"}`)
                        janeirot0.innerHTML = `${data1.length - jan1}`
                        let fevereirot0 = document.getElementById(`${"fevereirot0"}`)
                        fevereirot0.innerHTML = `${data1.length - feb1}`
                        let marcot0 = document.getElementById(`${"marcot0"}`)
                        marcot0.innerHTML = `${data1.length - mar1}`
                        let abrilt0 = document.getElementById(`${"abrilt0"}`)
                        abrilt0.innerHTML = `${data1.length - apr1}`
                        let maiot0 = document.getElementById(`${"maiot0"}`)
                        maiot0.innerHTML = `${data1.length - may1}`
                        let mesaj = data1.length - jan1
                        let mesaf = data1.length - feb1
                        let mesam = data1.length - mar1
                        let mesaa = data1.length - apr1
                        let mesamm = data1.length - may1

                        localStorage.setItem('jan1a', mesaj);
                        localStorage.setItem('fev1a', mesaf);
                        localStorage.setItem('mar1a', mesam);
                        localStorage.setItem('abr1a', mesaa);
                        localStorage.setItem('mai1a', mesamm);
                    }
                    if (mesAgora == 6) {
                        let janeirot0 = document.getElementById(`${"janeirot0"}`)
                        janeirot0.innerHTML = `${data1.length - jan1}`
                        let fevereirot0 = document.getElementById(`${"fevereirot0"}`)
                        fevereirot0.innerHTML = `${data1.length - feb1}`
                        let marcot0 = document.getElementById(`${"marcot0"}`)
                        marcot0.innerHTML = `${data1.length - mar1}`
                        let abrilt0 = document.getElementById(`${"abrilt0"}`)
                        abrilt0.innerHTML = `${data1.length - apr1}`
                        let maiot0 = document.getElementById(`${"maiot0"}`)
                        maiot0.innerHTML = `${data1.length - may1}`
                        let junhot0 = document.getElementById(`${"junhot0"}`)
                        junhot0.innerHTML = `${data1.length - jun1}`
                        let mesaj = data1.length - jan1
                        let mesaf = data1.length - feb1
                        let mesam = data1.length - mar1
                        let mesaa = data1.length - apr1
                        let mesamm = data1.length - may1
                        let mesajj = data1.length - jun1

                        localStorage.setItem('jan1a', mesaj);
                        localStorage.setItem('fev1a', mesaf);
                        localStorage.setItem('mar1a', mesam);
                        localStorage.setItem('abr1a', mesaa);
                        localStorage.setItem('mai1a', mesamm);
                        localStorage.setItem('jun1a', mesajj);
                    }
                    if (mesAgora == 7) {
                        let janeirot0 = document.getElementById(`${"janeirot0"}`)
                        janeirot0.innerHTML = `${data1.length - jan1}`
                        let fevereirot0 = document.getElementById(`${"fevereirot0"}`)
                        fevereirot0.innerHTML = `${data1.length - feb1}`
                        let marcot0 = document.getElementById(`${"marcot0"}`)
                        marcot0.innerHTML = `${data1.length - mar1}`
                        let abrilt0 = document.getElementById(`${"abrilt0"}`)
                        abrilt0.innerHTML = `${data1.length - apr1}`
                        let maiot0 = document.getElementById(`${"maiot0"}`)
                        maiot0.innerHTML = `${data1.length - may1}`
                        let junhot0 = document.getElementById(`${"junhot0"}`)
                        junhot0.innerHTML = `${data1.length - jun1}`
                        let julhot0 = document.getElementById(`${"julhot0"}`)
                        julhot0.innerHTML = `${data1.length - jul1}`
                        let mesaj = data1.length - jan1
                        let mesaf = data1.length - feb1
                        let mesam = data1.length - mar1
                        let mesaa = data1.length - apr1
                        let mesamm = data1.length - may1
                        let mesajj = data1.length - jun1
                        let mesajjj = data1.length - jul1

                        localStorage.setItem('jan1a', mesaj);
                        localStorage.setItem('fev1a', mesaf);
                        localStorage.setItem('mar1a', mesam);
                        localStorage.setItem('abr1a', mesaa);
                        localStorage.setItem('mai1a', mesamm);
                        localStorage.setItem('jun1a', mesajj);
                        localStorage.setItem('jul1a', mesajjj);
                    }
                    if (mesAgora == 8) {
                        let janeirot0 = document.getElementById(`${"janeirot0"}`)
                        janeirot0.innerHTML = `${data1.length - jan1}`
                        let fevereirot0 = document.getElementById(`${"fevereirot0"}`)
                        fevereirot0.innerHTML = `${data1.length - feb1}`
                        let marcot0 = document.getElementById(`${"marcot0"}`)
                        marcot0.innerHTML = `${data1.length - mar1}`
                        let abrilt0 = document.getElementById(`${"abrilt0"}`)
                        abrilt0.innerHTML = `${data1.length - apr1}`
                        let maiot0 = document.getElementById(`${"maiot0"}`)
                        maiot0.innerHTML = `${data1.length - may1}`
                        let junhot0 = document.getElementById(`${"junhot0"}`)
                        junhot0.innerHTML = `${data1.length - jun1}`
                        let julhot0 = document.getElementById(`${"julhot0"}`)
                        julhot0.innerHTML = `${data1.length - jul1}`
                        let agostot0 = document.getElementById(`${"agostot0"}`)
                        agostot0.innerHTML = `${data1.length - aug1}`
                        let mesaj = data1.length - jan1
                        let mesaf = data1.length - feb1
                        let mesam = data1.length - mar1
                        let mesaa = data1.length - apr1
                        let mesamm = data1.length - may1
                        let mesajj = data1.length - jun1
                        let mesajjj = data1.length - jul1
                        let mesag = data1.length - aug1

                        localStorage.setItem('jan1a', mesaj);
                        localStorage.setItem('fev1a', mesaf);
                        localStorage.setItem('mar1a', mesam);
                        localStorage.setItem('abr1a', mesaa);
                        localStorage.setItem('mai1a', mesamm);
                        localStorage.setItem('jun1a', mesajj);
                        localStorage.setItem('jul1a', mesajjj);
                        localStorage.setItem('ago1a', mesag);
                    }
                    if (mesAgora == 9) {
                        let janeirot0 = document.getElementById(`${"janeirot0"}`)
                        janeirot0.innerHTML = `${data1.length - jan1}`
                        let fevereirot0 = document.getElementById(`${"fevereirot0"}`)
                        fevereirot0.innerHTML = `${data1.length - feb1}`
                        let marcot0 = document.getElementById(`${"marcot0"}`)
                        marcot0.innerHTML = `${data1.length - mar1}`
                        let abrilt0 = document.getElementById(`${"abrilt0"}`)
                        abrilt0.innerHTML = `${data1.length - apr1}`
                        let maiot0 = document.getElementById(`${"maiot0"}`)
                        maiot0.innerHTML = `${data1.length - may1}`
                        let junhot0 = document.getElementById(`${"junhot0"}`)
                        junhot0.innerHTML = `${data1.length - jun1}`
                        let julhot0 = document.getElementById(`${"julhot0"}`)
                        julhot0.innerHTML = `${data1.length - jul1}`
                        let agostot0 = document.getElementById(`${"agostot0"}`)
                        agostot0.innerHTML = `${data1.length - aug1}`
                        let setembrot0 = document.getElementById(`${"setembrot0"}`)
                        setembrot0.innerHTML = `${data1.length - sep1}`
                        let mesaj = data1.length - jan1
                        let mesaf = data1.length - feb1
                        let mesam = data1.length - mar1
                        let mesaa = data1.length - apr1
                        let mesamm = data1.length - may1
                        let mesajj = data1.length - jun1
                        let mesajjj = data1.length - jul1
                        let mesag = data1.length - aug1
                        let mesas = data1.length - sep1

                        localStorage.setItem('jan1a', mesaj);
                        localStorage.setItem('fev1a', mesaf);
                        localStorage.setItem('mar1a', mesam);
                        localStorage.setItem('abr1a', mesaa);
                        localStorage.setItem('mai1a', mesamm);
                        localStorage.setItem('jun1a', mesajj);
                        localStorage.setItem('jul1a', mesajjj);
                        localStorage.setItem('ago1a', mesag);
                        localStorage.setItem('set1a', mesas);
                    }
                    if (mesAgora == 10) {
                        let janeirot0 = document.getElementById(`${"janeirot0"}`)
                        janeirot0.innerHTML = `${data1.length - jan1}`
                        let fevereirot0 = document.getElementById(`${"fevereirot0"}`)
                        fevereirot0.innerHTML = `${data1.length - feb1}`
                        let marcot0 = document.getElementById(`${"marcot0"}`)
                        marcot0.innerHTML = `${data1.length - mar1}`
                        let abrilt0 = document.getElementById(`${"abrilt0"}`)
                        abrilt0.innerHTML = `${data1.length - apr1}`
                        let maiot0 = document.getElementById(`${"maiot0"}`)
                        maiot0.innerHTML = `${data1.length - may1}`
                        let junhot0 = document.getElementById(`${"junhot0"}`)
                        junhot0.innerHTML = `${data1.length - jun1}`
                        let julhot0 = document.getElementById(`${"julhot0"}`)
                        julhot0.innerHTML = `${data1.length - jul1}`
                        let agostot0 = document.getElementById(`${"agostot0"}`)
                        agostot0.innerHTML = `${data1.length - aug1}`
                        let setembrot0 = document.getElementById(`${"setembrot0"}`)
                        setembrot0.innerHTML = `${data1.length - sep1}`
                        let outubrpt0 = document.getElementById(`${"outubrpt0"}`)
                        outubrpt0.innerHTML = `${data1.length - oct1}`
                        let mesaj = data1.length - jan1
                        let mesaf = data1.length - feb1
                        let mesam = data1.length - mar1
                        let mesaa = data1.length - apr1
                        let mesamm = data1.length - may1
                        let mesajj = data1.length - jun1
                        let mesajjj = data1.length - jul1
                        let mesag = data1.length - aug1
                        let mesas = data1.length - sep1
                        let mesao = data1.length - oct1

                        localStorage.setItem('jan1a', mesaj);
                        localStorage.setItem('fev1a', mesaf);
                        localStorage.setItem('mar1a', mesam);
                        localStorage.setItem('abr1a', mesaa);
                        localStorage.setItem('mai1a', mesamm);
                        localStorage.setItem('jun1a', mesajj);
                        localStorage.setItem('jul1a', mesajjj);
                        localStorage.setItem('ago1a', mesag);
                        localStorage.setItem('set1a', mesas);
                        localStorage.setItem('out1a', mesao);
                    }
                    if (mesAgora == 11) {
                        let janeirot0 = document.getElementById(`${"janeirot0"}`)
                        janeirot0.innerHTML = `${data1.length - jan1}`
                        let fevereirot0 = document.getElementById(`${"fevereirot0"}`)
                        fevereirot0.innerHTML = `${data1.length - feb1}`
                        let marcot0 = document.getElementById(`${"marcot0"}`)
                        marcot0.innerHTML = `${data1.length - mar1}`
                        let abrilt0 = document.getElementById(`${"abrilt0"}`)
                        abrilt0.innerHTML = `${data1.length - apr1}`
                        let maiot0 = document.getElementById(`${"maiot0"}`)
                        maiot0.innerHTML = `${data1.length - may1}`
                        let junhot0 = document.getElementById(`${"junhot0"}`)
                        junhot0.innerHTML = `${data1.length - jun1}`
                        let julhot0 = document.getElementById(`${"julhot0"}`)
                        julhot0.innerHTML = `${data1.length - jul1}`
                        let agostot0 = document.getElementById(`${"agostot0"}`)
                        agostot0.innerHTML = `${data1.length - aug1}`
                        let setembrot0 = document.getElementById(`${"setembrot0"}`)
                        setembrot0.innerHTML = `${data1.length - sep1}`
                        let outubrpt0 = document.getElementById(`${"outubrpt0"}`)
                        outubrpt0.innerHTML = `${data1.length - oct1}`
                        let novembrot0 = document.getElementById(`${"novembrot0"}`)
                        novembrot0.innerHTML = `${data1.length - nov1}`
                        let mesaj = data1.length - jan1
                        let mesaf = data1.length - feb1
                        let mesam = data1.length - mar1
                        let mesaa = data1.length - apr1
                        let mesamm = data1.length - may1
                        let mesajj = data1.length - jun1
                        let mesajjj = data1.length - jul1
                        let mesag = data1.length - aug1
                        let mesas = data1.length - sep1
                        let mesao = data1.length - oct1
                        let mesann = data1.length - nov1

                        localStorage.setItem('jan1a', mesaj);
                        localStorage.setItem('fev1a', mesaf);
                        localStorage.setItem('mar1a', mesam);
                        localStorage.setItem('abr1a', mesaa);
                        localStorage.setItem('mai1a', mesamm);
                        localStorage.setItem('jun1a', mesajj);
                        localStorage.setItem('jul1a', mesajjj);
                        localStorage.setItem('ago1a', mesag);
                        localStorage.setItem('set1a', mesas);
                        localStorage.setItem('out1a', mesao);
                        localStorage.setItem('nov1a', mesann);
                    }
                    if (mesAgora == 12) {
                        let janeirot0 = document.getElementById(`${"janeirot0"}`)
                        janeirot0.innerHTML = `${data1.length - jan1}`
                        let fevereirot0 = document.getElementById(`${"fevereirot0"}`)
                        fevereirot0.innerHTML = `${data1.length - feb1}`
                        let marcot0 = document.getElementById(`${"marcot0"}`)
                        marcot0.innerHTML = `${data1.length - mar1}`
                        let abrilt0 = document.getElementById(`${"abrilt0"}`)
                        abrilt0.innerHTML = `${data1.length - apr1}`
                        let maiot0 = document.getElementById(`${"maiot0"}`)
                        maiot0.innerHTML = `${data1.length - may1}`
                        let junhot0 = document.getElementById(`${"junhot0"}`)
                        junhot0.innerHTML = `${data1.length - jun1}`
                        let julhot0 = document.getElementById(`${"julhot0"}`)
                        julhot0.innerHTML = `${data1.length - jul1}`
                        let agostot0 = document.getElementById(`${"agostot0"}`)
                        agostot0.innerHTML = `${data1.length - aug1}`
                        let setembrot0 = document.getElementById(`${"setembrot0"}`)
                        setembrot0.innerHTML = `${data1.length - sep1}`
                        let outubrpt0 = document.getElementById(`${"outubrpt0"}`)
                        outubrpt0.innerHTML = `${data1.length - oct1}`
                        let novembrot0 = document.getElementById(`${"novembrot0"}`)
                        novembrot0.innerHTML = `${data1.length - nov1}`
                        let desembrot0 = document.getElementById(`${"desembrot0"}`)
                        desembrot0.innerHTML = `${data1.length - dez1}`

                        let mesaj = data1.length - jan1
                        let mesaf = data1.length - feb1
                        let mesam = data1.length - mar1
                        let mesaa = data1.length - apr1
                        let mesamm = data1.length - may1
                        let mesajj = data1.length - jun1
                        let mesajjj = data1.length - jul1
                        let mesag = data1.length - aug1
                        let mesas = data1.length - sep1
                        let mesao = data1.length - oct1
                        let mesann = data1.length - nov1
                        let mesadez = data1.length - dez1

                        localStorage.setItem('jan1a', mesaj);
                        localStorage.setItem('fev1a', mesaf);
                        localStorage.setItem('mar1a', mesam);
                        localStorage.setItem('abr1a', mesaa);
                        localStorage.setItem('mai1a', mesamm);
                        localStorage.setItem('jun1a', mesajj);
                        localStorage.setItem('jul1a', mesajjj);
                        localStorage.setItem('ago1a', mesag);
                        localStorage.setItem('set1a', mesas);
                        localStorage.setItem('out1a', mesao);
                        localStorage.setItem('nov1a', mesann);
                        localStorage.setItem('dez1a', mesadez);
                    }
                    let verdade = true;
                    for (var i = 0; i < data1.length; i++) {
                        var desliga = content[0]['funcionarios'][i]['dataDesligamento'];
                        if (desliga === "") {
                            console.log("Vazio")
                        } else {
                            if (verdade) {
                                const d = new Date(content[0]['funcionarios'][i]['dataDesligamento'])
                                const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                                console.log(`${mo}`);
                                if (mo == "Jan") {
                                    jan1++
                                }
                                if (mo == "Feb") {
                                    feb1++
                                }
                                if (mo == "Mar") {
                                    mar1++
                                }
                                if (mo == "Apr") {
                                    apr1++
                                }
                                if (mo == "May") {
                                    may1++
                                }
                                if (mo == "Jun") {
                                    jun1++
                                }
                                if (mo == "Jul") {
                                    jul1++
                                }
                                if (mo == "Aug") {
                                    aug1++
                                }
                                if (mo == "Sep") {
                                    sep1++
                                }
                                if (mo == "Oct") {
                                    oct1++
                                }
                                if (mo == "Nov") {
                                    nov1++
                                }
                                if (mo == "Dec") {
                                    dez1++
                                }

                            }
                        }
                        if (verdade) {
                            const d = new Date(content[0]['funcionarios'][i]['dataAdmissao'])
                            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                            console.log(`${mo}`);
                            if (mo == "Jan") {
                                let mes = document.getElementById(`${"janeirot0"}`)
                                mes.innerHTML = `${data1.length - jan1}`
                            }
                            if (mo == "Feb") {
                                let mes = document.getElementById(`${"fevereirot0"}`)
                                mes.innerHTML = `${data1.length - feb1}`
                            }
                            if (mo == "Mar") {
                                let mes = document.getElementById(`${"marcot0"}`)
                                mes.innerHTML = `${data1.length - mar1}`
                            }
                            if (mo == "Apr") {
                                let mes = document.getElementById(`${"abrilt0"}`)
                                mes.innerHTML = `${data1.length - apr1}`
                            }
                            if (mo == "May") {
                                may++
                                let mes = document.getElementById(`${"maiot0"}`)
                                mes.innerHTML = `${data1.length - may1}`
                            }
                            if (mo == "Jun") {
                                let mes = document.getElementById(`${"junhot0"}`)
                                mes.innerHTML = `${data1.length - jun1}`
                            }
                            if (mo == "Jul") {
                                let mes = document.getElementById(`${"julhot0"}`)
                                mes.innerHTML = `${data1.length - jul1}`
                            }
                            if (mo == "Aug") {
                                let mes = document.getElementById(`${"agostot0"}`)
                                mes.innerHTML = `${data1.length - aug1}`
                            }
                            if (mo == "Sep") {
                                let mes = document.getElementById(`${"setembrot0"}`)
                                mes.innerHTML = `${data1.length - sep1}`
                            }
                            if (mo == "Oct") {
                                let mes = document.getElementById(`${"outubrpt0"}`)
                                mes.innerHTML = `${data1.length - oct1}`
                            }
                            if (mo == "Nov") {
                                let mes = document.getElementById(`${"novembrot0"}`)
                                mes.innerHTML = `${data1.length - nov1}`
                            }
                            if (mo == "Dec") {
                                let mes = document.getElementById(`${"desembrot0"}`)
                                mes.innerHTML = `${data1.length - dez1}`
                            }

                        }

                    };
                    let ano = jan + feb + mar + apr + may + jun + jul + aug + sep + oct + nov + dez;
                    let ano1 = jan1 + feb1 + mar1 + apr1 + may1 + jun1 + jul1 + aug1 + sep1 + oct1 + nov1 + dez1;
                    let anot0 = document.getElementById(`${"anot0"}`)
                    anot0.innerHTML = `${data1.length - ano1}`




                });
            horas.forEach(rec => {

                var newRow = myTabGenero.insertRow();
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
                var newCell14 = newRow.insertCell(13);
                let vh = 0;
                newCell1.innerHTML = `<div id=${vh + rec}>${rec}</div>`;
                newCell2.innerHTML = `<div id=${"janeiroh" + vh}>-</div>`;
                newCell3.innerHTML = `<div id=${"fevereiroh" + vh}>-</div>`;
                newCell4.innerHTML = `<div id=${"marcoh" + vh}>-</div>`;
                newCell5.innerHTML = `<div id=${"abrilh" + vh}>-</div>`;
                newCell6.innerHTML = `<div id=${"maioh" + vh}>-</div>`;
                newCell7.innerHTML = `<div id=${"junhoh" + vh}>-</div>`;
                newCell8.innerHTML = `<div id=${"julhoh" + vh}>-</div>`;
                newCell9.innerHTML = `<div id=${"agostoh" + vh}>-</div>`;
                newCell10.innerHTML = `<div id=${"setembroh" + vh}>-</div>`;
                newCell11.innerHTML = `<div id=${"outubroh" + vh}>-</div>`;
                newCell12.innerHTML = `<div id=${"novembroh" + vh}>-</div>`;
                newCell13.innerHTML = `<div id=${"desembroh" + vh}>-</div>`;
                newCell14.innerHTML = `<div id=${"anoh" + vh}>-</div>`;

                vh++
            });
            myTabGenero.addEventListener('click', (e) => {
                e.preventDefault();
                alert(e.target.id)
            });

            fetch(url3)
                .then(res => res.json())
                .then(content => {
                    const data1 = content[0]['funcionarios'];
                    const mesHoje = new Date();
                    let mesAgora = mesHoje.getMonth();

                    let trabalhadoresTodos = data1.length;
                    let semana = 7;
                    let trabalhoHoras = 8;
                    let mesSemanas = 4
                    if (mesAgora == 1) {
                        let janeiroh0 = document.getElementById(`${"janeiroh0"}`)
                        janeiroh0.innerHTML = `${(semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos}`
                    }
                    if (mesAgora == 2) {
                        let janeiroh0 = document.getElementById(`${"janeiroh0"}`)
                        janeiroh0.innerHTML = `${(semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos}`
                        let fevereiroh0 = document.getElementById(`${"fevereiroh0"}`)
                        fevereiroh0.innerHTML = `${(semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos}`
                    }
                    if (mesAgora == 3) {
                        let janeiroh0 = document.getElementById(`${"janeiroh0"}`)
                        janeiroh0.innerHTML = `${(semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos}`
                        let fevereiroh0 = document.getElementById(`${"fevereiroh0"}`)
                        fevereiroh0.innerHTML = `${(semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos}`
                        let marcoh0 = document.getElementById(`${"marcoh0"}`)
                        marcoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                    }
                    if (mesAgora == 4) {
                        let janeiroh0 = document.getElementById(`${"janeiroh0"}`)
                        janeiroh0.innerHTML = `${(semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos}`
                        let fevereiroh0 = document.getElementById(`${"fevereiroh0"}`)
                        fevereiroh0.innerHTML = `${(semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos}`
                        let marcoh0 = document.getElementById(`${"marcoh0"}`)
                        marcoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let abrilh0 = document.getElementById(`${"abrilh0"}`)
                        abrilh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                    }
                    if (mesAgora == 5) {
                        let janeiroh0 = document.getElementById(`${"janeiroh0"}`)
                        janeiroh0.innerHTML = `${(semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos}`
                        let fevereiroh0 = document.getElementById(`${"fevereiroh0"}`)
                        fevereiroh0.innerHTML = `${(semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos}`
                        let marcoh0 = document.getElementById(`${"marcoh0"}`)
                        marcoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let abrilh0 = document.getElementById(`${"abrilh0"}`)
                        abrilh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let maioh0 = document.getElementById(`${"maioh0"}`)
                        maioh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                    }
                    if (mesAgora == 6) {
                        let janeiroh0 = document.getElementById(`${"janeiroh0"}`)
                        janeiroh0.innerHTML = `${(semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos}`
                        let fevereiroh0 = document.getElementById(`${"fevereiroh0"}`)
                        fevereiroh0.innerHTML = `${(semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos}`
                        let marcoh0 = document.getElementById(`${"marcoh0"}`)
                        marcoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let abrilh0 = document.getElementById(`${"abrilh0"}`)
                        abrilh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let maioh0 = document.getElementById(`${"maioh0"}`)
                        maioh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let junhoh0 = document.getElementById(`${"junhoh0"}`)
                        junhoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                    }
                    if (mesAgora == 7) {
                        let janeiroh0 = document.getElementById(`${"janeiroh0"}`)
                        janeiroh0.innerHTML = `${(semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos}`
                        let fevereiroh0 = document.getElementById(`${"fevereiroh0"}`)
                        fevereiroh0.innerHTML = `${(semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos}`
                        let marcoh0 = document.getElementById(`${"marcoh0"}`)
                        marcoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let abrilh0 = document.getElementById(`${"abrilh0"}`)
                        abrilh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let maioh0 = document.getElementById(`${"maioh0"}`)
                        maioh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let junhoh0 = document.getElementById(`${"junhoh0"}`)
                        junhoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let julhoh0 = document.getElementById(`${"julhoh0"}`)
                        julhoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                    }
                    if (mesAgora == 8) {
                        let janeiroh0 = document.getElementById(`${"janeiroh0"}`)
                        janeiroh0.innerHTML = `${(semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos}`
                        let fevereiroh0 = document.getElementById(`${"fevereiroh0"}`)
                        fevereiroh0.innerHTML = `${(semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos}`
                        let marcoh0 = document.getElementById(`${"marcoh0"}`)
                        marcoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let abrilh0 = document.getElementById(`${"abrilh0"}`)
                        abrilh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let maioh0 = document.getElementById(`${"maioh0"}`)
                        maioh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let junhoh0 = document.getElementById(`${"junhoh0"}`)
                        junhoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let julhoh0 = document.getElementById(`${"julhoh0"}`)
                        julhoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let agostoh0 = document.getElementById(`${"agostoh0"}`)
                        agostoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                    }
                    if (mesAgora == 9) {
                        let janeiroh0 = document.getElementById(`${"janeiroh0"}`)
                        janeiroh0.innerHTML = `${(semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos}`
                        let fevereiroh0 = document.getElementById(`${"fevereiroh0"}`)
                        fevereiroh0.innerHTML = `${(semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos}`
                        let marcoh0 = document.getElementById(`${"marcoh0"}`)
                        marcoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let abrilh0 = document.getElementById(`${"abrilh0"}`)
                        abrilh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let maioh0 = document.getElementById(`${"maioh0"}`)
                        maioh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let junhoh0 = document.getElementById(`${"junhoh0"}`)
                        junhoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let julhoh0 = document.getElementById(`${"julhoh0"}`)
                        julhoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let agostoh0 = document.getElementById(`${"agostoh0"}`)
                        agostoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let setembroh0 = document.getElementById(`${"setembroh0"}`)
                        setembroh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                    }
                    if (mesAgora == 10) {
                        let janeiroh0 = document.getElementById(`${"janeiroh0"}`)
                        janeiroh0.innerHTML = `${(semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos}`
                        let fevereiroh0 = document.getElementById(`${"fevereiroh0"}`)
                        fevereiroh0.innerHTML = `${(semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos}`
                        let marcoh0 = document.getElementById(`${"marcoh0"}`)
                        marcoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let abrilh0 = document.getElementById(`${"abrilh0"}`)
                        abrilh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let maioh0 = document.getElementById(`${"maioh0"}`)
                        maioh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let junhoh0 = document.getElementById(`${"junhoh0"}`)
                        junhoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let julhoh0 = document.getElementById(`${"julhoh0"}`)
                        julhoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let agostoh0 = document.getElementById(`${"agostoh0"}`)
                        agostoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let setembroh0 = document.getElementById(`${"setembroh0"}`)
                        setembroh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let outubroh0 = document.getElementById(`${"outubroh0"}`)
                        outubroh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                    }
                    if (mesAgora == 11) {
                        let janeiroh0 = document.getElementById(`${"janeiroh0"}`)
                        janeiroh0.innerHTML = `${(semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos}`
                        let fevereiroh0 = document.getElementById(`${"fevereiroh0"}`)
                        fevereiroh0.innerHTML = `${(semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos}`
                        let marcoh0 = document.getElementById(`${"marcoh0"}`)
                        marcoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let abrilh0 = document.getElementById(`${"abrilh0"}`)
                        abrilh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let maioh0 = document.getElementById(`${"maioh0"}`)
                        maioh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let junhoh0 = document.getElementById(`${"junhoh0"}`)
                        junhoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let julhoh0 = document.getElementById(`${"julhoh0"}`)
                        julhoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let agostoh0 = document.getElementById(`${"agostoh0"}`)
                        agostoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let setembroh0 = document.getElementById(`${"setembroh0"}`)
                        setembroh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let outubroh0 = document.getElementById(`${"outubroh0"}`)
                        outubroh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let novembroh0 = document.getElementById(`${"novembroh0"}`)
                        novembroh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                    }
                    if (mesAgora == 12) {
                        let janeiroh0 = document.getElementById(`${"janeiroh0"}`)
                        janeiroh0.innerHTML = `${(semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos}`
                        let fevereiroh0 = document.getElementById(`${"fevereiroh0"}`)
                        fevereiroh0.innerHTML = `${(semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos}`
                        let marcoh0 = document.getElementById(`${"marcoh0"}`)
                        marcoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let abrilh0 = document.getElementById(`${"abrilh0"}`)
                        abrilh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let maioh0 = document.getElementById(`${"maioh0"}`)
                        maioh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let junhoh0 = document.getElementById(`${"junhoh0"}`)
                        junhoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let julhoh0 = document.getElementById(`${"julhoh0"}`)
                        julhoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let agostoh0 = document.getElementById(`${"agostoh0"}`)
                        agostoh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let setembroh0 = document.getElementById(`${"setembroh0"}`)
                        setembroh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let outubroh0 = document.getElementById(`${"outubroh0"}`)
                        outubroh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let novembroh0 = document.getElementById(`${"novembroh0"}`)
                        novembroh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                        let desembroh0 = document.getElementById(`${"desembroh0"}`)
                        desembroh0.innerHTML = `${((semana * trabalhoHoras)) * mesSemanas * trabalhadoresTodos}`
                    }


                    for (var j = 0; j < data1.length; j++) {
                        const data2 = content[0]['funcionarios'][j]['ausencias'];
                        for (var h = 0; h < data2.length; h++) {
                            const data3 = content[0]['funcionarios'][j]['ausencias'][h]['meses'];
                            for (var s = 0; s < data3.length; s++) {
                                const mes = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['mes']
                                if (mes == "Janeiro") {

                                    domingoj += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                    quartaj += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                    quintaj += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                    sabadoj += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                    segundaj += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                    sextaj += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                    tercaj += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                    let horasTrabalho = (domingoj + quartaj + quintaj + sabadoj + segundaj + sextaj + tercaj) * trabalhoHoras
                                    let janeiroh0 = document.getElementById(`${"janeiroh0"}`)
                                    janeiroh0.innerHTML = `${((semana * trabalhoHoras) - horasTrabalho) * mesSemanas * trabalhadoresTodos}`
                                }
                                if (mes == "Fevereiro") {

                                    const data4 = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'];
                                    for (var sd = 0; sd < data4.length; sd++) {
                                        domingof += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        quartaf += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        quintaf += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        sabadof += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        segundaf += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        sextaf += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        tercaf += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                    }
                                    let fevereiroh0 = document.getElementById(`${"fevereiroh0"}`)
                                    let horasTrabalho = (domingof + quartaf + quintaf + sabadof + segundaf + sextaf + tercaf) * trabalhoHoras
                                    fevereiroh0.innerHTML = `${((semana * trabalhoHoras) - horasTrabalho) * mesSemanas * trabalhadoresTodos}`
                                }
                                if (mes == "Março") {

                                    const data4 = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'];
                                    for (var sd = 0; sd < data4.length; sd++) {
                                        domingom += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        quartam += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        quintam += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        sabadom += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        segundam += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        sextam += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        tercam += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                    }
                                    let marcoh0 = document.getElementById(`${"marcoh0"}`)
                                    let horasTrabalho = (domingom + quartam + quintam + sabadom + segundam + sextam + tercam) * trabalhoHoras
                                    marcoh0.innerHTML = `${((semana * trabalhoHoras) - horasTrabalho) * mesSemanas * trabalhadoresTodos}`
                                }
                                if (mes == "Abril") {

                                    const data4 = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'];
                                    for (var sd = 0; sd < data4.length; sd++) {
                                        domingoa += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        quartaa += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        quintaa += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        sabadoa += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        segundaa += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        sextaa += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        tercaa += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                    }
                                    let abrilh0 = document.getElementById(`${"abrilh0"}`)
                                    let horasTrabalho = (domingoa + quartaa + quintaa + sabadoa + segundaa + sextaa + tercaa) * trabalhoHoras
                                    abrilh0.innerHTML = `${((semana * trabalhoHoras) - horasTrabalho) * mesSemanas * trabalhadoresTodos}`
                                }
                                if (mes == "Maio") {

                                    const data4 = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'];
                                    for (var sd = 0; sd < data4.length; sd++) {
                                        domingo1 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        quarta1 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        quinta1 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        sabado1 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        segunda1 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        sexta1 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        terca1 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                    }
                                    let maioh0 = document.getElementById(`${"maioh0"}`)
                                    let horasTrabalho = (domingo1 + quarta1 + quinta1 + sabado1 + segunda1 + sexta1 + terca1) * trabalhoHoras
                                    maioh0.innerHTML = `${((semana * trabalhoHoras) - horasTrabalho) * mesSemanas * trabalhadoresTodos}`
                                }
                                if (mes == "Junho") {

                                    const data4 = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'];
                                    for (var sd = 0; sd < data4.length; sd++) {
                                        domingo12 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        quarta12 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        quinta12 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        sabado12 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        segunda12 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        sexta12 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        terca12 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                    }
                                    let horasTrabalho = (domingo12 + quarta12 + quinta12 + sabado12 + segunda12 + sexta12 + terca12) * trabalhoHoras
                                    let junhoh0 = document.getElementById(`${"junhoh0"}`)
                                    junhoh0.innerHTML = `${((semana * trabalhoHoras) - horasTrabalho) * mesSemanas * trabalhadoresTodos}`
                                }
                                if (mes == "Julho") {

                                    const data4 = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'];
                                    for (var sd = 0; sd < data4.length; sd++) {
                                        domingo13 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        quarta13 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        quinta13 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        sabado13 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        segunda13 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        sexta13 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        terca13 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                    }
                                    let horasTrabalho = (domingo13 + quarta13 + quinta13 + sabado13 + segunda13 + sexta13 + terca13) * trabalhoHoras
                                    let julhoh0 = document.getElementById(`${"julhoh0"}`)
                                    julhoh0.innerHTML = `${((semana * trabalhoHoras) - horasTrabalho) * mesSemanas * trabalhadoresTodos}`
                                }
                                if (mes == "Agosto") {

                                    const data4 = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'];
                                    for (var sd = 0; sd < data4.length; sd++) {
                                        domingo14 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        quarta14 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        quinta14 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        sabado14 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        segunda14 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        sexta14 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        terca14 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                    }
                                    let horasTrabalho = (domingo14 + quarta14 + quinta14 + sabado14 + segunda14 + sexta14 + terca14) * trabalhoHoras
                                    let agostoh0 = document.getElementById(`${"agostoh0"}`)
                                    agostoh0.innerHTML = `${((semana * trabalhoHoras) - horasTrabalho) * mesSemanas * trabalhadoresTodos}`
                                }
                                if (mes == "Setembro") {

                                    const data4 = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'];
                                    for (var sd = 0; sd < data4.length; sd++) {
                                        domingo15 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        quarta15 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        quinta15 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        sabado15 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        segunda15 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        sexta15 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        terca15 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                    }
                                    let horasTrabalho = (domingo15 + quarta15 + quinta15 + sabado15 + segunda15 + sexta15 + terca15) * trabalhoHoras
                                    let setembroh0 = document.getElementById(`${"setembroh0"}`)
                                    setembroh0.innerHTML = `${((semana * trabalhoHoras) - horasTrabalho) * mesSemanas * trabalhadoresTodos}`
                                }
                                if (mes == "Outubro") {

                                    const data4 = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'];
                                    for (var sd = 0; sd < data4.length; sd++) {
                                        domingo16 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        quarta16 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        quinta16 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        sabado16 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        segunda16 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        sexta16 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        terca16 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                    }
                                    let horasTrabalho = (domingo16 + quarta16 + quinta16 + sabado16 + segunda16 + sexta16 + terca16) * trabalhoHoras
                                    let outubroh0 = document.getElementById(`${"outubroh0"}`)
                                    outubroh0.innerHTML = `${((semana * trabalhoHoras) - horasTrabalho) * mesSemanas * trabalhadoresTodos}`
                                }
                                if (mes == "Novembro") {

                                    const data4 = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'];
                                    for (var sd = 0; sd < data4.length; sd++) {
                                        domingo17 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        quarta17 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        quinta17 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        sabado17 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        segunda17 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        sexta17 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        terca17 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                    }
                                    let horasTrabalho = (domingo17 + quarta17 + quinta17 + sabado17 + segunda17 + sexta17 + terca17) * trabalhoHoras
                                    let novembroh0 = document.getElementById(`${"novembroh0"}`)
                                    novembroh0.innerHTML = `${((semana * trabalhoHoras) - horasTrabalho) * mesSemanas * trabalhadoresTodos}`
                                }
                                if (mes == "Dezembro") {

                                    const data4 = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'];
                                    for (var sd = 0; sd < data4.length; sd++) {
                                        domingo18 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        quarta18 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        quinta18 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        sabado18 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        segunda18 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        sexta18 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        terca18 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                    }
                                    let horasTrabalho = (domingo18 + quarta18 + quinta18 + sabado18 + segunda18 + sexta18 + terca18) * trabalhoHoras
                                    let dezembroh0 = document.getElementById(`${"dezembroh0"}`)
                                    dezembroh0.innerHTML = `${((semana * trabalhoHoras) - horasTrabalho) * mesSemanas * trabalhadoresTodos}`
                                }

                            }
                        }
                    }

                    console.log(document.getElementById(`${"janeiroh0"}`).innerHTML);
                    let fevereiroh0 = document.getElementById(`${"fevereiroh0"}`).innerHTML
                    let marcoh0 = document.getElementById(`${"marcoh0"}`).innerHTML
                    let abrilh0 = document.getElementById(`${"abrilh0"}`).innerHTML
                    let maioh0 = document.getElementById(`${"maioh0"}`).innerHTML
                    let junhoh0 = document.getElementById(`${"junhoh0"}`).innerHTML
                    let julhoh0 = document.getElementById(`${"julhoh0"}`).innerHTML
                    let agostoh0 = document.getElementById(`${"agostoh0"}`).innerHTML
                    let setembroh0 = document.getElementById(`${"setembroh0"}`).innerHTML
                    let outubroh0 = document.getElementById(`${"outubroh0"}`).innerHTML
                    let novembroh0 = document.getElementById(`${"novembroh0"}`).innerHTML
                    let janeiroh0 = document.getElementById(`${"janeiroh0"}`).innerHTML
                    let desembroh0 = document.getElementById(`${"desembroh0"}`).innerHTML

                    localStorage.setItem('jan1t', janeiroh0);
                    localStorage.setItem('fev1t', fevereiroh0);
                    localStorage.setItem('mar1t', marcoh0);
                    localStorage.setItem('abr1t', abrilh0);
                    localStorage.setItem('mai1t', maioh0);
                    localStorage.setItem('jun1t', junhoh0);
                    localStorage.setItem('jul1t', julhoh0);
                    localStorage.setItem('ago1t', agostoh0);
                    localStorage.setItem('set1t', setembroh0);
                    localStorage.setItem('out1t', outubroh0);
                    localStorage.setItem('nov1t', novembroh0);
                    localStorage.setItem('dez1t', desembroh0);


                });

            let vau = 0;
            ausencis.forEach(rec => {

                var newRow = myTabEtaria.insertRow();
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
                var newCell14 = newRow.insertCell(13);


                newCell1.innerHTML = `<div id=${vau + rec}>${rec}</div>`;
                newCell2.innerHTML = `<div id=${"janeirou" + vau}>-</div>`;
                newCell3.innerHTML = `<div id=${"fevereirou" + vau}>-</div>`;
                newCell4.innerHTML = `<div id=${"marcou" + vau}>-</div>`;
                newCell5.innerHTML = `<div id=${"abrilu" + vau}>-</div>`;
                newCell6.innerHTML = `<div id=${"maiou" + vau}>-</div>`;
                newCell7.innerHTML = `<div id=${"junhou" + vau}>-</div>`;
                newCell8.innerHTML = `<div id=${"julhou" + vau}>-</div>`;
                newCell9.innerHTML = `<div id=${"agostou" + vau}>-</div>`;
                newCell10.innerHTML = `<div id=${"setembrou" + vau}>-</div>`;
                newCell11.innerHTML = `<div id=${"outubrou" + vau}>-</div>`;
                newCell12.innerHTML = `<div id=${"novembrou" + vau}>-</div>`;
                newCell13.innerHTML = `<div id=${"desembrou" + vau}>-</div>`;
                newCell14.innerHTML = `<div id=${"anou" + vau}>-</div>`;

                vau++
            });
            myTabEtaria.addEventListener('click', (e) => {
                e.preventDefault();
                alert(e.target.id)
            });
            fetch(url3)
                .then(res => res.json())
                .then(content => {
                    const data1 = content[0]['funcionarios'];


                    for (var j = 0; j < data1.length; j++) {
                        const data2 = content[0]['funcionarios'][j]['ausencias'];
                        for (var h = 0; h < data2.length; h++) {
                            const data3 = content[0]['funcionarios'][j]['ausencias'][h]['meses'];
                            for (var s = 0; s < data3.length; s++) {
                                const mes = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['mes']
                                if (mes == "Janeiro") {
                                    const tipoAusencia = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['tipoAusencia']
                                    console.log("loops")
                                    if (tipoAusencia == "Ausência Planejada") {
                                        justificada += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        justificada += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        justificada += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        justificada += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        justificada += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        justificada += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        justificada += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                        let janeiroh0 = document.getElementById(`${"janeirou0"}`)
                                        janeiroh0.innerHTML = justificada
                                    } else {

                                        naoJustificada += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        naoJustificada += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        naoJustificada += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        naoJustificada += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        naoJustificada += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        naoJustificada += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        naoJustificada += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])
                                        let janeiroh0 = document.getElementById(`${"janeirou1"}`)
                                        janeiroh0.innerHTML = naoJustificada
                                    }

                                }
                                if (mes == "Fevereiro") {
                                    const tipoAusencia = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['tipoAusencia']
                                    console.log("loops")
                                    if (tipoAusencia == "Ausência Planejada") {

                                        justificada1 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        justificada1 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        justificada1 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        justificada1 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        justificada1 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        justificada1 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        justificada1 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])
                                        let fevereirou0 = document.getElementById(`${"fevereirou0"}`)
                                        fevereirou0.innerHTML = justificada1
                                    } else {

                                        naoJustificada1 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        naoJustificada1 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        naoJustificada1 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        naoJustificada1 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        naoJustificada1 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        naoJustificada1 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        naoJustificada1 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                        let fevereirou1 = document.getElementById(`${"fevereirou1"}`)
                                        fevereirou1.innerHTML = naoJustificada1
                                    }
                                }
                                if (mes == "Março") {
                                    const tipoAusencia = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['tipoAusencia']
                                    console.log("loops")
                                    if (tipoAusencia == "Ausência Planejada") {

                                        justificada2 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        justificada2 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        justificada2 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        justificada2 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        justificada2 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        justificada2 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        justificada2 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                        let marcou0 = document.getElementById(`${"marcou0"}`)
                                        marcou0.innerHTML = justificada2
                                    } else {

                                        naoJustificada2 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        naoJustificada2 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        naoJustificada2 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        naoJustificada2 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        naoJustificada2 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        naoJustificada2 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        naoJustificada2 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                        let marcou1 = document.getElementById(`${"marcou1"}`)
                                        marcou1.innerHTML = naoJustificada2
                                    }
                                }
                                if (mes == "Abril") {
                                    const tipoAusencia = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['tipoAusencia']
                                    console.log("loops")
                                    if (tipoAusencia == "Ausência Planejada") {

                                        justificada3 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        justificada3 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        justificada3 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        justificada3 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        justificada3 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        justificada3 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        justificada3 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                        let abrilu0 = document.getElementById(`${"abrilu0"}`)
                                        abrilu0.innerHTML = justificada3
                                    } else {

                                        naoJustificada3 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        naoJustificada3 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        naoJustificada3 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        naoJustificada3 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        naoJustificada3 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        naoJustificada3 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        naoJustificada3 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                        let abrilu1 = document.getElementById(`${"abrilu1"}`)
                                        abrilu1.innerHTML = naoJustificada3
                                    }
                                }
                                if (mes == "Maio") {
                                    const tipoAusencia = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['tipoAusencia']
                                    console.log("loops")
                                    if (tipoAusencia == "Ausência Planejada") {

                                        justificada4 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        justificada4 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        justificada4 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        justificada4 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        justificada4 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        justificada4 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        justificada4 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                        let maiou0 = document.getElementById(`${"maiou0"}`)
                                        maiou0.innerHTML = justificada4
                                    } else {
                                        naoJustificada4 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        naoJustificada4 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        naoJustificada4 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        naoJustificada4 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        naoJustificada4 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        naoJustificada4 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        naoJustificada4 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                        let maiou1 = document.getElementById(`${"maiou1"}`)
                                        maiou1.innerHTML = naoJustificada4
                                    }
                                }
                                if (mes == "Junho") {
                                    const tipoAusencia = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['tipoAusencia']
                                    console.log("loops")
                                    if (tipoAusencia == "Ausência Planejada") {
                                        justificada5 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        justificada5 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        justificada5 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        justificada5 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        justificada5 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        justificada5 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        justificada5 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                        let junhou0 = document.getElementById(`${"junhou0"}`)
                                        junhou0.innerHTML = justificada5
                                    } else {
                                        naoJustificada5 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        naoJustificada5 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        naoJustificada5 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        naoJustificada5 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        naoJustificada5 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        naoJustificada5 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        naoJustificada5 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                        let junhou1 = document.getElementById(`${"junhou1"}`)
                                        junhou1.innerHTML = naoJustificada5
                                    }
                                }
                                if (mes == "Julho") {
                                    const tipoAusencia = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['tipoAusencia']
                                    console.log("loops")
                                    if (tipoAusencia == "Ausência Planejada") {
                                        justificada6 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        justificada6 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        justificada6 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        justificada6 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        justificada6 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        justificada6 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        justificada6 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                        let julhou0 = document.getElementById(`${"julhou0"}`)
                                        julhou0.innerHTML = justificada6
                                    } else {
                                        naoJustificada6 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        naoJustificada6 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        naoJustificada6 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        naoJustificada6 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        naoJustificada6 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        naoJustificada6 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        naoJustificada6 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                        let julhou1 = document.getElementById(`${"julhou1"}`)
                                        julhou1.innerHTML = naoJustificada6
                                    }
                                }
                                if (mes == "Agosto") {
                                    const tipoAusencia = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['tipoAusencia']
                                    console.log("loops")
                                    if (tipoAusencia == "Ausência Planejada") {
                                        justificada7 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        justificada7 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        justificada7 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        justificada7 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        justificada7 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        justificada7 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        justificada7 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                        let agostou0 = document.getElementById(`${"agostou0"}`)
                                        agostou0.innerHTML = justificada7
                                    } else {
                                        naoJustificada7 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        naoJustificada7 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        naoJustificada7 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        naoJustificada7 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        naoJustificada7 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        naoJustificada7 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        naoJustificada7 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                        let agostou1 = document.getElementById(`${"agostou1"}`)
                                        agostou1.innerHTML = naoJustificada7
                                    }
                                }
                                if (mes == "Setembro") {
                                    const tipoAusencia = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['tipoAusencia']
                                    console.log("loops")
                                    if (tipoAusencia == "Ausência Planejada") {
                                        justificada8 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        justificada8 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        justificada8 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        justificada8 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        justificada8 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        justificada8 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        justificada8 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                        let setembrou0 = document.getElementById(`${"setembrou0"}`)
                                        setembrou0.innerHTML = justificada8
                                    } else {
                                        naoJustificada8 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        naoJustificada8 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        naoJustificada8 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        naoJustificada8 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        naoJustificada8 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        naoJustificada8 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        naoJustificada8 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                        let setembrou1 = document.getElementById(`${"setembrou1"}`)
                                        setembrou1.innerHTML = naoJustificada8
                                    }
                                }
                                if (mes == "Outubro") {
                                    const tipoAusencia = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['tipoAusencia']
                                    console.log("loops")
                                    if (tipoAusencia == "Ausência Planejada") {
                                        justificada9 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        justificada9 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        justificada9 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        justificada9 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        justificada9 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        justificada9 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        justificada9 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                        let outubrou0 = document.getElementById(`${"outubrou0"}`)
                                        outubrou0.innerHTML = justificada9
                                    } else {
                                        naoJustificada9 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        naoJustificada9 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        naoJustificada9 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        naoJustificada9 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        naoJustificada9 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        naoJustificada9 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        naoJustificada9 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                        let outubrou1 = document.getElementById(`${"outubrou1"}`)
                                        outubrou1.innerHTML = naoJustificada9
                                    }
                                }
                                if (mes == "Novembro") {
                                    const tipoAusencia = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['tipoAusencia']
                                    console.log("loops")
                                    if (tipoAusencia == "Ausência Planejada") {
                                        justificada10 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        justificada10 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        justificada10 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        justificada10 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        justificada10 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        justificada10 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        justificada10 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                        let novembrou0 = document.getElementById(`${"novembrou0"}`)
                                        novembrou0.innerHTML = justificada10
                                    } else {
                                        naoJustificada10 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        naoJustificada10 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        naoJustificada10 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        naoJustificada10 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        naoJustificada10 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        naoJustificada10 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        naoJustificada10 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                        let novembrou1 = document.getElementById(`${"novembrou1"}`)
                                        novembrou1.innerHTML = naoJustificada10
                                    }
                                }
                                if (mes == "Dezembro") {
                                    const tipoAusencia = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['tipoAusencia']
                                    console.log("loops")
                                    if (tipoAusencia == "Ausência Planejada") {
                                        justificada11 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        justificada11 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        justificada11 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        justificada11 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        justificada11 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        justificada11 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        justificada11 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                        let desembrou0 = document.getElementById(`${"desembrou0"}`)
                                        desembrou0.innerHTML = justificada11
                                    } else {
                                        naoJustificada11 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['domingo'])
                                        naoJustificada11 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quarta'])
                                        naoJustificada11 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['quinta'])
                                        naoJustificada11 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sabado'])
                                        naoJustificada11 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['segunda'])
                                        naoJustificada11 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['sexta'])
                                        naoJustificada11 += parseInt(content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['semanas'][0]['terca'])

                                        let desembrou1 = document.getElementById(`${"desembrou1"}`)
                                        desembrou1.innerHTML = naoJustificada11
                                    }
                                }



                            }
                        }
                        totalJustificadas = justificada + justificada1 + justificada2 + justificada3 + justificada4 + justificada5 +
                            justificada6 + justificada7 + justificada8 + justificada9 + justificada10 + justificada11
                        totalNaoJustificadas = naoJustificada + naoJustificada1 + naoJustificada2 + naoJustificada3 + naoJustificada4 +
                            naoJustificada5 + naoJustificada6 + naoJustificada7 + naoJustificada8 + naoJustificada9 + naoJustificada10 + naoJustificada11

                        totalTodasFaltas = totalJustificadas + totalNaoJustificadas
                        localStorage.setItem('totalNaoJustificadas', totalNaoJustificadas);
                        localStorage.setItem('totalJustificadas', totalJustificadas);
                        let anou1 = document.getElementById(`${"anou1"}`)
                        anou1.innerHTML = totalNaoJustificadas
                        let anou0 = document.getElementById(`${"anou0"}`)
                        anou0.innerHTML = totalJustificadas
                    }



                });

            let vj = 0;
            taxaAdimissional.forEach(rec => {

                var newRow = myTabTEmpresa.insertRow();
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
                var newCell14 = newRow.insertCell(13);

                newCell1.innerHTML = `<div id=${vj + rec}>${rec}</div>`;
                newCell2.innerHTML = `<div id=${"janeiroj" + vj}>-</div>`;
                newCell3.innerHTML = `<div id=${"fevereiroj" + vj}>-</div>`;
                newCell4.innerHTML = `<div id=${"marcoj" + vj}>-</div>`;
                newCell5.innerHTML = `<div id=${"abrilj" + vj}>-</div>`;
                newCell6.innerHTML = `<div id=${"maioj" + vj}>-</div>`;
                newCell7.innerHTML = `<div id=${"junhoj" + vj}>-</div>`;
                newCell8.innerHTML = `<div id=${"julhoj" + vj}>-</div>`;
                newCell9.innerHTML = `<div id=${"agostoj" + vj}>-</div>`;
                newCell10.innerHTML = `<div id=${"setembroj" + vj}>-</div>`;
                newCell11.innerHTML = `<div id=${"outubroj" + vj}>-</div>`;
                newCell12.innerHTML = `<div id=${"novembroj" + vj}>-</div>`;
                newCell13.innerHTML = `<div id=${"desembroj" + vj}>-</div>`;
                newCell14.innerHTML = `<div id=${"anoj" + vj}>-</div>`;

                vj++
            })
            myTabTEmpresa.addEventListener('click', (e) => {
                e.preventDefault();
                alert(e.target.id)
            });
            fetch(url3)
                .then(res => res.json())
                .then(content => {
                    const data1 = content[0]['funcionarios'];
                    for (var j = 0; j < data1.length; j++) {
                        const data2 = content[0]['funcionarios'][j]['ausencias'];
                        for (var h = 0; h < data2.length; h++) {
                            const data3 = content[0]['funcionarios'][j]['ausencias'][h]['meses'];
                            for (var s = 0; s < data3.length; s++) {
                                const mes = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['mes']
                                if (mes == "Janeiro") {
                                    const tipoAusencia = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['tipoAusencia']
                                    console.log("loops")
                                    if (tipoAusencia == "Ausência Planejada") {
                                        console.log("ok")
                                    } else {
                                        let trabalhadoresTodos = data1.length - jan1;
                                        let semana = 7;
                                        let trabalhoHoras = 8;
                                        let mesSemanas = 4
                                        let janeiroj0 = document.getElementById(`${"janeiroj0"}`)

                                        janeiroj0.innerHTML = (naoJustificada / ((semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos)) * 100 + "%"
                                    }

                                }
                                if (mes == "Fevereiro") {
                                    const tipoAusencia = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['tipoAusencia']
                                    console.log("loops")
                                    if (tipoAusencia == "Ausência Planejada") {
                                        console.log("ok")
                                    } else {
                                        let trabalhadoresTodos = data1.length - feb1;
                                        let semana = 7;
                                        let trabalhoHoras = 8;
                                        let mesSemanas = 4
                                        let fevereiroj0 = document.getElementById(`${"fevereiroj0"}`)

                                        fevereiroj0.innerHTML = (naoJustificada / ((semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos)) * 100 + "%"

                                    }
                                }
                                if (mes == "Março") {
                                    const tipoAusencia = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['tipoAusencia']
                                    console.log("loops")
                                    if (tipoAusencia == "Ausência Planejada") {
                                        console.log("ok")
                                    } else {
                                        let trabalhadoresTodos = data1.length - mar1;
                                        let semana = 7;
                                        let trabalhoHoras = 8;
                                        let mesSemanas = 4
                                        let marcoj0 = document.getElementById(`${"marcoj0"}`)

                                        marcoj0.innerHTML = (naoJustificada / ((semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos)) * 100 + "%"

                                    }
                                }
                                if (mes == "Abril") {
                                    const tipoAusencia = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['tipoAusencia']
                                    console.log("loops")
                                    if (tipoAusencia == "Ausência Planejada") {
                                        console.log("ok")
                                    } else {
                                        let trabalhadoresTodos = data1.length - apr1;
                                        let semana = 7;
                                        let trabalhoHoras = 8;
                                        let mesSemanas = 4
                                        let abrilj0 = document.getElementById(`${"abrilj0"}`)

                                        abrilj0.innerHTML = (naoJustificada / ((semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos)) * 100 + "%"

                                    }
                                }
                                if (mes == "Maio") {
                                    const tipoAusencia = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['tipoAusencia']
                                    console.log("loops")
                                    if (tipoAusencia == "Ausência Planejada") {
                                        console.log("ok")
                                    } else {
                                        let trabalhadoresTodos = data1.length - may1;
                                        let semana = 7;
                                        let trabalhoHoras = 8;
                                        let mesSemanas = 4
                                        let maioj0 = document.getElementById(`${"maioj0"}`)

                                        maioj0.innerHTML = (naoJustificada / ((semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos)) * 100 + "%"

                                    }
                                }
                                if (mes == "Junho") {
                                    const tipoAusencia = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['tipoAusencia']
                                    console.log("loops")
                                    if (tipoAusencia == "Ausência Planejada") {
                                        console.log("ok")
                                    } else {
                                        let trabalhadoresTodos = data1.length - jun1;
                                        let semana = 7;
                                        let trabalhoHoras = 8;
                                        let mesSemanas = 4
                                        let junhoj0 = document.getElementById(`${"junhoj0"}`)

                                        junhoj0.innerHTML = (naoJustificada / ((semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos)) * 100 + "%"

                                    }
                                }
                                if (mes == "Julho") {
                                    const tipoAusencia = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['tipoAusencia']
                                    console.log("loops")
                                    if (tipoAusencia == "Ausência Planejada") {
                                        console.log("ok")
                                    } else {
                                        let trabalhadoresTodos = data1.length - jul1;
                                        let semana = 7;
                                        let trabalhoHoras = 8;
                                        let mesSemanas = 4
                                        let julhoj0 = document.getElementById(`${"julhoj0"}`)

                                        julhoj0.innerHTML = (naoJustificada / ((semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos)) * 100 + "%"

                                    }
                                }
                                if (mes == "Agosto") {
                                    const tipoAusencia = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['tipoAusencia']
                                    console.log("loops")
                                    if (tipoAusencia == "Ausência Planejada") {
                                        console.log("ok")
                                    } else {
                                        let trabalhadoresTodos = data1.length - aug1;
                                        let semana = 7;
                                        let trabalhoHoras = 8;
                                        let mesSemanas = 4
                                        let agostoj0 = document.getElementById(`${"agostoj0"}`)

                                        agostoj0.innerHTML = (naoJustificada / ((semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos)) * 100 + "%"

                                    }
                                }
                                if (mes == "Setembro") {
                                    const tipoAusencia = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['tipoAusencia']
                                    console.log("loops")
                                    if (tipoAusencia == "Ausência Planejada") {
                                        console.log("ok")
                                    } else {
                                        let trabalhadoresTodos = data1.length - sep1;
                                        let semana = 7;
                                        let trabalhoHoras = 8;
                                        let mesSemanas = 4
                                        let setembroj0 = document.getElementById(`${"setembroj0"}`)

                                        setembroj0.innerHTML = (naoJustificada / ((semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos)) * 100 + "%"

                                    }
                                }
                                if (mes == "Outubro") {
                                    const tipoAusencia = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['tipoAusencia']
                                    console.log("loops")
                                    if (tipoAusencia == "Ausência Planejada") {
                                        console.log("ok")
                                    } else {
                                        let trabalhadoresTodos = data1.length - oct1;
                                        let semana = 7;
                                        let trabalhoHoras = 8;
                                        let mesSemanas = 4
                                        let outubroj0 = document.getElementById(`${"outubroj0"}`)

                                        outubroj0.innerHTML = (naoJustificada / ((semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos)) * 100 + "%"

                                    }
                                }
                                if (mes == "Novembro") {
                                    const tipoAusencia = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['tipoAusencia']
                                    console.log("loops")
                                    if (tipoAusencia == "Ausência Planejada") {
                                        console.log("ok")
                                    } else {
                                        let trabalhadoresTodos = data1.length - nov1;
                                        let semana = 7;
                                        let trabalhoHoras = 8;
                                        let mesSemanas = 4
                                        let novembroj0 = document.getElementById(`${"novembroj0"}`)

                                        novembroj0.innerHTML = (naoJustificada / ((semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos)) * 100 + "%"

                                    }
                                }
                                if (mes == "Dezembro") {
                                    const tipoAusencia = content[0]['funcionarios'][j]['ausencias'][h]['meses'][s]['tipoAusencia']
                                    console.log("loops")
                                    if (tipoAusencia == "Ausência Planejada") {
                                        console.log("ok")
                                    } else {
                                        let trabalhadoresTodos = data1.length - dez1;
                                        let semana = 7;
                                        let trabalhoHoras = 8;
                                        let mesSemanas = 4
                                        let desembroj0 = document.getElementById(`${"desembroj0"}`)

                                        desembroj0.innerHTML = (naoJustificada / ((semana * trabalhoHoras) * mesSemanas * trabalhadoresTodos)) * 100 + "%"

                                    }
                                }



                            }
                        }

                        totalNaoJustificadas = naoJustificada + naoJustificada1 + naoJustificada2 + naoJustificada3 + naoJustificada4 +
                            naoJustificada5 + naoJustificada6 + naoJustificada7 + naoJustificada8 + naoJustificada9 + naoJustificada10 + naoJustificada11

                        totalTodasFaltas = totalJustificadas + totalNaoJustificadas

                        let anou1 = document.getElementById(`${"anou1"}`)
                        anou1.innerHTML = totalNaoJustificadas
                        let anou0 = document.getElementById(`${"anou0"}`)
                        anou0.innerHTML = totalJustificadas
                    }



                });

            taxaAdimissionald.forEach(rec => {

                var newRow = myTabTEmpresaD.insertRow();
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
                var newCell14 = newRow.insertCell(13);

                newCell1.innerHTML = rec;
                newCell2.innerHTML = `<div class="nomeFuncionario">-</div>`;
                newCell3.innerHTML = `<div class="genero">-</div>`;
                newCell4.innerHTML = `<div class="dataNascimento">-</div>`;
                newCell5.innerHTML = `<div class="dataAdmissao">-</div>`;
                newCell6.innerHTML = `<div class="dataDesligamento">-</div>`;
                newCell7.innerHTML = `<div class="tipoDesligamento">-</div>`;
                newCell8.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell9.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell10.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell11.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell12.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell13.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell14.innerHTML = `<div class="tempoEmpresa">-</div>`;
            })
            let w = 0;
            ausenciaPlanejada2w.forEach(rec => {

                var newRow = myTabTEmpresaD2.insertRow();
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
                var newCell14 = newRow.insertCell(13);

                newCell1.innerHTML = `<div id=${w + rec}>${rec}</div>`;
                newCell2.innerHTML = `<div id=${"janeirow" + w}>-</div>`;
                newCell3.innerHTML = `<div id=${"fevereirow" + w}>-</div>`;
                newCell4.innerHTML = `<div id=${"marcow" + w}>-</div>`;
                newCell5.innerHTML = `<div id=${"abrilw" + w}>-</div>`;
                newCell6.innerHTML = `<div id=${"maiow" + w}>-</div>`;
                newCell7.innerHTML = `<div id=${"junhow" + w}>-</div>`;
                newCell8.innerHTML = `<div id=${"julhow" + w}>-</div>`;
                newCell9.innerHTML = `<div id=${"agostow" + w}>-</div>`;
                newCell10.innerHTML = `<div id=${"setembrow" + w}>-</div>`;
                newCell11.innerHTML = `<div id=${"outubrpw" + w}>-</div>`;
                newCell12.innerHTML = `<div id=${"novembrow" + w}>-</div>`;
                newCell13.innerHTML = `<div id=${"desembrow" + w}>-</div>`;
                newCell14.innerHTML = `<div id=${"anow" + w}>-</div>`;

                w++

            });
            myTabTEmpresaD2.addEventListener('click', (e) => {
                e.preventDefault();
                alert(e.target.id)
            });

            fetch(url3)
                .then(res => res.json())
                .then(content => {
                    let escolaridadeLista = [];
                    let mesesLista = [];
                    let contagem = [];
                    const d = new Date('2021-11-07')
                    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                    console.log(`${mo}`);
                    const data1 = content[0]['funcionarios'];
                    for (var j = 0; j < data1.length; j++) {
                        const data2 = content[0]['funcionarios'][j]['ausencias'];
                        for (var a = 0; a < data2.length; a++) {
                            const data3 = content[0]['funcionarios'][j]['ausencias'][a]['meses'];
                            for (var m = 0; m < data3.length; m++) {
                                escolaridadeLista.push(content[0]['funcionarios'][j]['ausencias'][a]['meses'][m]['motivo'])
                                mesesLista.push(content[0]['funcionarios'][j]['ausencias'][a]['meses'][m]['mes'])
                            }
                        }
                    }
                    const countUnique = escolaridadeLista => {
                        const counts = {};
                        for (var i = 0; i < escolaridadeLista.length; i++) {
                            counts[escolaridadeLista[i]] = 1 + (counts[escolaridadeLista[i]] || 0);
                        };
                        return counts;
                    };
                    console.log(countUnique(escolaridadeLista));
                    contagem.push(countUnique(escolaridadeLista))
                    console.log(contagem[0]['Emendas de feriados']);
                    console.log(content[0]);
                    for (var i = 0; i < escolaridadeLista.length; i++) {
                        if (escolaridadeLista[i] == "Emendas de feriados") {
                            if (mesesLista[i] == "Janeiro") {
                                let mes = document.getElementById(`${"janeirow0"}`)
                                mes.innerHTML = `${contagem[0]['Emendas de feriados']}`
                            }
                            if (mesesLista[i] == "Fevereiro") {
                                let mes = document.getElementById(`${"fevereirow0"}`)
                                mes.innerHTML = `${contagem[0]['Emendas de feriados']}`
                            }
                            if (mesesLista[i] == "Março") {
                                let mes = document.getElementById(`${"marcow0"}`)
                                mes.innerHTML = `${contagem[0]['Emendas de feriados']}`
                            }
                            if (mesesLista[i] == "Abril") {
                                let mes = document.getElementById(`${"abrilw0"}`)
                                mes.innerHTML = `${contagem[0]['Emendas de feriados']}`
                            }
                            if (mesesLista[i] == "Maio") {
                                let mes = document.getElementById(`${"maiow0"}`)
                                mes.innerHTML = `${contagem[0]['Emendas de feriados']}`
                            }
                            if (mesesLista[i] == "Junho") {
                                let mes = document.getElementById(`${"junhow0"}`)
                                mes.innerHTML = `${contagem[0]['Emendas de feriados']}`
                            }
                            if (mesesLista[i] == "Julho") {
                                let mes = document.getElementById(`${"julhow0"}`)
                                mes.innerHTML = `${contagem[0]['Emendas de feriados']}`
                            }
                            if (mesesLista[i] == "Agosto") {
                                let mes = document.getElementById(`${"agostow0"}`)
                                mes.innerHTML = `${contagem[0]['Emendas de feriados']}`
                            }
                            if (mesesLista[i] == "Setembro") {
                                let mes = document.getElementById(`${"setembrow0"}`)
                                mes.innerHTML = `${contagem[0]['Emendas de feriados']}`
                            }
                            if (mesesLista[i] == "Outubro") {
                                let mes = document.getElementById(`${"outubrpw0"}`)
                                mes.innerHTML = `${contagem[0]['Emendas de feriados']}`
                            }
                            if (mesesLista[i] == "Novembro") {
                                let mes = document.getElementById(`${"novembrow0"}`)
                                mes.innerHTML = `${contagem[0]['Emendas de feriados']}`
                            }
                            if (mesesLista[i] == "Dezembro") {
                                let mes = document.getElementById(`${"desembrow0"}`)
                                mes.innerHTML = `${contagem[0]['Emendas de feriados']}`
                            }

                        }
                        if (escolaridadeLista[i] == "Férias") {
                            if (mesesLista[i] == "Janeiro") {
                                let mes = document.getElementById(`${"janeirow1"}`)
                                mes.innerHTML = `${contagem[0]['Férias']}`
                            }
                            if (mesesLista[i] == "Fevereiro") {
                                let mes = document.getElementById(`${"fevereirow1"}`)
                                mes.innerHTML = `${contagem[0]['Férias']}`
                            }
                            if (mesesLista[i] == "Março") {
                                let mes = document.getElementById(`${"marcow1"}`)
                                mes.innerHTML = `${contagem[0]['Férias']}`
                            }
                            if (mesesLista[i] == "Abril") {
                                let mes = document.getElementById(`${"abrilw1"}`)
                                mes.innerHTML = `${contagem[0]['Férias']}`
                            }
                            if (mesesLista[i] == "Maio") {
                                let mes = document.getElementById(`${"maiow1"}`)
                                mes.innerHTML = `${contagem[0]['Férias']}`
                            }
                            if (mesesLista[i] == "Junho") {
                                let mes = document.getElementById(`${"junhow1"}`)
                                mes.innerHTML = `${contagem[0]['Férias']}`
                            }
                            if (mesesLista[i] == "Julho") {
                                let mes = document.getElementById(`${"julhow1"}`)
                                mes.innerHTML = `${contagem[0]['Férias']}`
                            }
                            if (mesesLista[i] == "Agosto") {
                                let mes = document.getElementById(`${"agostow1"}`)
                                mes.innerHTML = `${contagem[0]['Férias']}`
                            }
                            if (mesesLista[i] == "Setembro") {
                                let mes = document.getElementById(`${"setembrow1"}`)
                                mes.innerHTML = `${contagem[0]['Férias']}`
                            }
                            if (mesesLista[i] == "Outubro") {
                                let mes = document.getElementById(`${"outubrpw1"}`)
                                mes.innerHTML = `${contagem[0]['Férias']}`
                            }
                            if (mesesLista[i] == "Novembro") {
                                let mes = document.getElementById(`${"novembrow1"}`)
                                mes.innerHTML = `${contagem[0]['Férias']}`
                            }
                            if (mesesLista[i] == "Dezembro") {
                                let mes = document.getElementById(`${"desembrow1"}`)
                                mes.innerHTML = `${contagem[0]['Férias']}`
                            }

                        }
                        if (escolaridadeLista[i] == "Folgas") {
                            if (mesesLista[i] == "Janeiro") {
                                let mes = document.getElementById(`${"janeirow2"}`)
                                mes.innerHTML = `${contagem[0]['Folgas']}`
                            }
                            if (mesesLista[i] == "Fevereiro") {
                                let mes = document.getElementById(`${"fevereirow2"}`)
                                mes.innerHTML = `${contagem[0]['Folgas']}`
                            }
                            if (mesesLista[i] == "Março") {
                                let mes = document.getElementById(`${"marcow2"}`)
                                mes.innerHTML = `${contagem[0]['Folgas']}`
                            }
                            if (mesesLista[i] == "Abril") {
                                let mes = document.getElementById(`${"abrilw2"}`)
                                mes.innerHTML = `${contagem[0]['Folgas']}`
                            }
                            if (mesesLista[i] == "Maio") {
                                let mes = document.getElementById(`${"maiow2"}`)
                                mes.innerHTML = `${contagem[0]['Folgas']}`
                            }
                            if (mesesLista[i] == "Junho") {
                                let mes = document.getElementById(`${"junhow2"}`)
                                mes.innerHTML = `${contagem[0]['Folgas']}`
                            }
                            if (mesesLista[i] == "Julho") {
                                let mes = document.getElementById(`${"julhow2"}`)
                                mes.innerHTML = `${contagem[0]['Folgas']}`
                            }
                            if (mesesLista[i] == "Agosto") {
                                let mes = document.getElementById(`${"agostow2"}`)
                                mes.innerHTML = `${contagem[0]['Folgas']}`
                            }
                            if (mesesLista[i] == "Setembro") {
                                let mes = document.getElementById(`${"setembrow2"}`)
                                mes.innerHTML = `${contagem[0]['Folgas']}`
                            }
                            if (mesesLista[i] == "Outubro") {
                                let mes = document.getElementById(`${"outubrpw2"}`)
                                mes.innerHTML = `${contagem[0]['Folgas']}`
                            }
                            if (mesesLista[i] == "Novembro") {
                                let mes = document.getElementById(`${"novembrow2"}`)
                                mes.innerHTML = `${contagem[0]['Folgas']}`
                            }
                            if (mesesLista[i] == "Dezembro") {
                                let mes = document.getElementById(`${"desembrow2"}`)
                                mes.innerHTML = `${contagem[0]['Folgas']}`
                            }

                        }
                    }
                });





            let z = 0;
            ausenciaNaoPlanejadaw.forEach(rec => {

                var newRow = myTabTEmpresaD3.insertRow();
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
                var newCell14 = newRow.insertCell(13);

                newCell1.innerHTML = `<div id=${z + rec}>${rec}</div>`;
                newCell2.innerHTML = `<div id=${"janeiroz" + z}>-</div>`;
                newCell3.innerHTML = `<div id=${"fevereiroz" + z}>-</div>`;
                newCell4.innerHTML = `<div id=${"marcoz" + z}>-</div>`;
                newCell5.innerHTML = `<div id=${"abrilz" + z}>-</div>`;
                newCell6.innerHTML = `<div id=${"maioz" + z}>-</div>`;
                newCell7.innerHTML = `<div id=${"junhoz" + z}>-</div>`;
                newCell8.innerHTML = `<div id=${"julhoz" + z}>-</div>`;
                newCell9.innerHTML = `<div id=${"agostoz" + z}>-</div>`;
                newCell10.innerHTML = `<div id=${"setembroz" + z}>-</div>`;
                newCell11.innerHTML = `<div id=${"outubrpz" + z}>-</div>`;
                newCell12.innerHTML = `<div id=${"novembroz" + z}>-</div>`;
                newCell13.innerHTML = `<div id=${"desembroz" + z}>-</div>`;
                newCell14.innerHTML = `<div id=${"anoz" + z}>-</div>`;

                z++
            });
            myTabTEmpresaD3.addEventListener('click', (e) => {
                e.preventDefault();
                alert(e.target.id)
            });
            fetch(url3)
                .then(res => res.json())
                .then(content => {
                    let escolaridadeLista = [];
                    let mesesLista = [];
                    let contagem = [];
                    const d = new Date('2021-11-07')
                    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                    console.log(`${mo}`);
                    const data1 = content[0]['funcionarios'];
                    for (var j = 0; j < data1.length; j++) {
                        const data2 = content[0]['funcionarios'][j]['ausencias'];
                        for (var a = 0; a < data2.length; a++) {
                            const data3 = content[0]['funcionarios'][j]['ausencias'][a]['meses'];
                            for (var m = 0; m < data3.length; m++) {
                                escolaridadeLista.push(content[0]['funcionarios'][j]['ausencias'][a]['meses'][m]['motivo'])
                                mesesLista.push(content[0]['funcionarios'][j]['ausencias'][a]['meses'][m]['mes'])
                            }
                        }
                    }
                    const countUnique = escolaridadeLista => {
                        const counts = {};
                        for (var i = 0; i < escolaridadeLista.length; i++) {
                            counts[escolaridadeLista[i]] = 1 + (counts[escolaridadeLista[i]] || 0);
                        };
                        return counts;
                    };
                    console.log(countUnique(escolaridadeLista));
                    contagem.push(countUnique(escolaridadeLista))
                    console.log(contagem[0]['Emendas de feriados']);
                    console.log(content[0]);
                    for (var i = 0; i < escolaridadeLista.length; i++) {
                        if (escolaridadeLista[i] == "Afastamento") {
                            if (mesesLista[i] == "Janeiro") {
                                let mes = document.getElementById(`${"janeiroz0"}`)
                                mes.innerHTML = `${contagem[0]['Afastamento']}`
                            }
                            if (mesesLista[i] == "Fevereiro") {
                                let mes = document.getElementById(`${"fevereiroz0"}`)
                                mes.innerHTML = `${contagem[0]['Afastamento']}`
                            }
                            if (mesesLista[i] == "Março") {
                                let mes = document.getElementById(`${"marcoz0"}`)
                                mes.innerHTML = `${contagem[0]['Afastamento']}`
                            }
                            if (mesesLista[i] == "Abril") {
                                let mes = document.getElementById(`${"abrilz0"}`)
                                mes.innerHTML = `${contagem[0]['Afastamento']}`
                            }
                            if (mesesLista[i] == "Maio") {
                                let mes = document.getElementById(`${"maioz0"}`)
                                mes.innerHTML = `${contagem[0]['Afastamento']}`
                            }
                            if (mesesLista[i] == "Junho") {
                                let mes = document.getElementById(`${"junhoz0"}`)
                                mes.innerHTML = `${contagem[0]['Afastamento']}`
                            }
                            if (mesesLista[i] == "Julho") {
                                let mes = document.getElementById(`${"julhoz0"}`)
                                mes.innerHTML = `${contagem[0]['Afastamento']}`
                            }
                            if (mesesLista[i] == "Agosto") {
                                let mes = document.getElementById(`${"agostoz0"}`)
                                mes.innerHTML = `${contagem[0]['Afastamento']}`
                            }
                            if (mesesLista[i] == "Setembro") {
                                let mes = document.getElementById(`${"setembroz0"}`)
                                mes.innerHTML = `${contagem[0]['Afastamento']}`
                            }
                            if (mesesLista[i] == "Outubro") {
                                let mes = document.getElementById(`${"outubrpz0"}`)
                                mes.innerHTML = `${contagem[0]['Afastamento']}`
                            }
                            if (mesesLista[i] == "Novembro") {
                                let mes = document.getElementById(`${"novembroz0"}`)
                                mes.innerHTML = `${contagem[0]['Afastamento']}`
                            }
                            if (mesesLista[i] == "Dezembro") {
                                let mes = document.getElementById(`${"desembroz0"}`)
                                mes.innerHTML = `${contagem[0]['Afastamento']}`
                            }

                        }
                        if (escolaridadeLista[i] == "Atrasos") {
                            if (mesesLista[i] == "Janeiro") {
                                let mes = document.getElementById(`${"janeiroz1"}`)
                                mes.innerHTML = `${contagem[0]['Atrasos']}`
                            }
                            if (mesesLista[i] == "Fevereiro") {
                                let mes = document.getElementById(`${"fevereiroz1"}`)
                                mes.innerHTML = `${contagem[0]['Atrasos']}`
                            }
                            if (mesesLista[i] == "Março") {
                                let mes = document.getElementById(`${"marcoz1"}`)
                                mes.innerHTML = `${contagem[0]['Atrasos']}`
                            }
                            if (mesesLista[i] == "Abril") {
                                let mes = document.getElementById(`${"abrilz1"}`)
                                mes.innerHTML = `${contagem[0]['Atrasos']}`
                            }
                            if (mesesLista[i] == "Maio") {
                                let mes = document.getElementById(`${"maioz1"}`)
                                mes.innerHTML = `${contagem[0]['Atrasos']}`
                            }
                            if (mesesLista[i] == "Junho") {
                                let mes = document.getElementById(`${"junhoz1"}`)
                                mes.innerHTML = `${contagem[0]['Atrasos']}`
                            }
                            if (mesesLista[i] == "Julho") {
                                let mes = document.getElementById(`${"julhoz1"}`)
                                mes.innerHTML = `${contagem[0]['Atrasos']}`
                            }
                            if (mesesLista[i] == "Agosto") {
                                let mes = document.getElementById(`${"agostoz1"}`)
                                mes.innerHTML = `${contagem[0]['Atrasos']}`
                            }
                            if (mesesLista[i] == "Setembro") {
                                let mes = document.getElementById(`${"setembroz1"}`)
                                mes.innerHTML = `${contagem[0]['Atrasos']}`
                            }
                            if (mesesLista[i] == "Outubro") {
                                let mes = document.getElementById(`${"outubrpz1"}`)
                                mes.innerHTML = `${contagem[0]['Atrasos']}`
                            }
                            if (mesesLista[i] == "Novembro") {
                                let mes = document.getElementById(`${"novembroz1"}`)
                                mes.innerHTML = `${contagem[0]['Atrasos']}`
                            }
                            if (mesesLista[i] == "Dezembro") {
                                let mes = document.getElementById(`${"desembroz1"}`)
                                mes.innerHTML = `${contagem[0]['Atrasos']}`
                            }

                        }
                        if (escolaridadeLista[i] == "Cursos externos") {
                            if (mesesLista[i] == "Janeiro") {
                                let mes = document.getElementById(`${"janeiroz2"}`)
                                mes.innerHTML = `${contagem[0]['Cursos externos']}`
                            }
                            if (mesesLista[i] == "Fevereiro") {
                                let mes = document.getElementById(`${"fevereiroz2"}`)
                                mes.innerHTML = `${contagem[0]['Cursos externos']}`
                            }
                            if (mesesLista[i] == "Março") {
                                let mes = document.getElementById(`${"marcoz2"}`)
                                mes.innerHTML = `${contagem[0]['Cursos externos']}`
                            }
                            if (mesesLista[i] == "Abril") {
                                let mes = document.getElementById(`${"abrilz2"}`)
                                mes.innerHTML = `${contagem[0]['Cursos externos']}`
                            }
                            if (mesesLista[i] == "Maio") {
                                let mes = document.getElementById(`${"maioz2"}`)
                                mes.innerHTML = `${contagem[0]['Cursos externos']}`
                            }
                            if (mesesLista[i] == "Junho") {
                                let mes = document.getElementById(`${"junhoz2"}`)
                                mes.innerHTML = `${contagem[0]['Cursos externos']}`
                            }
                            if (mesesLista[i] == "Julho") {
                                let mes = document.getElementById(`${"julhoz2"}`)
                                mes.innerHTML = `${contagem[0]['Cursos externos']}`
                            }
                            if (mesesLista[i] == "Agosto") {
                                let mes = document.getElementById(`${"agostoz2"}`)
                                mes.innerHTML = `${contagem[0]['Cursos externos']}`
                            }
                            if (mesesLista[i] == "Setembro") {
                                let mes = document.getElementById(`${"setembroz2"}`)
                                mes.innerHTML = `${contagem[0]['Cursos externos']}`
                            }
                            if (mesesLista[i] == "Outubro") {
                                let mes = document.getElementById(`${"outubrpz2"}`)
                                mes.innerHTML = `${contagem[0]['Cursos externos']}`
                            }
                            if (mesesLista[i] == "Novembro") {
                                let mes = document.getElementById(`${"novembroz2"}`)
                                mes.innerHTML = `${contagem[0]['Cursos externos']}`
                            }
                            if (mesesLista[i] == "Dezembro") {
                                let mes = document.getElementById(`${"desembroz2"}`)
                                mes.innerHTML = `${contagem[0]['Cursos externos']}`
                            }

                        }
                        if (escolaridadeLista[i] == "Falta não justificada") {
                            if (mesesLista[i] == "Janeiro") {
                                let mes = document.getElementById(`${"janeiroz3"}`)
                                mes.innerHTML = `${contagem[0]['Falta não justificada']}`
                            }
                            if (mesesLista[i] == "Fevereiro") {
                                let mes = document.getElementById(`${"fevereiroz3"}`)
                                mes.innerHTML = `${contagem[0]['Falta não justificada']}`
                            }
                            if (mesesLista[i] == "Março") {
                                let mes = document.getElementById(`${"marcoz3"}`)
                                mes.innerHTML = `${contagem[0]['Falta não justificada']}`
                            }
                            if (mesesLista[i] == "Abril") {
                                let mes = document.getElementById(`${"abrilz3"}`)
                                mes.innerHTML = `${contagem[0]['Falta não justificada']}`
                            }
                            if (mesesLista[i] == "Maio") {
                                let mes = document.getElementById(`${"maioz3"}`)
                                mes.innerHTML = `${contagem[0]['Falta não justificada']}`
                            }
                            if (mesesLista[i] == "Junho") {
                                let mes = document.getElementById(`${"junhoz3"}`)
                                mes.innerHTML = `${contagem[0]['Falta não justificada']}`
                            }
                            if (mesesLista[i] == "Julho") {
                                let mes = document.getElementById(`${"julhoz3"}`)
                                mes.innerHTML = `${contagem[0]['Falta não justificada']}`
                            }
                            if (mesesLista[i] == "Agosto") {
                                let mes = document.getElementById(`${"agostoz3"}`)
                                mes.innerHTML = `${contagem[0]['Falta não justificada']}`
                            }
                            if (mesesLista[i] == "Setembro") {
                                let mes = document.getElementById(`${"setembroz3"}`)
                                mes.innerHTML = `${contagem[0]['Falta não justificada']}`
                            }
                            if (mesesLista[i] == "Outubro") {
                                let mes = document.getElementById(`${"outubrpz3"}`)
                                mes.innerHTML = `${contagem[0]['Falta não justificada']}`
                            }
                            if (mesesLista[i] == "Novembro") {
                                let mes = document.getElementById(`${"novembroz3"}`)
                                mes.innerHTML = `${contagem[0]['Falta não justificada']}`
                            }
                            if (mesesLista[i] == "Dezembro") {
                                let mes = document.getElementById(`${"desembroz3"}`)
                                mes.innerHTML = `${contagem[0]['Falta não justificada']}`
                            }

                        }
                        if (escolaridadeLista[i] == "Licença médica") {
                            if (mesesLista[i] == "Janeiro") {
                                let mes = document.getElementById(`${"janeiroz4"}`)
                                mes.innerHTML = `${contagem[0]['Licença médica']}`
                            }
                            if (mesesLista[i] == "Fevereiro") {
                                let mes = document.getElementById(`${"fevereiroz4"}`)
                                mes.innerHTML = `${contagem[0]['Licença médica']}`
                            }
                            if (mesesLista[i] == "Março") {
                                let mes = document.getElementById(`${"marcoz4"}`)
                                mes.innerHTML = `${contagem[0]['Licença médica']}`
                            }
                            if (mesesLista[i] == "Abril") {
                                let mes = document.getElementById(`${"abrilz4"}`)
                                mes.innerHTML = `${contagem[0]['Licença médica']}`
                            }
                            if (mesesLista[i] == "Maio") {
                                let mes = document.getElementById(`${"maioz4"}`)
                                mes.innerHTML = `${contagem[0]['Licença médica']}`
                            }
                            if (mesesLista[i] == "Junho") {
                                let mes = document.getElementById(`${"junhoz4"}`)
                                mes.innerHTML = `${contagem[0]['Licença médica']}`
                            }
                            if (mesesLista[i] == "Julho") {
                                let mes = document.getElementById(`${"julhow2"}`)
                                mes.innerHTML = `${contagem[0]['Licença médica']}`
                            }
                            if (mesesLista[i] == "Agosto") {
                                let mes = document.getElementById(`${"agostoz4"}`)
                                mes.innerHTML = `${contagem[0]['Licença médica']}`
                            }
                            if (mesesLista[i] == "Setembro") {
                                let mes = document.getElementById(`${"setembroz4"}`)
                                mes.innerHTML = `${contagem[0]['Licença médica']}`
                            }
                            if (mesesLista[i] == "Outubro") {
                                let mes = document.getElementById(`${"outubrpz4"}`)
                                mes.innerHTML = `${contagem[0]['Licença médica']}`
                            }
                            if (mesesLista[i] == "Novembro") {
                                let mes = document.getElementById(`${"novembroz4"}`)
                                mes.innerHTML = `${contagem[0]['Licença médica']}`
                            }
                            if (mesesLista[i] == "Dezembro") {
                                let mes = document.getElementById(`${"desembroz4"}`)
                                mes.innerHTML = `${contagem[0]['Licença médica']}`
                            }

                        }
                        if (escolaridadeLista[i] == "Outros") {
                            if (mesesLista[i] == "Janeiro") {
                                let mes = document.getElementById(`${"janeiroz5"}`)
                                mes.innerHTML = `${contagem[0]['Outros']}`
                            }
                            if (mesesLista[i] == "Fevereiro") {
                                let mes = document.getElementById(`${"fevereiroz5"}`)
                                mes.innerHTML = `${contagem[0]['Outros']}`
                            }
                            if (mesesLista[i] == "Março") {
                                let mes = document.getElementById(`${"marcoz5"}`)
                                mes.innerHTML = `${contagem[0]['Outros']}`
                            }
                            if (mesesLista[i] == "Abril") {
                                let mes = document.getElementById(`${"abrilz5"}`)
                                mes.innerHTML = `${contagem[0]['Outros']}`
                            }
                            if (mesesLista[i] == "Maio") {
                                let mes = document.getElementById(`${"maioz5"}`)
                                mes.innerHTML = `${contagem[0]['Outros']}`
                            }
                            if (mesesLista[i] == "Junho") {
                                let mes = document.getElementById(`${"junhoz5"}`)
                                mes.innerHTML = `${contagem[0]['Outros']}`
                            }
                            if (mesesLista[i] == "Julho") {
                                let mes = document.getElementById(`${"julhoz5"}`)
                                mes.innerHTML = `${contagem[0]['Outros']}`
                            }
                            if (mesesLista[i] == "Agosto") {
                                let mes = document.getElementById(`${"agostoz5"}`)
                                mes.innerHTML = `${contagem[0]['Outros']}`
                            }
                            if (mesesLista[i] == "Setembro") {
                                let mes = document.getElementById(`${"setembroz5"}`)
                                mes.innerHTML = `${contagem[0]['Outros']}`
                            }
                            if (mesesLista[i] == "Outubro") {
                                let mes = document.getElementById(`${"outubrpz5"}`)
                                mes.innerHTML = `${contagem[0]['Outros']}`
                            }
                            if (mesesLista[i] == "Novembro") {
                                let mes = document.getElementById(`${"novembroz5"}`)
                                mes.innerHTML = `${contagem[0]['Outros']}`
                            }
                            if (mesesLista[i] == "Dezembro") {
                                let mes = document.getElementById(`${"desembroz5"}`)
                                mes.innerHTML = `${contagem[0]['Outros']}`
                            }

                        }
                    }
                });
            $(document).ready(function () {
                $('#tabbb').DataTable({
                    "scrollX": true,
                    "scrollY": 100,
                });
            });

            $(document).ready(function () {
                $('#tabbb2').DataTable({
                    "scrollX": true,
                    "scrollY": 100,
                });
            });

            $(document).ready(function () {
                $('#tabbb3').DataTable({
                    "scrollX": true,
                    "scrollY": 150,
                });
            });
            $(document).ready(function () {
                $('#tabbb4').DataTable({
                    "scrollX": true,
                    "scrollY": 100,
                });
            });
            $(document).ready(function () {
                $('#tabbb5').DataTable({
                    "scrollX": true,
                    "scrollY": 100,
                });
            });

            $(document).ready(function () {
                $('#tabbb6').DataTable({
                    "scrollX": true,
                    "scrollY": 200,
                });
            });

            $(document).ready(function () {
                $('#tabbb7').DataTable({
                    "scrollX": true,
                    "scrollY": 400,
                });
            });
        }

        if (e.target.id == "recrSelecc2") {
            nada = '';
            nada = `<div id="centro">
        <div class="animate__animated animate__pulse card3 text-center mr-4">
          <div class="row align-items-center">
              <div class="col-md-6">
                <h1 class="mb-4 text-black"><span class="text-black">Relatórios</span></h1>
                <h3 class="mb-4 text-black">Relatório de Adesão</h3>
              </div>
              <div class="col-md-6 d-none d-sm-none d-md-block">
                <img src="pics/Stocks2.png" alt="tours pics" class="img-fluid">
              </div>
            </div>
      </div>
      </div>
      <div class="text-center card4">
          <div class="row p-3">
                                  <div class="col-md">
                                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="perfil" >Perfil</a>                                                     
                                  </div>
                                  <div class="col-md">
                                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="altFunc2">Rotatividade</a>
                                  </div>
                                  <div class="col-md">
                                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="absent">Absenteismo</a>
                                  </div>
                                  <div class="col-md">
                                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="recrSelecc2"><h6>Rec. e Selecção</h6></a>
                                  </div>
                                  <div class="col-md">
                                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="financ">Financeiro</a>
                                  </div>
    
                                  <div class="col-md">
                                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="treinamentosRelatorio">Treinamentos</a>
                                  </div>
    
                              </div>
                    </div>
                    <div class="text-center card5">
                        <h1 class="h4 text-black mb-4">Quantidade de Colaboradoress</h1>
                    </div>
                    <div class="text-center cardTab cardTab animate__animated animate__pulse">
                    <table class="table m-2" id="tabbb">
                            <thead>
                              <tr class="bg-gradient-primary text-center text-black">
                                <th scope="col"></th>
                                <th>Janeiro</th>
                                <th>Fevereiro</th>
                                <th>Marco</th>
                                <th>Abril</th>
                                <th>Maio</th>
                                <th>Junho</th>
                                <th>Julho</th>
                                <th>Agosto</th>
                                <th>Setembro</th>
                                <th>Outubro</th>
                                <th>Novembro</th>
                                <th>Dezembro</th>
                                <th>Ano</th>
                              </tr>
                            </thead>
                            <tbody id="myTableeee" class="tt text-center text-black"">                     
                            </tbody>
                        </table>
                    </div>
    
                    <div class="text-center card5">
                        <h1 class="h4 text-black mb-4">Total de horas de trabalho</h1>
                    </div>
                    <div class="text-center cardTab cardTab animate__animated animate__pulse">
                    <table class="table m-2" id="tabbb2">
                    <thead>
                      <tr class="bg-gradient-primary text-center text-black">
                        <th scope="col"></th>
                        <th>Janeiro</th>
                        <th>Fevereiro</th>
                        <th>Marco</th>
                        <th>Abril</th>
                        <th>Maio</th>
                        <th>Junho</th>
                        <th>Julho</th>
                        <th>Agosto</th>
                        <th>Setembro</th>
                        <th>Outubro</th>
                        <th>Novembro</th>
                        <th>Dezembro</th>
                        <th>Ano</th>
                      </tr>
                    </thead>
                    <tbody id="myTabGenero" class="tt text-center text-black"">                     
                    </tbody>
                </table>
                    </div>
    
    
                    <div class="text-center card5">
                        <h1 class="h4 text-black mb-4">Tipo de Ausências</h1>
                    </div>
                    <div class="text-center cardTab cardTab animate__animated animate__pulse">
                    <table class="table m-2" id="tabbb3">
                            <thead>
                              <tr class="bg-gradient-primary text-center text-black">
                                <th scope="col"></th>
                                <th>Janeiro</th>
                                <th>Fevereiro</th>
                                <th>Marco</th>
                                <th>Abril</th>
                                <th>Maio</th>
                                <th>Junho</th>
                                <th>Julho</th>
                                <th>Agosto</th>
                                <th>Setembro</th>
                                <th>Outubro</th>
                                <th>Novembro</th>
                                <th>Dezembro</th>
                                <th>Ano</th>
                              </tr>
                            </thead>
                            <tbody id="myTabEtaria" class="tt text-center text-black"">                     
                            </tbody>
                        </table>
                    </div>
    
                    <div class="text-center card5">
                        <h1 class="h4 text-black mb-4">Taxa de Absenteismo</h1>
                    </div>
                    <div class="text-center cardTab cardTab animate__animated animate__pulse">
                    <table class="table m-2" id="tabbb4">
                            <thead>
                              <tr class="bg-gradient-primary text-center text-black">
                                <th scope="col"></th>
                                <th>Janeiro</th>
                                <th>Fevereiro</th>
                                <th>Marco</th>
                                <th>Abril</th>
                                <th>Maio</th>
                                <th>Junho</th>
                                <th>Julho</th>
                                <th>Agosto</th>
                                <th>Setembro</th>
                                <th>Outubro</th>
                                <th>Novembro</th>
                                <th>Dezembro</th>
                                <th>Ano</th>
                              </tr>
                            </thead>
                            <tbody id="myTabTEmpresa" class="tt text-center text-black"">                     
                            </tbody>
                        </table>
                    </div>
    
    
                    <div class="text-center card5">
                    <h1 class="h4 text-black mb-4">Gravidade</h1>
                    </div>
                    <div class="text-center cardTab cardTab animate__animated animate__pulse">
                    <table class="table m-2" id="tabbb5">
                                <thead>
                                  <tr class="bg-gradient-primary text-center text-black">
                                    <th scope="col"></th>
                                    <th>Janeiro</th>
                                    <th>Fevereiro</th>
                                    <th>Marco</th>
                                    <th>Abril</th>
                                    <th>Maio</th>
                                    <th>Junho</th>
                                    <th>Julho</th>
                                    <th>Agosto</th>
                                    <th>Setembro</th>
                                    <th>Outubro</th>
                                    <th>Novembro</th>
                                    <th>Dezembro</th>
                                    <th>Ano</th>
                                  </tr>
                                </thead>
                                <tbody id="myTabTEmpresaD" class="tt text-center text-black"">                     
                                </tbody>
                            </table>
                    </div>
    
                    <div class="text-center card5">
                    <h1 class="h4 text-black mb-4">Ausencias Planejadas</h1>
                    </div>
                    <div class="text-center cardTab cardTab animate__animated animate__pulse">
                    <table class="table m-2" id="tabbb6">
                            <thead>
                              <tr class="bg-gradient-primary text-center text-black">
                                <th scope="col"></th>
                                <th>Janeiro</th>
                                <th>Fevereiro</th>
                                <th>Marco</th>
                                <th>Abril</th>
                                <th>Maio</th>
                                <th>Junho</th>
                                <th>Julho</th>
                                <th>Agosto</th>
                                <th>Setembro</th>
                                <th>Outubro</th>
                                <th>Novembro</th>
                                <th>Dezembro</th>
                                <th>Ano</th>
                              </tr>
                            </thead>
                            <tbody id="myTabTEmpresaD2" class="tt text-center text-black"">                     
                            </tbody>
                        </table>
                    </div>
    
    
    
                    <div class="text-center card5">
                    <h1 class="h4 text-black mb-4">Ausencias nao Planejadas</h1>
                    </div>
                    <div class="text-center cardTab cardTab animate__animated animate__pulse">
                    <div class="col-md">
                        <table class="table m-2" id="tabbb7">
                            <thead>
                              <tr class="bg-gradient-primary text-center text-black">
                                <th scope="col">Tipos de Desligamentos</th>
                                <th>Janeiro</th>
                                <th>Fevereiro</th>
                                <th>Marco</th>
                                <th>Abril</th>
                                <th>Maio</th>
                                <th>Junho</th>
                                <th>Julho</th>
                                <th>Agosto</th>
                                <th>Setembro</th>
                                <th>Outubro</th>
                                <th>Novembro</th>
                                <th>Dezembro</th>
                                <th>Ano</th>
                              </tr>
                            </thead>
                            <tbody id="myTabTEmpresaD3" class="tt text-center text-black">                     
                            </tbody>
                        </table>
                    </div>
                    </div>
          
          `;
            contrudo.innerHTML = nada;
            const tablerrr = document.getElementById('myTableeee');
            const myTabGenero = document.getElementById('myTabGenero');
            const myTabEtaria = document.getElementById('myTabEtaria');
            const myTabTEmpresa = document.getElementById('myTabTEmpresa');
            const myTabTEmpresaD = document.getElementById('myTabTEmpresaD');
            const myTabTEmpresaD2 = document.getElementById('myTabTEmpresaD2');
            const myTabTEmpresaD3 = document.getElementById('myTabTEmpresaD3');
            colabora = '';
            titulo = '';

            for (var i = 0; i < variacaoMensal1.length; i++) {
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
                var newCell13 = newRow.insertCell(12);
                var newCell14 = newRow.insertCell(13);

                newCell1.innerHTML = variacaoMensal1[i];
                newCell2.innerHTML = `<div class="nomeFuncionario">-</div>`;
                newCell3.innerHTML = `<div class="genero">-</div>`;
                newCell4.innerHTML = `<div class="dataNascimento">-</div>`;
                newCell5.innerHTML = `<div class="dataAdmissao">-</div>`;
                newCell6.innerHTML = `<div class="dataDesligamento">-</div>`;
                newCell7.innerHTML = `<div class="tipoDesligamento">-</div>`;
                newCell8.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell9.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell10.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell11.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell12.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell13.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell14.innerHTML = `<div class="tempoEmpresa">-</div>`;
            }

            horas.forEach(rec => {

                var newRow = myTabGenero.insertRow();
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
                var newCell14 = newRow.insertCell(13);

                newCell1.innerHTML = rec;
                newCell2.innerHTML = `<div class="nomeFuncionario">-</div>`;
                newCell3.innerHTML = `<div class="genero">-</div>`;
                newCell4.innerHTML = `<div class="dataNascimento">-</div>`;
                newCell5.innerHTML = `<div class="dataAdmissao">-</div>`;
                newCell6.innerHTML = `<div class="dataDesligamento">-</div>`;
                newCell7.innerHTML = `<div class="tipoDesligamento">-</div>`;
                newCell8.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell9.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell10.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell11.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell12.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell13.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell14.innerHTML = `<div class="tempoEmpresa">-</div>`;
            });

            ausencis.forEach(rec => {

                var newRow = myTabEtaria.insertRow();
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
                var newCell14 = newRow.insertCell(13);

                newCell1.innerHTML = rec;
                newCell2.innerHTML = `<div class="nomeFuncionario">-</div>`;
                newCell3.innerHTML = `<div class="genero">-</div>`;
                newCell4.innerHTML = `<div class="dataNascimento">-</div>`;
                newCell5.innerHTML = `<div class="dataAdmissao">-</div>`;
                newCell6.innerHTML = `<div class="dataDesligamento">-</div>`;
                newCell7.innerHTML = `<div class="tipoDesligamento">-</div>`;
                newCell8.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell9.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell10.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell11.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell12.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell13.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell14.innerHTML = `<div class="tempoEmpresa">-</div>`;
            });

            taxaAdimissional.forEach(rec => {

                var newRow = myTabTEmpresa.insertRow();
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
                var newCell14 = newRow.insertCell(13);

                newCell1.innerHTML = rec;
                newCell2.innerHTML = `<div class="nomeFuncionario">-</div>`;
                newCell3.innerHTML = `<div class="genero">-</div>`;
                newCell4.innerHTML = `<div class="dataNascimento">-</div>`;
                newCell5.innerHTML = `<div class="dataAdmissao">-</div>`;
                newCell6.innerHTML = `<div class="dataDesligamento">-</div>`;
                newCell7.innerHTML = `<div class="tipoDesligamento">-</div>`;
                newCell8.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell9.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell10.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell11.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell12.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell13.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell14.innerHTML = `<div class="tempoEmpresa">-</div>`;
            })
            taxaAdimissionald.forEach(rec => {

                var newRow = myTabTEmpresaD.insertRow();
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
                var newCell14 = newRow.insertCell(13);

                newCell1.innerHTML = rec;
                newCell2.innerHTML = `<div class="nomeFuncionario">-</div>`;
                newCell3.innerHTML = `<div class="genero">-</div>`;
                newCell4.innerHTML = `<div class="dataNascimento">-</div>`;
                newCell5.innerHTML = `<div class="dataAdmissao">-</div>`;
                newCell6.innerHTML = `<div class="dataDesligamento">-</div>`;
                newCell7.innerHTML = `<div class="tipoDesligamento">-</div>`;
                newCell8.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell9.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell10.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell11.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell12.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell13.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell14.innerHTML = `<div class="tempoEmpresa">-</div>`;
            })

            ausenciaPlanejada2.forEach(rec => {

                var newRow = myTabTEmpresaD2.insertRow();
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
                var newCell14 = newRow.insertCell(13);

                newCell1.innerHTML = rec;
                newCell2.innerHTML = `<div class="nomeFuncionario">-</div>`;
                newCell3.innerHTML = `<div class="genero">-</div>`;
                newCell4.innerHTML = `<div class="dataNascimento">-</div>`;
                newCell5.innerHTML = `<div class="dataAdmissao">-</div>`;
                newCell6.innerHTML = `<div class="dataDesligamento">-</div>`;
                newCell7.innerHTML = `<div class="tipoDesligamento">-</div>`;
                newCell8.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell9.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell10.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell11.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell12.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell13.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell14.innerHTML = `<div class="tempoEmpresa">-</div>`;
            })
            ausenciaNaoPlanejada2.forEach(rec => {

                var newRow = myTabTEmpresaD3.insertRow();
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
                var newCell14 = newRow.insertCell(13);

                newCell1.innerHTML = rec;
                newCell2.innerHTML = `<div class="nomeFuncionario">-</div>`;
                newCell3.innerHTML = `<div class="genero">-</div>`;
                newCell4.innerHTML = `<div class="dataNascimento">-</div>`;
                newCell5.innerHTML = `<div class="dataAdmissao">-</div>`;
                newCell6.innerHTML = `<div class="dataDesligamento">-</div>`;
                newCell7.innerHTML = `<div class="tipoDesligamento">-</div>`;
                newCell8.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell9.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell10.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell11.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell12.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell13.innerHTML = `<div class="tempoEmpresa">-</div>`;
                newCell14.innerHTML = `<div class="tempoEmpresa">-</div>`;
            })

            $(document).ready(function () {
                $('#tabbb').DataTable({
                    "scrollX": true,
                    "scrollY": 100,
                });
            });

            $(document).ready(function () {
                $('#tabbb2').DataTable({
                    "scrollX": true,
                    "scrollY": 50,
                });
            });

            $(document).ready(function () {
                $('#tabbb3').DataTable({
                    "scrollX": true,
                    "scrollY": 100,
                });
            });
            $(document).ready(function () {
                $('#tabbb4').DataTable({
                    "scrollX": true,
                    "scrollY": 50,
                });
            });
            $(document).ready(function () {
                $('#tabbb5').DataTable({
                    "scrollX": true,
                    "scrollY": 50,
                });
            });

            $(document).ready(function () {
                $('#tabbb6').DataTable({
                    "scrollX": true,
                    "scrollY": 150,
                });
            });

            $(document).ready(function () {
                $('#tabbb7').DataTable({
                    "scrollX": true,
                    "scrollY": 300,
                });
            });
        }

        if (e.target.id == "financ") {
            nada = '';
            nada = `<div id="centro">
        <div class="animate__animated animate__pulse card3 text-center mr-4">
          <div class="row align-items-center">
              <div class="col-md-6">
                <h1 class="mb-4 text-black"><span class="text-black">Relatórios</span></h1>
                <h3 class="mb-4 text-black">Finanças</h3>
              </div>
              <div class="col-md-6 d-none d-sm-none d-md-block">
                <img src="pics/Stocks2.png" alt="tours pics" class="img-fluid">
              </div>
            </div>
      </div>
      </div>
      <div class="text-center card4">
          <div class="row p-3">
                                  <div class="col-md">
                                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="perfil" >Perfil</a>                                                     
                                  </div>
                                  <div class="col-md">
                                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="altFunc2">Rotatividade</a>
                                  </div>
                                  <div class="col-md">
                                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="absent">Absenteismo</a>
                                  </div>
                                  <div class="col-md">
                                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="recrSelecc2"><h6>Rec. e Selecção</h6></a>
                                  </div>
                                  <div class="col-md">
                                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="financ">Financeiro</a>
                                  </div>
    
                                  <div class="col-md">
                                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="treinamentosRelatorio">Treinamentos</a>
                                  </div>
    
                              </div>
                    </div>
                    
          
          `;
            contrudo.innerHTML = nada;
        }
        if (e.target.id == "treinamentosRelatorio") {
            nada = '';
            nada = `<div id="centro">
        <div class="animate__animated animate__pulse card3 text-center mr-4">
          <div class="row align-items-center">
              <div class="col-md-6">
                <h1 class="mb-4 text-black"><span class="text-black">Relatórios</span></h1>
                <h3 class="mb-4 text-black">Treinamentos</h3>
              </div>
              <div class="col-md-6 d-none d-sm-none d-md-block">
                <img src="pics/Stocks2.png" alt="tours pics" class="img-fluid">
              </div>
            </div>
      </div>
      </div>
      <div class="text-center card4">
          <div class="row p-3">
                                  <div class="col-md">
                                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="perfil" >Perfil</a>                                                     
                                  </div>
                                  <div class="col-md">
                                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="altFunc2">Rotatividade</a>
                                  </div>
                                  <div class="col-md">
                                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="absent">Absenteismo</a>
                                  </div>
                                  <div class="col-md">
                                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="recrSelecc2"><h6>Rec. e Selecção</h6></a>
                                  </div>
                                  <div class="col-md">
                                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="financ">Financeiro</a>
                                  </div>
    
                                  <div class="col-md">
                                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="treinamentosRelatorio">Treinamentos</a>
                                  </div>
    
                              </div>
                    </div>
                    
          
          `;
            contrudo.innerHTML = nada;
        }


        if (e.target.id == "cadastro") {
            nada = '';
            nada = `<div class="animate__animated animate__pulse card3 text-center mr-4">
            <div class="row align-items-center">
                <div class="col-md-6">
                  <h1 class="mb-4 text-black"><span class="text-black">Cadastros</span></h1>
                </div>
                <div class="col-md-6 d-none d-sm-none d-md-block">
                  <img src="pics/Stocks2.png" alt="tours pics" class="img-fluid">
                </div>
              </div>
            </div>
            <div class="text-center card4">
            <div class="row p-3">
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="func2">Funcionários</a>                                                     
                                    </div>
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="altFunc"><h6>Alt. Funcionário</h6></a>
                                    </div>
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="recrSelecc"><h6>Rec. e Selecção</h6></a>
                                    </div>
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="jornad">Jornadas</a>
                                    </div>
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="ausencias">Ausências</a>
                                    </div>
    
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="financeiro">Financeiro</a>
                                    </div>
    
                                    <div class="col-md">
                                        <a href="#" class="text-center btn btn-outline-dark btn-lg" id="treinamentos">Treinamentos</a>
                                    </div>
                                </div>
            </div>
            `;
            contrudo.innerHTML = nada;
        }

        if (e.target.id == "cargos") {
            console.log(e.target.id);
            nada = '';
            nada = `
            <div id="centro">
            <div class="animate__animated animate__pulse card3 text-center mr-4">
              <div class="row align-items-center">
                  <div class="col-md-6">
                    <h1 class="mb-4 text-black"><span class="text-black">Configurações</span></h1>
                    <h3 class="mb-4 text-black">Cargos</h3>
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
                    <div class="card text-center">
                        <a href="#" class="text-center btn btn-lg btn-block" id="parametros">Parâmetros</a>   
                    </div>
                </div>
              <div class="col-md-4 col-xl-5 mb-4">
                <div class="card text-center">
                    <a href="#" class="text-center btn btn-lg btn-block" id="cargos">Cargos</a>
                  </div>          
                </div>
              </div>         
            </div>
        </div>
          <div id="cargos"></div>
          <div id="parametro"></div>
            <div class="container mt-4 text-center">
            <div class="row text-center">
              <div class="col-md-4 col-xl-6 mb-4">
                <div class="card text-center">
                  <div class="card-body text-black">
                    <div class="row align-items-center">
                      <div class="col">                                        
                        <div class="m-2 text-center text-black" id="nivelAcademico">                                
                        </div>
                        <div class="m-2" id="geral">
                                           
                        </div>
                        <div class="m-2 text-center" id="addParametros2">                                
                        </div>
                    </div> 
                  </div>
                  </div>          
                </div>
              </div>
              <div class="col-md-4 col-xl-6 mb-4">
                <div class="card text-center">
                  <div class="card-body text-black">
                    <div class="row no-gutters align-items-center">
                      <div class="col">                                        
                        <div class="m-2 text-center text-black" id="tiposDesligamentos1">                                
                        </div>
                        <div class="m-2" id="tiposDesligamentosT">
                                           
                        </div>
                        <div class="m-2 text-center" id="addParametros3">                                
                        </div>
                    </div>
                  </div>
                  </div>          
                </div>
              </div>         
              
            </div>
        </div>`;
            contrudo.innerHTML = nada;
            const configuracoes = document.getElementById('configuracoes');
            const cadastro = document.getElementById('cadastro');
            const relatorios = document.getElementById('relatorios');
            const indicadores = document.getElementById('indicadores');
            const instrucoes = document.getElementById('instrucoes');
            const tabela = document.getElementById('geral');
            const secundButton = document.getElementById('secundButton');
            const parametros = document.getElementById('parametros');
            const estruturaCargos = document.getElementById('estruturaCargos');
            const addParametros2 = document.getElementById('addParametros2');
            const ddlista = document.getElementById('ddlista');
            const parametrosRH = document.getElementById('parametros');
            const nivelAcademico = document.getElementById('nivelAcademico');
            const tiposDesligamentosi = document.getElementById('tiposDesligamentos1');
            const tiposDesligamentosT = document.getElementById('tiposDesligamentosT');
            const addParametros3 = document.getElementById('addParametros3');

            // Tipos de Cargos
            const tiposCargos1 = [
                'Operacional',
                'Supervisão',
                'Gestão',
                'Direção'
            ];
            let parametrosListads = '';
            tiposCargos1.forEach(rec => {
                parametrosListads += `
                <div class="m-2 text-center">                
                    <table id="table_id" class="table table-striped table-striped text-black">
                        <tbody>
                            <tr>
                                <td>${rec}</td>
                            </tr>
                        </tbody>
                    </table>             
                </div>         
                `;
            })

            addParametros2.innerHTML = `
            <div class="col-md">
                <button type="button" class="btn btn-primary" id="addParametros">+</button>                 
            </div>`;
            nivelAcademico.innerHTML = `<h5 class="mt-2">Tipos de Cargos</h5><hr>`;
            tabela.innerHTML = parametrosListads;

            let parametrosLista1wef = '';
            // Cargos
            const cargosT = [
                'Assistente administrativo',
                'Vendedor',
                'Auxiliar administrativo',
                'Recepcionista',
                'Estagiário administrativo',
                'Técnico de segurança do trabalho',
                'Auxiliar logístico',
                'Assistente comercial',
                'Gerente de loja'
            ];
            cargosT.forEach(rec => {
                parametrosLista1wef += `
                <div class="m-2 text-center">                
                    <table id="table_id" class="table table-striped table-striped text-black">
                        <tbody>
                            <tr>
                                <td>${rec}</td>
                            </tr>
                        </tbody>
                    </table>             
                </div>         
                `;
            })

            addParametros3.innerHTML = `
            <div class="col-md">
                <button type="button" class="btn btn-primary" id="addParametros1">+</button>                 
            </div>`;
            tiposDesligamentosi.innerHTML = `<h5 class="mt-2">Cargos</h5><hr>`;
            tiposDesligamentosT.innerHTML = parametrosLista1wef;

        }

        if (e.target.id == "parametros") {
            console.log(e.target.id);
            nada = '';
            nada = `
            <div id="centro">
            <div class="animate__animated animate__pulse card3 text-center mr-4 text-black">
              <div class="row align-items-center">
                  <div class="col-md-6">
                    <h1 class="mb-4 text-black"><span class="text-black">Configurações</span></h1>
                    <h3 class="mb-4 text-black">Parâmetros</h3>
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
                    <div class="card text-center">
                        <a href="#" class="text-center btn btn-lg btn-block" id="parametros">Parâmetros</a>   
                    </div>
                </div>
              <div class="col-md-4 col-xl-5 mb-4">
                <div class="card text-center">
                    <a href="#" class="text-center btn btn-lg btn-block" id="cargos">Cargos</a>
                  </div>          
                </div>
              </div>         
            </div>
        </div>
          <div id="cargos"></div>
          <div id="parametro"></div>
            <div class="container mt-4">
              <div class="row">
                <div class="col-md-6 col-xl-4 mb-4">
                  <div class="card text-center">
                    <div class="card-body text-black">
                      <div class="row align-items-center">
                        <div class="col">                                        
                          <div class="m-2 text-center text-black" id="nivelAcademico">                                
                          </div>
                          <div class="m-2" id="geral">
                                             
                          </div>
                          <div class="m-2 text-center" id="addParametros2">                                
                          </div>
                      </div> 
                    </div>
                    </div>          
                  </div>
                </div>
                <div class="col-md-6 col-xl-4 mb-4">
                  <div class="card text-center">
                    <div class="card-body text-black">
                      <div class="row no-gutters align-items-center">
                        <div class="col">                                        
                          <div class="m-2 text-center text-black" id="tiposDesligamentos1">                                
                          </div>
                          <div class="m-2" id="tiposDesligamentosT">
                                             
                          </div>
                          <div class="m-2 text-center" id="addParametros3">                                
                          </div>
                      </div>
                    </div>
                    </div>          
                  </div>
                </div>
                <div class="col-md-6 col-xl-4 mb-4">
                  <div class="card text-center">
                    <div class="card-body text-black">
                      <div class="row no-gutters align-items-center">
                        <div class="col">                                        
                          <div class="m-2 text-center text-black" id="tiposDesligamentos2">                                
                          </div>
                          <div class="m-2" id="tiposDesligamentosT2">
                                             
                          </div>
                          <div class="m-2 text-center" id="addParametros4">                                
                          </div>
                      </div> 
                      </div>
                    </div>          
                  </div>
                </div>
                <div class="col-md-6 col-xl-4 mb-4">
                  <div class="card text-center">
                    <div class="card-body text-black">
                      <div class="row no-gutters align-items-center">
                        <div class="col">                                        
                          <div class="m-2 text-center text-black" id="tiposDesligamentos3">                                
                            </div>
                            <div class="m-2" id="tiposDesligamentosT3">
                                                
                            </div>
                            <div class="m-2 text-center" id="addParametros5">                                
                            </div>
                          </div>
                      </div> 
                    </div>
                  </div>          
                </div>
                <div class="col-md-6 col-xl-4 mb-4">
                  <div class="card text-center">
                    <div class="card-body text-black">
                      <div class="row no-gutters align-items-center">
                        <div class="col">                                        
                          <div class="m-2 text-center text-black" id="tiposDesligamentos4">                                
                          </div>
                          <div class="m-2" id="tiposDesligamentosT4">
                                             
                          </div>
                          <div class="m-2 text-center" id="addParametros6">                                
                          </div>
                      </div>
                      </div> 
                    </div>
                  </div>          
                </div>
      
                <div class="col-md-6 col-xl-4 mb-4">
                  <div class="card text-center">
                    <div class="card-body text-black">
                      <div class="row no-gutters align-items-center">
                        <div class="col">                                        
                          <div class="m-2 text-center text-black" id="tiposDesligamentos5">                                
                          </div>
                          <div class="m-2" id="tiposDesligamentosT5">
                                             
                          </div>
                          <div class="m-2 text-center" id="addParametros7">                                
                          </div>
                      </div>
                      </div> 
                    </div>
                  </div>          
                </div>
      
                <div class="col-md-6 col-xl-4 mb-4">
                  <div class="card text-center">
                    <div class="card-body text-black">
                      <div class="row no-gutters align-items-center">
                        <div class="col">                                        
                          <div class="m-2 text-center text-black" id="tiposDesligamentos6">                                
                          </div>
                          <div class="m-2" id="tiposDesligamentosT6">
                                             
                          </div>
                          <div class="m-2 text-center" id="addParametros8">                                
                          </div>
                      </div>
                      </div> 
                    </div>
                  </div>          
                </div>
      
                <div class="col-md-6 col-xl-4 mb-4">
                  <div class="card text-center">
                    <div class="card-body text-black">
                      <div class="row no-gutters align-items-center">
                        <div class="col">                                        
                          <div class="m-2 text-center text-black" id="tiposDesligamentos7">                                
                          </div>
                          <div class="m-2" id="tiposDesligamentosT7">
                                             
                          </div>
                          <div class="m-2 text-center" id="addParametros9">                                
                          </div>
                      </div>
                      </div> 
                    </div>
                  </div>          
                </div>
                
                <div class="col-md-6 col-xl-4 mb-4">
                  <div class="card text-center">
                    <div class="card-body text-black">
                      <div class="row no-gutters align-items-center">
                        <div class="col">                                        
                          <div class="m-2 text-center text-black" id="tiposDesligamentos8">                                
                          </div>
                          <div class="m-2" id="tiposDesligamentosT8">
                                             
                          </div>
                          <div class="m-2 text-center" id="addParametros10">                                
                          </div>
                      </div>
                      </div> 
                    </div>
                  </div>          
                </div>
      
                <div class="col-md-6 col-xl-4 mb-4">
                  <div class="card text-center">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col">                                        
                          <div class="m-2 text-center text-black" id="tiposDesligamentos9">                                
                          </div>
                          <div class="m-2 text-black" id="tiposDesligamentosT9">
                                             
                          </div>
                          <div class="m-2 text-center" id="addParametros11">                                
                          </div>
                      </div>
                      </div> 
                    </div>
                  </div>          
                </div>
      
                <div class="col-md-6 col-xl-4 mb-4">
                  <div class="card text-center">
                    <div class="card-body text-black">
                      <div class="row no-gutters align-items-center">
                        <div class="col">                                        
                          <div class="m-2 text-center text-black" id="tiposDesligamentos10">                                
                          </div>
                          <div class="m-2 text-black" id="tiposDesligamentosT10">
                                             
                          </div>
                          <div class="m-2 text-center" id="addParametros12">                                
                          </div>
                      </div>
                      </div> 
                    </div>
                  </div>          
                </div>
      
                <div class="col-md-6 col-xl-4 mb-4">
                  <div class="card text-center">
                    <div class="card-body text-black">
                      <div class="row no-gutters align-items-center">
                        <div class="col">                                        
                          <div class="m-2 text-center text-black" id="tiposDesligamentos11">                                
                          </div>
                          <div class="m-2 text-black" id="tiposDesligamentosT11">
                                             
                          </div>
                          <div class="m-2 text-center" id="addParametros13">                                
                          </div>
                      </div>
                      </div> 
                    </div>
                  </div>          
                </div>
      
                
                
              </div>
          </div>`;
            contrudo.innerHTML = nada;
            const configuracoes = document.getElementById('configuracoes');
            const cadastro = document.getElementById('cadastro');
            const relatorios = document.getElementById('relatorios');
            const indicadores = document.getElementById('indicadores');
            const instrucoes = document.getElementById('instrucoes');
            const tabela = document.getElementById('geral');
            const secundButton = document.getElementById('secundButton');
            const parametros = document.getElementById('parametros');
            const estruturaCargos = document.getElementById('estruturaCargos');
            const addParametros2 = document.getElementById('addParametros2');
            const ddlista = document.getElementById('ddlista');
            const parametrosRH = document.getElementById('parametros');
            const nivelAcademico = document.getElementById('nivelAcademico');
            const tiposDesligamentosi = document.getElementById('tiposDesligamentos1');
            const tiposDesligamentosT = document.getElementById('tiposDesligamentosT');
            const addParametros3 = document.getElementById('addParametros3');
            const tiposDesligamentos2 = document.getElementById('tiposDesligamentos2');
            const tiposDesligamentosT2 = document.getElementById('tiposDesligamentosT2');
            const addParametros4 = document.getElementById('addParametros4');
            const tiposDesligamentos3 = document.getElementById('tiposDesligamentos3');
            const tiposDesligamentosT3 = document.getElementById('tiposDesligamentosT3');
            const addParametros5 = document.getElementById('addParametros5');
            const tiposDesligamentos4 = document.getElementById('tiposDesligamentos4');
            const tiposDesligamentosT4 = document.getElementById('tiposDesligamentosT4');
            const addParametros6 = document.getElementById('addParametros6');
            const tiposDesligamentos5 = document.getElementById('tiposDesligamentos5');
            const tiposDesligamentosT5 = document.getElementById('tiposDesligamentosT5');
            const addParametros7 = document.getElementById('addParametros7');
            const tiposDesligamentos6 = document.getElementById('tiposDesligamentos6');
            const tiposDesligamentosT6 = document.getElementById('tiposDesligamentosT6');
            const addParametros8 = document.getElementById('addParametros8');
            const tiposDesligamentos7 = document.getElementById('tiposDesligamentos7');
            const tiposDesligamentosT7 = document.getElementById('tiposDesligamentosT7');
            const addParametros9 = document.getElementById('addParametros9');
            const tiposDesligamentos8 = document.getElementById('tiposDesligamentos8');
            const tiposDesligamentosT8 = document.getElementById('tiposDesligamentosT8');
            const addParametros10 = document.getElementById('addParametros10');
            const tiposDesligamentos9 = document.getElementById('tiposDesligamentos9');
            const tiposDesligamentosT9 = document.getElementById('tiposDesligamentosT9');
            const addParametros11 = document.getElementById('addParametros11');
            const tiposDesligamentos10 = document.getElementById('tiposDesligamentos10');
            const tiposDesligamentosT10 = document.getElementById('tiposDesligamentosT10');
            const addParametros12 = document.getElementById('addParametros12');
            const tiposDesligamentos11 = document.getElementById('tiposDesligamentos11');
            const tiposDesligamentosT11 = document.getElementById('tiposDesligamentosT11');
            const addParametros13 = document.getElementById('addParametros13');


            let nivelEscolaridade22 = '';
            // Nivel academico
            nivelEscolaridade.forEach(rec => {
                nivelEscolaridade22 += `
                <div class="m-2 text-center">                
                    <table id="table_id" class="table table-striped table-striped text-black">
                        <tbody>
                            <tr>
                                <td>${rec}</td>
                            </tr>
                        </tbody>
                    </table>             
                </div>         
                `;
            })

            addParametros2.innerHTML = `
            <div class="col-md">
                <button type="button" class="btn btn-primary" id="addParametros">+</button>                 
            </div>`;
            nivelAcademico.innerHTML = `<h5 class="mt-2">Níveis Académicos</h5><hr>`;
            tabela.innerHTML = nivelEscolaridade22;

            let parametrosLista1qw = '';
            // Tipos de desligamentos
            const tiposDesligamentosw2 = [
                'Demissão por Justa Causa',
                'Demissão Sem Justa Causa',
                'Pedido de Demissão Pelo Funcionário',
                'Acordo Entre as Partes',
                'Demissão Consensual',
                'Término do Contrato de Estágio'
            ];
            tiposDesligamentosw2.forEach(rec => {
                parametrosLista1qw += `
                <div class="m-2 text-center">                
                    <table id="table_id" class="table table-striped table-striped text-black">
                        <tbody>
                            <tr>
                                <td>${rec}</td>
                            </tr>
                        </tbody>
                    </table>             
                </div>         
                `;
            })

            addParametros3.innerHTML = `
            <div class="col-md">
                <button type="button" class="btn btn-primary" id="addParametros1">+</button>                 
            </div>`;
            tiposDesligamentosi.innerHTML = `<h5 class="mt-2">Tipos de desligamentos</h5><hr>`;
            tiposDesligamentosT.innerHTML = parametrosLista1qw;

            let parametrosLista2we = '';
            // Tipos de Jornada de Trabalho
            const tiposJornadasTrabalhow = [
                'CLT normal',
                'Estágio',
                'CLT turno'
            ];
            tiposJornadasTrabalhow.forEach(rec => {
                parametrosLista2we += `
                <div class="m-2 text-center">                
                    <table id="table_id" class="table table-striped table-striped text-black">
                        <tbody>
                            <tr>
                                <td>${rec}</td>
                            </tr>
                        </tbody>
                    </table>             
                </div>         
                `;
            })

            addParametros4.innerHTML = `
            <div class="col-md">
                <button type="button" class="btn btn-primary" id="addParametros2">+</button>                 
            </div>`;
            tiposDesligamentos2.innerHTML = `<h5 class="mt-2">Tipos de Jornada de Trabalho</h5><hr>`;
            tiposDesligamentosT2.innerHTML = parametrosLista2we;

            // Ausência Planejada
            const ausenciaPlanejada2w = [
                'Feriados',
                'Férias',
                'Folgas'
            ];
            ausenciaPlanejada2w.forEach(rec => {
                parametrosLista3 += `
                <div class="m-2 text-center">                
                    <table id="table_id" class="table table-striped table-striped text-black">
                        <tbody>
                            <tr>
                                <td>${rec}</td>
                            </tr>
                        </tbody>
                    </table>             
                </div>         
                `;
            })

            addParametros5.innerHTML = `
            <div class="col-md">
                <button type="button" class="btn btn-primary" id="addParametros3">+</button>                 
            </div>`;
            tiposDesligamentos3.innerHTML = `<h5 class="mt-2">Ausência Planejada</h5><hr>`;
            tiposDesligamentosT3.innerHTML = parametrosLista3;

            // Ausência Não Planejada
            const ausenciaNaoPlanejadaw = [
                'Afastamento',
                'Atrasos',
                'Cursos externos',
                'Falta não justificada',
                'Licença médica',
                'Outros'
            ];
            ausenciaNaoPlanejadaw.forEach(rec => {
                parametrosLista4 += `
                <div class="m-2 text-center">                
                    <table id="table_id" class="table table-striped table-striped text-black">
                        <tbody>
                            <tr>
                                <td>${rec}</td>
                            </tr>
                        </tbody>
                    </table>             
                </div>         
                `;
            })

            addParametros6.innerHTML = `
            <div class="col-md">
                <button type="button" class="btn btn-primary" id="addParametros4">+</button>                 
            </div>`;
            tiposDesligamentos4.innerHTML = `<h5 class="mt-2">Ausência Não Planejada</h5><hr>`;
            tiposDesligamentosT4.innerHTML = parametrosLista4;

            // Motivos de atrasos na contratação
            const motivosAtrasosContratratacao = [
                'Divulgação de vaga',
                'Análise de curriculum',
                'Testes presenciais',
                'Entrevistas finais',
                'Outros'
            ];
            motivosAtrasosContratratacao.forEach(rec => {
                parametrosLista5 += `
                <div class="m-2 text-center">                
                    <table id="table_id" class="table table-striped table-striped text-black">
                        <tbody>
                            <tr>
                                <td>${rec}</td>
                            </tr>
                        </tbody>
                    </table>             
                </div>         
                `;
            })

            addParametros7.innerHTML = `
            <div class="col-md">
                <button type="button" class="btn btn-primary" id="addParametros5">+</button>                 
            </div>`;
            tiposDesligamentos5.innerHTML = `<h5 class="mt-2">Motivos de atrasos na contratação</h5><hr>`;
            tiposDesligamentosT5.innerHTML = parametrosLista5;

            // Custos do processo de Recrutamento e Seleção
            const custoProcessoRecrutamentow = [
                'Mat. Escritório',
                'Tempo/Profissional RH',
                'Plataformas Recrutamento',
                'Recrutamento Externo',
                'Headhunter',
                'Outros'
            ];
            custoProcessoRecrutamentow.forEach(rec => {
                parametrosLista6 += `
                <div class="m-2 text-center">                
                    <table id="table_id" class="table table-striped table-striped text-black">
                        <tbody>
                            <tr>
                                <td>${rec}</td>
                            </tr>
                        </tbody>
                    </table>             
                </div>         
                `;
            })

            addParametros8.innerHTML = `
            <div class="col-md">
                <button type="button" class="btn btn-primary" id="addParametros6">+</button>                 
            </div>`;
            tiposDesligamentos6.innerHTML = `<h5 class="mt-2">Custos do processo de Recrutamento e Seleção</h5><hr>`;
            tiposDesligamentosT6.innerHTML = parametrosLista6;

            // Custos com Folha
            const custoFolha1w = [
                'Salário',
                'Pró-labore',
                'Férias',
                'Horas Extras',
                '13º',
                'Licença',
                'Encargos'
            ];
            custoFolha1w.forEach(rec => {
                parametrosLista7 += `
                <div class="m-2 text-center">                
                    <table id="table_id" class="table table-striped table-striped text-black">
                        <tbody>
                            <tr>
                                <td>${rec}</td>
                            </tr>
                        </tbody>
                    </table>             
                </div>         
                `;
            })

            addParametros9.innerHTML = `
            <div class="col-md">
                <button type="button" class="btn btn-primary" id="addParametros7">+</button>                 
            </div>`;
            tiposDesligamentos7.innerHTML = `<h5 class="mt-2">Custos com Folha</h5><hr>`;
            tiposDesligamentosT7.innerHTML = parametrosLista7;

            // Custos com Benefícios
            const custoBeneficio1w = [
                'Vale transporte',
                'Vale refeição',
                'Vale alimentação',
                'Plano de Saúde',
                'Plano Odontológico',
                'Seguro de vida'
            ];
            custoBeneficio1w.forEach(rec => {
                parametrosLista8 += `
                <div class="m-2 text-center">                
                    <table id="table_id" class="table table-striped table-striped text-black">
                        <tbody>
                            <tr>
                                <td>${rec}</td>
                            </tr>
                        </tbody>
                    </table>             
                </div>         
                `;
            })

            addParametros10.innerHTML = `
            <div class="col-md">
                <button type="button" class="btn btn-primary" id="addParametros8">+</button>                 
            </div>`;
            tiposDesligamentos8.innerHTML = `<h5 class="mt-2">Custos com Benefícios</h5><hr>`;
            tiposDesligamentosT8.innerHTML = parametrosLista8;

            // Local de Treinamento
            const localTreinamento1w = [
                'Interno',
                'Externo',
                'Online'
            ];
            localTreinamento1w.forEach(rec => {
                parametrosLista9 += `
                <div class="m-2 text-center">                
                    <table id="table_id" class="table table-striped table-striped text-black">
                        <tbody>
                            <tr>
                                <td>${rec}</td>
                            </tr>
                        </tbody>
                    </table>             
                </div>         
                `;
            })

            addParametros11.innerHTML = `
            <div class="col-md">
                <button type="button" class="btn btn-primary" id="addParametros9">+</button>                 
            </div>`;
            tiposDesligamentos9.innerHTML = `<h5 class="mt-2">Local de Treinamento</h5><hr>`;
            tiposDesligamentosT9.innerHTML = parametrosLista9;

            // Tipos de Treinamento
            const tiposTreinamento1w = [
                'Desenvolvimento Técnico',
                'Desenvolvimento Pessoal'
            ];
            tiposTreinamento1w.forEach(rec => {
                parametrosLista10 += `
                <div class="m-2 text-center">                
                    <table id="table_id" class="table table-striped table-striped text-black">
                        <tbody>
                            <tr>
                                <td>${rec}</td>
                            </tr>
                        </tbody>
                    </table>             
                </div>         
                `;
            })

            addParametros12.innerHTML = `
            <div class="col-md">
                <button type="button" class="btn btn-primary" id="addParametros10">+</button>                 
            </div>`;
            tiposDesligamentos10.innerHTML = `<h5 class="mt-2">Tipos de Treinamento</h5><hr>`;
            tiposDesligamentosT10.innerHTML = parametrosLista10;

            // ANDAMENTO
            const andamentoTw = [
                'Concluido',
                'Em curso',
                'Cancelado',
                'Agendado',
                'Aguardando Aprovação'
            ];
            andamentoTw.forEach(rec => {
                parametrosLista11 += `
                <div class="m-2 text-center">                
                    <table id="table_id" class="table table-striped table-striped text-black">
                        <tbody>
                            <tr>
                                <td>${rec}</td>
                            </tr>
                        </tbody>
                    </table>             
                </div>         
                `;
            })

            addParametros13.innerHTML = `
            <div class="col-md">
                <button type="button" class="btn btn-primary" id="addParametros11">+</button>                 
            </div>`;
            tiposDesligamentos11.innerHTML = `<h5 class="mt-2">Andamento</h5><hr>`;
            tiposDesligamentosT11.innerHTML = parametrosLista11;

        }

        if (e.target.id == "func2") {
            function func2() {
                nada = '';
                nada = ` 
                <div class="animate__animated animate__pulse card3 text-center mr-4">
                <div class="row align-items-center">
                    <div class="col-md-6">
                      <h1 class="mb-4 text-black"><span class="text-black">Cadastros</span></h1>
                      <h3 class="mb-4 text-black">Admissão e Desligamento</h3>
                    </div>
                    <div class="col-md-6 d-none d-sm-none d-md-block">
                      <img src="pics/Stocks2.png" alt="tours pics" class="img-fluid">
                    </div>
                  </div>
                </div>
                <div class="text-center card4">
                <div class="row p-3">
                    <div class="col-md">
                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="func2">Funcionários</a>                                                     
                      </div>
                    <div class="col-md">
                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="altFunc"><h6>Alt. Funcionário</h6></a>
                    </div>
                    <div class="col-md">
                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="recrSelecc"><h6>Rec. e Selecção</h6></a>
                    </div>
                    <div class="col-md">
                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="jornad">Jornadas</a>
                    </div>
                    <div class="col-md">
                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="ausencias">Ausências</a>
                    </div>
          
                    <div class="col-md">
                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="financeiro">Financeiro</a>
                    </div>
          
                    <div class="col-md">
                      <a href="#" class="text-center btn btn-outline-dark btn-lg" id="treinamentos">Treinamentos</a>
                    </div>
                  </div>
                  </div>
          
                  
          
                          <div class="text-center card5">
                              <h1 class="h4 text-balck mb-4">Cadastro de Admissão / Desligamento de Colaboradores</h1>
                              <button type="button" class="btn btn-outline-dark" id="addFuncionario">Adicionar Colaborador</button>                
                              <button type="button" class="btn btn-outline-dark ml-4" id="editFuncionario" disabled>Editar Colaborado</button>
                         
                          </div>
          
                          <hr>
                          <div class="text-center cardTab cardTab animate__animated animate__pulse">
                          <table class="table m-2" id="T3423">
                              <thead>
                                <tr class="bg-gradient-primary text-center text-balck">
                                  <th scope="col">Numero</th>
                                  <th>Nome do Colaborador</th>
                                  <th>Genêro</th>
                                  <th>Data Nascimento</th>
                                  <th>Data de Admissão</th>
                                  <th>Data de Desligamento</th>
                                  <th>Tipo de Desligamento</th>
                                  <th>Tempo de Empresa(Anos)</th>
                                </tr>
                              </thead>
                              <tbody id="myTableee" class="tt text-center text-balck">                     
                              </tbody>
                          </table>
                          </div>
          
                          <!-- Modal -->
              <div class="modal fade" id="modelCadastroo22" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                      <h5 class="modal-title" id="modelTitle"></h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                      </div>
                      <div class="modal-body" id="colaboradorLista">
                          
                      </div>
                      <!-- <div class="modal-footer">
                      <button type="button" class="btn btn-primary" id="treinamentoOk">Confirmar</button>
                      </div> -->
                  </div>
                  </div>
              </div>
              <!-- Modal -->
              <div class="modal fade" id="modelCadastro3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                      <h5 class="modal-title" id="modelTitle3"></h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                      </div>
                      <div class="modal-body">
                          <input type="date" class="form-control mb-4" id="desligamentodataText">
                      </div>
                      <div class="modal-footer">
                      <button type="button" class="btn btn-primary" id="desligamentodataConfirmar">Confirmar</button>
                      </div>
                  </div>
                  </div>
              </div>
              <!-- Modal -->
              <div class="modal fade" id="modelCadastro31" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                      <h5 class="modal-title" id="modelTitle3"></h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                      </div>
                      <div class="modal-body">
                          <input type="date" class="form-control mb-4" id="desligamentodataText1">
                      </div>
                      <div class="modal-footer">
                      <button type="button" class="btn btn-primary" id="desligamentodataConfirmar1">Confirmar</button>
                      </div>
                  </div>
                  </div>
              </div>
              <!-- Modal -->
              <div class="modal fade" id="novoCadastro" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                      <h5 class="modal-title" id="novoTrin">Novo Colaborador</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                      </div>
                      <div class="modal-body">
                          <p>Nome do Colaborador</p>
                          <input type="text" class="form-control mb-4" id="nomeColaborador" placeholder="Nome do Colaborador">
                          <p>Senha</p>
                          <input type="text" class="form-control mb-4" id="senha" placeholder="Senha">
                          <p>Email</p>
                          <input type="email" class="form-control mb-4" id="email" placeholder="Email do Colaborador">
                          <p>Provincia</p>
                          <input type="text" class="form-control mb-4" id="provincia" placeholder="Provincia">
                          <p>Cidade</p>
                          <input type="text" class="form-control mb-4" id="cidade" placeholder="Cidade">
                          <p>Avenida</p>
                          <input type="text" class="form-control mb-4" id="avenida" placeholder="Avenida">
                          <p>Contacto</p>
                          <input type="number" class="form-control mb-4" id="contacto" placeholder="Contacto">
                          <p>Genero</p>
                          <select name="select" class="form-control mb-4" id="tipoTreinamentoList">
                              <option>Femenino</option>
                              <option selected>Masculino</option>
                          </select>
                          <p>Data de Nascimento</p>
                          <input type="date" class="form-control mb-4" id="dataNascimento" placeholder="Data de Nascimento">
                          <p>Data de Admissao</p>
                          <input type="date" class="form-control mb-4" id="dataAdmissao" placeholder="Data de Admissao">
                          
                      </div>
                      <div class="modal-footer">
                      <button type="button" class="btn btn-primary" id="novoTreinamentoOk">Confirmar</button>
                      </div>
                  </div>
                  </div>
              </div>
                `;

                contrudo.innerHTML = nada;
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
                        function myFunction() {
                            console.log(content[0]);
                            const data = content[0]['funcionarios'];
                            for (var i = 0; i < data.length; i++) {
                                newRow = tablerrr.insertRow();
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
                                let dataAdmissao = '';


                                if (data[i].dataDesligamento == "-") {
                                    tempoEmpresa = '-';
                                } else {
                                    var d1 = new Date(data[i].dataDesligamento); //"now"
                                    var d2 = new Date(data[i].dataAdmissao);  // some date
                                    var diff = Math.abs(d1 - d2);
                                    tempoEmpresa = Math.round(diff / 31536000000);
                                    console.log(tempoEmpresa)

                                }
                                if (data[i].dataAdmissao == "" || data[i].dataAdmissao == "-") {
                                    dataAdmissao = '-';

                                } else {
                                    dataAdmissao = data[i].dataAdmissao;
                                }
                                if (data[i].dataDesligamento == "-" || data[i].dataDesligamento == "") {
                                    dataDesligamento = '-';

                                } else {
                                    dataDesligamento = data[i].dataDesligamento;
                                }
                                if (data[i].tipoDesligamento == "-" || data[i].tipoDesligamento == "") {
                                    tipoDesligamento = '-';

                                } else {
                                    tipoDesligamento = data[i].tipoDesligamento;
                                }

                                newCell1.innerHTML = i + 1;
                                newCell2.innerHTML = `<div class="nomeFuncionario" id=${data[i]._id}>${data[i].nomeFuncionario}</div>`;
                                newCell3.innerHTML = `<div class="genero" id=${data[i]._id}>${data[i].genero}</div>`;
                                newCell4.innerHTML = `<div class="dataNascimento" id=${data[i]._id}>${data[i].dataNascimento}</div>`;
                                newCell5.innerHTML = `<div class="dataAdmissao" id=${data[i]._id}>${dataAdmissao}</div>`;
                                newCell6.innerHTML = `<div class="dataDesligamento" id=${data[i]._id}>${dataDesligamento}</div>`;
                                newCell7.innerHTML = `<div class="tipoDesligamento" id=${data[i]._id}>${tipoDesligamento}</div>`;
                                newCell8.innerHTML = `<div class="tempoEmpresa" id=${data[i]._id}>${tempoEmpresa}</div>`;


                            }
                        }

                        const nomeColaborador = document.getElementById('nomeColaborador');
                        const desligamentodataConfirmarw = document.getElementById('desligamentodataConfirmar');
                        const desligamentodataConfirmarw1 = document.getElementById('desligamentodataConfirmar1');
                        const senha = document.getElementById('senha');
                        const email = document.getElementById('email');
                        const desligamentodataTextw = document.getElementById('desligamentodataText');
                        const desligamentodataTextw1 = document.getElementById('desligamentodataText1');
                        const provincia = document.getElementById('provincia');
                        const cidade = document.getElementById('cidade');
                        const avenida = document.getElementById('avenida');
                        const contacto = document.getElementById('contacto');
                        const tipoTreinamentoList = document.getElementById('tipoTreinamentoList');
                        const dataNascimento = document.getElementById('dataNascimento');
                        const dataAdmissao = document.getElementById('dataAdmissao');
                        const novoTreinamentoOk = document.getElementById('novoTreinamentoOk');
                        let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
                        let iFD = '';
                        novoTreinamentoOk.addEventListener('click', (e) => {
                            e.preventDefault();
                            if (nomeColaborador.value && senha.value && contacto.value && email.value && avenida.value && cidade.value && provincia.value) {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/funcionarioPequenas';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "nomeFuncionario": `${nomeColaborador.value}`,
                                        "password": `${senha.value}`,
                                        "email": `${email.value}`,
                                        "provincia": `${provincia.value}`,
                                        "cidade": `${cidade.value}`,
                                        "avenida": `${avenida.value}`,
                                        "contacto": `${contacto.value}`,
                                        "genero": `${tipoTreinamentoList.value}`,
                                        "dataNascimento": `${dataNascimento.value}`,
                                        "dataAdmissao": `${dataAdmissao.value}`
                                    })
                                });
                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        console.log(data5)
                                        $('#novoCadastro').modal('hide');
                                        func2();
                                    })
                            }
                        });
                        addFuncionario.addEventListener('click', (e) => {
                            e.preventDefault();
                            $('#novoCadastro').modal('show');
                        });
                        desligamentodataConfirmarw.addEventListener('click', (e) => {
                            $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                            const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/funcionarioPequenas/dataDesligamento';
                            let pora2 = new Request(urlLogIn3, {
                                method: 'PATCH',
                                headers: h,
                                body: JSON.stringify({
                                    "dataDesligamento": desligamentodataTextw.value,
                                    "id": iFD
                                })
                            });

                            fetch(pora2)
                                .then(ress => ress.json())
                                .then(data5 => {
                                    func2();
                                })
                            $('#modelCadastro3').modal('hide');
                        });
                        desligamentodataConfirmarw1.addEventListener('click', (e) => {
                            $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                            const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/funcionarioPequenas/dataAdmissao';
                            let pora2 = new Request(urlLogIn3, {
                                method: 'PATCH',
                                headers: h,
                                body: JSON.stringify({
                                    "dataAdmissao": desligamentodataTextw1.value,
                                    "id": iFD
                                })
                            });

                            fetch(pora2)
                                .then(ress => ress.json())
                                .then(data5 => {
                                    func2();
                                })
                            $('#modelCadastro31').modal('hide');
                        });
                        tablerrr.addEventListener('click', (e) => {
                            e.preventDefault();
                            console.log(e.target.id);
                            iFD = e.target.id;
                            if (e.target.className == "tipoDesligamento") {
                                colabora = '';
                                titulo = '';
                                const tiposDesligamentoser1 = [
                                    'Demissão por justa causa',
                                    'Demissão sem justa causa',
                                    'Pedido de demissão pelo funcionário',
                                    'Acordo entre as partes',
                                    'Demissão consensual'
                                ];
                                let i = 0;
                                tiposDesligamentoser1.forEach(rec => {
                                    colabora += `<div class="text-center">
                                      <h5 class="text-gray-900 mb-4" id=${"desligamento" + i}>${rec}</h5>
                                  </div>`;
                                    i++;
                                });
                                titulo = 'Tipo de Desligamento';
                                colaboradorLista.innerHTML = colabora;
                                modelTitle.innerHTML = titulo;
                                $('#modelCadastroo22').modal('show');

                            }

                            if (e.target.className == "dataDesligamento") {
                                document.getElementById('modelTitle3').innerHTML = 'Data de Desligamento'
                                $('#modelCadastro3').modal('show');
                            }
                            if (e.target.className == "dataAdmissao") {
                                document.getElementById('modelTitle3').innerHTML = 'Data de Admissão'
                                $('#modelCadastro31').modal('show');
                            }

                        })
                        const desligamentodataConfirmar = document.getElementById('desligamentodataConfirmar');
                        const desligamentodataText = document.getElementById('desligamentodataText');
                        desligamentodataConfirmar.addEventListener('click', (e) => {

                            if (desligamentodataText.value) {
                                console.log(desligamentodataText.value);
                                $('#modelCadastro3').modal('hide');
                            } else {
                                console.log("vazio");
                            }
                        });
                        colaboradorLista.addEventListener('click', (e) => {
                            $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                            if (e.target.id === 'desligamento0') {
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/funcionarioPequenas/tipoDesligamento';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "tipoDesligamento": 'Demissão por justa causa',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        func2();
                                    })
                                console.log('Demissão por justa causa');
                                $('#modelCadastroo22').modal('hide');
                            }
                            if (e.target.id === 'desligamento1') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/funcionarioPequenas/tipoDesligamento';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "tipoDesligamento": 'Demissão sem justa causa',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        func2();
                                    })
                                console.log('Demissão sem justa causa');
                                $('#modelCadastroo22').modal('hide');
                            }
                            if (e.target.id === 'desligamento2') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/funcionarioPequenas/tipoDesligamento';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "tipoDesligamento": 'Pedido de demissão pelo funcionário',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        func2();
                                    })
                                console.log('Pedido de demissão pelo funcionário');
                                $('#modelCadastroo22').modal('hide');
                            }
                            if (e.target.id === 'desligamento3') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/funcionarioPequenas/tipoDesligamento';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "tipoDesligamento": 'Acordo entre as partes',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        func2();
                                    })
                                console.log('Acordo entre as partes');
                                $('#modelCadastroo22').modal('hide');
                            }
                            if (e.target.id === 'desligamento4') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/funcionarioPequenas/tipoDesligamento';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "tipoDesligamento": 'Demissão consensual',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        func2();
                                    })
                                console.log('Demissão consensual');
                                $('#modelCadastroo22').modal('hide');
                            }
                        });
                        myFunction()
                        $(function () {
                            $('#T3423').DataTable({
                                "scrollX": true,
                                "scrollY": 500,
                            });


                        });


                    });
            }
            func2();
        }

        if (e.target.id == "altFunc") {
            function altFunc() {
                nada = '';
                nada = ` 
          <div class="animate__animated animate__pulse card3 text-center mr-4">
          <div class="row align-items-center">
              <div class="col-md-6">
                <h1 class="mb-4 text-black"><span class="text-black">Cadastros</span></h1>
                <h3 class="mb-4 text-black">Alterações</h3>
              </div>
              <div class="col-md-6 d-none d-sm-none d-md-block">
                <img src="pics/Stocks2.png" alt="tours pics" class="img-fluid">
              </div>
            </div>
          </div>
          <div class="text-center card4">
          <div class="row p-3">
              <div class="col-md">
                <a href="#" class="text-center btn btn-outline-dark btn-lg" id="func2">Funcionários</a>                                                     
                </div>
              <div class="col-md">
                <a href="#" class="text-center btn btn-outline-dark btn-lg" id="altFunc"><h6>Alt. Funcionário</h6></a>
              </div>
              <div class="col-md">
                <a href="#" class="text-center btn btn-outline-dark btn-lg" id="recrSelecc"><h6>Rec. e Selecção</h6></a>
              </div>
              <div class="col-md">
                <a href="#" class="text-center btn btn-outline-dark btn-lg" id="jornad">Jornadas</a>
              </div>
              <div class="col-md">
                <a href="#" class="text-center btn btn-outline-dark btn-lg" id="ausencias">Ausências</a>
              </div>
    
              <div class="col-md">
                <a href="#" class="text-center btn btn-outline-dark btn-lg" id="financeiro">Financeiro</a>
              </div>
    
              <div class="col-md">
                <a href="#" class="text-center btn btn-outline-dark btn-lg" id="treinamentos">Treinamentos</a>
              </div>
            </div>
            </div>
    
            
    
                    <div class="text-center card5">
                    <h1 class="h4 text-black mb-4">Alterações em Cargos, Jornadas de Trabalho e Escolaridade</h1>
                    <button type="button" class="btn btn-outline-dark ml-4" id="addColaborador">Adicionar Colaborado</button>             
                    <button type="button" class="btn btn-outline-dark ml-4" id="editColaborador" disabled>Editar Colaborado</button>
                    </div>
    
                    <hr>
                    <div class="text-center cardTab animate__animated animate__pulse">
                    <table class="table m-2" id="ta08908">
                    <thead>
                      <tr class="bg-gradient-primary text-center text-black">
                        <th scope="col">Numero</th>
                        <th>Nome do Colaborador</th>
                        <th>Cargo</th>
                        <th>De</th>
                        <th>Até</th>
                        <th>Jornada</th>
                        <th>Escolaridade</th>
                      </tr>
                    </thead>
                    <tbody id="myAltTab" class="tt text-center text-black">                     
                    </tbody>
                </table>
                    </div>
    
                    <!-- Modal -->
        <div class="modal fade" id="modelaltFuncionario2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="modelTitle2"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                    <input type="date" class="form-control mb-4" id="treinamentoText111">
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="treinamentoOk1">Confirmar</button>
                </div>
            </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="modelAltFuncionario" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="modelTitle"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body" id="altFuncionariorLista">
                    
                </div>
                <!-- <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="treinamentoOk">Confirmar</button>
                </div> -->
            </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="novaSeleccao" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="novoTrin">Novo Colaborador</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                    <div class="text-center">
                        <p>Todos os Campos com * são de caracter obrigatorio...</p>
                    </div> 
                    <p>Colaborador*</p>
                    <select name="select" class="form-control mb-4" id="colaboradorSelect"></select>
                    <p>Cargo*</p>
                    <select name="select" class="form-control mb-4" id="cargoSelect"></select>
                    <p>Data de Inicio*</p>
                    <input type="date" class="form-control mb-4" id="preenchimentoData" equired autofocus autocomplete="on">
                     <p>Jornada*</p>
                    <select name="select" class="form-control mb-4" id="jornadaSelect"></select>
                    <p>Escolaridade*</p>
                    <select name="select" class="form-control mb-4" id="escolaridadeSelect"></select>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="novoTreinamentoOk">Confirmar</button>
                </div>
            </div>
            </div>
        </div>
          `;
                contrudo.innerHTML = nada;
                let colaboradors = '';
                let cargos = '';
                let jornadas = '';
                let escolaridade = '';
                let colabora = '';
                let tempoEmpresa = '';
                const myAltTab = document.getElementById('myAltTab');

                const altFuncionariorLista = document.getElementById('altFuncionariorLista');
                const modelTitle = document.getElementById('modelTitle');
                const empresa2 = localStorage.getItem('empresa');
                const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2}`;
                fetch(url3)
                    .then(res => res.json())
                    .then(content => {
                        const data = content[0]['altFuncio'];
                        const data1 = content[0]['funcionarios'];
                        for (var i = 0; i < data1.length; i++) {
                            colaboradors += `<option>${data1[i].nomeFuncionario}</option>`;
                            document.getElementById('colaboradorSelect').innerHTML = colaboradors;

                        };
                        const cargosT = [
                            'Assistente administrativo',
                            'Vendedor',
                            'Auxiliar administrativo',
                            'Recepcionista',
                            'Estagiário administrativo',
                            'Técnico de segurança do trabalho',
                            'Auxiliar logístico',
                            'Assistente comercial',
                            'Gerente de loja'
                        ];
                        i = 0;
                        cargosT.forEach(rec => {
                            cargos += `<option id=${"cargoT" + i}>${rec}</option>`;
                            i++;
                        });
                        document.getElementById('cargoSelect').innerHTML = cargos;

                        const tiposJornadasTrabalho = [
                            'CLT normal',
                            'Estágio',
                            'CLT turno'
                        ];
                        tiposJornadasTrabalho.forEach(rec => {
                            jornadas += `<option>${rec}</option>`;
                        });
                        document.getElementById('jornadaSelect').innerHTML = jornadas;

                        nivelEscolaridade.forEach(rec => {
                            escolaridade += `<option>${rec}</option>`;
                        });
                        document.getElementById('escolaridadeSelect').innerHTML = escolaridade;

                        for (var i = 0; i < data.length; i++) {
                            if (data[i].dataDesligamento == "-") {
                                tempoEmpresa = 'Activo';
                            } else {
                                tempoEmpresa = 'Inativo';
                            }
                            const ress = content[0]['altFuncio'][i];
                            console.log(content[0]['altFuncio']);
                            var newRow = myAltTab.insertRow();
                            var newCell1 = newRow.insertCell(0);
                            var newCell2 = newRow.insertCell(1);
                            var newCell3 = newRow.insertCell(2);
                            var newCell4 = newRow.insertCell(3);
                            var newCell5 = newRow.insertCell(4);
                            var newCell6 = newRow.insertCell(5);
                            var newCell7 = newRow.insertCell(6);

                            newCell1.innerHTML = `<div>${i + 1}</div>`;
                            newCell2.innerHTML = `<div class="nomeColabora" id=${ress._id}>${ress.nomeColabora}</div>`;
                            newCell3.innerHTML = `<div class="cargo" id=${ress._id}>${ress.cargo}</div>`;
                            newCell4.innerHTML = `<div class="de" id=${ress._id}>${ress.de}</div>`;
                            newCell5.innerHTML = `<div class="ate" id=${ress._id}>${ress.ate}</div>`;
                            newCell6.innerHTML = `<div class="jornada" id=${ress._id}>${ress.jornada}</div>`;
                            newCell7.innerHTML = `<div class="escolaridade" id=${ress._id}>${ress.escolaridade}</div>`;
                        }
                        const aberturaVaga = document.getElementById('colaboradorSelect');
                        const addColaborador = document.getElementById('addColaborador');
                        const treinamentoOk1 = document.getElementById('treinamentoOk1');
                        const treinamentoText111 = document.getElementById('treinamentoText111');

                        const preenchimentoData = document.getElementById('preenchimentoData');
                        const cargo = document.getElementById('cargoSelect');
                        const candidatosProcesso = document.getElementById('jornadaSelect');
                        const candidatosQualificados = document.getElementById('escolaridadeSelect');
                        const novoTreinamentoOk = document.getElementById('novoTreinamentoOk');
                        let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
                        let iFD = '';
                        let tempoTra = '';
                        addColaborador.addEventListener('click', (e) => {
                            e.preventDefault();
                            $('#novaSeleccao').modal('show');
                        });

                        altFuncionariorLista.addEventListener('click', (e) => {
                            $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                            console.log(e.target.id)
                            if (e.target.id === 'escolaridade0') {
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/altFuncio/escolaridade';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "escolaridade": 'Ensino Fundamental',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        altFunc()
                                    })
                                $('#modelAltFuncionario').modal('hide');
                            }
                            if (e.target.id === 'escolaridade1') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/altFuncio/escolaridade';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "escolaridade": 'Ensino Médio',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        altFunc()
                                    })
                                console.log('Demissão sem justa causa');
                                $('#modelAltFuncionario').modal('hide');
                            }
                            if (e.target.id === 'escolaridade2') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/altFuncio/escolaridade';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "escolaridade": 'Ensino Técnico',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        altFunc()
                                    })
                                $('#modelAltFuncionario').modal('hide');
                            }
                            if (e.target.id === 'escolaridade3') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/faltFuncio/escolaridade';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "escolaridade": 'Superior Incompleto',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        altFunc()
                                    })
                                $('#modelAltFuncionario').modal('hide');
                            }
                            if (e.target.id === 'escolaridade4') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/altFuncio/escolaridade';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "escolaridade": 'Superior Completo',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        altFunc()
                                    })
                                console.log('Demissão consensual');
                                $('#modelAltFuncionario').modal('hide');
                            }
                            if (e.target.id === 'escolaridade5') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/altFuncio/escolaridade';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "escolaridade": 'Especialização',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        altFunc()
                                    })
                                console.log('Demissão consensual');
                                $('#modelAltFuncionario').modal('hide');
                            }
                            if (e.target.id === 'escolaridade6') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/altFuncio/escolaridade';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "escolaridade": 'Pós-Graduação',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        altFunc()
                                    })
                                console.log('Demissão consensual');
                                $('#modelAltFuncionario').modal('hide');
                            }
                            if (e.target.id === 'escolaridade7') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/altFuncio/escolaridade';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "escolaridade": 'Mestre',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        altFunc()
                                    })
                                console.log('Demissão consensual');
                                $('#modelAltFuncionario').modal('hide');
                            }
                            if (e.target.id === 'escolaridade8') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/altFuncio/escolaridade';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "escolaridade": 'Doutor',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        altFunc()
                                    })
                                console.log('Demissão consensual');
                                $('#modelAltFuncionario').modal('hide');
                            }
                            if (e.target.id === 'cargo0') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/altFuncio/cargo';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "cargo": 'Assistente administrativo',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        altFunc()
                                    })
                                $('#modelAltFuncionario').modal('hide');
                            }
                            if (e.target.id === 'cargo1') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/altFuncio/cargo';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "cargo": 'Vendedor',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        altFunc()
                                    })
                                console.log('Demissão sem justa causa');
                                $('#modelAltFuncionario').modal('hide');
                            }
                            if (e.target.id === 'cargo2') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/altFuncio/cargo';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "cargo": 'Auxiliar administrativo',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        altFunc()
                                    })
                                console.log('Pedido de demissão pelo funcionário');
                                $('#modelAltFuncionario').modal('hide');
                            }
                            if (e.target.id === 'cargo3') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/faltFuncio/cargo';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "cargo": 'Recepcionista',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        altFunc()
                                    })
                                console.log('Acordo entre as partes');
                                $('#modelAltFuncionario').modal('hide');
                            }
                            if (e.target.id === 'cargo4') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/altFuncio/cargo';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "cargo": 'Estagiário administrativo',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        altFunc()
                                    })
                                console.log('Demissão consensual');
                                $('#modelAltFuncionario').modal('hide');
                            }
                            if (e.target.id === 'cargo5') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/altFuncio/cargo';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "cargo": 'Técnico de segurança do trabalho',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        altFunc()
                                    })
                                console.log('Demissão consensual');
                                $('#modelAltFuncionario').modal('hide');
                            }
                            if (e.target.id === 'cargo6') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/altFuncio/cargo';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "cargo": 'Auxiliar logístico',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        altFunc()
                                    })
                                console.log('Demissão consensual');
                                $('#modelAltFuncionario').modal('hide');
                            }
                            if (e.target.id === 'cargo7') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/altFuncio/cargo';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "cargo": 'Assistente comercial',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        altFunc()
                                    })
                                console.log('Demissão consensual');
                                $('#modelAltFuncionario').modal('hide');
                            }
                            if (e.target.id === 'cargo8') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/altFuncio/cargo';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "cargo": 'Gerente de loja',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        altFunc()
                                    })
                                console.log('Demissão consensual');
                                $('#modelAltFuncionario').modal('hide');
                            }
                            if (e.target.id === 'jornada0') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/altFuncio/jornada';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "jornada": 'CLT normal',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        altFunc()
                                    })
                                $('#modelAltFuncionario').modal('hide');
                            }
                            if (e.target.id === 'jornada1') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/altFuncio/jornada';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "jornada": 'Estágio',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        altFunc()
                                    })
                                console.log('Demissão sem justa causa');
                                $('#modelAltFuncionario').modal('hide');
                            }
                            if (e.target.id === 'jornada2') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/altFuncio/jornada';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "jornada": 'CLT turno',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        altFunc()
                                    })
                                console.log('Pedido de demissão pelo funcionário');
                                $('#modelAltFuncionario').modal('hide');
                            }
                        });

                        novoTreinamentoOk.addEventListener('click', (e) => {
                            $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                            e.preventDefault();
                            if (cargo.value) {
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/altFuncio';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "colaborador": `${aberturaVaga.value}`,
                                        "cargo": `${cargo.value}`,
                                        "de": `${preenchimentoData.value}`,
                                        "ate": "-",
                                        "jornada": `${candidatosProcesso.value}`,
                                        "escolaridade": `${candidatosQualificados.value}`
                                    })
                                });
                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        console.log(data5)
                                        $('#novaSeleccao').modal('hide');
                                    })
                            }
                        });
                        treinamentoOk1.addEventListener('click', (e) => {
                            $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                            if (tempoTra == 'de') {
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/altFuncio/de';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "de": treinamentoText111.value,
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        altFunc()
                                    })
                                $('#modelaltFuncionario2').modal('hide');
                            } else {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/altFuncio/ate';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "ate": treinamentoText111.value,
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        altFunc()
                                    })
                                $('#modelaltFuncionario2').modal('hide');
                            }
                        });
                        myAltTab.addEventListener('click', (e) => {
                            e.preventDefault();
                            iFD = e.target.id;
                            console.log(iFD)
                            if (e.target.className == "escolaridade") {
                                colabora = '';
                                titulo = '';
                                i = 0;
                                nivelEscolaridade.forEach(rec => {
                                    console.log(rec)
                                    colabora += `<div class="text-center">
                                  <h5 class="text-gray-900 mb-4" id=${"escolaridade" + i}>${rec}</h5>
                              </div>`;
                                    i++;
                                });
                                titulo = 'Nivel de Escolaridade';
                                altFuncionariorLista.innerHTML = colabora;
                                modelTitle.innerHTML = titulo;
                                $('#modelAltFuncionario').modal('show');
                            }

                            if (e.target.className == "cargo") {
                                colabora = '';
                                titulo = '';
                                i = 0;
                                cargosT.forEach(rec => {
                                    console.log(rec)
                                    colabora += `<div class="text-center">
                                  <h5 class="text-gray-900 mb-4" id=${"cargo" + i}>${rec}</h5>
                              </div>`;
                                    i++;
                                });
                                titulo = 'Cargos';
                                altFuncionariorLista.innerHTML = colabora;
                                modelTitle.innerHTML = titulo;
                                $('#modelAltFuncionario').modal('show');
                            }
                            if (e.target.className == "jornada") {
                                colabora = '';
                                titulo = '';
                                i = 0;
                                tiposJornadasTrabalho.forEach(rec => {
                                    console.log(rec)
                                    colabora += `<div class="text-center">
                                  <h5 class="text-gray-900 mb-4" id=${"jornada" + i}>${rec}</h5>
                              </div>`;
                                    i++;
                                });
                                titulo = 'Jornada do Colaborador';
                                altFuncionariorLista.innerHTML = colabora;
                                modelTitle.innerHTML = titulo;
                                $('#modelAltFuncionario').modal('show');
                            }
                            if (e.target.className == "de") {
                                tempoTra = e.target.className;
                                document.getElementById('modelTitle2').innerHTML = 'Inicio das Actividades do Colaborador'
                                $('#modelaltFuncionario2').modal('show');
                            }
                            if (e.target.className == "ate") {
                                tempoTra = e.target.className;
                                document.getElementById('modelTitle2').innerHTML = 'Fim das Actividades do Colaborador'
                                $('#modelaltFuncionario2').modal('show');
                            }
                        });
                        $(document).ready(function () {
                            $('#ta08908').DataTable({
                                "scrollX": true,
                                "scrollY": 500,
                            });
                        });

                    });
            }
            altFunc()
        }

        if (e.target.id == "recrSelecc") {
            function recrSelecc() {
                nada = '';
                nada = ` 
          <div class="animate__animated animate__pulse card3 text-center mr-4">
          <div class="row align-items-center">
              <div class="col-md-6">
                <h1 class="mb-4 text-black"><span class="text-black">Cadastros</span></h1>
                <h3 class="mb-4 text-black">Recrutamento e Selecção</h3>
              </div>
              <div class="col-md-6 d-none d-sm-none d-md-block">
                <img src="pics/Stocks2.png" alt="tours pics" class="img-fluid">
              </div>
            </div>
          </div>
          <div class="text-center card4">
          <div class="row p-3">
              <div class="col-md">
                <a href="#" class="text-center btn btn-outline-dark btn-lg" id="func2">Funcionários</a>                                                     
                </div>
              <div class="col-md">
                <a href="#" class="text-center btn btn-outline-dark btn-lg" id="altFunc"><h6>Alt. Funcionário</h6></a>
              </div>
              <div class="col-md">
                <a href="#" class="text-center btn btn-outline-dark btn-lg" id="recrSelecc"><h6>Rec. e Selecção</h6></a>
              </div>
              <div class="col-md">
                <a href="#" class="text-center btn btn-outline-dark btn-lg" id="jornad">Jornadas</a>
              </div>
              <div class="col-md">
                <a href="#" class="text-center btn btn-outline-dark btn-lg" id="ausencias">Ausências</a>
              </div>
    
              <div class="col-md">
                <a href="#" class="text-center btn btn-outline-dark btn-lg" id="financeiro">Financeiro</a>
              </div>
    
              <div class="col-md">
                <a href="#" class="text-center btn btn-outline-dark btn-lg" id="treinamentos">Treinamentos</a>
              </div>
            </div>
            </div>
    
            
    
                    <div class="text-center card5">
                    <h1 class="h4 text-black mb-4">Recrutamento e Selecção</h1>              
                    <button type="button" class="btn btn-outline-dark ml-4" id="addVaga">Adicionar Vaga</button>              
                    <button type="button" class="btn btn-outline-dark ml-4" id="editVaga" disabled>Editar Vaga</button>
                    </div>
    
                    <hr>
                    <div class="text-center cardTab animate__animated animate__pulse">
                    <table class="table m-2" id="ta3423">
                    <thead>
                                <tr class="bg-gradient-primary text-center text-black">
                                  <th scope="col">Numero</th>
                                  <th>Abertura Vaga</th>
                                  <th>Prazo P/ Preenchimento</th>
                                  <th>Cargo</th>
                                  <th>Corriculos Recebidos</th>
                                  <th>Candidatos no Processo</th>
                                  <th>Candidatos Qualificados</th>
                                  <th>Candidatos Finalistas</th>
                                  <th>Status do Processo</th>
                                  <th>Data de Encerramento</th>
                                  <th>Status do Prazo</th>
                                  <th>Motivo P/ Atrazo</th>
                                  <th>Motivo P/ Vagas N. Preenchidas</th>
                                  <th>Mat. Escritorio</th>
                                  <th>Tempo/Profissional RH</th>
                                  <th>Plataformas Recrut.</th>
                                  <th>Recrut. Externo</th>
                                  <th>Headhunter</th>
                                  <th>Outros</th>
                                  <th>Custo total</th>
                                </tr>
                              </thead>
                              <tbody id="myRecruta" class="tt text-center text-black">                     
                              </tbody>
                </table>
                    </div>
    
                    <!-- Modal -->
        <div class="modal fade" id="modelRecrutamento3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="modelTitle3"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                    <input type="number" class="form-control mb-4" id="treinamentoText777">
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="treinamentoOk777">Confirmar</button>
                </div>
            </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="modelrecrutamento" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="modelTitle"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body" id="recrutamentoLista">
                    
                </div>
                <!-- <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="treinamentoOk">Confirmar</button>
                </div> -->
            </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="novaSeleccao" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="novoTrin">Nova Selecção</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                    <div class="text-center">
                        <p>Todos os Campos com * são de caracter obrigatorio...</p>
                    </div> 
                    <p>Data da Abertura da Vaga*</p> 
                    <input type="date" class="form-control mb-4" id="aberturaVaga" equired autofocus autocomplete="on">
                    <p>Data para o Preenchimento da Vaga*</p>
                    <input type="date" class="form-control mb-4" id="preenchimentoData" equired autofocus autocomplete="on">
                    <p>Cargo*</p>
                    <input type="text" class="form-control mb-4" id="cargo" equired autofocus autocomplete="on">
                    <p>Curriculos Recebidos</p>
                    <input type="number" class="form-control mb-4" id="corrivuloRecebido" equired autofocus autocomplete="on">
                    <p>Candidatos no Processo</p>
                    <input type="number" class="form-control mb-4" id="candidatosProcesso" equired autofocus autocomplete="on">
                    <p>Candidatos Qualificados</p>
                    <input type="number" class="form-control mb-4" id="candidatosQualificados" equired autofocus autocomplete="on">
                    <p>Candidatos Finalistas</p>
                    <input type="number" class="form-control mb-4" id="candidatosFinalistas" equired autofocus autocomplete="on">
                    <p>Data de Encerramento*</p>
                    <input type="date" class="form-control mb-4" id="dataEnceramento" equired autofocus autocomplete="on">
                    
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="novoTreinamentoOk">Confirmar</button>
                </div>
            </div>
            </div>
        </div>
          `;
                contrudo.innerHTML = nada;

                const colaboradorLista = document.getElementById('recrutamentoLista');
                const myRecruta = document.getElementById('myRecruta');
                const empresa2 = localStorage.getItem('empresa');
                const addVaga = document.getElementById('addVaga');
                const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2}`;
                fetch(url3)
                    .then(res => res.json())
                    .then(content => {
                        const data = content[0]['recrutSele'];
                        for (var i = 0; i < data.length; i++) {
                            const ress = content[0]['recrutSele'];
                            console.log(content[0]['recrutSele']);
                            var newRow = myRecruta.insertRow();
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
                            var newCell14 = newRow.insertCell(13);
                            var newCell15 = newRow.insertCell(14);
                            var newCell16 = newRow.insertCell(15);
                            var newCell17 = newRow.insertCell(16);
                            var newCell18 = newRow.insertCell(17);
                            var newCell19 = newRow.insertCell(18);
                            var newCell20 = newRow.insertCell(19);

                            newCell1.innerHTML = i + 1;
                            let matEscritorio = 0;
                            let tempoRH = 0;
                            let plataformaRec = 0;
                            let recExterno = 0;
                            let headHunter = 0;
                            let outros = 0;
                            let corriculosReceb = 0;
                            let candidatosProcesso = 0;
                            let candQualificados = 0;
                            let candFinalistas = 0;
                            let motivoAtrazo = "-";
                            let motivoVagaNPreenchida = "-";
                            let statusPraxo = "-";
                            if (ress[i].statusPraxo == "") {
                                statusPraxo = "-";
                            } else {
                                statusPraxo = ress[i].statusPraxo;
                            }
                            if (ress[i].motivoVagaNPreenchida == "") {
                                motivoVagaNPreenchida = "-";
                            } else {
                                motivoVagaNPreenchida = ress[i].motivoVagaNPreenchida;
                            }
                            if (ress[i].motivoAtrazo == "") {
                                motivoAtrazo = "-";
                            } else {
                                motivoAtrazo = ress[i].motivoAtrazo;
                            }
                            if (ress[i].recExterno == "") {
                                recExterno = 0;
                            } else {
                                recExterno = ress[i].recExterno;
                            }
                            if (ress[i].matEscritorio == "") {
                                matEscritorio = 0;
                            } else {
                                matEscritorio = ress[i].matEscritorio;
                            }
                            if (ress[i].tempoRH == "") {
                                tempoRH = 0;
                            } else {
                                tempoRH = ress[i].tempoRH;
                            }
                            if (ress[i].plataformaRec == "") {
                                plataformaRec = 0;
                            } else {
                                plataformaRec = ress[i].plataformaRec;
                            }
                            if (ress[i].headHunter == "") {
                                headHunter = 0;
                            } else {
                                headHunter = ress[i].headHunter;
                            }
                            if (ress[i].outros == "") {
                                outros = 0;
                            } else {
                                outros = ress[i].outros;
                            }

                            if (ress[i].corriculosReceb == "") {
                                corriculosReceb = 0;
                            } else {
                                corriculosReceb = ress[i].corriculosReceb;
                            }
                            if (ress[i].candidatosProcesso == "") {
                                candidatosProcesso = 0;
                            } else {
                                candidatosProcesso = ress[i].candidatosProcesso;
                            }
                            if (ress[i].candQualificados == "") {
                                candQualificados = 0;
                            } else {
                                candQualificados = ress[i].candQualificados;
                            }
                            if (ress[i].candFinalistas == "") {
                                candFinalistas = 0;
                            } else {
                                candFinalistas = ress[i].candFinalistas;
                            }
                            let totall = parseFloat(matEscritorio) + parseFloat(tempoRH) + parseFloat(plataformaRec) +
                                parseFloat(recExterno) + parseFloat(headHunter) + parseFloat(outros);
                            newCell2.innerHTML = `<div class="aberturaVaga" id=${ress[i]._id}>${ress[i].aberturaVaga}</div>`;
                            newCell3.innerHTML = `<div class="prazoPPreencher" id=${ress[i]._id}>${ress[i].prazoPPreencher}</div>`;;
                            newCell4.innerHTML = `<div class="cargo" id=${ress[i]._id}>${ress[i].cargo}</div>`;
                            newCell5.innerHTML = `<div class="corriculosReceb" id=${ress[i]._id}>${corriculosReceb}</div>`;
                            newCell6.innerHTML = `<div class="candidatosProcesso" id=${ress[i]._id}>${candidatosProcesso}</div>`;
                            newCell7.innerHTML = `<div class="candQualificados" id=${ress[i]._id}>${candQualificados}</div>`;
                            newCell8.innerHTML = `<div class="candFinalistas" id=${ress[i]._id}>${candFinalistas}</div>`;
                            newCell9.innerHTML = `<div class="statusProcesso" id=${ress[i]._id}>${ress[i].statusProcesso}</div>`;
                            newCell10.innerHTML = `<div class="dataEncerramento" id=${ress[i]._id}>${ress[i].dataEncerramento}</div>`;
                            newCell11.innerHTML = `<div class="statusPraxo" id=${ress[i]._id}>${statusPraxo}</div>`;
                            newCell12.innerHTML = `<div class="motivoAtrazo" id=${ress[i]._id}>${motivoAtrazo}</div>`;
                            newCell13.innerHTML = `<div class="motivoVagaNPreenchida" id=${ress[i]._id}>${motivoVagaNPreenchida}</div>`;
                            newCell14.innerHTML = `<div class="matEscritorio" id=${ress[i]._id}>${String(matEscritorio).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00"}</div>`;
                            newCell15.innerHTML = `<div class="tempoRH" id=${ress[i]._id}>${String(tempoRH).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00"}</div>`;
                            newCell16.innerHTML = `<div class="plataformaRec" id=${ress[i]._id}>${String(plataformaRec).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00"}</div>`;
                            newCell17.innerHTML = `<div class="recExterno" id=${ress[i]._id}>${String(recExterno).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00"}</div>`;
                            newCell18.innerHTML = `<div class="headHunter" id=${ress[i]._id}>${String(headHunter).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00"}</div>`;
                            newCell19.innerHTML = `<div class="outros" id=${ress[i]._id}>${String(outros).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00"}</div>`;
                            newCell20.innerHTML = String(totall).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00";
                        }
                        const aberturaVaga = document.getElementById('aberturaVaga');
                        const preenchimentoData = document.getElementById('preenchimentoData');
                        const cargo = document.getElementById('cargo');
                        const corrivuloRecebido = document.getElementById('corrivuloRecebido');
                        const candidatosProcesso = document.getElementById('candidatosProcesso');
                        const candidatosQualificados = document.getElementById('candidatosQualificados');
                        const candidatosFinalistas = document.getElementById('candidatosFinalistas');
                        const dataEnceramento = document.getElementById('dataEnceramento');
                        const novoTreinamentoOk = document.getElementById('novoTreinamentoOk');
                        const treinamentoOk777 = document.getElementById('treinamentoOk777');
                        const treinamentoText777 = document.getElementById('treinamentoText777');

                        let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
                        let tako = '';
                        let iFD = '';
                        novoTreinamentoOk.addEventListener('click', (e) => {
                            $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                            e.preventDefault();
                            if (cargo.value) {
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "aberturaVaga": `${aberturaVaga.value}`,
                                        "prazoPPreencher": `${preenchimentoData.value}`,
                                        "cargo": `${cargo.value}`,
                                        "corriculosReceb": `${corrivuloRecebido.value}`,
                                        "candidatosProcesso": `${candidatosProcesso.value}`,
                                        "candQualificados": `${candidatosQualificados.value}`,
                                        "candFinalistas": `${candidatosFinalistas.value}`,
                                        "dataEncerramento": `${dataEnceramento.value}`,
                                        "statusPraxo": "",
                                        "motivoAtrazo": "",
                                        "motivoNpreenchimento": "",
                                        "motivoVagaNPreenchida": "",
                                        "matEscritorio": "",
                                        "tempoRH": "",
                                        "plataformaRec": "",
                                        "recExterno": "",
                                        "headHunter": "",
                                        "outros": ""
                                    })
                                });
                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        console.log(data5)
                                        $('#novaSeleccao').modal('hide');
                                        recrSelecc()
                                    })
                            }
                        });
                        addVaga.addEventListener('click', (e) => {
                            e.preventDefault();
                            $('#novaSeleccao').modal('show');
                        })
                        colaboradorLista.addEventListener('click', (e) => {
                            console.log(e.target.id)
                            $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                            if (e.target.id === 'statusProcesso0') {
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/statusProcesso';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "statusProcesso": 'Concluido',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelrecrutamento').modal('hide');
                            }
                            if (e.target.id === 'statusProcesso1') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/statusProcesso';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "statusProcesso": 'Em curso',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelrecrutamento').modal('hide');
                            }
                            if (e.target.id === 'statusProcesso2') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/statusProcesso';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "statusProcesso": 'Cancelado',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelrecrutamento').modal('hide');
                            }
                            if (e.target.id === 'statusProcesso3') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/statusProcesso';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "statusProcesso": 'Agendado',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelrecrutamento').modal('hide');
                            }
                            if (e.target.id === 'statusProcesso4') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/statusProcesso';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "statusProcesso": 'Aguardando Aprovação',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelrecrutamento').modal('hide');
                            }
                            if (e.target.id === 'statusPraxo0') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/statusPraxo';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "statusPraxo": 'A Tempo',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelrecrutamento').modal('hide');
                            }
                            if (e.target.id === 'statusPraxo1') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/statusPraxo';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "statusPraxo": 'Com Atrazo',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelrecrutamento').modal('hide');
                            }
                            if (e.target.id === 'motivoAtrazo0') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/motivoAtrazo';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "motivoAtrazo": 'Divulgação de vaga',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelrecrutamento').modal('hide');
                            }
                            if (e.target.id === 'motivoAtrazo1') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/motivoAtrazo';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "motivoAtrazo": 'Análise de curriculum',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelrecrutamento').modal('hide');
                            }
                            if (e.target.id === 'motivoAtrazo2') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/motivoAtrazo';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "motivoAtrazo": 'Testes presenciais',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelrecrutamento').modal('hide');
                            }
                            if (e.target.id === 'motivoAtrazo3') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/motivoAtrazo';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "motivoAtrazo": 'Entrevistas finais',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelrecrutamento').modal('hide');
                            }
                            if (e.target.id === 'motivoAtrazo4') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/motivoAtrazo';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "motivoAtrazo": 'Outros',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelrecrutamento').modal('hide');
                            }
                            if (e.target.id === 'motivoVagaNPreenchida0') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/motivoVagaNPreenchida';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "motivoVagaNPreenchida": 'Recusa do candidato',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelrecrutamento').modal('hide');
                            }
                            if (e.target.id === 'motivoVagaNPreenchida1') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/motivoVagaNPreenchida';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "motivoVagaNPreenchida": 'Vaga cancelada',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelrecrutamento').modal('hide');
                            }
                            if (e.target.id === 'motivoVagaNPreenchida2') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/motivoVagaNPreenchida';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "motivoVagaNPreenchida": 'Candidatos insuficientes',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelrecrutamento').modal('hide');
                            }
                            if (e.target.id === 'motivoVagaNPreenchida3') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/motivoVagaNPreenchida';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "motivoVagaNPreenchida": 'Candidatos não qualificados',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelrecrutamento').modal('hide');
                            }
                            if (e.target.id === 'motivoVagaNPreenchida4') {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/motivoVagaNPreenchida';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "motivoVagaNPreenchida": 'Outros',
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelrecrutamento').modal('hide');
                            }
                        });
                        treinamentoOk777.addEventListener('click', (e) => {
                            
                            if (tako == "outros") {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/outros';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "outros": treinamentoText777.value,
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelRecrutamento3').modal('hide');
                            }
                            if (tako == "headHunter") {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/headHunter';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "headHunter": treinamentoText777.value,
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelRecrutamento3').modal('hide');
                            }
                            if (tako == "recExterno") {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/recExterno';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "recExterno": treinamentoText777.value,
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelRecrutamento3').modal('hide');
                            }
                            if (tako == "plataformaRec") {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/plataformaRec';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "plataformaRec": treinamentoText777.value,
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelRecrutamento3').modal('hide');
                            }
                            if (tako == "tempoRH") {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/tempoRH';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "tempoRH": treinamentoText777.value,
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelRecrutamento3').modal('hide');
                            }
                            if (tako == "corriculosReceb") {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/corriculosReceb';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "corriculosReceb": treinamentoText777.value,
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelRecrutamento3').modal('hide');
                            }
                            if (tako == "candidatosProcesso") {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/candidatosProcesso';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "candidatosProcesso": treinamentoText777.value,
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelRecrutamento3').modal('hide');
                            }
                            if (tako == "candQualificados") {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/candQualificados';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "candQualificados": treinamentoText777.value,
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelRecrutamento3').modal('hide');
                            }
                            if (tako == "candFinalistas") {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/candFinalistas';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "candFinalistas": treinamentoText777.value,
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelRecrutamento3').modal('hide');
                            }
                            if (tako == "matEscritorio") {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/recrutSele/matEscritorio';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "matEscritorio": treinamentoText777.value,
                                        "id": iFD
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        recrSelecc()
                                    })
                                $('#modelRecrutamento3').modal('hide');
                            }
                        });
                        myRecruta.addEventListener('click', (e) => {
                            e.preventDefault();
                            iFD = e.target.id;
                            if (e.target.className == "statusProcesso") {
                                colabora = '';
                                titulo = '';
                                let i = 0;
                                andamentoT.forEach(rec => {
                                    console.log(rec)
                                    colabora += `<div class="text-center">
                              <h5 class="text-gray-900 mb-4" id=${'statusProcesso' + i}>${rec}</h5>
                          </div>`;
                                    i++;
                                });
                                titulo = 'Status do Processo';
                                colaboradorLista.innerHTML = colabora;
                                modelTitle.innerHTML = titulo;
                                $('#modelrecrutamento').modal('show');
                            }
                            if (e.target.className == "statusPraxo") {
                                colabora = '';
                                titulo = '';
                                let i = 0;
                                statusPrazozz.forEach(rec => {
                                    console.log(rec)
                                    colabora += `<div class="text-center">
                              <h5 class="text-gray-900 mb-4" id=${'statusPraxo' + i}>${rec}</h5>
                          </div>`;
                                    i++;
                                });
                                titulo = 'Status do Prazo';
                                colaboradorLista.innerHTML = colabora;
                                modelTitle.innerHTML = titulo;
                                $('#modelrecrutamento').modal('show');
                            }
                            if (e.target.className == "motivoAtrazo") {
                                colabora = '';
                                titulo = '';
                                let i = 0;
                                motivosAtrasosContratratacao.forEach(rec => {
                                    console.log(rec)
                                    colabora += `<div class="text-center">
                              <h5 class="text-gray-900 mb-4" id=${'motivoAtrazo' + i}>${rec}</h5>
                          </div>`;
                                    i++;
                                });
                                titulo = 'Motivo Para Atrazo na Contratação';
                                colaboradorLista.innerHTML = colabora;
                                modelTitle.innerHTML = titulo;
                                $('#modelrecrutamento').modal('show');
                            }
                            if (e.target.className == "motivoVagaNPreenchida") {
                                colabora = '';
                                titulo = '';
                                let i = 0;
                                motivosFechamentoContratratacao.forEach(rec => {
                                    console.log(rec)
                                    colabora += `<div class="text-center">
                              <h5 class="text-gray-900 mb-4" id=${'motivoVagaNPreenchida' + i}>${rec}</h5>
                          </div>`;
                                    i++;
                                });
                                titulo = 'Motivo Para nao Preenchimento da Vaga';
                                colaboradorLista.innerHTML = colabora;
                                modelTitle.innerHTML = titulo;
                                $('#modelrecrutamento').modal('show');
                            }
                            if (e.target.className == "outros") {
                                tako = e.target.className;
                                document.getElementById('modelTitle3').innerHTML = 'Outros Custos'
                                $('#modelRecrutamento3').modal('show');
                            }
                            if (e.target.className == "headHunter") {
                                tako = e.target.className;
                                document.getElementById('modelTitle3').innerHTML = 'Custo HeadHunter'
                                $('#modelRecrutamento3').modal('show');
                            }
                            if (e.target.className == "recExterno") {
                                tako = e.target.className;
                                document.getElementById('modelTitle3').innerHTML = 'Custo Pelo Recrutamento Externo'
                                $('#modelRecrutamento3').modal('show');
                            }
                            if (e.target.className == "plataformaRec") {
                                tako = e.target.className;
                                document.getElementById('modelTitle3').innerHTML = 'Custo da Plataforma de Recrutamento'
                                $('#modelRecrutamento3').modal('show');
                            }
                            if (e.target.className == "tempoRH") {
                                tako = e.target.className;
                                document.getElementById('modelTitle3').innerHTML = 'Custo Profissional RH'
                                $('#modelRecrutamento3').modal('show');
                            }
                            if (e.target.className == "corriculosReceb") {
                                tako = e.target.className;
                                document.getElementById('modelTitle3').innerHTML = 'Corriculos Recebidos'
                                $('#modelRecrutamento3').modal('show');
                            }
                            if (e.target.className == "candidatosProcesso") {
                                tako = e.target.className;
                                document.getElementById('modelTitle3').innerHTML = 'Candidatos no Processo'
                                $('#modelRecrutamento3').modal('show');
                            }
                            if (e.target.className == "candQualificados") {
                                tako = e.target.className;
                                document.getElementById('modelTitle3').innerHTML = 'Candidatos Qualificados'
                                $('#modelRecrutamento3').modal('show');
                            }
                            if (e.target.className == "candFinalistas") {
                                tako = e.target.className;
                                document.getElementById('modelTitle3').innerHTML = 'Candidatos Finalistas'
                                $('#modelRecrutamento3').modal('show');
                            }
                            if (e.target.className == "matEscritorio") {
                                tako = e.target.className;
                                document.getElementById('modelTitle3').innerHTML = 'Custo do Material de Escritorio'
                                $('#modelRecrutamento3').modal('show');
                            }
                        });
                        $(document).ready(function () {
                            $('#ta3423').DataTable({
                                "scrollX": true,
                                "scrollY": 500,
                            });
                        });

                    });
            }
            recrSelecc()

        }


        if (e.target.id == "ausencias") {
            function ausencias() {
                nada = '';
                nada = ` 
            <div class="animate__animated animate__pulse card3 text-center mr-4">
            <div class="row align-items-center">
                <div class="col-md-6">
                  <h1 class="mb-4 text-black"><span class="text-black">Cadastros</span></h1>
                  <h3 class="mb-4 text-black">Ausências</h3>
                </div>
                <div class="col-md-6 d-none d-sm-none d-md-block">
                  <img src="pics/Stocks2.png" alt="tours pics" class="img-fluid">
                </div>
              </div>
            </div>
            <div class="text-center card4">
            <div class="row p-3">
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="func2">Funcionários</a>                                                     
                  </div>
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="altFunc"><h6>Alt. Funcionário</h6></a>
                </div>
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="recrSelecc"><h6>Rec. e Selecção</h6></a>
                </div>
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="jornad">Jornadas</a>
                </div>
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="ausencias">Ausências</a>
                </div>
        
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="financeiro">Financeiro</a>
                </div>
        
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="treinamentos">Treinamentos</a>
                </div>
              </div>
              </div>  
              
        
                      <div class="text-center card5">
                          <h1 class="h4 text-black mb-4">Cadastro de Ausências dos Funcionários</h1>
                          <button type="button" class="btn btn-outline-dark" id="addAusências">Adicionar Ausências</button>                
                          <button type="button" class="btn btn-outline-dark ml-4" id="editAusências" disabled>Editar Ausências</button>
                      </div>
        
                      <hr>
                      <div class="text-center cardTab animate__animated animate__pulse">
                      <table class="table m-2" id="tabbb">
                          <thead>
                          <tr class="bg-gradient-primary text-center text-black">
                            <th scope="col">Numero</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th>Colaborador</th>
                            <th>Tipo/Ausências</th>
                            <th>Motivo</th>
                            <th>Total Horas</th>
                            <th>Segunda
                                <table>
                                    <tr>
                                      <td>dias</td>
                                      <td>hrs</td>
                                      <td>min</td>
                                    </tr>
                                </table>
                            </th>
                            <th>Terça
                                <table>
                                    <tr>
                                      <td>dias</td>
                                      <td>hrs</td>
                                      <td>min</td>
                                    </tr>
                                </table>
                            </th>
                            <th>Quarta
                                <table>
                                    <tr>
                                      <td>dias</td>
                                      <td>hrs</td>
                                      <td>min</td>
                                    </tr>
                                </table>
                            </th>
                            <th>Quinta
                                <table>
                                    <tr>
                                      <td>dias</td>
                                      <td>hrs</td>
                                      <td>min</td>
                                    </tr>
                                </table>
                            </th>
                            <th>Sexta
                                <table>
                                    <tr>
                                      <td>dias</td>
                                      <td>hrs</td>
                                      <td>min</td>
                                    </tr>
                                </table>
                            </th>
                            <th>Sábado
                                <table>
                                    <tr>
                                      <td>dias</td>
                                      <td>hrs</td>
                                      <td>min</td>
                                    </tr>
                                </table>
                            </th>
                            <th>Domingo
                                <table>
                                    <tr>
                                      <td>dias</td>
                                      <td>hrs</td>
                                      <td>min</td>
                                    </tr>
                                </table>
                            </th>
                          </tr>
                        </thead>
                        <tbody id="myAusencias" class="tt text-center text-black">                     
                        </tbody>
                      </table>
                      </div>
        
                      <!-- Modal -->
                      <div class="modal fade" id="modelAusencias5" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered" role="document">
                          <div class="modal-content">
                              <div class="modal-header">
                              <h5 class="modal-title" id="modelTitle4"></h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                              </button>
                              </div>
                              <div class="modal-body" id="ausenciasLista">
                                  
                              </div>
                              <!-- <div class="modal-footer">
                              <button type="button" class="btn btn-primary" id="treinamentoOk">Confirmar</button>
                              </div> -->
                          </div>
                          </div>
                      </div>
                      <!-- Modal -->
                      <div class="modal fade" id="modelTreinamento5" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered" role="document">
                          <div class="modal-content">
                              <div class="modal-header">
                              <h5 class="modal-title" id="modelTitle31"></h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                              </button>
                              </div>
                              <div class="modal-body">
                                  <input type="number" class="form-control mb-4" id="treinamentoText" equired autofocus autocomplete="on">
                              </div>
                              <div class="modal-footer">
                              <button type="button" class="btn btn-primary" id="treinamentoOk">Confirmar</button>
                              </div>
                          </div>
                          </div>
                      </div>
                      <!-- Modal -->
                      <div class="modal fade" id="novAusencia" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered" role="document">
                          <div class="modal-content">
                              <div class="modal-header">
                              <h5 class="modal-title" id="novoTrin">Nova Ausência</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                              </button>
                              </div>
                              <div class="modal-body">
                                  <div class="text-center">
                                      <p>Todos os Campos com * são de caracter obrigatorio...</p>
                                  </div>                
                                  <p>Mes*</p>
                                  <select name="select" class="form-control mb-4" id="mes"></select>
                                  <p>Ano*</p>
                                  <input type="number" class="form-control mb-4" id="ano" placeholder="Ano" equired autofocus autocomplete="on">
                                  <p>Colaborador*</p>
                                  <select name="select" class="form-control mb-4" id="colaboradorSelect">                    
                                  </select>
                                  <p>Tipo de Ausência*</p>
                                  <select name="select" class="form-control mb-4" id="tipoAusenciaSelect">
                                  </select>
                                  <p>Motivo da Ausência*</p>
                                  <select name="select" class="form-control mb-4" id="motivoAusenciaSelect"></select>
                                  </div>
                              <div class="modal-footer">
                              <button type="button" class="btn btn-primary" id="novaAusenciaOk">Confirmar</button>
                              </div>
                          </div>
                          </div>
                      </div>
            `;

                contrudo.innerHTML = nada;
                const myAusencias = document.getElementById('myAusencias');
                const addAusências = document.getElementById('addAusências');
                const novaAusenciaOk = document.getElementById('novaAusenciaOk');
                const ausenciasLista = document.getElementById('ausenciasLista');
                const modelTitle4 = document.getElementById('modelTitle4');
                let colaboradors = '';
                let tipoAusenciass = '';
                let motivoss = '';
                let motivosss = '';
                let meses33 = '';
                let isto = "";
                let domingo = 0;
                let segunda = 0;
                let terca = 0;
                let quarta = 0;
                let quinta = 0;
                let sexta = 0;
                let sabado = 0;
                let terra = 0;
                const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2}`;

                fetch(url3)
                    .then(res => res.json())
                    .then(content => {
                        const data = content[0]['funcionarios'];
                        const mesesLista = [
                            'Janeiro',
                            'Fevereiro',
                            'Março',
                            'Abril',
                            'Maio',
                            'Junho',
                            'Julho',
                            'Agosto',
                            'Setembro',
                            'Outubro',
                            'Novembro',
                            'Dezembro'
                        ];
                        mesesLista.forEach(rec => {
                            meses33 += `<option>${rec}</option>`;
                        });
                        document.getElementById('mes').innerHTML = meses33;
                        for (var i = 0; i < data.length; i++) {
                            colaboradors += `<option>${data[i].nomeFuncionario}</option>`;
                            document.getElementById('colaboradorSelect').innerHTML = colaboradors;
                            const data2 = content[0]['funcionarios'][i]['ausencias'];

                            for (var j = 0; j < data2.length; j++) {
                                const data3 = content[0]['funcionarios'][i]['ausencias'][j]['meses'];
                                listaAno.push([data[i].nomeFuncionario, content[0]['funcionarios'][i]['ausencias'][j]['ano']]);
                                for (var k = 0; k < data3.length; k++) {
                                    tipoAusenciass = '';
                                    motivoss = '';
                                    terra += 1;
                                    const ress = content[0]['funcionarios'][i]['ausencias'][j]['meses'];

                                    const domingo2 = content[0]['funcionarios'][i]['ausencias'][j]['meses'][k]['semanas'][0]['domingo'];

                                    const segunda2 = content[0]['funcionarios'][i]['ausencias'][j]['meses'][k]['semanas'][0]['segunda'];

                                    const terca2 = content[0]['funcionarios'][i]['ausencias'][j]['meses'][k]['semanas'][0]['terca'];

                                    const quarta2 = content[0]['funcionarios'][i]['ausencias'][j]['meses'][k]['semanas'][0]['quarta'];

                                    const quinta2 = content[0]['funcionarios'][i]['ausencias'][j]['meses'][k]['semanas'][0]['quinta'];

                                    const sexta2 = content[0]['funcionarios'][i]['ausencias'][j]['meses'][k]['semanas'][0]['sexta'];

                                    const sabado2 = content[0]['funcionarios'][i]['ausencias'][j]['meses'][k]['semanas'][0]['sabado'];


                                    if (domingo2.length == 0) {
                                        domingo = 0;
                                    } else {
                                        domingo = content[0]['funcionarios'][i]['ausencias'][j]['meses'][k]['semanas'][0]['domingo'];

                                    }
                                    if (segunda2.length == 0) {
                                        segunda = 0;
                                    } else {
                                        segunda = content[0]['funcionarios'][i]['ausencias'][j]['meses'][k]['semanas'][0]['segunda'];

                                    }
                                    if (terca2.length == 0) {
                                        terca = 0;
                                    } else {
                                        terca = content[0]['funcionarios'][i]['ausencias'][j]['meses'][k]['semanas'][0]['terca'];

                                    }
                                    if (quarta2.length == 0) {
                                        quarta = 0;
                                    } else {
                                        quarta = content[0]['funcionarios'][i]['ausencias'][j]['meses'][k]['semanas'][0]['quarta'];

                                    }
                                    if (quinta2.length == 0) {
                                        quinta = 0;
                                    } else {
                                        quinta = content[0]['funcionarios'][i]['ausencias'][j]['meses'][k]['semanas'][0]['quinta'];

                                    }
                                    if (sexta2.length == 0) {
                                        sexta = 0;
                                    } else {
                                        sexta = content[0]['funcionarios'][i]['ausencias'][j]['meses'][k]['semanas'][0]['sexta'];

                                    }
                                    if (sabado2.length == 0) {
                                        sabado = 0;
                                    } else {
                                        sabado = content[0]['funcionarios'][i]['ausencias'][j]['meses'][k]['semanas'][0]['sabado'];

                                    }

                                    var newRow = myAusencias.insertRow();
                                    var newCell1 = newRow.insertCell(0);
                                    var newCell2 = newRow.insertCell(1);
                                    var newCell3 = newRow.insertCell(2);
                                    var newCell4 = newRow.insertCell(3);
                                    var newCell5 = newRow.insertCell(4);
                                    var newCell6 = newRow.insertCell(5);
                                    var newCell14 = newRow.insertCell(6);
                                    var newCell7 = newRow.insertCell(7);
                                    var newCell8 = newRow.insertCell(8);
                                    var newCell9 = newRow.insertCell(9);
                                    var newCell10 = newRow.insertCell(10);
                                    var newCell11 = newRow.insertCell(11);
                                    var newCell12 = newRow.insertCell(12);
                                    var newCell13 = newRow.insertCell(13);
                                    const horasMes = parseInt(segunda) * 8 + parseInt(terca) * 8 + parseInt(quarta) * 8 +
                                        parseInt(quinta) * 8 + parseInt(sexta) * 8 + parseInt(sabado) * 8 + parseInt(domingo) * 8;
                                    motivosss = `<div class="motivo" id=${ress[k]._id}>${ress[k].motivo}</div>`;
                                    newCell1.innerHTML = terra;
                                    newCell2.innerHTML = ress[k].mes;
                                    newCell14.innerHTML = horasMes;
                                    newCell3.innerHTML = content[0]['funcionarios'][i]['ausencias'][j]['ano'];
                                    newCell4.innerHTML = ress[k].colaborador;
                                    newCell5.innerHTML = `<div class="tipoAusencia" id=${ress[k]._id}>${ress[k].tipoAusencia}</div>`;
                                    newCell6.innerHTML = motivosss
                                    newCell7.innerHTML = `<table>
                        <tr>
                          <td class="segunda" id=${ress[k]._id}>${segunda}</td>
                          <td id="segunda-horas">${parseInt(segunda) * 8}</td>
                          <td id="segunda-min">0</td>
                        </tr>
                        </table>`;
                                    newCell8.innerHTML = `<table>
                        <tr>
                          <td class="terca" id=${ress[k]._id}>${terca}</td>
                          <td id="terca-horas">${parseInt(terca) * 8}</td>
                          <td id="terca-min">0</td>
                        </tr>
                        </table>`;
                                    newCell9.innerHTML = `<table>
                        <tr>
                          <td class="quarta" id=${ress[k]._id}>${quarta}</td>
                          <td id="quarta-horas">${parseInt(quarta) * 8}</td>
                          <td id="quarta-min">0</td>
                        </tr>
                        </table>`;
                                    newCell10.innerHTML = `<table>
                        <tr>
                          <td class="quinta" id=${ress[k]._id}">${quinta}</td>
                          <td id="quinta-horas">${parseInt(quinta) * 8}</td>
                          <td id="quinta-min">0</td>
                        </tr>
                        </table>`;
                                    newCell11.innerHTML = `<table>
                        <tr>
                          <td class="sexta" id=${ress[k]._id}>${sexta}</td>
                          <td id="sexta-horas">${parseInt(sexta) * 8}</td>
                          <td id="sexta-min">0</td>
                        </tr>
                        </table>`;
                                    newCell12.innerHTML = `<table>
                        <tr>
                          <td class="sabado" id=${ress[k]._id}>${sabado}</td>
                          <td id="sabado-horas">${parseInt(sabado) * 8}</td>
                          <td id="sabado-min">0</td>
                        </tr>
                        </table>`;
                                    newCell13.innerHTML = `<table>
                        <tr>
                          <td class="domingo" id=${ress[k]._id}>${domingo}</td>
                          <td id="domingo-horas">${parseInt(domingo) * 8}</td>
                          <td id="domingo-min">0</td>
                        </tr>
                        </table>`;


                                }

                            }

                        }


                        // Post 
                        novaAusenciaOk.addEventListener('click', (e) => {
                            e.preventDefault();
                            const mes33 = document.getElementById('mes');
                            const ano33 = document.getElementById('ano');
                            const colaboradorSelect33 = document.getElementById('colaboradorSelect');
                            const tipoAusenciaSelect33 = document.getElementById('tipoAusenciaSelect');
                            const motivoAusenciaSelect33 = document.getElementById('motivoAusenciaSelect');
                            const segunda33 = document.getElementById('segunda');
                            const terca33 = document.getElementById('terca');
                            const quarta33 = document.getElementById('quarta');
                            const quinta33 = document.getElementById('quinta');
                            const sexta33 = document.getElementById('sexta');
                            const sabado33 = document.getElementById('sabado');
                            const domingo33 = document.getElementById('domingo');
                            let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
                            let fai = JSON.stringify(token);
                            // h.append('authorization', `Bearer ${token}`)

                            for (var j = 0; j < listaAno.length; j++) {
                                result = listaAno.filter(function (item) {
                                    return item[0] === `${colaboradorSelect33.value}`;
                                }).
                                    map(function (a) {
                                        return a[1];
                                    });
                                listaAno2.push(result);
                            }
                            console.log(listaAno2);
                            if (ano33.value) {
                                console.log(listaAno2[0].includes(ano33.value));
                                if (listaAno2[0].includes(ano33.value)) {
                                    console.log("1")
                                    $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                    const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/ausencias/meses';
                                    let pora2 = new Request(urlLogIn3, {
                                        method: 'PATCH',
                                        headers: h,
                                        body: JSON.stringify({
                                            "mes": `${mes33.value}`,
                                            "ano": `${ano33.value}`,
                                            "colaborador": `${colaboradorSelect33.value}`,
                                            "tipoAusencia": `${tipoAusenciaSelect33.value}`,
                                            "motivo": `${motivoAusenciaSelect33.value}`
                                        })
                                    });
                                    fetch(pora2)
                                        .then(ress => ress.json())
                                        .then(data5 => {
                                            const urlLogIn4 = 'https://stocksmanager1.herokuapp.com/ausencias/novaSemana';
                                            let pora3 = new Request(urlLogIn4, {
                                                method: 'PATCH',
                                                headers: h,
                                                body: JSON.stringify({
                                                    "mes": `${mes33.value}`,
                                                    "ano": `${ano33.value}`,
                                                    "colaborador": `${colaboradorSelect33.value}`,
                                                    "tipoAusencia": `${tipoAusenciaSelect33.value}`,
                                                    "motivo": `${motivoAusenciaSelect33.value}`
                                                })
                                            });
                                            fetch(pora3)
                                                .then(ress => ress.json())
                                                .then(data6 => {
                                                    console.log(data6)
                                                    $('#novAusencia').modal('hide');
                                                    var m = new Date();
                                                    var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                                    const usuarioLogs = localStorage.getItem('usuario');
                                                    const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                                    let logs = new Request(urlLogs, {
                                                        method: 'PATCH',
                                                        headers: h,
                                                        body: JSON.stringify({
                                                            "nomeFuncionario": `${usuarioLogs}`,
                                                            "historico": `O Colaborador ${usuarioLogs} fez alterações nas Ausências dos Funcionários`,
                                                            "data": `${dateString}`
                                                        })
                                                    });
                                                    fetch(logs)
                                                        .then(ress => ress.json())
                                                        .then(data5Logs => {
                                                            console.log(data5Logs)
                                                        });
                                                    ausencias()
                                                })
                                        })
                                } else {
                                    console.log('2')
                                    $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                    const urlLogIn2 = 'https://stocksmanager1.herokuapp.com/ausencias';
                                    let pora = new Request(urlLogIn2, {
                                        method: 'PATCH',
                                        headers: h,
                                        body: JSON.stringify({
                                            "mes": `${mes33.value}`,
                                            "ano": `${ano33.value}`,
                                            "colaborador": `${colaboradorSelect33.value}`,
                                            "tipoAusencia": `${tipoAusenciaSelect33.value}`,
                                            "motivo": `${motivoAusenciaSelect33.value}`
                                        })
                                    });
                                    fetch(pora)
                                        .then(ress1 => ress1.json())
                                        .then(data4 => {
                                            const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/ausencias/meses';
                                            let pora2 = new Request(urlLogIn3, {
                                                method: 'PATCH',
                                                headers: h,
                                                body: JSON.stringify({
                                                    "mes": `${mes33.value}`,
                                                    "ano": `${ano33.value}`,
                                                    "colaborador": `${colaboradorSelect33.value}`,
                                                    "tipoAusencia": `${tipoAusenciaSelect33.value}`,
                                                    "motivo": `${motivoAusenciaSelect33.value}`
                                                })
                                            });
                                            fetch(pora2)
                                                .then(ress => ress.json())
                                                .then(data5 => {
                                                    const urlLogIn4 = 'https://stocksmanager1.herokuapp.com/ausencias/novaSemana';
                                                    let pora3 = new Request(urlLogIn4, {
                                                        method: 'PATCH',
                                                        headers: h,
                                                        body: JSON.stringify({
                                                            "mes": `${mes33.value}`,
                                                            "ano": `${ano33.value}`,
                                                            "colaborador": `${colaboradorSelect33.value}`,
                                                            "tipoAusencia": `${tipoAusenciaSelect33.value}`,
                                                            "motivo": `${motivoAusenciaSelect33.value}`
                                                        })
                                                    });
                                                    fetch(pora3)
                                                        .then(ress => ress.json())
                                                        .then(data6 => {
                                                            console.log(data6)
                                                            $('#novAusencia').modal('hide');
                                                            $('#novAusencia').modal('hide');
                                                            var m = new Date();
                                                            var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                                            const usuarioLogs = localStorage.getItem('usuario');
                                                            const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                                            let logs = new Request(urlLogs, {
                                                                method: 'PATCH',
                                                                headers: h,
                                                                body: JSON.stringify({
                                                                    "nomeFuncionario": `${usuarioLogs}`,
                                                                    "historico": `O Colaborador ${usuarioLogs} fez alterações nas Ausências dos Funcionários`,
                                                                    "data": `${dateString}`
                                                                })
                                                            });
                                                            fetch(logs)
                                                                .then(ress => ress.json())
                                                                .then(data5Logs => {
                                                                    console.log(data5Logs)
                                                                });
                                                            ausencias()
                                                        })
                                                })
                                        })
                                }

                            } else {
                                alert('erro')
                            }
                            if (segunda33.value) {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/ausencias/meses/segunda';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "mes": `${mes33.value}`,
                                        "ano": `${ano33.value}`,
                                        "colaborador": `${colaboradorSelect33.value}`,
                                        "dias": `${segunda33.value}`
                                    })
                                });
                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        $('#novAusencia').modal('hide');
                                        var m = new Date();
                                        var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                        const usuarioLogs = localStorage.getItem('usuario');
                                        const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                        let logs = new Request(urlLogs, {
                                            method: 'PATCH',
                                            headers: h,
                                            body: JSON.stringify({
                                                "nomeFuncionario": `${usuarioLogs}`,
                                                "historico": `O Colaborador ${usuarioLogs} fez alterações nas Ausências dos Funcionários`,
                                                "data": `${dateString}`
                                            })
                                        });
                                        fetch(logs)
                                            .then(ress => ress.json())
                                            .then(data5Logs => {
                                                console.log(data5Logs)
                                            });
                                        ausencias()
                                    })

                            }
                            if (terca33.value) {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/ausencias/meses/terca';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "mes": `${mes33.value}`,
                                        "ano": `${ano33.value}`,
                                        "colaborador": `${colaboradorSelect33.value}`,
                                        "dias": `${terca33.value}`
                                    })
                                });
                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        $('#novAusencia').modal('hide');
                                        var m = new Date();
                                        var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                        const usuarioLogs = localStorage.getItem('usuario');
                                        const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                        let logs = new Request(urlLogs, {
                                            method: 'PATCH',
                                            headers: h,
                                            body: JSON.stringify({
                                                "nomeFuncionario": `${usuarioLogs}`,
                                                "historico": `O Colaborador ${usuarioLogs} fez alterações nas Ausências dos Funcionários`,
                                                "data": `${dateString}`
                                            })
                                        });
                                        fetch(logs)
                                            .then(ress => ress.json())
                                            .then(data5Logs => {
                                                console.log(data5Logs)
                                            });
                                        ausencias()
                                    })

                            }
                            if (quarta33.value) {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/ausencias/meses/quarta';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "mes": `${mes33.value}`,
                                        "ano": `${ano33.value}`,
                                        "colaborador": `${colaboradorSelect33.value}`,
                                        "dias": `${quarta33.value}`
                                    })
                                });
                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        $('#novAusencia').modal('hide');
                                        var m = new Date();
                                        var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                        const usuarioLogs = localStorage.getItem('usuario');
                                        const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                        let logs = new Request(urlLogs, {
                                            method: 'PATCH',
                                            headers: h,
                                            body: JSON.stringify({
                                                "nomeFuncionario": `${usuarioLogs}`,
                                                "historico": `O Colaborador ${usuarioLogs} fez alterações nas Ausências dos Funcionários`,
                                                "data": `${dateString}`
                                            })
                                        });
                                        fetch(logs)
                                            .then(ress => ress.json())
                                            .then(data5Logs => {
                                                console.log(data5Logs)
                                            });
                                        ausencias()
                                    })

                            }
                            if (quinta33.value) {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/ausencias/meses/quinta';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "mes": `${mes33.value}`,
                                        "ano": `${ano33.value}`,
                                        "colaborador": `${colaboradorSelect33.value}`,
                                        "dias": `${quinta33.value}`
                                    })
                                });
                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        $('#novAusencia').modal('hide');
                                        var m = new Date();
                                        var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                        const usuarioLogs = localStorage.getItem('usuario');
                                        const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                        let logs = new Request(urlLogs, {
                                            method: 'PATCH',
                                            headers: h,
                                            body: JSON.stringify({
                                                "nomeFuncionario": `${usuarioLogs}`,
                                                "historico": `O Colaborador ${usuarioLogs} fez alterações nas Ausências dos Funcionários`,
                                                "data": `${dateString}`
                                            })
                                        });
                                        fetch(logs)
                                            .then(ress => ress.json())
                                            .then(data5Logs => {
                                                console.log(data5Logs)
                                            });
                                        ausencias()
                                    })

                            }
                            if (sexta33.value) {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/ausencias/meses/sexta';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "mes": `${mes33.value}`,
                                        "ano": `${ano33.value}`,
                                        "colaborador": `${colaboradorSelect33.value}`,
                                        "dias": `${sexta33.value}`
                                    })
                                });
                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        $('#novAusencia').modal('hide');
                                        var m = new Date();
                                        var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                        const usuarioLogs = localStorage.getItem('usuario');
                                        const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                        let logs = new Request(urlLogs, {
                                            method: 'PATCH',
                                            headers: h,
                                            body: JSON.stringify({
                                                "nomeFuncionario": `${usuarioLogs}`,
                                                "historico": `O Colaborador ${usuarioLogs} fez alterações nas Ausências dos Funcionários`,
                                                "data": `${dateString}`
                                            })
                                        });
                                        fetch(logs)
                                            .then(ress => ress.json())
                                            .then(data5Logs => {
                                                console.log(data5Logs)
                                            });
                                        ausencias()
                                    })

                            }
                            if (sabado33.value) {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/ausencias/meses/sabado';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "mes": `${mes33.value}`,
                                        "ano": `${ano33.value}`,
                                        "colaborador": `${colaboradorSelect33.value}`,
                                        "dias": `${sabado33.value}`
                                    })
                                });
                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        $('#novAusencia').modal('hide');
                                        var m = new Date();
                                        var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                        const usuarioLogs = localStorage.getItem('usuario');
                                        const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                        let logs = new Request(urlLogs, {
                                            method: 'PATCH',
                                            headers: h,
                                            body: JSON.stringify({
                                                "nomeFuncionario": `${usuarioLogs}`,
                                                "historico": `O Colaborador ${usuarioLogs} fez alterações nas Ausências dos Funcionários`,
                                                "data": `${dateString}`
                                            })
                                        });
                                        fetch(logs)
                                            .then(ress => ress.json())
                                            .then(data5Logs => {
                                                console.log(data5Logs)
                                            });
                                        ausencias()
                                    })

                            }
                            if (domingo33.value) {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/ausencias/meses/domingo';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "mes": `${mes33.value}`,
                                        "ano": `${ano33.value}`,
                                        "colaborador": `${colaboradorSelect33.value}`,
                                        "dias": `${domingo33.value}`
                                    })
                                });
                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        $('#novAusencia').modal('hide');
                                        var m = new Date();
                                        var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                        const usuarioLogs = localStorage.getItem('usuario');
                                        const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                        let logs = new Request(urlLogs, {
                                            method: 'PATCH',
                                            headers: h,
                                            body: JSON.stringify({
                                                "nomeFuncionario": `${usuarioLogs}`,
                                                "historico": `O Colaborador ${usuarioLogs} fez alterações nas Ausências dos Funcionários`,
                                                "data": `${dateString}`
                                            })
                                        });
                                        fetch(logs)
                                            .then(ress => ress.json())
                                            .then(data5Logs => {
                                                console.log(data5Logs)
                                            });
                                        ausencias()
                                    })

                            }


                        })
                        const select = document.getElementById('tipoAusenciaSelect');
                        addAusências.addEventListener('click', (e) => {
                            e.preventDefault();
                            $('#novAusencia').modal('show');
                            tiposAusencias.forEach(rec => {
                                tipoAusenciass += `<option>${rec}</option>`;
                            });
                            document.getElementById('tipoAusenciaSelect').innerHTML = tipoAusenciass;
                            let ti = '';

                            ti = select.options[select.selectedIndex].innerHTML;
                            console.log(ti)
                            if (ti === 'Ausência Planejada') {
                                motivoss = '';
                                ausenciaPlanejadaw.forEach(rec => {
                                    motivoss += `<option>${rec}</option>`;
                                });
                                document.getElementById('motivoAusenciaSelect').innerHTML = motivoss;
                            } else {
                                motivoss = '';
                                ausenciaNaoPlanejadaw.forEach(rec => {
                                    motivoss += `<option>${rec}</option>`;
                                });
                                document.getElementById('motivoAusenciaSelect').innerHTML = motivoss;
                            }
                        });

                        select.addEventListener('change', (event) => {
                            let tis = event.target.value;
                            console.log(tis);
                            ti2 = select.options[select.selectedIndex].innerHTML;
                            if (ti2 === 'Ausência Planejada') {
                                motivoss = '';
                                ausenciaPlanejadaw.forEach(rec => {
                                    motivoss += `<option>${rec}</option>`;
                                });
                                document.getElementById('motivoAusenciaSelect').innerHTML = motivoss;
                            } else {
                                motivoss = '';
                                ausenciaNaoPlanejadaw.forEach(rec => {
                                    motivoss += `<option>${rec}</option>`;
                                });
                                document.getElementById('motivoAusenciaSelect').innerHTML = motivoss;
                            }
                        })
                        var table = document.getElementById('tabbb');


                        myAusencias.addEventListener('click', (e) => {
                            e.preventDefault();

                            if (e.target.className == "segunda") {
                                for (var i = 1; i < table.rows.length; i++) {
                                    table.rows[i].onclick = function () {
                                        //rIndex = this.rowIndex;
                                        // mes333 += this.cells[1].innerHTML;
                                        // ano333 += this.cells[2].innerHTML;
                                        // colaboradorSelect333 += this.cells[3].innerHTML;
                                        let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
                                        document.getElementById('modelTitle31').innerHTML = 'Total das Faltas na Segunda';
                                        const treinamentoText = document.getElementById('treinamentoText');
                                        const treinamentoOk = document.getElementById('treinamentoOk');
                                        $('#modelTreinamento5').modal('show');
                                        treinamentoOk.addEventListener('click', (e) => {

                                            console.log(treinamentoText.value)
                                            $('#modelTreinamento5').modal('hide');
                                            $('#aguarde').modal('show'); //show modal
                                                setTimeout(function () {
                                                    $('#aguarde').modal('hide'); //hide modal
                                                }, 8000);
                                            const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/ausencias/meses/segunda';
                                            let pora2 = new Request(urlLogIn3, {
                                                method: 'PATCH',
                                                headers: h,
                                                body: JSON.stringify({
                                                    "mes": `${this.cells[1].innerHTML}`,
                                                    "ano": `${this.cells[2].innerHTML}`,
                                                    "colaborador": `${this.cells[3].innerHTML}`,
                                                    "dias": `${treinamentoText.value}`
                                                })
                                            });
                                            fetch(pora2)
                                                .then(ress => ress.json())
                                                .then(data5 => {
                                                    $('#novAusencia').modal('hide');
                                                    var m = new Date();
                                                    var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                                    const usuarioLogs = localStorage.getItem('usuario');
                                                    const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                                    let logs = new Request(urlLogs, {
                                                        method: 'PATCH',
                                                        headers: h,
                                                        body: JSON.stringify({
                                                            "nomeFuncionario": `${usuarioLogs}`,
                                                            "historico": `O Colaborador ${usuarioLogs} fez alterações nas Ausências dos Funcionários`,
                                                            "data": `${dateString}`
                                                        })
                                                    });
                                                    fetch(logs)
                                                        .then(ress => ress.json())
                                                        .then(data5Logs => {
                                                            console.log(data5Logs)
                                                        });
                                                    ausencias()
                                                })

                                        });

                                    };
                                }


                            }
                            if (e.target.className == "tipoAusencia") {
                                colabora = '';
                                isto = "";
                                titulo = '';
                                isto = e.target.innerHTML
                                console.log("==>" + e.target.innerHTML)
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
                            if (e.target.className == "motivo") {
                                colabora = '';
                                titulo = '';
                                if (isto === "Ausência Planejada") {
                                    ausenciaPlanejadaw.forEach(rec => {
                                        colabora += `<div class="text-center">
                                    <h5 class="text-gray-900 mb-4" id="${rec}">${rec}</h5>
                                </div>`;
                                    });
                                    titulo = 'Motivo da Ausência';
                                    ausenciasLista.innerHTML = colabora;
                                    modelTitle4.innerHTML = titulo;
                                    $('#modelAusencias5').modal('show');
                                    ausenciasLista.addEventListener('click', (e) => {
                                        console.log(e.target.id)
                                        $('#modelAusencias5').modal('hide');
                                    })

                                } else {
                                    ausenciaNaoPlanejadaw.forEach(rec => {
                                        colabora += `<div class="text-center">
                                    <h5 class="text-gray-900 mb-4" id="${rec}">${rec}</h5>
                                </div>`;
                                    });
                                    titulo = ' Motivo da Ausência';
                                    ausenciasLista.innerHTML = colabora;
                                    modelTitle4.innerHTML = titulo;
                                    $('#modelAusencias5').modal('show');
                                    ausenciasLista.addEventListener('click', (e) => {
                                        console.log(e.target.id)
                                        $('#modelAusencias5').modal('hide');
                                    })
                                }

                            }
                        });
                        myAusencias.addEventListener('click', (e) => {
                            e.preventDefault();
                            if (e.target.className == "terca") {
                                document.getElementById('modelTitle31').innerHTML = 'Total das Faltas na Terca'
                                for (var i = 1; i < table.rows.length; i++) {
                                    table.rows[i].onclick = function () {
                                        //rIndex = this.rowIndex;
                                        // mes333 += this.cells[1].innerHTML;
                                        // ano333 += this.cells[2].innerHTML;
                                        // colaboradorSelect333 += this.cells[3].innerHTML;
                                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                        let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
                                        const treinamentoText = document.getElementById('treinamentoText');
                                        const treinamentoOk = document.getElementById('treinamentoOk');
                                        $('#modelTreinamento5').modal('show');
                                        treinamentoOk.addEventListener('click', (e) => {
                                            console.log(treinamentoText.value)
                                            $('#modelTreinamento5').modal('hide');

                                            const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/ausencias/meses/terca';
                                            let pora2 = new Request(urlLogIn3, {
                                                method: 'PATCH',
                                                headers: h,
                                                body: JSON.stringify({
                                                    "mes": `${this.cells[1].innerHTML}`,
                                                    "ano": `${this.cells[2].innerHTML}`,
                                                    "colaborador": `${this.cells[3].innerHTML}`,
                                                    "dias": `${treinamentoText.value}`
                                                })
                                            });
                                            fetch(pora2)
                                                .then(ress => ress.json())
                                                .then(data5 => {
                                                    $('#novAusencia').modal('hide');
                                                    var m = new Date();
                                                    var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                                    const usuarioLogs = localStorage.getItem('usuario');
                                                    const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                                    let logs = new Request(urlLogs, {
                                                        method: 'PATCH',
                                                        headers: h,
                                                        body: JSON.stringify({
                                                            "nomeFuncionario": `${usuarioLogs}`,
                                                            "historico": `O Colaborador ${usuarioLogs} fez alterações nas Ausências dos Funcionários`,
                                                            "data": `${dateString}`
                                                        })
                                                    });
                                                    fetch(logs)
                                                        .then(ress => ress.json())
                                                        .then(data5Logs => {
                                                            console.log(data5Logs)
                                                        });
                                                    ausencias()
                                                })

                                        });

                                    };
                                }
                            }
                        });
                        myAusencias.addEventListener('click', (e) => {
                            e.preventDefault();

                            console.log(e.target.className)
                            if (e.target.className == "quarta") {
                                document.getElementById('modelTitle31').innerHTML = 'Total das Faltas na Quarta'

                                for (var i = 1; i < table.rows.length; i++) {
                                    table.rows[i].onclick = function () {
                                        //rIndex = this.rowIndex;
                                        // mes333 += this.cells[1].innerHTML;
                                        // ano333 += this.cells[2].innerHTML;
                                        // colaboradorSelect333 += this.cells[3].innerHTML;
                                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                        let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
                                        const treinamentoText = document.getElementById('treinamentoText');
                                        const treinamentoOk = document.getElementById('treinamentoOk');
                                        $('#modelTreinamento5').modal('show');
                                        treinamentoOk.addEventListener('click', (e) => {
                                            console.log(treinamentoText.value)
                                            $('#modelTreinamento5').modal('hide');

                                            const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/ausencias/meses/quarta';
                                            let pora2 = new Request(urlLogIn3, {
                                                method: 'PATCH',
                                                headers: h,
                                                body: JSON.stringify({
                                                    "mes": `${this.cells[1].innerHTML}`,
                                                    "ano": `${this.cells[2].innerHTML}`,
                                                    "colaborador": `${this.cells[3].innerHTML}`,
                                                    "dias": `${treinamentoText.value}`
                                                })
                                            });
                                            fetch(pora2)
                                                .then(ress => ress.json())
                                                .then(data5 => {
                                                    $('#novAusencia').modal('hide');
                                                    var m = new Date();
                                                    var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                                    const usuarioLogs = localStorage.getItem('usuario');
                                                    const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                                    let logs = new Request(urlLogs, {
                                                        method: 'PATCH',
                                                        headers: h,
                                                        body: JSON.stringify({
                                                            "nomeFuncionario": `${usuarioLogs}`,
                                                            "historico": `O Colaborador ${usuarioLogs} fez alterações nas Ausências dos Funcionários`,
                                                            "data": `${dateString}`
                                                        })
                                                    });
                                                    fetch(logs)
                                                        .then(ress => ress.json())
                                                        .then(data5Logs => {
                                                            console.log(data5Logs)
                                                        });
                                                    ausencias()
                                                })

                                        });

                                    };
                                }
                            }
                        });
                        myAusencias.addEventListener('click', (e) => {
                            e.preventDefault();

                            console.log(e.target.className)
                            if (e.target.className == "quinta") {
                                document.getElementById('modelTitle31').innerHTML = 'Total das Faltas na Quinta'
                                for (var i = 1; i < table.rows.length; i++) {
                                    table.rows[i].onclick = function () {
                                        //rIndex = this.rowIndex;
                                        // mes333 += this.cells[1].innerHTML;
                                        // ano333 += this.cells[2].innerHTML;
                                        // colaboradorSelect333 += this.cells[3].innerHTML;
                                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                        let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
                                        const treinamentoText = document.getElementById('treinamentoText');
                                        const treinamentoOk = document.getElementById('treinamentoOk');
                                        $('#modelTreinamento5').modal('show');
                                        treinamentoOk.addEventListener('click', (e) => {
                                            console.log(treinamentoText.value)
                                            $('#modelTreinamento5').modal('hide');

                                            const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/ausencias/meses/quinta';
                                            let pora2 = new Request(urlLogIn3, {
                                                method: 'PATCH',
                                                headers: h,
                                                body: JSON.stringify({
                                                    "mes": `${this.cells[1].innerHTML}`,
                                                    "ano": `${this.cells[2].innerHTML}`,
                                                    "colaborador": `${this.cells[3].innerHTML}`,
                                                    "dias": `${treinamentoText.value}`
                                                })
                                            });
                                            fetch(pora2)
                                                .then(ress => ress.json())
                                                .then(data5 => {
                                                    $('#novAusencia').modal('hide');
                                                    var m = new Date();
                                                    var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                                    const usuarioLogs = localStorage.getItem('usuario');
                                                    const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                                    let logs = new Request(urlLogs, {
                                                        method: 'PATCH',
                                                        headers: h,
                                                        body: JSON.stringify({
                                                            "nomeFuncionario": `${usuarioLogs}`,
                                                            "historico": `O Colaborador ${usuarioLogs} fez alterações nas Ausências dos Funcionários`,
                                                            "data": `${dateString}`
                                                        })
                                                    });
                                                    fetch(logs)
                                                        .then(ress => ress.json())
                                                        .then(data5Logs => {
                                                            console.log(data5Logs)
                                                        });
                                                    ausencias()
                                                })

                                        });

                                    };
                                }
                            }
                        });
                        myAusencias.addEventListener('click', (e) => {
                            e.preventDefault();

                            console.log(e.target.className)
                            if (e.target.className == "sexta") {
                                document.getElementById('modelTitle31').innerHTML = 'Total das Faltas na Sexta'
                                for (var i = 1; i < table.rows.length; i++) {
                                    table.rows[i].onclick = function () {
                                        //rIndex = this.rowIndex;
                                        // mes333 += this.cells[1].innerHTML;
                                        // ano333 += this.cells[2].innerHTML;
                                        // colaboradorSelect333 += this.cells[3].innerHTML;
                                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                        let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
                                        const treinamentoText = document.getElementById('treinamentoText');
                                        const treinamentoOk = document.getElementById('treinamentoOk');
                                        $('#modelTreinamento5').modal('show');
                                        treinamentoOk.addEventListener('click', (e) => {
                                            console.log(treinamentoText.value)
                                            $('#modelTreinamento5').modal('hide');

                                            const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/ausencias/meses/sexta';
                                            let pora2 = new Request(urlLogIn3, {
                                                method: 'PATCH',
                                                headers: h,
                                                body: JSON.stringify({
                                                    "mes": `${this.cells[1].innerHTML}`,
                                                    "ano": `${this.cells[2].innerHTML}`,
                                                    "colaborador": `${this.cells[3].innerHTML}`,
                                                    "dias": `${treinamentoText.value}`
                                                })
                                            });
                                            fetch(pora2)
                                                .then(ress => ress.json())
                                                .then(data5 => {
                                                    $('#novAusencia').modal('hide');
                                                    var m = new Date();
                                                    var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                                    const usuarioLogs = localStorage.getItem('usuario');
                                                    const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                                    let logs = new Request(urlLogs, {
                                                        method: 'PATCH',
                                                        headers: h,
                                                        body: JSON.stringify({
                                                            "nomeFuncionario": `${usuarioLogs}`,
                                                            "historico": `O Colaborador ${usuarioLogs} fez alterações nas Ausências dos Funcionários`,
                                                            "data": `${dateString}`
                                                        })
                                                    });
                                                    fetch(logs)
                                                        .then(ress => ress.json())
                                                        .then(data5Logs => {
                                                            console.log(data5Logs)
                                                        });
                                                    ausencias()
                                                })

                                        });

                                    };
                                }
                            }
                        });
                        myAusencias.addEventListener('click', (e) => {
                            e.preventDefault();

                            console.log(e.target.className)
                            if (e.target.className == "sabado") {
                                document.getElementById('modelTitle31').innerHTML = 'Total das Faltas no Sabado'
                                for (var i = 1; i < table.rows.length; i++) {
                                    table.rows[i].onclick = function () {
                                        //rIndex = this.rowIndex;
                                        // mes333 += this.cells[1].innerHTML;
                                        // ano333 += this.cells[2].innerHTML;
                                        // colaboradorSelect333 += this.cells[3].innerHTML;
                                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                        let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
                                        const treinamentoText = document.getElementById('treinamentoText');
                                        const treinamentoOk = document.getElementById('treinamentoOk');
                                        $('#modelTreinamento5').modal('show');
                                        treinamentoOk.addEventListener('click', (e) => {
                                            console.log(treinamentoText.value)
                                            $('#modelTreinamento5').modal('hide');

                                            const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/ausencias/meses/sabado';
                                            let pora2 = new Request(urlLogIn3, {
                                                method: 'PATCH',
                                                headers: h,
                                                body: JSON.stringify({
                                                    "mes": `${this.cells[1].innerHTML}`,
                                                    "ano": `${this.cells[2].innerHTML}`,
                                                    "colaborador": `${this.cells[3].innerHTML}`,
                                                    "dias": `${treinamentoText.value}`
                                                })
                                            });
                                            fetch(pora2)
                                                .then(ress => ress.json())
                                                .then(data5 => {
                                                    $('#novAusencia').modal('hide');
                                                    var m = new Date();
                                                    var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                                    const usuarioLogs = localStorage.getItem('usuario');
                                                    const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                                    let logs = new Request(urlLogs, {
                                                        method: 'PATCH',
                                                        headers: h,
                                                        body: JSON.stringify({
                                                            "nomeFuncionario": `${usuarioLogs}`,
                                                            "historico": `O Colaborador ${usuarioLogs} fez alterações nas Ausências dos Funcionários`,
                                                            "data": `${dateString}`
                                                        })
                                                    });
                                                    fetch(logs)
                                                        .then(ress => ress.json())
                                                        .then(data5Logs => {
                                                            console.log(data5Logs)
                                                        });
                                                    ausencias()
                                                })

                                        });

                                    };
                                }
                            }
                        });
                        myAusencias.addEventListener('click', (e) => {
                            e.preventDefault();

                            console.log(e.target.className)
                            if (e.target.className == "domingo") {
                                document.getElementById('modelTitle31').innerHTML = 'Total das Faltas no Domingo'
                                for (var i = 1; i < table.rows.length; i++) {
                                    table.rows[i].onclick = function () {
                                        //rIndex = this.rowIndex;
                                        // mes333 += this.cells[1].innerHTML;
                                        // ano333 += this.cells[2].innerHTML;
                                        // colaboradorSelect333 += this.cells[3].innerHTML;
                                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                        let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
                                        const treinamentoText = document.getElementById('treinamentoText');
                                        const treinamentoOk = document.getElementById('treinamentoOk');
                                        $('#modelTreinamento5').modal('show');
                                        treinamentoOk.addEventListener('click', (e) => {
                                            console.log(treinamentoText.value)
                                            $('#modelTreinamento5').modal('hide');

                                            const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/ausencias/meses/domingo';
                                            let pora2 = new Request(urlLogIn3, {
                                                method: 'PATCH',
                                                headers: h,
                                                body: JSON.stringify({
                                                    "mes": `${this.cells[1].innerHTML}`,
                                                    "ano": `${this.cells[2].innerHTML}`,
                                                    "colaborador": `${this.cells[3].innerHTML}`,
                                                    "dias": `${treinamentoText.value}`
                                                })
                                            });
                                            fetch(pora2)
                                                .then(ress => ress.json())
                                                .then(data5 => {
                                                    $('#novAusencia').modal('hide');
                                                    var m = new Date();
                                                    var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                                    const usuarioLogs = localStorage.getItem('usuario');
                                                    const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                                    let logs = new Request(urlLogs, {
                                                        method: 'PATCH',
                                                        headers: h,
                                                        body: JSON.stringify({
                                                            "nomeFuncionario": `${usuarioLogs}`,
                                                            "historico": `O Colaborador ${usuarioLogs} fez alterações nas Ausências dos Funcionários`,
                                                            "data": `${dateString}`
                                                        })
                                                    });
                                                    fetch(logs)
                                                        .then(ress => ress.json())
                                                        .then(data5Logs => {
                                                            console.log(data5Logs)
                                                        });
                                                    ausencias()
                                                })

                                        });

                                    };
                                }
                            }
                        });
                        $(document).ready(function () {
                            $('#tabbb').DataTable({
                                "scrollX": true,
                                "scrollY": 500,
                            });
                        });

                    });
            }
            ausencias()

        }

        if (e.target.id == "jornad") {
            function jornad() {
                nada = '';
                nada = ` 
            <div class="animate__animated animate__pulse card3 text-center mr-4">
            <div class="row align-items-center">
                <div class="col-md-6">
                  <h1 class="mb-4 text-black"><span class="text-black">Cadastros</span></h1>
                  <h3 class="mb-4 text-black">Jornadas</h3>
                </div>
                <div class="col-md-6 d-none d-sm-none d-md-block">
                  <img src="pics/Stocks2.png" alt="tours pics" class="img-fluid">
                </div>
              </div>
            </div>
            <div class="text-center card4">
            <div class="row p-3">
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="func2">Funcionários</a>                                                     
                  </div>
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="altFunc"><h6>Alt. Funcionário</h6></a>
                </div>
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="recrSelecc"><h6>Rec. e Selecção</h6></a>
                </div>
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="jornad">Jornadas</a>
                </div>
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="ausencias">Ausências</a>
                </div>
        
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="financeiro">Financeiro</a>
                </div>
        
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="treinamentos">Treinamentos</a>
                </div>
              </div>
              </div>  
              
        
                      <div class="text-center card5">
                          <h1 class="h4 text-black mb-4">Cadastro de Jornadas de Trabalho</h1>
                          <button type="button" class="btn btn-outline-dark" id="addAusências">Adicionar Jornadas</button>                
                          <button type="button" class="btn btn-outline-dark ml-4" id="editAusências" disabled>Editar Jornadas</button>
                      </div>
        
                      <hr>
                      <div class="text-center cardTab animate__animated animate__pulse">
                      <table class="table m-2" id="tabbb">
                          <thead>
                          <tr class="bg-gradient-primary text-center text-black">
                            <th scope="col">Numero</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th>Colaborador</th>
                            <th>Jornada</th>
                            <th>Total Horas</th>
                            <th>Segunda
                                <table>
                                    <tr>
                                      <td>dias</td>
                                      <td>hrs</td>
                                      <td>min</td>
                                    </tr>
                                </table>
                            </th>
                            <th>Terça
                                <table>
                                    <tr>
                                      <td>dias</td>
                                      <td>hrs</td>
                                      <td>min</td>
                                    </tr>
                                </table>
                            </th>
                            <th>Quarta
                                <table>
                                    <tr>
                                      <td>dias</td>
                                      <td>hrs</td>
                                      <td>min</td>
                                    </tr>
                                </table>
                            </th>
                            <th>Quinta
                                <table>
                                    <tr>
                                      <td>dias</td>
                                      <td>hrs</td>
                                      <td>min</td>
                                    </tr>
                                </table>
                            </th>
                            <th>Sexta
                                <table>
                                    <tr>
                                      <td>dias</td>
                                      <td>hrs</td>
                                      <td>min</td>
                                    </tr>
                                </table>
                            </th>
                            <th>Sábado
                                <table>
                                    <tr>
                                      <td>dias</td>
                                      <td>hrs</td>
                                      <td>min</td>
                                    </tr>
                                </table>
                            </th>
                            <th>Domingo
                                <table>
                                    <tr>
                                      <td>dias</td>
                                      <td>hrs</td>
                                      <td>min</td>
                                    </tr>
                                </table>
                            </th>
                          </tr>
                        </thead>
                        <tbody id="myAusencias" class="tt text-center text-black">                     
                        </tbody>
                      </table>
                      </div>
        
                      <!-- Modal -->
                      <div class="modal fade" id="modelAusencias5" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered" role="document">
                          <div class="modal-content">
                              <div class="modal-header">
                              <h5 class="modal-title" id="modelTitle4"></h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                              </button>
                              </div>
                              <div class="modal-body" id="ausenciasLista">
                                  
                              </div>
                              <!-- <div class="modal-footer">
                              <button type="button" class="btn btn-primary" id="treinamentoOk">Confirmar</button>
                              </div> -->
                          </div>
                          </div>
                      </div>
                      <!-- Modal -->
                      <div class="modal fade" id="modelTreinamento5" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered" role="document">
                          <div class="modal-content">
                              <div class="modal-header">
                              <h5 class="modal-title" id="modelTitle31"></h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                              </button>
                              </div>
                              <div class="modal-body">
                                  <input type="number" class="form-control mb-4" id="treinamentoText" equired autofocus autocomplete="on">
                              </div>
                              <div class="modal-footer">
                              <button type="button" class="btn btn-primary" id="treinamentoOk">Confirmar</button>
                              </div>
                          </div>
                          </div>
                      </div>
                      <!-- Modal -->
                      <div class="modal fade" id="novAusencia" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered" role="document">
                          <div class="modal-content">
                              <div class="modal-header">
                              <h5 class="modal-title" id="novoTrin">Nova Ausência</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                              </button>
                              </div>
                              <div class="modal-body">
                                  <div class="text-center">
                                      <p>Todos os Campos com * são de caracter obrigatorio...</p>
                                  </div>                
                                  <p>Mes*</p>
                                  <select name="select" class="form-control mb-4" id="mes"></select>
                                  <p>Ano*</p>
                                  <input type="number" class="form-control mb-4" id="ano" placeholder="Ano" equired autofocus autocomplete="on">
                                  <p>Colaborador*</p>
                                  <select name="select" class="form-control mb-4" id="colaboradorSelect">                    
                                  </select>
                                  <p>Tipo de Jornada*</p>
                                  <select name="select" class="form-control mb-4" id="tipoAusenciaSelect">
                                  </select>
                              <div class="modal-footer">
                              <button type="button" class="btn btn-primary" id="novaAusenciaOk">Confirmar</button>
                              </div>
                          </div>
                          </div>
                      </div>
            `;

                contrudo.innerHTML = nada;
                const myAusencias = document.getElementById('myAusencias');
                const addAusências = document.getElementById('addAusências');
                const novaAusenciaOk = document.getElementById('novaAusenciaOk');
                const ausenciasLista = document.getElementById('ausenciasLista');
                const modelTitle4 = document.getElementById('modelTitle4');
                let colaboradors = '';
                let tipoAusenciass = '';
                let motivoss = '';
                let motivosss = '';
                let meses33 = '';
                let isto = "";
                let domingo = 0;
                let segunda = 0;
                let terca = 0;
                let quarta = 0;
                let quinta = 0;
                let sexta = 0;
                let sabado = 0;
                let terra = 0;
                const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2}`;

                fetch(url3)
                    .then(res => res.json())
                    .then(content => {
                        const data = content[0]['funcionarios'];
                        const mesesLista = [
                            'Janeiro',
                            'Fevereiro',
                            'Março',
                            'Abril',
                            'Maio',
                            'Junho',
                            'Julho',
                            'Agosto',
                            'Setembro',
                            'Outubro',
                            'Novembro',
                            'Dezembro'
                        ];
                        mesesLista.forEach(rec => {
                            meses33 += `<option>${rec}</option>`;
                        });
                        document.getElementById('mes').innerHTML = meses33;
                        for (var i = 0; i < data.length; i++) {
                            colaboradors += `<option>${data[i].nomeFuncionario}</option>`;
                            document.getElementById('colaboradorSelect').innerHTML = colaboradors;
                            const data2 = content[0]['funcionarios'][i]['jornadas'];

                            for (var j = 0; j < data2.length; j++) {
                                const data3 = content[0]['funcionarios'][i]['jornadas'][j]['meses'];
                                listaAno.push([data[i].nomeFuncionario, content[0]['funcionarios'][i]['jornadas'][j]['ano']]);
                                for (var k = 0; k < data3.length; k++) {
                                    tipoAusenciass = '';
                                    motivoss = '';
                                    terra += 1;
                                    const ress = content[0]['funcionarios'][i]['jornadas'][j]['meses'];

                                    const domingo2 = content[0]['funcionarios'][i]['jornadas'][j]['meses'][k]['semanas'][0]['domingo'];

                                    const segunda2 = content[0]['funcionarios'][i]['jornadas'][j]['meses'][k]['semanas'][0]['segunda'];

                                    const terca2 = content[0]['funcionarios'][i]['jornadas'][j]['meses'][k]['semanas'][0]['terca'];

                                    const quarta2 = content[0]['funcionarios'][i]['jornadas'][j]['meses'][k]['semanas'][0]['quarta'];

                                    const quinta2 = content[0]['funcionarios'][i]['jornadas'][j]['meses'][k]['semanas'][0]['quinta'];

                                    const sexta2 = content[0]['funcionarios'][i]['jornadas'][j]['meses'][k]['semanas'][0]['sexta'];

                                    const sabado2 = content[0]['funcionarios'][i]['jornadas'][j]['meses'][k]['semanas'][0]['sabado'];


                                    if (domingo2.length == 0) {
                                        domingo = 0;
                                    } else {
                                        domingo = content[0]['funcionarios'][i]['jornadas'][j]['meses'][k]['semanas'][0]['domingo'];

                                    }
                                    if (segunda2.length == 0) {
                                        segunda = 0;
                                    } else {
                                        segunda = content[0]['funcionarios'][i]['jornadas'][j]['meses'][k]['semanas'][0]['segunda'];

                                    }
                                    if (terca2.length == 0) {
                                        terca = 0;
                                    } else {
                                        terca = content[0]['funcionarios'][i]['jornadas'][j]['meses'][k]['semanas'][0]['terca'];

                                    }
                                    if (quarta2.length == 0) {
                                        quarta = 0;
                                    } else {
                                        quarta = content[0]['funcionarios'][i]['jornadas'][j]['meses'][k]['semanas'][0]['quarta'];

                                    }
                                    if (quinta2.length == 0) {
                                        quinta = 0;
                                    } else {
                                        quinta = content[0]['funcionarios'][i]['jornadas'][j]['meses'][k]['semanas'][0]['quinta'];

                                    }
                                    if (sexta2.length == 0) {
                                        sexta = 0;
                                    } else {
                                        sexta = content[0]['funcionarios'][i]['jornadas'][j]['meses'][k]['semanas'][0]['sexta'];

                                    }
                                    if (sabado2.length == 0) {
                                        sabado = 0;
                                    } else {
                                        sabado = content[0]['funcionarios'][i]['jornadas'][j]['meses'][k]['semanas'][0]['sabado'];

                                    }

                                    var newRow = myAusencias.insertRow();
                                    var newCell1 = newRow.insertCell(0);
                                    var newCell2 = newRow.insertCell(1);
                                    var newCell3 = newRow.insertCell(2);
                                    var newCell4 = newRow.insertCell(3);
                                    var newCell5 = newRow.insertCell(4);
                                    var newCell14 = newRow.insertCell(5);
                                    var newCell7 = newRow.insertCell(6);
                                    var newCell8 = newRow.insertCell(7);
                                    var newCell9 = newRow.insertCell(8);
                                    var newCell10 = newRow.insertCell(9);
                                    var newCell11 = newRow.insertCell(10);
                                    var newCell12 = newRow.insertCell(11);
                                    var newCell13 = newRow.insertCell(12);
                                    const horasMes = parseInt(segunda) * 8 + parseInt(terca) * 8 + parseInt(quarta) * 8 +
                                        parseInt(quinta) * 8 + parseInt(sexta) * 8 + parseInt(sabado) * 8 + parseInt(domingo) * 8;
                                    motivosss = `<div class="motivo" id=${ress[k]._id}>${ress[k].motivo}</div>`;
                                    newCell1.innerHTML = terra;
                                    newCell2.innerHTML = ress[k].mes;
                                    newCell14.innerHTML = horasMes;
                                    newCell3.innerHTML = content[0]['funcionarios'][i]['jornadas'][j]['ano'];
                                    newCell4.innerHTML = content[0]['funcionarios'][i]['nomeFuncionario'];
                                    newCell5.innerHTML = `<div class="tipoAusencia" id=${ress[k]._id}>${ress[k].tipoJornada}</div>`;

                                    newCell7.innerHTML = `<table>
                        <tr>
                          <td class="segunda" id=${ress[k]._id}>${segunda}</td>
                          <td id="segunda-horas">${parseInt(segunda) * 8}</td>
                          <td id="segunda-min">0</td>
                        </tr>
                        </table>`;
                                    newCell8.innerHTML = `<table>
                        <tr>
                          <td class="terca" id=${ress[k]._id}>${terca}</td>
                          <td id="terca-horas">${parseInt(terca) * 8}</td>
                          <td id="terca-min">0</td>
                        </tr>
                        </table>`;
                                    newCell9.innerHTML = `<table>
                        <tr>
                          <td class="quarta" id=${ress[k]._id}>${quarta}</td>
                          <td id="quarta-horas">${parseInt(quarta) * 8}</td>
                          <td id="quarta-min">0</td>
                        </tr>
                        </table>`;
                                    newCell10.innerHTML = `<table>
                        <tr>
                          <td class="quinta" id=${ress[k]._id}">${quinta}</td>
                          <td id="quinta-horas">${parseInt(quinta) * 8}</td>
                          <td id="quinta-min">0</td>
                        </tr>
                        </table>`;
                                    newCell11.innerHTML = `<table>
                        <tr>
                          <td class="sexta" id=${ress[k]._id}>${sexta}</td>
                          <td id="sexta-horas">${parseInt(sexta) * 8}</td>
                          <td id="sexta-min">0</td>
                        </tr>
                        </table>`;
                                    newCell12.innerHTML = `<table>
                        <tr>
                          <td class="sabado" id=${ress[k]._id}>${sabado}</td>
                          <td id="sabado-horas">${parseInt(sabado) * 8}</td>
                          <td id="sabado-min">0</td>
                        </tr>
                        </table>`;
                                    newCell13.innerHTML = `<table>
                        <tr>
                          <td class="domingo" id=${ress[k]._id}>${domingo}</td>
                          <td id="domingo-horas">${parseInt(domingo) * 8}</td>
                          <td id="domingo-min">0</td>
                        </tr>
                        </table>`;


                                }

                            }

                        }


                        // Post 
                        novaAusenciaOk.addEventListener('click', (e) => {
                            e.preventDefault();
                            const mes33 = document.getElementById('mes');
                            const ano33 = document.getElementById('ano');
                            const colaboradorSelect33 = document.getElementById('colaboradorSelect');
                            const tipoAusenciaSelect33 = document.getElementById('tipoAusenciaSelect');
                            const motivoAusenciaSelect33 = document.getElementById('motivoAusenciaSelect');
                            const segunda33 = document.getElementById('segunda');
                            const terca33 = document.getElementById('terca');
                            const quarta33 = document.getElementById('quarta');
                            const quinta33 = document.getElementById('quinta');
                            const sexta33 = document.getElementById('sexta');
                            const sabado33 = document.getElementById('sabado');
                            const domingo33 = document.getElementById('domingo');
                            let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
                            let fai = JSON.stringify(token);
                            // h.append('authorization', `Bearer ${token}`)

                            for (var j = 0; j < listaAno.length; j++) {
                                result = listaAno.filter(function (item) {
                                    return item[0] === `${colaboradorSelect33.value}`;
                                }).
                                    map(function (a) {
                                        return a[1];
                                    });
                                listaAno2.push(result);
                            }
                            console.log(listaAno2);
                            if (ano33.value) {
                                console.log(listaAno2[0].includes(ano33.value));
                                if (listaAno2[0].includes(ano33.value)) {
                                    $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                    console.log("1")
                                    const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/jornadas/meses';
                                    let pora2 = new Request(urlLogIn3, {
                                        method: 'PATCH',
                                        headers: h,
                                        body: JSON.stringify({
                                            "mes": `${mes33.value}`,
                                            "ano": `${ano33.value}`,
                                            "colaborador": `${colaboradorSelect33.value}`,
                                            "tipoJornada": `${tipoAusenciaSelect33.value}`
                                        })
                                    });
                                    fetch(pora2)
                                        .then(ress => ress.json())
                                        .then(data5 => {
                                            const urlLogIn4 = 'https://stocksmanager1.herokuapp.com/jornadas/novaSemana';
                                            let pora3 = new Request(urlLogIn4, {
                                                method: 'PATCH',
                                                headers: h,
                                                body: JSON.stringify({
                                                    "mes": `${mes33.value}`,
                                                    "ano": `${ano33.value}`,
                                                    "colaborador": `${colaboradorSelect33.value}`,
                                                    "tipoJornada": `${tipoAusenciaSelect33.value}`
                                                })
                                            });
                                            fetch(pora3)
                                                .then(ress => ress.json())
                                                .then(data6 => {
                                                    console.log(data6)
                                                    $('#novAusencia').modal('hide');
                                                    var m = new Date();
                                                    var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                                    const usuarioLogs = localStorage.getItem('usuario');
                                                    const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                                    let logs = new Request(urlLogs, {
                                                        method: 'PATCH',
                                                        headers: h,
                                                        body: JSON.stringify({
                                                            "nomeFuncionario": `${usuarioLogs}`,
                                                            "historico": `O Colaborador ${usuarioLogs} fez alterações nas jornadas de trabalho`,
                                                            "data": `${dateString}`
                                                        })
                                                    });
                                                    fetch(logs)
                                                        .then(ress => ress.json())
                                                        .then(data5Logs => {
                                                            console.log(data5Logs)
                                                        });
                                                    jornad()
                                                })
                                        })
                                } else {
                                    console.log('2')
                                    $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                    const urlLogIn2 = 'https://stocksmanager1.herokuapp.com/jornadas';
                                    let pora = new Request(urlLogIn2, {
                                        method: 'PATCH',
                                        headers: h,
                                        body: JSON.stringify({
                                            "mes": `${mes33.value}`,
                                            "ano": `${ano33.value}`,
                                            "colaborador": `${colaboradorSelect33.value}`,
                                            "tipoJornada": `${tipoAusenciaSelect33.value}`
                                        })
                                    });
                                    fetch(pora)
                                        .then(ress1 => ress1.json())
                                        .then(data4 => {
                                            const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/jornadas/meses';
                                            let pora2 = new Request(urlLogIn3, {
                                                method: 'PATCH',
                                                headers: h,
                                                body: JSON.stringify({
                                                    "mes": `${mes33.value}`,
                                                    "ano": `${ano33.value}`,
                                                    "colaborador": `${colaboradorSelect33.value}`,
                                                    "tipoJornada": `${tipoAusenciaSelect33.value}`
                                                })
                                            });
                                            fetch(pora2)
                                                .then(ress => ress.json())
                                                .then(data5 => {
                                                    const urlLogIn4 = 'https://stocksmanager1.herokuapp.com/jornadas/novaSemana';
                                                    let pora3 = new Request(urlLogIn4, {
                                                        method: 'PATCH',
                                                        headers: h,
                                                        body: JSON.stringify({
                                                            "mes": `${mes33.value}`,
                                                            "ano": `${ano33.value}`,
                                                            "colaborador": `${colaboradorSelect33.value}`,
                                                            "tipoJornada": `${tipoAusenciaSelect33.value}`
                                                        })
                                                    });
                                                    fetch(pora3)
                                                        .then(ress => ress.json())
                                                        .then(data6 => {
                                                            console.log(data6)
                                                            $('#novAusencia').modal('hide');
                                                            var m = new Date();
                                                            var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                                            const usuarioLogs = localStorage.getItem('usuario');
                                                            const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                                            let logs = new Request(urlLogs, {
                                                                method: 'PATCH',
                                                                headers: h,
                                                                body: JSON.stringify({
                                                                    "nomeFuncionario": `${usuarioLogs}`,
                                                                    "historico": `O Colaborador ${usuarioLogs} fez alterações nas jornadas de trabalho`,
                                                                    "data": `${dateString}`
                                                                })
                                                            });
                                                            fetch(logs)
                                                                .then(ress => ress.json())
                                                                .then(data5Logs => {
                                                                    console.log(data5Logs)
                                                                });
                                                            jornad()
                                                        })
                                                })
                                        })
                                }

                            } else {
                                alert('erro')
                            }
                            if (segunda33.value) {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/jornadas/meses/segunda';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "mes": `${mes33.value}`,
                                        "ano": `${ano33.value}`,
                                        "colaborador": `${colaboradorSelect33.value}`,
                                        "dias": `${segunda33.value}`
                                    })
                                });
                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        var m = new Date();
                                        var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                        const usuarioLogs = localStorage.getItem('usuario');
                                        const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                        let logs = new Request(urlLogs, {
                                            method: 'PATCH',
                                            headers: h,
                                            body: JSON.stringify({
                                                "nomeFuncionario": `${usuarioLogs}`,
                                                "historico": `O Colaborador ${usuarioLogs} fez alterações nas jornadas de trabalho`,
                                                "data": `${dateString}`
                                            })
                                        });
                                        fetch(logs)
                                            .then(ress => ress.json())
                                            .then(data5Logs => {
                                                console.log(data5Logs)
                                            });
                                        jornad()
                                    })

                            }
                            if (terca33.value) {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/jornadas/meses/terca';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "mes": `${mes33.value}`,
                                        "ano": `${ano33.value}`,
                                        "colaborador": `${colaboradorSelect33.value}`,
                                        "dias": `${terca33.value}`
                                    })
                                });
                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        var m = new Date();
                                        var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                        const usuarioLogs = localStorage.getItem('usuario');
                                        const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                        let logs = new Request(urlLogs, {
                                            method: 'PATCH',
                                            headers: h,
                                            body: JSON.stringify({
                                                "nomeFuncionario": `${usuarioLogs}`,
                                                "historico": `O Colaborador ${usuarioLogs} fez alterações nas jornadas de trabalho`,
                                                "data": `${dateString}`
                                            })
                                        });
                                        fetch(logs)
                                            .then(ress => ress.json())
                                            .then(data5Logs => {
                                                console.log(data5Logs)
                                            });
                                        jornad()
                                    })

                            }
                            if (quarta33.value) {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/jornadas/meses/quarta';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "mes": `${mes33.value}`,
                                        "ano": `${ano33.value}`,
                                        "colaborador": `${colaboradorSelect33.value}`,
                                        "dias": `${quarta33.value}`
                                    })
                                });
                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        var m = new Date();
                                        var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                        const usuarioLogs = localStorage.getItem('usuario');
                                        const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                        let logs = new Request(urlLogs, {
                                            method: 'PATCH',
                                            headers: h,
                                            body: JSON.stringify({
                                                "nomeFuncionario": `${usuarioLogs}`,
                                                "historico": `O Colaborador ${usuarioLogs} fez alterações nas jornadas de trabalho`,
                                                "data": `${dateString}`
                                            })
                                        });
                                        fetch(logs)
                                            .then(ress => ress.json())
                                            .then(data5Logs => {
                                                console.log(data5Logs)
                                            });
                                        jornad()
                                    })

                            }
                            if (quinta33.value) {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/jornadas/meses/quinta';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "mes": `${mes33.value}`,
                                        "ano": `${ano33.value}`,
                                        "colaborador": `${colaboradorSelect33.value}`,
                                        "dias": `${quinta33.value}`
                                    })
                                });
                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        var m = new Date();
                                        var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                        const usuarioLogs = localStorage.getItem('usuario');
                                        const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                        let logs = new Request(urlLogs, {
                                            method: 'PATCH',
                                            headers: h,
                                            body: JSON.stringify({
                                                "nomeFuncionario": `${usuarioLogs}`,
                                                "historico": `O Colaborador ${usuarioLogs} fez alterações nas jornadas de trabalho`,
                                                "data": `${dateString}`
                                            })
                                        });
                                        fetch(logs)
                                            .then(ress => ress.json())
                                            .then(data5Logs => {
                                                console.log(data5Logs)
                                            });
                                        jornad()
                                    })

                            }
                            if (sexta33.value) {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/jornadas/meses/sexta';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "mes": `${mes33.value}`,
                                        "ano": `${ano33.value}`,
                                        "colaborador": `${colaboradorSelect33.value}`,
                                        "dias": `${sexta33.value}`
                                    })
                                });
                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        var m = new Date();
                                        var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                        const usuarioLogs = localStorage.getItem('usuario');
                                        const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                        let logs = new Request(urlLogs, {
                                            method: 'PATCH',
                                            headers: h,
                                            body: JSON.stringify({
                                                "nomeFuncionario": `${usuarioLogs}`,
                                                "historico": `O Colaborador ${usuarioLogs} fez alterações nas jornadas de trabalho`,
                                                "data": `${dateString}`
                                            })
                                        });
                                        fetch(logs)
                                            .then(ress => ress.json())
                                            .then(data5Logs => {
                                                console.log(data5Logs)
                                            });
                                        jornad()
                                    })

                            }
                            if (sabado33.value) {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/jornadas/meses/sabado';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "mes": `${mes33.value}`,
                                        "ano": `${ano33.value}`,
                                        "colaborador": `${colaboradorSelect33.value}`,
                                        "dias": `${sabado33.value}`
                                    })
                                });
                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        var m = new Date();
                                        var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                        const usuarioLogs = localStorage.getItem('usuario');
                                        const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                        let logs = new Request(urlLogs, {
                                            method: 'PATCH',
                                            headers: h,
                                            body: JSON.stringify({
                                                "nomeFuncionario": `${usuarioLogs}`,
                                                "historico": `O Colaborador ${usuarioLogs} fez alterações nas jornadas de trabalho`,
                                                "data": `${dateString}`
                                            })
                                        });
                                        fetch(logs)
                                            .then(ress => ress.json())
                                            .then(data5Logs => {
                                                console.log(data5Logs)
                                            });
                                        jornad()
                                    })

                            }
                            if (domingo33.value) {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/jornadas/meses/domingo';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "mes": `${mes33.value}`,
                                        "ano": `${ano33.value}`,
                                        "colaborador": `${colaboradorSelect33.value}`,
                                        "dias": `${domingo33.value}`
                                    })
                                });
                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        var m = new Date();
                                        var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                        const usuarioLogs = localStorage.getItem('usuario');
                                        const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                        let logs = new Request(urlLogs, {
                                            method: 'PATCH',
                                            headers: h,
                                            body: JSON.stringify({
                                                "nomeFuncionario": `${usuarioLogs}`,
                                                "historico": `O Colaborador ${usuarioLogs} fez alterações nas jornadas de trabalho`,
                                                "data": `${dateString}`
                                            })
                                        });
                                        fetch(logs)
                                            .then(ress => ress.json())
                                            .then(data5Logs => {
                                                console.log(data5Logs)
                                            });
                                        jornad()
                                    })

                            }


                        })
                        const select = document.getElementById('tipoAusenciaSelect');
                        addAusências.addEventListener('click', (e) => {
                            e.preventDefault();
                            $('#novAusencia').modal('show');
                            tiposJornadasTrabalhow.forEach(rec => {
                                tipoAusenciass += `<option>${rec}</option>`;
                            });
                            document.getElementById('tipoAusenciaSelect').innerHTML = tipoAusenciass;
                            // let ti = '';

                            // ti = select.options[select.selectedIndex].innerHTML;
                            // console.log(ti)
                            // if(ti === 'Ausência Planejada'){
                            //     motivoss = '';                    
                            //     ausenciaPlanejadaw.forEach(rec => {
                            //         motivoss += `<option>${rec}</option>`;
                            //     });
                            //     document.getElementById('motivoAusenciaSelect').innerHTML = motivoss;
                            // }else{
                            //     motivoss = '';
                            //     ausenciaNaoPlanejadaw.forEach(rec => {
                            //         motivoss += `<option>${rec}</option>`;
                            //     });
                            //     document.getElementById('motivoAusenciaSelect').innerHTML = motivoss;
                            // }
                        });

                        select.addEventListener('change', (event) => {
                            let tis = event.target.value;
                            console.log(tis);
                            ti2 = select.options[select.selectedIndex].innerHTML;
                            if (ti2 === 'Ausência Planejada') {
                                motivoss = '';
                                ausenciaPlanejadaw.forEach(rec => {
                                    motivoss += `<option>${rec}</option>`;
                                });
                                document.getElementById('motivoAusenciaSelect').innerHTML = motivoss;
                            } else {
                                motivoss = '';
                                ausenciaNaoPlanejadaw.forEach(rec => {
                                    motivoss += `<option>${rec}</option>`;
                                });
                                document.getElementById('motivoAusenciaSelect').innerHTML = motivoss;
                            }
                        })
                        var table = document.getElementById('tabbb');


                        myAusencias.addEventListener('click', (e) => {
                            e.preventDefault();

                            if (e.target.className == "segunda") {
                                for (var i = 1; i < table.rows.length; i++) {
                                    table.rows[i].onclick = function () {
                                        //rIndex = this.rowIndex;
                                        // mes333 += this.cells[1].innerHTML;
                                        // ano333 += this.cells[2].innerHTML;
                                        // colaboradorSelect333 += this.cells[3].innerHTML;
                                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                        let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
                                        document.getElementById('modelTitle31').innerHTML = 'Total das Jornadas na Segunda';
                                        const treinamentoText = document.getElementById('treinamentoText');
                                        const treinamentoOk = document.getElementById('treinamentoOk');
                                        $('#modelTreinamento5').modal('show');
                                        treinamentoOk.addEventListener('click', (e) => {
                                            console.log(treinamentoText.value)
                                            $('#modelTreinamento5').modal('hide');

                                            const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/jornadas/meses/segunda';
                                            let pora2 = new Request(urlLogIn3, {
                                                method: 'PATCH',
                                                headers: h,
                                                body: JSON.stringify({
                                                    "mes": `${this.cells[1].innerHTML}`,
                                                    "ano": `${this.cells[2].innerHTML}`,
                                                    "colaborador": `${this.cells[3].innerHTML}`,
                                                    "dias": `${treinamentoText.value}`
                                                })
                                            });
                                            fetch(pora2)
                                                .then(ress => ress.json())
                                                .then(data5 => {
                                                    var m = new Date();
                                                    var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                                    const usuarioLogs = localStorage.getItem('usuario');
                                                    const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                                    let logs = new Request(urlLogs, {
                                                        method: 'PATCH',
                                                        headers: h,
                                                        body: JSON.stringify({
                                                            "nomeFuncionario": `${usuarioLogs}`,
                                                            "historico": `O Colaborador ${usuarioLogs} fez alterações nas jornadas de trabalho`,
                                                            "data": `${dateString}`
                                                        })
                                                    });
                                                    fetch(logs)
                                                        .then(ress => ress.json())
                                                        .then(data5Logs => {
                                                            console.log(data5Logs)
                                                        });
                                                    jornad()
                                                })

                                        });

                                    };
                                }


                            }
                            if (e.target.className == "tipoAusencia") {
                                colabora = '';
                                isto = "";
                                titulo = '';
                                isto = e.target.innerHTML
                                console.log("==>" + e.target.innerHTML)
                                tiposJornadasTrabalhow.forEach(rec => {
                                    colabora += `<div class="text-center">
                                <h5 class="text-gray-900 mb-4">${rec}</h5>
                            </div>`;
                                });
                                titulo = 'Tipo da Jornada';
                                ausenciasLista.innerHTML = colabora;
                                modelTitle4.innerHTML = titulo;
                                $('#modelAusencias5').modal('show');
                            }
                            if (e.target.className == "terca") {
                                document.getElementById('modelTitle31').innerHTML = 'Total das Jornadas na Terca'
                                for (var i = 1; i < table.rows.length; i++) {
                                    table.rows[i].onclick = function () {
                                        //rIndex = this.rowIndex;
                                        // mes333 += this.cells[1].innerHTML;
                                        // ano333 += this.cells[2].innerHTML;
                                        // colaboradorSelect333 += this.cells[3].innerHTML;
                                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                        let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
                                        const treinamentoText = document.getElementById('treinamentoText');
                                        const treinamentoOk = document.getElementById('treinamentoOk');
                                        $('#modelTreinamento5').modal('show');
                                        treinamentoOk.addEventListener('click', (e) => {
                                            console.log(treinamentoText.value)
                                            $('#modelTreinamento5').modal('hide');

                                            const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/jornadas/meses/terca';
                                            let pora2 = new Request(urlLogIn3, {
                                                method: 'PATCH',
                                                headers: h,
                                                body: JSON.stringify({
                                                    "mes": `${this.cells[1].innerHTML}`,
                                                    "ano": `${this.cells[2].innerHTML}`,
                                                    "colaborador": `${this.cells[3].innerHTML}`,
                                                    "dias": `${treinamentoText.value}`
                                                })
                                            });
                                            fetch(pora2)
                                                .then(ress => ress.json())
                                                .then(data5 => {
                                                    var m = new Date();
                                                    var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                                    const usuarioLogs = localStorage.getItem('usuario');
                                                    const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                                    let logs = new Request(urlLogs, {
                                                        method: 'PATCH',
                                                        headers: h,
                                                        body: JSON.stringify({
                                                            "nomeFuncionario": `${usuarioLogs}`,
                                                            "historico": `O Colaborador ${usuarioLogs} fez alterações nas jornadas de trabalho`,
                                                            "data": `${dateString}`
                                                        })
                                                    });
                                                    fetch(logs)
                                                        .then(ress => ress.json())
                                                        .then(data5Logs => {
                                                            console.log(data5Logs)
                                                        });
                                                    jornad()
                                                })

                                        });

                                    };
                                }
                            }
                            if (e.target.className == "quarta") {
                                document.getElementById('modelTitle31').innerHTML = 'Total das Jornadas na Quarta'

                                for (var i = 1; i < table.rows.length; i++) {
                                    table.rows[i].onclick = function () {
                                        //rIndex = this.rowIndex;
                                        // mes333 += this.cells[1].innerHTML;
                                        // ano333 += this.cells[2].innerHTML;
                                        // colaboradorSelect333 += this.cells[3].innerHTML;
                                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                        let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
                                        const treinamentoText = document.getElementById('treinamentoText');
                                        const treinamentoOk = document.getElementById('treinamentoOk');
                                        $('#modelTreinamento5').modal('show');
                                        treinamentoOk.addEventListener('click', (e) => {
                                            console.log(treinamentoText.value)
                                            $('#modelTreinamento5').modal('hide');

                                            const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/jornadas/meses/quarta';
                                            let pora2 = new Request(urlLogIn3, {
                                                method: 'PATCH',
                                                headers: h,
                                                body: JSON.stringify({
                                                    "mes": `${this.cells[1].innerHTML}`,
                                                    "ano": `${this.cells[2].innerHTML}`,
                                                    "colaborador": `${this.cells[3].innerHTML}`,
                                                    "dias": `${treinamentoText.value}`
                                                })
                                            });
                                            fetch(pora2)
                                                .then(ress => ress.json())
                                                .then(data5 => {
                                                    var m = new Date();
                                                    var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                                    const usuarioLogs = localStorage.getItem('usuario');
                                                    const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                                    let logs = new Request(urlLogs, {
                                                        method: 'PATCH',
                                                        headers: h,
                                                        body: JSON.stringify({
                                                            "nomeFuncionario": `${usuarioLogs}`,
                                                            "historico": `O Colaborador ${usuarioLogs} fez alterações nas jornadas de trabalho`,
                                                            "data": `${dateString}`
                                                        })
                                                    });
                                                    fetch(logs)
                                                        .then(ress => ress.json())
                                                        .then(data5Logs => {
                                                            console.log(data5Logs)
                                                        });
                                                    jornad()
                                                })

                                        });

                                    };
                                }
                            }
                            if (e.target.className == "quinta") {
                                document.getElementById('modelTitle31').innerHTML = 'Total das Jornadas na Quinta'
                                for (var i = 1; i < table.rows.length; i++) {
                                    table.rows[i].onclick = function () {
                                        //rIndex = this.rowIndex;
                                        // mes333 += this.cells[1].innerHTML;
                                        // ano333 += this.cells[2].innerHTML;
                                        // colaboradorSelect333 += this.cells[3].innerHTML;
                                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                        let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
                                        const treinamentoText = document.getElementById('treinamentoText');
                                        const treinamentoOk = document.getElementById('treinamentoOk');
                                        $('#modelTreinamento5').modal('show');
                                        treinamentoOk.addEventListener('click', (e) => {
                                            console.log(treinamentoText.value)
                                            $('#modelTreinamento5').modal('hide');

                                            const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/jornadas/meses/quinta';
                                            let pora2 = new Request(urlLogIn3, {
                                                method: 'PATCH',
                                                headers: h,
                                                body: JSON.stringify({
                                                    "mes": `${this.cells[1].innerHTML}`,
                                                    "ano": `${this.cells[2].innerHTML}`,
                                                    "colaborador": `${this.cells[3].innerHTML}`,
                                                    "dias": `${treinamentoText.value}`
                                                })
                                            });
                                            fetch(pora2)
                                                .then(ress => ress.json())
                                                .then(data5 => {
                                                    var m = new Date();
                                                    var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                                    const usuarioLogs = localStorage.getItem('usuario');
                                                    const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                                    let logs = new Request(urlLogs, {
                                                        method: 'PATCH',
                                                        headers: h,
                                                        body: JSON.stringify({
                                                            "nomeFuncionario": `${usuarioLogs}`,
                                                            "historico": `O Colaborador ${usuarioLogs} fez alterações nas jornadas de trabalho`,
                                                            "data": `${dateString}`
                                                        })
                                                    });
                                                    fetch(logs)
                                                        .then(ress => ress.json())
                                                        .then(data5Logs => {
                                                            console.log(data5Logs)
                                                        });
                                                    jornad()
                                                })

                                        });

                                    };
                                }
                            }
                            if (e.target.className == "sexta") {
                                document.getElementById('modelTitle31').innerHTML = 'Total das Jornadas na Sexta'
                                for (var i = 1; i < table.rows.length; i++) {
                                    table.rows[i].onclick = function () {
                                        //rIndex = this.rowIndex;
                                        // mes333 += this.cells[1].innerHTML;
                                        // ano333 += this.cells[2].innerHTML;
                                        // colaboradorSelect333 += this.cells[3].innerHTML;
                                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                        let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
                                        const treinamentoText = document.getElementById('treinamentoText');
                                        const treinamentoOk = document.getElementById('treinamentoOk');
                                        $('#modelTreinamento5').modal('show');
                                        treinamentoOk.addEventListener('click', (e) => {
                                            console.log(treinamentoText.value)
                                            $('#modelTreinamento5').modal('hide');

                                            const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/jornadas/meses/sexta';
                                            let pora2 = new Request(urlLogIn3, {
                                                method: 'PATCH',
                                                headers: h,
                                                body: JSON.stringify({
                                                    "mes": `${this.cells[1].innerHTML}`,
                                                    "ano": `${this.cells[2].innerHTML}`,
                                                    "colaborador": `${this.cells[3].innerHTML}`,
                                                    "dias": `${treinamentoText.value}`
                                                })
                                            });
                                            fetch(pora2)
                                                .then(ress => ress.json())
                                                .then(data5 => {
                                                    var m = new Date();
                                                    var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                                    const usuarioLogs = localStorage.getItem('usuario');
                                                    const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                                    let logs = new Request(urlLogs, {
                                                        method: 'PATCH',
                                                        headers: h,
                                                        body: JSON.stringify({
                                                            "nomeFuncionario": `${usuarioLogs}`,
                                                            "historico": `O Colaborador ${usuarioLogs} fez alterações nas jornadas de trabalho`,
                                                            "data": `${dateString}`
                                                        })
                                                    });
                                                    fetch(logs)
                                                        .then(ress => ress.json())
                                                        .then(data5Logs => {
                                                            console.log(data5Logs)
                                                        });
                                                    jornad()
                                                })

                                        });

                                    };
                                }
                            }
                            if (e.target.className == "sabado") {
                                document.getElementById('modelTitle31').innerHTML = 'Total das Jornadas no Sabado'
                                for (var i = 1; i < table.rows.length; i++) {
                                    table.rows[i].onclick = function () {
                                        //rIndex = this.rowIndex;
                                        // mes333 += this.cells[1].innerHTML;
                                        // ano333 += this.cells[2].innerHTML;
                                        // colaboradorSelect333 += this.cells[3].innerHTML;
                                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                        let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
                                        const treinamentoText = document.getElementById('treinamentoText');
                                        const treinamentoOk = document.getElementById('treinamentoOk');
                                        $('#modelTreinamento5').modal('show');
                                        treinamentoOk.addEventListener('click', (e) => {
                                            console.log(treinamentoText.value)
                                            $('#modelTreinamento5').modal('hide');

                                            const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/jornadas/meses/sabado';
                                            let pora2 = new Request(urlLogIn3, {
                                                method: 'PATCH',
                                                headers: h,
                                                body: JSON.stringify({
                                                    "mes": `${this.cells[1].innerHTML}`,
                                                    "ano": `${this.cells[2].innerHTML}`,
                                                    "colaborador": `${this.cells[3].innerHTML}`,
                                                    "dias": `${treinamentoText.value}`
                                                })
                                            });
                                            fetch(pora2)
                                                .then(ress => ress.json())
                                                .then(data5 => {
                                                    var m = new Date();
                                                    var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                                    const usuarioLogs = localStorage.getItem('usuario');
                                                    const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                                    let logs = new Request(urlLogs, {
                                                        method: 'PATCH',
                                                        headers: h,
                                                        body: JSON.stringify({
                                                            "nomeFuncionario": `${usuarioLogs}`,
                                                            "historico": `O Colaborador ${usuarioLogs} fez alterações nas jornadas de trabalho`,
                                                            "data": `${dateString}`
                                                        })
                                                    });
                                                    fetch(logs)
                                                        .then(ress => ress.json())
                                                        .then(data5Logs => {
                                                            console.log(data5Logs)
                                                        });
                                                    jornad()
                                                })

                                        });

                                    };
                                }
                            }
                            if (e.target.className == "domingo") {
                                document.getElementById('modelTitle31').innerHTML = 'Total das Jornadas no Domingo'
                                for (var i = 1; i < table.rows.length; i++) {
                                    table.rows[i].onclick = function () {
                                        //rIndex = this.rowIndex;
                                        // mes333 += this.cells[1].innerHTML;
                                        // ano333 += this.cells[2].innerHTML;
                                        // colaboradorSelect333 += this.cells[3].innerHTML;
                                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                        let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
                                        const treinamentoText = document.getElementById('treinamentoText');
                                        const treinamentoOk = document.getElementById('treinamentoOk');
                                        $('#modelTreinamento5').modal('show');
                                        treinamentoOk.addEventListener('click', (e) => {
                                            console.log(treinamentoText.value)
                                            $('#modelTreinamento5').modal('hide');

                                            const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/jornadas/meses/domingo';
                                            let pora2 = new Request(urlLogIn3, {
                                                method: 'PATCH',
                                                headers: h,
                                                body: JSON.stringify({
                                                    "mes": `${this.cells[1].innerHTML}`,
                                                    "ano": `${this.cells[2].innerHTML}`,
                                                    "colaborador": `${this.cells[3].innerHTML}`,
                                                    "dias": `${treinamentoText.value}`
                                                })
                                            });
                                            fetch(pora2)
                                                .then(ress => ress.json())
                                                .then(data5 => {
                                                    var m = new Date();
                                                    var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                                    const usuarioLogs = localStorage.getItem('usuario');
                                                    const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                                    let logs = new Request(urlLogs, {
                                                        method: 'PATCH',
                                                        headers: h,
                                                        body: JSON.stringify({
                                                            "nomeFuncionario": `${usuarioLogs}`,
                                                            "historico": `O Colaborador ${usuarioLogs} fez alterações nas jornadas de trabalho`,
                                                            "data": `${dateString}`
                                                        })
                                                    });
                                                    fetch(logs)
                                                        .then(ress => ress.json())
                                                        .then(data5Logs => {
                                                            console.log(data5Logs)
                                                        });
                                                    jornad()
                                                })

                                        });

                                    };
                                }
                            }
                        });

                        $(document).ready(function () {
                            $('#tabbb').DataTable({
                                "scrollX": true,
                                "scrollY": 500,
                            });
                        });

                    });
            }
            jornad();

        }

        if (e.target.id == "financeiro") {
            function financeiro() {
                nada = '';
                nada = ` 
            <div class="animate__animated animate__pulse card3 text-center mr-4">
            <div class="row align-items-center">
                <div class="col-md-6">
                  <h1 class="mb-4 text-black"><span class="text-black">Cadastros</span></h1>
                  <h3 class="mb-4 text-black">Informações Financeiras</h3>
                </div>
                <div class="col-md-6 d-none d-sm-none d-md-block">
                  <img src="pics/Stocks2.png" alt="tours pics" class="img-fluid">
                </div>
              </div>
            </div>
            <div class="text-center card4">
            <div class="row p-3">
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="func2">Funcionários</a>                                                     
                  </div>
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="altFunc"><h6>Alt. Funcionário</h6></a>
                </div>
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="recrSelecc"><h6>Rec. e Selecção</h6></a>
                </div>
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="jornad">Jornadas</a>
                </div>
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="ausencias">Ausências</a>
                </div>
        
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="financeiro">Financeiro</a>
                </div>
        
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="treinamentos">Treinamentos</a>
                </div>
              </div>
              </div>
        
              
        
                      <div class="text-center card5">
                          <h1 class="h4 text-black mb-4">Cadastro de Informações Financeiras</h1>
                          <button type="button" class="btn btn-outline-dark" id="addAusências">Adicionar Informação</button>                
                          <button type="button" class="btn btn-outline-dark ml-4" id="editAusências" disabled>Editar Informação</button>
                      
                      </div>
        
                      <hr>
                      <div class="text-center cardTab cardTab animate__animated animate__pulse">
                      <table class="table m-2" id="tabbb">
                      <thead>
                      <tr class="bg-gradient-primary text-center text-black">
                        <td scope="col">Numero</td>
                        <td>Mês</td>
                        <td>Ano</td>
                        <td>Receita Bruta Total</td>
                        <td>Salario</td>
                        <td>Pro-labore</td>
                        <td>Ferias</td>
                        <td>Horas Extras</td>
                        <td>13º</td>
                        <td>Licencas</td>
                        <td>Encargos</td>
                        <td>Outros</td>
                        <td>Total</td>
                        <td>Vale Transporte</td>
                        <td>Vale Refeicao</td>
                        <td>Vale Alimentacao</td>
                        <td>Plano/Saude</td>
                        <td>Plano Odontologico</td>
                        <td>Seguro/Vida</td>
                        <td>Outros</td>
                        <td>Total</td>
                        
                      </tr>
                    </thead>
                    <tbody id="myFinanceiro" class="tt text-center text-black">                     
                    </tbody>
                      </table>
                      </div>
        
                      <!-- Modal -->
              <div class="modal fade" id="modelFinaceiro" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                      <h5 class="modal-title" id="modelTitle4"></h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                      </div>
                      <div class="modal-body">
                          <input type="number" class="form-control mb-4" id="treinamentoText">
                      </div>
                      <div class="modal-footer">
                      <button type="button" class="btn btn-primary" id="financeiroLista">Confirmar</button>
                      </div>
                  </div>
                  </div>
              </div>
              <!-- Modal -->
              
              <div class="modal fade" id="novaInformacao" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                      <h5 class="modal-title" id="novoTrin">Nova Informação</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                      </div>
                      <div class="modal-body">
                          <p>Mês</p>
                          <select name="select" class="form-control mb-4" id="mes"></select>
                          <p>Ano</p>
                          <input type="number" class="form-control mb-4" id="ano" placeholder="Ano" equired autofocus autocomplete="on">
                          <p>Salario</p>
                          <input type="number" class="form-control mb-4" id="salario" placeholder="Salario" equired autofocus autocomplete="on">
                          <p>Pro-labore</p>
                          <input type="number" class="form-control mb-4" id="pro-labore" placeholder="Pro-labore" equired autofocus autocomplete="on">
                          <p>Ferias</p>
                          <input type="number" class="form-control mb-4" id="ferias" placeholder="Ferias" equired autofocus autocomplete="on">
                          <p>Horas Extras</p>
                          <input type="number" class="form-control mb-4" id="horasExtras" placeholder="Horas Extras" equired autofocus autocomplete="on">
                          <p>13º</p>
                          <input type="number" class="form-control mb-4" id="decimoT" placeholder="13º" equired autofocus autocomplete="on">
                          <p>Licencas</p>
                          <input type="number" class="form-control mb-4" id="licencas" placeholder="Licencas" equired autofocus autocomplete="on">
                          <p>Encargos</p>
                          <input type="number" class="form-control mb-4" id="encargos" placeholder="Encargos" equired autofocus autocomplete="on">
                          <p>Outros</p>
                          <input type="number" class="form-control mb-4" id="outros" placeholder="Outros" equired autofocus autocomplete="on">
                          <p>Vale Transporte</p>
                          <input type="number" class="form-control mb-4" id="valeTransporte" placeholder="Vale Transporte" equired autofocus autocomplete="on">
                          <p>Vale Refeicao</p>
                          <input type="number" class="form-control mb-4" id="valeRefeicao" placeholder="Vale Refeicao" equired autofocus autocomplete="on">
                          <p>Vale Alimentacao</p>
                          <input type="number" class="form-control mb-4" id="valeAlimentacao" placeholder="Vale Alimentacao" equired autofocus autocomplete="on">
                          <p>Plano/Saude</p>
                          <input type="number" class="form-control mb-4" id="planoSaude" placeholder="Plano/Saude" equired autofocus autocomplete="on">
                          <p>Plano Odontologico</p>
                          <input type="number" class="form-control mb-4" id="planoOdontologico" placeholder="Plano Odontologico" equired autofocus autocomplete="on">
                          <p>Seguro/Vida</p>
                          <input type="number" class="form-control mb-4" id="seguroVida" placeholder="Seguro/Vida" equired autofocus autocomplete="on">
                          <p>Outros</p>
                          <input type="number" class="form-control mb-4" id="outros2" placeholder="Outros" equired autofocus autocomplete="on">
                      </div>
                      <div class="modal-footer">
                      <button type="button" class="btn btn-primary" id="novaInformacaoOk">Confirmar</button>
                      </div>          
                      
                  </div>
                  </div>
              </div>
            `;

                contrudo.innerHTML = nada;
                const empresa2 = localStorage.getItem('empresa');
                const myFinanceiro = document.getElementById('myFinanceiro');
                const addAusências = document.getElementById('addAusências');
                const financeiroLista = document.getElementById('financeiroLista');
                const url5 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2}`;
                let salario2 = 0;
                let proLabore2 = 0;
                let ferias2 = 0;
                let horasExtras2 = 0;
                let decimoTerceiro2 = 0;
                let licencas2 = 0;
                let encargos2 = 0;
                let outros2 = 0;
                let vTransporte2 = 0;
                let vRefeicao2 = 0;
                let vAlimentacao2 = 0;
                let planoSaude2 = 0;
                let planoOdontologico2 = 0;
                let segVida2 = 0;
                let outros22 = 0;
                let meses33 = '';
                let nomeFina = '';
                let iddd = '';
                let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
                fetch(url5)
                    .then(res => res.json())
                    .then(content => {

                        const mesesLista = [
                            'Janeiro',
                            'Fevereiro',
                            'Março',
                            'Abril',
                            'Maio',
                            'Junho',
                            'Julho',
                            'Agosto',
                            'Setembro',
                            'Outubro',
                            'Novembro',
                            'Dezembro'
                        ];
                        mesesLista.forEach(rec => {
                            meses33 += `<option>${rec}</option>`;
                        });
                        document.getElementById('mes').innerHTML = meses33;
                        const data = content[0]['financeiro'];
                        for (var i = 0; i < data.length; i++) {
                            const ress = content[0]['financeiro'];
                            console.log(content[0]['financeiro'][i]);
                            var newRow = myFinanceiro.insertRow();
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
                            var newCell14 = newRow.insertCell(13);
                            var newCell15 = newRow.insertCell(14);
                            var newCell16 = newRow.insertCell(15);
                            var newCell17 = newRow.insertCell(16);
                            var newCell18 = newRow.insertCell(17);
                            var newCell19 = newRow.insertCell(18);
                            var newCell20 = newRow.insertCell(19);
                            var newCell21 = newRow.insertCell(20);
                            if (ress[i].salario == "") {
                                salario2 = "0";
                            } else {
                                salario2 = ress[i].salario;
                            }
                            if (ress[i].proLabore == "") {
                                proLabore2 = "0";
                            } else {
                                proLabore2 = ress[i].proLabore;
                            }
                            if (ress[i].ferias == "") {
                                ferias2 = "0";
                            } else {
                                ferias2 = ress[i].ferias;
                            }
                            if (ress[i].horasExtras == "") {
                                horasExtras2 = "0";
                            } else {
                                horasExtras2 = ress[i].horasExtras;
                            }
                            if (ress[i].decimoTerceiro == "") {
                                decimoTerceiro2 = "0";
                            } else {
                                decimoTerceiro2 = ress[i].decimoTerceiro;
                            }
                            if (ress[i].licencas == "") {
                                licencas2 = "0";
                            } else {
                                licencas2 = ress[i].licencas;
                            }

                            if (ress[i].encargos == "") {
                                encargos2 = "0";
                            } else {
                                encargos2 = ress[i].encargos;
                            }
                            if (ress[i].outros == "") {
                                outros2 = "0";
                            } else {
                                outros2 = ress[i].outros;
                            }
                            if (ress[i].vTransporte == "") {
                                vTransporte2 = "0";
                            } else {
                                vTransporte2 = ress[i].vTransporte;
                            }
                            if (ress[i].vRefeicao == "") {
                                vRefeicao2 = "0";
                            } else {
                                vRefeicao2 = ress[i].vRefeicao;
                            }
                            if (ress[i].vAlimentacao == "") {
                                vAlimentacao2 = "0";
                            } else {
                                vAlimentacao2 = ress[i].vAlimentacao;
                            }
                            if (ress[i].planoSaude == "") {
                                planoSaude2 = "0";
                            } else {
                                planoSaude2 = ress[i].planoSaude;
                            }
                            if (ress[i].planoOdontologico == "") {
                                planoOdontologico2 = "0";
                            } else {
                                planoOdontologico2 = ress[i].planoOdontologico;
                            }
                            if (ress[i].segVida == "") {
                                segVida2 = "0";
                            } else {
                                segVida2 = ress[i].segVida;
                            }
                            if (ress[i].outros2 == "") {
                                outros22 = "0";
                            } else {
                                outros22 = ress[i].outros2;
                            }
                            let total1 = parseInt(salario2) + parseInt(proLabore2) + parseInt(ferias2) +
                                parseInt(horasExtras2) + parseInt(decimoTerceiro2) + parseInt(licencas2) +
                                parseInt(encargos2) + parseInt(outros2);
                            let total2 = parseInt(vTransporte2) + parseInt(vRefeicao2) + parseInt(vAlimentacao2) +
                                parseInt(planoSaude2) + parseInt(planoOdontologico2) + parseInt(segVida2) +
                                parseInt(outros22);
                            newCell1.innerHTML = i + 1;
                            newCell2.innerHTML = `<div>${ress[i].mes}</div>`;
                            newCell3.innerHTML = `<div>${ress[i].ano}</div>`;
                            newCell4.innerHTML = `<div>00,00</div>`;
                            newCell5.innerHTML = `<div class="salario2" id=${ress[i]._id}>${String(ress[i].salario).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00"}</div>`;
                            newCell6.innerHTML = `<div class="proLabore2" id=${ress[i]._id}>${String(ress[i].proLabore).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00"}</div>`;
                            newCell7.innerHTML = `<div class="ferias2" id=${ress[i]._id}>${String(ress[i].ferias).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00"}</div>`;
                            newCell8.innerHTML = `<div class="horasExtras2" id=${ress[i]._id}>${String(ress[i].horasExtras).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00"}</div>`;
                            newCell9.innerHTML = `<div class="decimoTerceiro2" id=${ress[i]._id}>${String(ress[i].decimoTerceiro).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00"}</div>`;
                            newCell10.innerHTML = `<div class="licencas2" id=${ress[i]._id}>${String(ress[i].licencas).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00"}</div>`;
                            newCell11.innerHTML = `<div class="encargos2" id=${ress[i]._id}>${String(ress[i].encargos).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00"}</div>`;
                            newCell12.innerHTML = `<div class="outros2" id=${ress[i]._id}>${String(ress[i].outros).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00"}</div>`;
                            newCell13.innerHTML = `<div class="total1" id=${ress[i]._id}>${String(total1).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00"}</div>`;
                            newCell14.innerHTML = `<div class="vTransporte2" id=${ress[i]._id}>${String(ress[i].vTransporte).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00"}</div>`;
                            newCell15.innerHTML = `<div class="vRefeicao2" id=${ress[i]._id}>${String(ress[i].vRefeicao).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00"}</div>`;
                            newCell16.innerHTML = `<div class="vAlimentacao2" id=${ress[i]._id}>${String(ress[i].vAlimentacao).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00"}</div>`;
                            newCell17.innerHTML = `<div class="planoSaude2" id=${ress[i]._id}>${String(ress[i].planoSaude).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00"}</div>`;
                            newCell18.innerHTML = `<div class="planoOdontologico2" id=${ress[i]._id}>${String(ress[i].planoOdontologico).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00"}</div>`;
                            newCell19.innerHTML = `<div class="segVida2" id=${ress[i]._id}>${String(ress[i].segVida).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00"}</div>`;
                            newCell20.innerHTML = `<div class="outros22" id=${ress[i]._id}>${String(ress[i].outros2).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00"}</div>`;
                            newCell21.innerHTML = `<div class="total2" id=${ress[i]._id}>${String(total2).replace(/(.)(?=(\d{3})+$)/g, '$1.') + ",00"}</div>`;
                        }

                        addAusências.addEventListener('click', (e) => {
                            e.preventDefault();
                            $('#novaInformacao').modal('show');
                            const novaInformacaoOk = document.getElementById('novaInformacaoOk');


                            const mes33 = document.getElementById('mes');
                            const ano33 = document.getElementById('ano');
                            const salario = document.getElementById('salario');
                            const prolabore = document.getElementById('pro-labore');
                            const ferias = document.getElementById('ferias');
                            const horasExtras = document.getElementById('horasExtras');
                            const decimoT = document.getElementById('decimoT');
                            const licencas = document.getElementById('licencas');
                            const encargos = document.getElementById('encargos');
                            const outros = document.getElementById('outros');
                            const valeTransporte = document.getElementById('valeTransporte');
                            const valeRefeicao = document.getElementById('valeRefeicao');
                            const valeAlimentacao = document.getElementById('valeAlimentacao');
                            const planoSaude = document.getElementById('planoSaude');
                            const planoOdontologico = document.getElementById('planoOdontologico');
                            const seguroVida = document.getElementById('seguroVida');
                            const outros2 = document.getElementById('outros2');

                            let fai = JSON.stringify(token);
                            // h.append('authorization', `Bearer ${token}`)
                            novaInformacaoOk.addEventListener('click', (e) => {
                                if (ano33.value) {
                                    $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                    console.log("1")
                                    const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/financeiro';
                                    let pora2 = new Request(urlLogIn3, {
                                        method: 'PATCH',
                                        headers: h,
                                        body: JSON.stringify({
                                            "mes": `${mes33.value}`,
                                            "ano": `${ano33.value}`,
                                            "salario": `${salario.value}`,
                                            "proLabore": `${prolabore.value}`,
                                            "ferias": `${ferias.value}`,
                                            "horasExtras": `${horasExtras.value}`,
                                            "decimoTerceiro": `${decimoT.value}`,
                                            "licencas": `${licencas.value}`,
                                            "encargos": `${encargos.value}`,
                                            "outros": `${outros.value}`,
                                            "vTransporte": `${valeTransporte.value}`,
                                            "vRefeicao": `${valeRefeicao.value}`,
                                            "vAlimentacao": `${valeAlimentacao.value}`,
                                            "planoSaude": `${planoSaude.value}`,
                                            "planoOdontologico": `${planoOdontologico.value}`,
                                            "segVida": `${seguroVida.value}`,
                                            "outros2": `${outros2.value}`
                                        })
                                    });
                                    fetch(pora2)
                                        .then(ress => ress.json())
                                        .then(data5 => {
                                            $('#novAusencia').modal('hide');
                                            var m = new Date();
                                            var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                            const usuarioLogs = localStorage.getItem('usuario');
                                            const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                            let logs = new Request(urlLogs, {
                                                method: 'PATCH',
                                                headers: h,
                                                body: JSON.stringify({
                                                    "nomeFuncionario": `${usuarioLogs}`,
                                                    "historico": `O Colaborador ${usuarioLogs} fez alterações nas Informações Financeiras`,
                                                    "data": `${dateString}`
                                                })
                                            });
                                            fetch(logs)
                                                .then(ress => ress.json())
                                                .then(data5Logs => {
                                                    console.log(data5Logs)
                                                });
                                            financeiro()

                                        })
                                }
                            });

                        });
                        let titulo = '';

                        myFinanceiro.addEventListener('click', (e) => {
                            e.preventDefault();
                            nomeFina = e.target.className;
                            if (e.target.className == "outros22") {
                                document.getElementById('modelTitle4').innerHTML = 'Outros';
                                iddd = e.target.id;

                                $('#modelFinaceiro').modal('show');

                            }
                            if (e.target.className == "segVida2") {
                                document.getElementById('modelTitle4').innerHTML = 'Seguro de Vida';
                                iddd = e.target.id;
                                $('#modelFinaceiro').modal('show');

                            }
                            if (e.target.className == "planoOdontologico2") {
                                document.getElementById('modelTitle4').innerHTML = 'Plano Odontologico';
                                iddd = e.target.id;
                                $('#modelFinaceiro').modal('show');

                            }
                            if (e.target.className == "planoSaude2") {
                                document.getElementById('modelTitle4').innerHTML = 'Plano de Saude';
                                iddd = e.target.id;
                                $('#modelFinaceiro').modal('show');

                            }
                            if (e.target.className == "vAlimentacao2") {
                                document.getElementById('modelTitle4').innerHTML = 'Vale Alimentacao';
                                iddd = e.target.id;
                                $('#modelFinaceiro').modal('show');

                            }
                            if (e.target.className == "vRefeicao2") {
                                document.getElementById('modelTitle4').innerHTML = 'Vale Refeicao';
                                iddd = e.target.id;
                                $('#modelFinaceiro').modal('show');

                            }
                            if (e.target.className == "vTransporte2") {
                                document.getElementById('modelTitle4').innerHTML = 'Vale Transporte';
                                iddd = e.target.id;
                                $('#modelFinaceiro').modal('show');

                            }
                            if (e.target.className == "outros2") {
                                document.getElementById('modelTitle4').innerHTML = 'Outros';
                                iddd = e.target.id;
                                $('#modelFinaceiro').modal('show');

                            }
                            if (e.target.className == "encargos2") {
                                document.getElementById('modelTitle4').innerHTML = 'Encargos';
                                iddd = e.target.id;
                                $('#modelFinaceiro').modal('show');

                            }
                            if (e.target.className == "licencas2") {
                                document.getElementById('modelTitle4').innerHTML = 'Licencas';
                                iddd = e.target.id;
                                $('#modelFinaceiro').modal('show');

                            }
                            if (e.target.className == "decimoTerceiro2") {
                                document.getElementById('modelTitle4').innerHTML = '13º';
                                iddd = e.target.id;
                                $('#modelFinaceiro').modal('show');
                            }
                            if (e.target.className == "horasExtras2") {
                                document.getElementById('modelTitle4').innerHTML = 'Horas Extras';
                                iddd = e.target.id;
                                $('#modelFinaceiro').modal('show');

                            }
                            if (e.target.className == "salario2") {
                                document.getElementById('modelTitle4').innerHTML = 'Salario';
                                iddd = e.target.id;
                                $('#modelFinaceiro').modal('show');

                            }
                            if (e.target.className == "proLabore2") {
                                document.getElementById('modelTitle4').innerHTML = 'Pro-labore';
                                iddd = e.target.id;
                                $('#modelFinaceiro').modal('show');

                            }
                            if (e.target.className == "ferias2") {
                                document.getElementById('modelTitle4').innerHTML = 'Ferias';
                                iddd = e.target.id;
                                $('#modelFinaceiro').modal('show');

                            }
                        });
                        $(document).ready(function () {
                            $('#tabbb').DataTable({
                                "scrollX": true,
                                "scrollY": 200,
                            });
                        });

                    });
                financeiroLista.addEventListener('click', (e) => {
                    const treinamentoText = document.getElementById('treinamentoText');
                    console.log(iddd);
                    console.log(treinamentoText.value);
                    console.log(nomeFina);
                    if (nomeFina == "outros22") {
                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                        const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/upDateFinanceiro/outros2';
                        let pora2 = new Request(urlLogIn3, {
                            method: 'PATCH',
                            headers: h,
                            body: JSON.stringify({
                                "id": `${iddd}`,
                                "outros2": `${treinamentoText.value}`
                            })
                        });
                        fetch(pora2)
                            .then(ress => ress.json())
                            .then(data5 => {
                                $('#modelFinaceiro').modal('hide');
                                var m = new Date();
                                var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                const usuarioLogs = localStorage.getItem('usuario');
                                const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                let logs = new Request(urlLogs, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "nomeFuncionario": `${usuarioLogs}`,
                                        "historico": `O Colaborador ${usuarioLogs} fez alterações nas Informações Financeiras`,
                                        "data": `${dateString}`
                                    })
                                });
                                fetch(logs)
                                    .then(ress => ress.json())
                                    .then(data5Logs => {
                                        console.log(data5Logs)
                                    });
                                financeiro()
                            })
                    }
                    if (nomeFina == "segVida2") {
                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                        const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/upDateFinanceiro/segVida';
                        let pora2 = new Request(urlLogIn3, {
                            method: 'PATCH',
                            headers: h,
                            body: JSON.stringify({
                                "id": `${iddd}`,
                                "segVida": `${treinamentoText.value}`
                            })
                        });
                        fetch(pora2)
                            .then(ress => ress.json())
                            .then(data5 => {
                                $('#modelFinaceiro').modal('hide');
                                var m = new Date();
                                var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                const usuarioLogs = localStorage.getItem('usuario');
                                const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                let logs = new Request(urlLogs, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "nomeFuncionario": `${usuarioLogs}`,
                                        "historico": `O Colaborador ${usuarioLogs} fez alterações nas Informações Financeiras`,
                                        "data": `${dateString}`
                                    })
                                });
                                fetch(logs)
                                    .then(ress => ress.json())
                                    .then(data5Logs => {
                                        console.log(data5Logs)
                                    });
                                financeiro()
                            })
                    }
                    if (nomeFina == "planoOdontologico2") {
                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                        const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/upDateFinanceiro/planoOdontologico';
                        let pora2 = new Request(urlLogIn3, {
                            method: 'PATCH',
                            headers: h,
                            body: JSON.stringify({
                                "id": `${iddd}`,
                                "planoOdontologico": `${treinamentoText.value}`
                            })
                        });
                        fetch(pora2)
                            .then(ress => ress.json())
                            .then(data5 => {
                                $('#modelFinaceiro').modal('hide');
                                var m = new Date();
                                var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                const usuarioLogs = localStorage.getItem('usuario');
                                const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                let logs = new Request(urlLogs, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "nomeFuncionario": `${usuarioLogs}`,
                                        "historico": `O Colaborador ${usuarioLogs} fez alterações nas Informações Financeiras`,
                                        "data": `${dateString}`
                                    })
                                });
                                fetch(logs)
                                    .then(ress => ress.json())
                                    .then(data5Logs => {
                                        console.log(data5Logs)
                                    });
                                financeiro()
                            })
                    }
                    if (nomeFina == "planoSaude2") {
                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                        const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/upDateFinanceiro/planoSaude';
                        let pora2 = new Request(urlLogIn3, {
                            method: 'PATCH',
                            headers: h,
                            body: JSON.stringify({
                                "id": `${iddd}`,
                                "planoSaude": `${treinamentoText.value}`
                            })
                        });
                        fetch(pora2)
                            .then(ress => ress.json())
                            .then(data5 => {
                                $('#modelFinaceiro').modal('hide');
                                var m = new Date();
                                var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                const usuarioLogs = localStorage.getItem('usuario');
                                const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                let logs = new Request(urlLogs, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "nomeFuncionario": `${usuarioLogs}`,
                                        "historico": `O Colaborador ${usuarioLogs} fez alterações nas Informações Financeiras`,
                                        "data": `${dateString}`
                                    })
                                });
                                fetch(logs)
                                    .then(ress => ress.json())
                                    .then(data5Logs => {
                                        console.log(data5Logs)
                                    });
                                financeiro()
                            })
                    }
                    if (nomeFina == "encargos2") {
                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                        const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/upDateFinanceiro/encargos';
                        let pora2 = new Request(urlLogIn3, {
                            method: 'PATCH',
                            headers: h,
                            body: JSON.stringify({
                                "id": `${iddd}`,
                                "encargos": `${treinamentoText.value}`
                            })
                        });
                        fetch(pora2)
                            .then(ress => ress.json())
                            .then(data5 => {
                                $('#modelFinaceiro').modal('hide');
                                var m = new Date();
                                var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                const usuarioLogs = localStorage.getItem('usuario');
                                const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                let logs = new Request(urlLogs, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "nomeFuncionario": `${usuarioLogs}`,
                                        "historico": `O Colaborador ${usuarioLogs} fez alterações nas Informações Financeiras`,
                                        "data": `${dateString}`
                                    })
                                });
                                fetch(logs)
                                    .then(ress => ress.json())
                                    .then(data5Logs => {
                                        console.log(data5Logs)
                                    });
                                financeiro()
                            })
                    }
                    if (nomeFina == "vAlimentacao2") {
                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                        const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/upDateFinanceiro/vAlimentacao';
                        let pora2 = new Request(urlLogIn3, {
                            method: 'PATCH',
                            headers: h,
                            body: JSON.stringify({
                                "id": `${iddd}`,
                                "vAlimentacao": `${treinamentoText.value}`
                            })
                        });
                        fetch(pora2)
                            .then(ress => ress.json())
                            .then(data5 => {
                                $('#modelFinaceiro').modal('hide');
                                var m = new Date();
                                var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                const usuarioLogs = localStorage.getItem('usuario');
                                const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                let logs = new Request(urlLogs, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "nomeFuncionario": `${usuarioLogs}`,
                                        "historico": `O Colaborador ${usuarioLogs} fez alterações nas Informações Financeiras`,
                                        "data": `${dateString}`
                                    })
                                });
                                fetch(logs)
                                    .then(ress => ress.json())
                                    .then(data5Logs => {
                                        console.log(data5Logs)
                                    });
                                financeiro()

                            })
                    }
                    if (nomeFina == "vRefeicao2") {
                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                        const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/upDateFinanceiro/vRefeicao';
                        let pora2 = new Request(urlLogIn3, {
                            method: 'PATCH',
                            headers: h,
                            body: JSON.stringify({
                                "id": `${iddd}`,
                                "vRefeicao": `${treinamentoText.value}`
                            })
                        });
                        fetch(pora2)
                            .then(ress => ress.json())
                            .then(data5 => {
                                $('#modelFinaceiro').modal('hide');
                                var m = new Date();
                                var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                const usuarioLogs = localStorage.getItem('usuario');
                                const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                let logs = new Request(urlLogs, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "nomeFuncionario": `${usuarioLogs}`,
                                        "historico": `O Colaborador ${usuarioLogs} fez alterações nas Informações Financeiras`,
                                        "data": `${dateString}`
                                    })
                                });
                                fetch(logs)
                                    .then(ress => ress.json())
                                    .then(data5Logs => {
                                        console.log(data5Logs)
                                    });
                                financeiro()

                            })
                    }
                    if (nomeFina == "vTransporte2") {
                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                        const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/upDateFinanceiro/vTransporte';
                        let pora2 = new Request(urlLogIn3, {
                            method: 'PATCH',
                            headers: h,
                            body: JSON.stringify({
                                "id": `${iddd}`,
                                "vTransporte": `${treinamentoText.value}`
                            })
                        });
                        fetch(pora2)
                            .then(ress => ress.json())
                            .then(data5 => {
                                $('#modelFinaceiro').modal('hide');
                                var m = new Date();
                                var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                const usuarioLogs = localStorage.getItem('usuario');
                                const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                let logs = new Request(urlLogs, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "nomeFuncionario": `${usuarioLogs}`,
                                        "historico": `O Colaborador ${usuarioLogs} fez alterações nas Informações Financeiras`,
                                        "data": `${dateString}`
                                    })
                                });
                                fetch(logs)
                                    .then(ress => ress.json())
                                    .then(data5Logs => {
                                        console.log(data5Logs)
                                    });
                                financeiro()
                            })
                    }
                    if (nomeFina == "outros2") {
                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                        const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/upDateFinanceiro/outros';
                        let pora2 = new Request(urlLogIn3, {
                            method: 'PATCH',
                            headers: h,
                            body: JSON.stringify({
                                "id": `${iddd}`,
                                "outros": `${treinamentoText.value}`
                            })
                        });
                        fetch(pora2)
                            .then(ress => ress.json())
                            .then(data5 => {
                                $('#modelFinaceiro').modal('hide');
                                var m = new Date();
                                var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                const usuarioLogs = localStorage.getItem('usuario');
                                const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                let logs = new Request(urlLogs, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "nomeFuncionario": `${usuarioLogs}`,
                                        "historico": `O Colaborador ${usuarioLogs} fez alterações nas Informações Financeiras`,
                                        "data": `${dateString}`
                                    })
                                });
                                fetch(logs)
                                    .then(ress => ress.json())
                                    .then(data5Logs => {
                                        console.log(data5Logs)
                                    });
                                financeiro()
                            })
                    }
                    if (nomeFina == "licencas2") {
                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                        const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/upDateFinanceiro/licencas';
                        let pora2 = new Request(urlLogIn3, {
                            method: 'PATCH',
                            headers: h,
                            body: JSON.stringify({
                                "id": `${iddd}`,
                                "licencas": `${treinamentoText.value}`
                            })
                        });
                        fetch(pora2)
                            .then(ress => ress.json())
                            .then(data5 => {
                                $('#modelFinaceiro').modal('hide');
                                var m = new Date();
                                var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                const usuarioLogs = localStorage.getItem('usuario');
                                const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                let logs = new Request(urlLogs, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "nomeFuncionario": `${usuarioLogs}`,
                                        "historico": `O Colaborador ${usuarioLogs} fez alterações nas Informações Financeiras`,
                                        "data": `${dateString}`
                                    })
                                });
                                fetch(logs)
                                    .then(ress => ress.json())
                                    .then(data5Logs => {
                                        console.log(data5Logs)
                                    });
                                financeiro()
                            })
                    }
                    if (nomeFina == "decimoTerceiro2") {
                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                        const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/upDateFinanceiro/decimoTerceiro';
                        let pora2 = new Request(urlLogIn3, {
                            method: 'PATCH',
                            headers: h,
                            body: JSON.stringify({
                                "id": `${iddd}`,
                                "decimoTerceiro": `${treinamentoText.value}`
                            })
                        });
                        fetch(pora2)
                            .then(ress => ress.json())
                            .then(data5 => {
                                $('#modelFinaceiro').modal('hide');
                                var m = new Date();
                                var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                const usuarioLogs = localStorage.getItem('usuario');
                                const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                let logs = new Request(urlLogs, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "nomeFuncionario": `${usuarioLogs}`,
                                        "historico": `O Colaborador ${usuarioLogs} fez alterações nas Informações Financeiras`,
                                        "data": `${dateString}`
                                    })
                                });
                                fetch(logs)
                                    .then(ress => ress.json())
                                    .then(data5Logs => {
                                        console.log(data5Logs)
                                    });
                                financeiro()
                            })
                    }
                    if (nomeFina == "horasExtras2") {
                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                        const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/upDateFinanceiro/horasExtras';
                        let pora2 = new Request(urlLogIn3, {
                            method: 'PATCH',
                            headers: h,
                            body: JSON.stringify({
                                "id": `${iddd}`,
                                "horasExtras": `${treinamentoText.value}`
                            })
                        });
                        fetch(pora2)
                            .then(ress => ress.json())
                            .then(data5 => {
                                $('#modelFinaceiro').modal('hide');
                                var m = new Date();
                                var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                const usuarioLogs = localStorage.getItem('usuario');
                                const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                let logs = new Request(urlLogs, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "nomeFuncionario": `${usuarioLogs}`,
                                        "historico": `O Colaborador ${usuarioLogs} fez alterações nas Informações Financeiras`,
                                        "data": `${dateString}`
                                    })
                                });
                                fetch(logs)
                                    .then(ress => ress.json())
                                    .then(data5Logs => {
                                        console.log(data5Logs)
                                    });
                                financeiro()
                            })
                    }
                    if (nomeFina == "salario2") {
                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                        const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/upDateFinanceiro/salario';
                        let pora2 = new Request(urlLogIn3, {
                            method: 'PATCH',
                            headers: h,
                            body: JSON.stringify({
                                "id": `${iddd}`,
                                "salario": `${treinamentoText.value}`
                            })
                        });
                        fetch(pora2)
                            .then(ress => ress.json())
                            .then(data5 => {
                                $('#modelFinaceiro').modal('hide');
                                var m = new Date();
                                var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                const usuarioLogs = localStorage.getItem('usuario');
                                const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                let logs = new Request(urlLogs, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "nomeFuncionario": `${usuarioLogs}`,
                                        "historico": `O Colaborador ${usuarioLogs} fez alterações nas Informações Financeiras`,
                                        "data": `${dateString}`
                                    })
                                });
                                fetch(logs)
                                    .then(ress => ress.json())
                                    .then(data5Logs => {
                                        console.log(data5Logs)
                                    });
                                financeiro()
                            })
                    }
                    if (nomeFina == "proLabore2") {
                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                        const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/upDateFinanceiro/proLabore';
                        let pora2 = new Request(urlLogIn3, {
                            method: 'PATCH',
                            headers: h,
                            body: JSON.stringify({
                                "id": `${iddd}`,
                                "proLabore": `${treinamentoText.value}`
                            })
                        });
                        fetch(pora2)
                            .then(ress => ress.json())
                            .then(data5 => {
                                $('#modelFinaceiro').modal('hide');
                                var m = new Date();
                                var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                const usuarioLogs = localStorage.getItem('usuario');
                                const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                let logs = new Request(urlLogs, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "nomeFuncionario": `${usuarioLogs}`,
                                        "historico": `O Colaborador ${usuarioLogs} fez alterações nas Informações Financeiras`,
                                        "data": `${dateString}`
                                    })
                                });
                                fetch(logs)
                                    .then(ress => ress.json())
                                    .then(data5Logs => {
                                        console.log(data5Logs)
                                    });
                                financeiro()
                            })
                    }
                    if (nomeFina == "ferias2") {
                        $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                        const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/upDateFinanceiro/ferias';
                        let pora2 = new Request(urlLogIn3, {
                            method: 'PATCH',
                            headers: h,
                            body: JSON.stringify({
                                "id": `${iddd}`,
                                "ferias": `${treinamentoText.value}`
                            })
                        });
                        fetch(pora2)
                            .then(ress => ress.json())
                            .then(data5 => {
                                $('#modelFinaceiro').modal('hide');
                                var m = new Date();
                                var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                const usuarioLogs = localStorage.getItem('usuario');
                                const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                let logs = new Request(urlLogs, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "nomeFuncionario": `${usuarioLogs}`,
                                        "historico": `O Colaborador ${usuarioLogs} fez alterações nas Informações Financeiras`,
                                        "data": `${dateString}`
                                    })
                                });
                                fetch(logs)
                                    .then(ress => ress.json())
                                    .then(data5Logs => {
                                        console.log(data5Logs)
                                    });
                                financeiro()
                            })
                    }
                });
            }
            financeiro()

        }

        if (e.target.id == "treinamentos") {
            function treinamentos() {
                nada = '';
                nada = ` 
            <div class="animate__animated animate__pulse card3 text-center mr-4">
            <div class="row align-items-center">
                <div class="col-md-6">
                  <h1 class="mb-4 text-black"><span class="text-black">Cadastros</span></h1>
                  <h3 class="mb-4 text-black">Treinamentos</h3>
                </div>
                <div class="col-md-6 d-none d-sm-none d-md-block">
                  <img src="pics/Stocks2.png" alt="tours pics" class="img-fluid">
                </div>
              </div>
            </div>
            <div class="text-center card4">
            <div class="row p-3">
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="func2">Funcionários</a>                                                     
                  </div>
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="altFunc"><h6>Alt. Funcionário</h6></a>
                </div>
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="recrSelecc"><h6>Rec. e Selecção</h6></a>
                </div>
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="jornad">Jornadas</a>
                </div>
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="ausencias">Ausências</a>
                </div>
        
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="financeiro">Financeiro</a>
                </div>
        
                <div class="col-md">
                  <a href="#" class="text-center btn btn-outline-dark btn-lg" id="treinamentos">Treinamentos</a>
                </div>
              </div>
              </div>
        
              
        
                      <div class="text-center card5">
                          <h1 class="h4 text-black mb-4">Cadastro de Treinamentos</h1>
                          <button type="button" class="btn btn-outline-dark" id="addTreinamento">Adicionar Treinamento</button>                
                          <button type="button" class="btn btn-outline-dark ml-4" id="editTreinamento" disabled>Editar Treinamento</button>
                      </div>
        
                      <hr>
                      <div class="text-center card4  animate__animated animate__pulse">
                      <table class="table m-2" id="tab323">
                        <thead>
                        <tr class="bg-gradient-primary text-center text-black">
                            <th scope="col">Numero</th>
                            <th>Colaborador</th>
                            <th>Tipo de Treinamento</th>
                            <th>Treinamento</th>
                            <th>Descricao</th>
                            <th>Fornecedor</th>
                            <th>Duracao(h)</th>
                            <th>Local</th>
                            <th>Inicio</th>
                            <th>Fim</th>
                            <th>Investimento</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody id="myTreinamento" class="tt text-center text-black">                     
                     </tbody>
                      </table>
                      </div>
        
                      <!-- Modal -->
                    <div class="modal fade" id="modelTreinamento2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="modelTitle2"></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div class="modal-body">
                                <input type="text" class="form-control mb-4" id="treinamentoText" placeholder="..." equired autofocus autocomplete="on">
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-primary" id="treinamentoOk">Confirmar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <!-- Modal -->
                    <div class="modal fade" id="modelTreinamento3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="modelTitle3"></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div class="modal-body">
                                <input type="number" class="form-control mb-4" id="treinamentoText" placeholder="..." equired autofocus autocomplete="on">
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-primary" id="treinamentoOk">Confirmar</button>
                            </div>
                        </div>
                        </div>
                    </div>
        
                    <!-- Modal -->
                    <div class="modal fade" id="novoTreinamento" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="novoTrin">Novo Treinamento</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div class="modal-body">
                                <p>Colaborador</p> 
                                <select name="select" class="form-control mb-4" id="colaboradorTreinamento">                    
                                </select>
                                <p>Tipo de Treinamento</p>
                                <select name="select" class="form-control mb-4" id="tipoTreinamentoList">
                                </select>
                                <p>Nome do Treinamento</p>
                                <input type="text" class="form-control mb-4" id="nomeTreinamento" placeholder="Nome do Treinamento" equired autofocus autocomplete="on">
                                <p>Descricao do Treinamento</p>
                                <input type="text" class="form-control mb-4" id="descrisaoTreino" placeholder="Descricao do Treinamento" equired autofocus autocomplete="on">
                                <p>Fornecedor do Treinamento</p>
                                <input type="text" class="form-control mb-4" id="fornecedorTreino" placeholder="Fornecedor do Treinamento" equired autofocus autocomplete="on">
                                <p>Duracao do Treinamento em Hora</p>
                                <input type="number" class="form-control mb-4" id="duracaoTreino" placeholder="Duracao do Treinamento em Hora" equired autofocus autocomplete="on">
                                <p>Local do Treinamento(Interno, Externo ou Online)</p>
                                <select name="select" class="form-control mb-4" id="localList">
                                </select>
                                <p>Inicio do Treinamento</p>
                                <input type="date" class="form-control mb-4" id="inicioTreino" placeholder="Inicio do Treinamento" equired autofocus autocomplete="on">
                                <p>Fim do Treinamento</p>
                                <input type="date" class="form-control mb-4" id="fimTreino" placeholder="Fim do Treinamento" equired autofocus autocomplete="on">
                                <p>Investimento pelo Treinamento</p>
                                <input type="number" class="form-control mb-4" id="investimentoTreino" placeholder="Investimento pelo Treinamento" equired autofocus autocomplete="on">
                                <p>Status do Treinamento</p>
                                <select name="select" class="form-control mb-4" id="statusList">
                                </select>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-primary" id="novoTreinamentoOk">Confirmar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <!-- Modal -->
                    <div class="modal fade" id="modelColaboradores" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="modelTitle"></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div class="modal-body" id="colaboradorLista">
                                
                            </div>
                            <!-- <div class="modal-footer">
                            <button type="button" class="btn btn-primary" id="treinamentoOk">Confirmar</button>
                            </div> -->
                        </div>
                        </div>
                    </div>
            `;

                contrudo.innerHTML = nada;
                var myArray = [];
                let funcionarioAlt = [];
                const addTreinamento = document.getElementById('addTreinamento');
                const tablerrr = document.getElementById('myTreinamento');
                const novoTreinamentoOk = document.getElementById('novoTreinamentoOk')
                const colaboradorLista = document.getElementById('colaboradorLista');
                const modelTitle = document.getElementById('modelTitle');
                let diverso = '';
                let meses33 = '';
                let colaboradors = '';
                let meses333 = '';
                let meses3333 = '';
                let diverso2 = '';
                let colabora = '';
                let titulo = '';
                let statusFree = '';
                let investimentoFree = '';
                let fimFree = '';
                let inicioFree = '';
                let fornecedorFree = '';
                let duracaoFree = '';
                let descricaoFree = '';
                let treinamentoswFree = '';
                let aquiEsta = '';
                const empresa2 = localStorage.getItem('empresa');
                const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2}`;
                let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
                fetch(url3)
                    .then(res => res.json())
                    .then(content => {
                        const localTreinamento1w = [
                            'Interno',
                            'Externo',
                            'Online'
                        ];
                        const tiposTreinamento1w = [
                            'Desenvolvimento Técnico',
                            'Desenvolvimento Pessoal'
                        ];
                        const andamentoTw = [
                            'Concluido',
                            'Em curso',
                            'Cancelado',
                            'Agendado',
                            'Aguardando Aprovação'
                        ];
                        const data1 = content[0]['funcionarios'];

                        for (var i = 0; i < data1.length; i++) {
                            colaboradors += `<option>${data1[i].nomeFuncionario}</option>`;
                            document.getElementById('colaboradorTreinamento').innerHTML = colaboradors;
                        }
                        let a = 0;
                        tiposTreinamento1w.forEach(rec => {
                            meses33 += `<option id=${"tiposTreinamento1w" + a}>${rec}</option>`;
                            a++;
                        });
                        document.getElementById('tipoTreinamentoList').innerHTML = meses33;
                        let b = 0;
                        localTreinamento1w.forEach(rec => {
                            meses333 += `<option id=${"localTreinamento1w" + b}>${rec}</option>`;
                            b++;
                        });
                        document.getElementById('localList').innerHTML = meses333;
                        let c = 0;
                        andamentoTw.forEach(rec => {
                            meses3333 += `<option id=${"andamentoTw" + c}>${rec}</option>`;
                            c++;
                        });
                        document.getElementById('statusList').innerHTML = meses3333;
                        console.log(content[0]['funcionarios']);
                        for (var i = 0; i < data1.length; i++) {
                            const data = content[0]['funcionarios'][i]['treinamentos'];
                            for (var j = 0; j < data.length; j++) {
                                myArray.push(content[0]['funcionarios'][i]['treinamentos'][j]);
                                const ress = content[0]['funcionarios'][i]['treinamentos'][j];
                                console.log(content[0]['funcionarios'][i]['treinamentos'][j]);
                                let statusDDD = content[0]['funcionarios'][i]['treinamentos'][j].status;
                                let investimentoDDD = content[0]['funcionarios'][i]['treinamentos'][j].investimento;
                                let fimDDD = content[0]['funcionarios'][i]['treinamentos'][j].fim;
                                let inicioDDD = content[0]['funcionarios'][i]['treinamentos'][j].inicio;
                                let fornecedorDDD = content[0]['funcionarios'][i]['treinamentos'][j].fornecedor;
                                let duracaoDDD = content[0]['funcionarios'][i]['treinamentos'][j].duracao;
                                let descricaoDDD = content[0]['funcionarios'][i]['treinamentos'][j].descricao;
                                let treinamentoswDDD = content[0]['funcionarios'][i]['treinamentos'][j].treinamentosw;
                                if (fimDDD == "") {
                                    fimFree = "-"
                                } else {
                                    fimFree = fimDDD;
                                }
                                if (inicioDDD == "") {
                                    inicioFree = "-"
                                } else {
                                    inicioFree = inicioDDD;
                                }
                                if (fornecedorDDD == "") {
                                    fornecedorFree = "-"
                                } else {
                                    fornecedorFree = fornecedorDDD;
                                }
                                if (duracaoDDD == "") {
                                    duracaoFree = "-"
                                } else {
                                    duracaoFree = duracaoDDD;
                                }
                                if (descricaoDDD == "") {
                                    descricaoFree = "-"
                                } else {
                                    descricaoFree = descricaoDDD;
                                }
                                if (treinamentoswDDD == "") {
                                    treinamentoswFree = "-"
                                } else {
                                    treinamentoswFree = treinamentoswDDD;
                                }
                                if (statusDDD == "") {
                                    statusFree = "-"
                                } else {
                                    statusFree = statusDDD;
                                }
                                if (investimentoDDD == "") {
                                    investimentoFree = "-"
                                } else {
                                    investimentoFree = investimentoDDD;
                                }
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
                                let iddTThh = content[0]['funcionarios'][i]['treinamentos'][j]['_id'];
                                console.log(iddTThh);
                                newCell1.innerHTML = `<div>${j + 1}</div>`;
                                newCell2.innerHTML = `<div class="colaborador ${content[0]['funcionarios'][i]['treinamentos'][j].colaborador}" id=${iddTThh + "este"}>${content[0]['funcionarios'][i]['treinamentos'][j].colaborador}</div>`;
                                newCell3.innerHTML = `<div class="treinamento ${content[0]['funcionarios'][i]['treinamentos'][j].colaborador}" id=${content[0]['funcionarios'][i]['treinamentos'][j]['_id']}>${content[0]['funcionarios'][i]['treinamentos'][j].tipoTreinamento}</div>`;
                                newCell4.innerHTML = `<div class="treinamento2 ${content[0]['funcionarios'][i]['treinamentos'][j].colaborador}" id=${content[0]['funcionarios'][i]['treinamentos'][j]['_id']}>${treinamentoswFree}</div>`;
                                newCell5.innerHTML = `<div class="descricao ${content[0]['funcionarios'][i]['treinamentos'][j].colaborador}" id=${content[0]['funcionarios'][i]['treinamentos'][j]['_id']}>${descricaoFree}</div>`;
                                newCell6.innerHTML = `<div class="fornecedor ${content[0]['funcionarios'][i]['treinamentos'][j].colaborador}" id=${content[0]['funcionarios'][i]['treinamentos'][j]['_id']}>${fornecedorFree}</div>`;
                                newCell7.innerHTML = `<div class="duracao ${content[0]['funcionarios'][i]['treinamentos'][j].colaborador}" id=${content[0]['funcionarios'][i]['treinamentos'][j]['_id']}>${duracaoFree}</div>`;
                                newCell8.innerHTML = `<div class="local ${content[0]['funcionarios'][i]['treinamentos'][j].colaborador}" id=${content[0]['funcionarios'][i]['treinamentos'][j]['_id']._id}>${content[0]['funcionarios'][i]['treinamentos'][j].local}</div>`;
                                newCell9.innerHTML = `<div class="inicio ${content[0]['funcionarios'][i]['treinamentos'][j].colaborador}" id=${content[0]['funcionarios'][i]['treinamentos'][j]['_id']}>${inicioFree}</div>`;
                                newCell10.innerHTML = `<div class="fim ${content[0]['funcionarios'][i]['treinamentos'][j].colaborador}" id=${content[0]['funcionarios'][i]['treinamentos'][j]['_id']}>${fimFree}</div>`;
                                newCell11.innerHTML = `<div class="investimento ${content[0]['funcionarios'][i]['treinamentos'][j].colaborador}" id=${content[0]['funcionarios'][i]['treinamentos'][j]['_id']}>${investimentoFree}</div>`;
                                newCell12.innerHTML = `<div class="status ${content[0]['funcionarios'][i]['treinamentos'][j].colaborador}" id=${content[0]['funcionarios'][i]['treinamentos'][j]['_id']}>${statusFree}</div>`;

                            }
                        }
                        const colaboradorTreinamento = document.getElementById('colaboradorTreinamento');
                        const tipoTreinamentoList = document.getElementById('tipoTreinamentoList');
                        const nomeTreinamento = document.getElementById('nomeTreinamento');
                        const descrisaoTreino = document.getElementById('descrisaoTreino');
                        const fornecedorTreino = document.getElementById('fornecedorTreino');
                        const duracaoTreino = document.getElementById('duracaoTreino');
                        const localList = document.getElementById('localList');
                        const inicioTreino = document.getElementById('inicioTreino');
                        const fimTreino = document.getElementById('fimTreino');
                        const investimentoTreino = document.getElementById('investimentoTreino');
                        const statusList = document.getElementById('statusList');

                        let varaTTT = '';
                        novoTreinamentoOk.addEventListener('click', (e) => {
                            e.preventDefault();
                            $('#novoTreinamento').modal('hide');
                            $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                            if (nomeTreinamento.value) {
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/treinamentos';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "colaborador": `${colaboradorTreinamento.value}`,
                                        "tipoTreinamento": `${tipoTreinamentoList.value}`,
                                        "treinamentosw": `${nomeTreinamento.value}`,
                                        "descricao": `${descrisaoTreino.value}`,
                                        "fornecedor": `${fornecedorTreino.value}`,
                                        "duracao": `${duracaoTreino.value}`,
                                        "local": `${localList.value}`,
                                        "inicio": `${inicioTreino.value}`,
                                        "fim": `${fimTreino.value}`,
                                        "investimento": `${investimentoTreino.value}`,
                                        "status": `${statusList.value}`
                                    })
                                });
                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        console.log(data5);
                                        treinamentos();
                                    })
                            }

                        });
                        addTreinamento.addEventListener('click', (e) => {
                            e.preventDefault();
                            $('#novoTreinamento').modal('show');
                        });
                        colaboradorLista.addEventListener('click', (e) => {
                            console.log(e.target.id)
                            if (e.target.id == "status0") {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/treinamentos/status';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "status": "Concluido",
                                        "colaborador": aquiEsta,
                                        "id": diverso
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        treinamentos();
                                    })
                                $('#modelColaboradores').modal('hide');
                            }
                            if (e.target.id == "status1") {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/treinamentos/status';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "status": "Em curso",
                                        "colaborador": aquiEsta,
                                        "id": diverso
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        treinamentos();
                                    })
                                $('#modelColaboradores').modal('hide');
                            }
                            if (e.target.id == "status2") {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/treinamentos/status';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "status": "Cancelado",
                                        "colaborador": aquiEsta,
                                        "id": diverso
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        treinamentos();
                                    })
                                $('#modelColaboradores').modal('hide');
                            }
                            if (e.target.id == "status3") {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/treinamentos/status';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "status": "Agendado",
                                        "colaborador": aquiEsta,
                                        "id": diverso
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        treinamentos();
                                    })
                                $('#modelColaboradores').modal('hide');
                            }
                            if (e.target.id == "status4") {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/treinamentos/status';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "status": "Aguardando Aprovação",
                                        "colaborador": aquiEsta,
                                        "id": diverso
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        treinamentos();
                                    })
                                $('#modelColaboradores').modal('hide');
                            }
                            if (e.target.id == "local0") {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/treinamentos/local';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "local": "Interno",
                                        "colaborador": aquiEsta,
                                        "id": diverso
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        treinamentos();
                                    })
                                $('#modelColaboradores').modal('hide');
                            }
                            if (e.target.id == "local1") {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/treinamentos/local';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "local": "Externo",
                                        "colaborador": aquiEsta,
                                        "id": diverso
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        treinamentos();
                                    })
                                $('#modelColaboradores').modal('hide');
                            }
                            if (e.target.id == "local2") {
                                $('#aguarde').modal('show'); //show modal
                                        setTimeout(function () {
                                            $('#aguarde').modal('hide'); //hide modal
                                        }, 8000);
                                const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/treinamentos/local';
                                let pora2 = new Request(urlLogIn3, {
                                    method: 'PATCH',
                                    headers: h,
                                    body: JSON.stringify({
                                        "local": "Online",
                                        "colaborador": aquiEsta,
                                        "id": diverso
                                    })
                                });

                                fetch(pora2)
                                    .then(ress => ress.json())
                                    .then(data5 => {
                                        treinamentos();
                                    })
                                $('#modelColaboradores').modal('hide');
                            }

                        });
                        tablerrr.addEventListener('click', (e) => {
                            e.preventDefault();
                            diverso = e.target.id;
                            const colaboradorIddd = document.getElementById(diverso);
                            diverso2 = e.target.innerHTML;
                            console.log('Este: ' + colaboradorIddd.innerHTML);
                            aquiEsta = colaboradorIddd.innerHTML;
                            console.log(e.target.className);
                            varaTTT = e.target.className;
                            if (e.target.className == "status") {
                                colabora = '';
                                titulo = '';
                                i = 0;
                                andamentoT.forEach(rec => {
                                    console.log(rec)
                                    colabora += `<div class="text-center">
                                  <h5 class="text-gray-900 mb-4" id=${"status" + i}>${rec}</h5>
                              </div>`;
                                    i++;
                                });
                                titulo = 'Status do Treinamento';
                                colaboradorLista.innerHTML = colabora;
                                modelTitle.innerHTML = titulo;
                                $('#modelColaboradores').modal('show');
                            }

                            if (e.target.className == "local") {
                                colabora = '';
                                titulo = '';
                                i = 0;
                                localTreinamento1.forEach(rec => {
                                    console.log(rec)
                                    colabora += `<div class="text-center">
                                  <h5 class="text-gray-900 mb-4" id=${"local" + i}>${rec}</h5>
                              </div>`;
                                    i++;
                                });
                                titulo = 'Local do Treinamento';
                                colaboradorLista.innerHTML = colabora;
                                modelTitle.innerHTML = titulo;
                                $('#modelColaboradores').modal('show');
                            }
                            if (e.target.className == "treinamento2") {
                                document.getElementById('modelTitle2').innerHTML = 'Nome Treinamento'
                                $('#modelTreinamento6').modal('show');
                            }

                            if (e.target.className == "descricao") {
                                document.getElementById('modelTitle2').innerHTML = 'Descricao do Treinamento'
                                $('#modelTreinamento2').modal('show');
                            }

                            if (e.target.className == "fornecedor") {
                                document.getElementById('modelTitle2').innerHTML = 'Fornecedor do Treinamento'
                                $('#modelTreinamento2').modal('show');
                            }

                            if (e.target.className == "investimento") {
                                document.getElementById('modelTitle3').innerHTML = 'Investimento para o Treinamento'
                                $('#modelTreinamento3').modal('show');
                            }




                        });

                        $(document).ready(function () {
                            $('#tab323').DataTable({
                                "scrollX": true,
                                "scrollY": 500,
                            });
                        });

                    });
            }
            treinamentos();

        }



        console.log(e.target.id);


    });
}
rhPtincipal();
