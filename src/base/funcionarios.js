let list = document.querySelectorAll('.list');
let menuToggle = document.querySelector('.toggle');
let card2 = document.querySelector('.card2');
let title = document.querySelector('.title');
const body = document.getElementById('body'); 
const contrudo = document.getElementById('contrudo');
let nada = '';
for (let i=0; i<list.length; i++){
    list[i].onclick = function(){
        let j = 0;
        while (j < list.length){
            list[j++].className = 'list';
        }
        list[i].className = 'list active';
    }
}

menuToggle.onclick = function() {
    console.log('ok')
    menuToggle.classList.toggle('active');
    card2.classList.toggle('active');
}

body.addEventListener('click', (e) =>{
    e.preventDefault();
    nada = '';
    if (e.target.id == "todoEstoque"){
        nada = '';
        nada = `<div id="centro">
        <div class="animate__animated animate__pulse card3 text-center mr-4">
          <div class="row align-items-center">
              <div class="col-md-6">
                <h1 class="mb-4 text-black"><span class="text-black">Todos Funcionários</span></h1>
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
        const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2}`;
        let produtos = '';
        let totalEst = 0;

        if (navigator.onLine == true){
            
            fetch(url3)
            .then(res => res.json())
            .then(content => { 
                const data = content[0]['funcionarios'];
                totalEst += parseInt(data.length);
                // console.log(content[0]['categoria'][0]['stock'][0]['produto']);
                console.log(content[0]['funcionarios'][0]);
                for (var i = 0; i < data.length; i++){

                        let imag = content[0]['funcionarios'][i]['img'];
                        let idd = content[0]['funcionarios'][i]['_id'];
                        let avenida = content[0]['funcionarios'][i]['avenida'];
                        let cidade = content[0]['funcionarios'][i]['cidade'];
                        let contacto = content[0]['funcionarios'][i]['contacto'];
                        let dataAdmissao = content[0]['funcionarios'][i]['dataAdmissao'];
                        let dataDesligamento = content[0]['funcionarios'][i]['dataDesligamento'];
                        let dataNascimento = content[0]['funcionarios'][i]['dataNascimento'];
                        let designation = content[0]['funcionarios'][i]['designation'];
                        let email = content[0]['funcionarios'][i]['email'];
                        let genero = content[0]['funcionarios'][i]['genero'];
                        let nomeFuncionario = content[0]['funcionarios'][i]['nomeFuncionario'];
                        let provincia = content[0]['funcionarios'][i]['provincia'];
                        let tempoEmpresa = content[0]['funcionarios'][i]['tempoEmpresa'];
                        
                        produtos += `<div class="col-md-6 col-xl-4 mb-4">
                        <div class="card text-center">
                            <div class="card-body text-black">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2 text-center">                                        
                                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1 text-center">
                                            <img class="imagemTamanho" src="${imag}" alt="Imagem Estoque" id="${idd}">
                                        </div>
                                        <hr class="text-black">
                                        <div class="h5 mb-0 font-weight-bold text-gray-800 text-center">${nomeFuncionario}</div>
                                        <br>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Email: "+email}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Contacto: "+contacto}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Gênero: "+ genero}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Designação: "+ designation}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Provincia: "+ provincia}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Cidade: "+ cidade}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Avenida: "+avenida}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Data Admissão: "+ dataAdmissao}</h6></div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Data Desligamento: "+dataDesligamento}</h6></div>
                                        
                                    </div>
                                </div>
                            </div>          
                        </div>
                    </div> `;       
                    
                }

                produtodd.innerHTML = produtos;
                totalEstoque.innerHTML = totalEst;
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
    }

    if (e.target.id == "addEstoque"){
      nada = '';
      nada = `<div id="centro">
      <div class="animate__animated animate__pulse card3 text-center mr-4">
        <div class="row align-items-center">
            <div class="col-md-6">
              <h1 class="mb-4 text-black"><span class="text-black">Adicionar Funcionário</span></h1>
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
                    <a href="#" class="text-center btn btn-outline-dark btn-lg btn-block" id="comCategoria">Administrador</a>   
                </div>
            </div>
          <div class="col-md-4 col-xl-5 mb-4">
            <div class="card text-center">
                <a href="#" class="text-center btn btn-outline-dark btn-lg btn-block" id="semCategoria">Operador</a>
              </div>          
            </div>
          </div>         
        </div>
    </div>
    
    `;
      contrudo.innerHTML = nada;
  }

    if (e.target.id == "comCategoria"){
        nada = '';
        nada = `<div id="centro">
        <div class="animate__animated animate__pulse card3 text-center mr-4">
        <div class="row align-items-center">
            <div class="col-md-6">
                <h1 class="mb-4 text-black"><span class="text-black">Adicionar Funcionario</span></h1>
                <h3 class="mb-4 text-black">Administradores da Empresa</h3>
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
                    <a href="#" class="text-center btn btn-outline-dark btn-lg btn-block" id="comCategoria">Administrador</a>   
                </div>
            </div>
            <div class="col-md-4 col-xl-5 mb-4">
            <div class="card text-center">
                <a href="#" class="text-center btn btn-outline-dark btn-lg btn-block" id="semCategoria">Operador</a>
                </div>          
            </div>
            </div>         
        </div>
    </div>
    <form class="row g-3 card4Estoque">
        <div class="col-md-4">
            <label for="validationDefault01" class="form-label text-black">Nome do Funcionario</label>
            <input type="text" class="form-control transparent-input text-black" id="validationDefault01"  required>
        </div>
        <div class="col-md-4">
        <label for="validationDefault02" class="form-label text-black">Email</label>
        <input type="email" class="form-control transparent-input" id="validationDefault02" required>
        </div>
        <div class="col-md-4">
        <label for="validationDefault02" class="form-label text-black">Senha</label>
        <input type="password" class="form-control transparent-input" id="validationDefault02" required>
        </div>
        <div class="col-md-4 mt-4">
        <label for="validationDefaultUsername" class="form-label text-black">Verificar Senha</label>
        <div class="input-group">
            <input type="password" class="form-control transparent-input text-black" id="validationDefaultUsername" required>
        </div>
        </div>
        <div class="col-md-4 mt-4">
        <label for="validationDefault03" class="form-label text-black">Data Nascimento</label>
        <input type="date" class="form-control transparent-input text-black" id="validationDefault03" required>
        </div>
        
        <div class="col-md-4 mt-4">
        <label for="validationDefault05" class="form-label text-black">Avenida</label>
        <input type="text" class="form-control transparent-input" id="validationDefault05" required>
        </div>
        <div class="col-md-4 mt-4">
        <label for="validationDefault05" class="form-label text-black">Cidade</label>
        <input type="text" class="form-control transparent-input" id="validationDefault05" required>
        </div>
        <div class="col-md-4 mt-4">
        <label for="validationDefault05" class="form-label text-black">Contacto</label>
        <input type="number" class="form-control transparent-input" id="validationDefault05" required>
        </div>
        <div class="col-md-4 mt-4">
        <label for="validationDefault04" class="form-label text-black">Provincia</label>
        <select class="form-select" id="validationDefault04 text-black" required>
            <option selected disabled value="">Maputo (cidade)</option>
            <option>Maputo (cidade)</option>
            <option>Maputo</option>
            <option>Cabo Delgado</option>
            <option>Gaza</option>
            <option>Inhambane</option>
            <option>Manica</option>
            <option>Nampula</option>
            <option>Niassa</option>
            <option>Sofala</option>
            <option>Tete</option>
            <option>Zambézia</option>
        </select>
        </div>
        
        <div class="col-12 mt-4 text-center">
        <button class="text-center btn btn-outline-dark btn-lg btn-block" type="submit">Adicionar</button>
        </div>
    </form>
    `;
        contrudo.innerHTML = nada;
    }

    if (e.target.id == "semCategoria"){
        nada = '';
        nada = `<div id="centro">
        <div class="animate__animated animate__pulse card3 text-center mr-4">
        <div class="row align-items-center">
            <div class="col-md-6">
                <h1 class="mb-4 text-black"><span class="text-black">Adicionar Funcionario</span></h1>
                <h3 class="mb-4 text-black">Administradores da Empresa</h3>
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
                    <a href="#" class="text-center btn btn-outline-dark btn-lg btn-block" id="comCategoria">Administrador</a>   
                </div>
            </div>
            <div class="col-md-4 col-xl-5 mb-4">
            <div class="card text-center">
                <a href="#" class="text-center btn btn-outline-dark btn-lg btn-block" id="semCategoria">Operador</a>
                </div>          
            </div>
            </div>         
        </div>
    </div>
    <form class="row g-3 card4Estoque">
        <div class="col-md-4">
            <label for="validationDefault01" class="form-label text-black">Nome do Funcionario</label>
            <input type="text" class="form-control transparent-input text-black" id="validationDefault01"  required>
        </div>
        <div class="col-md-4">
        <label for="validationDefault02" class="form-label text-black">Email</label>
        <input type="email" class="form-control transparent-input" id="validationDefault02" required>
        </div>
        <div class="col-md-4">
        <label for="validationDefault02" class="form-label text-black">Senha</label>
        <input type="password" class="form-control transparent-input" id="validationDefault02" required>
        </div>
        <div class="col-md-4 mt-4">
        <label for="validationDefaultUsername" class="form-label text-black">Verificar Senha</label>
        <div class="input-group">
            <input type="password" class="form-control transparent-input text-black" id="validationDefaultUsername" required>
        </div>
        </div>
        <div class="col-md-4 mt-4">
        <label for="validationDefault03" class="form-label text-black">Data Nascimento</label>
        <input type="date" class="form-control transparent-input text-black" id="validationDefault03" required>
        </div>
        
        <div class="col-md-4 mt-4">
        <label for="validationDefault05" class="form-label text-black">Avenida</label>
        <input type="text" class="form-control transparent-input" id="validationDefault05" required>
        </div>
        <div class="col-md-4 mt-4">
        <label for="validationDefault05" class="form-label text-black">Cidade</label>
        <input type="text" class="form-control transparent-input" id="validationDefault05" required>
        </div>
        <div class="col-md-4 mt-4">
        <label for="validationDefault05" class="form-label text-black">Contacto</label>
        <input type="number" class="form-control transparent-input" id="validationDefault05" required>
        </div>
        <div class="col-md-4 mt-4">
        <label for="validationDefault04" class="form-label text-black">Provincia</label>
        <select class="form-select" id="validationDefault04 text-black" required>
            <option selected disabled value="">Maputo (cidade)</option>
            <option>Maputo (cidade)</option>
            <option>Maputo</option>
            <option>Cabo Delgado</option>
            <option>Gaza</option>
            <option>Inhambane</option>
            <option>Manica</option>
            <option>Nampula</option>
            <option>Niassa</option>
            <option>Sofala</option>
            <option>Tete</option>
            <option>Zambézia</option>
        </select>
        </div>
        
        <div class="col-12 mt-4 text-center">
        <button class="text-center btn btn-outline-dark btn-lg btn-block" type="submit">Adicionar</button>
        </div>
    </form>
    `;
        contrudo.innerHTML = nada;
    }

    if (e.target.id == "edtEstoque"){
        nada = '';
        nada = `<div id="centro">
        <div class="animate__animated animate__pulse card3 text-center mr-4">
          <div class="row align-items-center">
              <div class="col-md-6">
                <h1 class="mb-4 text-black"><span class="text-black">Editar Funcionário</span></h1>
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
    </div>`;
    contrudo.innerHTML = nada;
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
            const data = content[0]['funcionarios'];
            totalEst += parseInt(data.length);
            // console.log(content[0]['categoria'][0]['stock'][0]['produto']);
            console.log(content[0]['funcionarios'][0]);
            for (var i = 0; i < data.length; i++){

                    let imag = content[0]['funcionarios'][i]['img'];
                    let idd = content[0]['funcionarios'][i]['_id'];
                    let avenida = content[0]['funcionarios'][i]['avenida'];
                    let cidade = content[0]['funcionarios'][i]['cidade'];
                    let contacto = content[0]['funcionarios'][i]['contacto'];
                    let dataAdmissao = content[0]['funcionarios'][i]['dataAdmissao'];
                    let dataDesligamento = content[0]['funcionarios'][i]['dataDesligamento'];
                    let dataNascimento = content[0]['funcionarios'][i]['dataNascimento'];
                    let designation = content[0]['funcionarios'][i]['designation'];
                    let email = content[0]['funcionarios'][i]['email'];
                    let genero = content[0]['funcionarios'][i]['genero'];
                    let nomeFuncionario = content[0]['funcionarios'][i]['nomeFuncionario'];
                    let provincia = content[0]['funcionarios'][i]['provincia'];
                    let tempoEmpresa = content[0]['funcionarios'][i]['tempoEmpresa'];
                    
                    produtos += `<div class="col-md-6 col-xl-4 mb-4">
                    <div class="card text-center">
                        <div class="card-body text-black">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2 text-center">                                        
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1 text-center">
                                        <img class="imagemTamanho" src="${imag}" alt="Imagem Estoque" id="${idd}">
                                    </div>
                                    <hr class="text-black">
                                    <div class="h5 mb-0 font-weight-bold text-gray-800 text-center">${nomeFuncionario}</div>
                                    <br>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Email: "+email}</h6></div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Contacto: "+contacto}</h6></div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Gênero: "+ genero}</h6></div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Designação: "+ designation}</h6></div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Provincia: "+ provincia}</h6></div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Cidade: "+ cidade}</h6></div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Avenida: "+avenida}</h6></div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Data Admissão: "+ dataAdmissao}</h6></div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Data Desligamento: "+dataDesligamento}</h6></div>
                                    
                                </div>
                            </div>
                        </div>          
                    </div>
                </div> `;       
                
            }

            produtodd.innerHTML = produtos;
            totalEstoque.innerHTML = totalEst;
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
    }

    if (e.target.id == "removEstoque"){
        nada = '';
        nada = `<div id="centro">
        <div class="animate__animated animate__pulse card3 text-center mr-4">
          <div class="row align-items-center">
              <div class="col-md-6">
                <h1 class="mb-4 text-black"><span class="text-black">Remover Funcionário</span></h1>
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
    </div>`;
    contrudo.innerHTML = nada;
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
            const data = content[0]['funcionarios'];
            totalEst += parseInt(data.length);
            // console.log(content[0]['categoria'][0]['stock'][0]['produto']);
            console.log(content[0]['funcionarios'][0]);
            for (var i = 0; i < data.length; i++){

                    let imag = content[0]['funcionarios'][i]['img'];
                    let idd = content[0]['funcionarios'][i]['_id'];
                    let avenida = content[0]['funcionarios'][i]['avenida'];
                    let cidade = content[0]['funcionarios'][i]['cidade'];
                    let contacto = content[0]['funcionarios'][i]['contacto'];
                    let dataAdmissao = content[0]['funcionarios'][i]['dataAdmissao'];
                    let dataDesligamento = content[0]['funcionarios'][i]['dataDesligamento'];
                    let dataNascimento = content[0]['funcionarios'][i]['dataNascimento'];
                    let designation = content[0]['funcionarios'][i]['designation'];
                    let email = content[0]['funcionarios'][i]['email'];
                    let genero = content[0]['funcionarios'][i]['genero'];
                    let nomeFuncionario = content[0]['funcionarios'][i]['nomeFuncionario'];
                    let provincia = content[0]['funcionarios'][i]['provincia'];
                    let tempoEmpresa = content[0]['funcionarios'][i]['tempoEmpresa'];
                    
                    produtos += `<div class="col-md-6 col-xl-4 mb-4">
                    <div class="card text-center">
                        <div class="card-body text-black">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2 text-center">                                        
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1 text-center">
                                        <img class="imagemTamanho" src="${imag}" alt="Imagem Estoque" id="${idd}">
                                    </div>
                                    <hr class="text-black">
                                    <div class="h5 mb-0 font-weight-bold text-gray-800 text-center">${nomeFuncionario}</div>
                                    <br>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Email: "+email}</h6></div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Contacto: "+contacto}</h6></div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Gênero: "+ genero}</h6></div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Designação: "+ designation}</h6></div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Provincia: "+ provincia}</h6></div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Cidade: "+ cidade}</h6></div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Avenida: "+avenida}</h6></div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Data Admissão: "+ dataAdmissao}</h6></div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800 text-left"><h6>${"Data Desligamento: "+dataDesligamento}</h6></div>
                                    
                                </div>
                            </div>
                        </div>          
                    </div>
                </div> `;       
                
            }

            produtodd.innerHTML = produtos;
            totalEstoque.innerHTML = totalEst;
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
    }




    
    console.log(e.target.id);

});