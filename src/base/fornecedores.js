const myAltTab = document.getElementById('myAltTab');
const empresa2q = localStorage.getItem('empresa');
const altFuncionariorLista = document.getElementById('altFuncionariorLista');
const addSocio = document.getElementById('addSocio');
const modelTitle = document.getElementById('modelTitle');
const nome = document.getElementById('nome-value2');
const endereco = document.getElementById('endereco-value2');
const cidade = document.getElementById('cidade-value2');
const provincia = document.getElementById('provincia-value2');
const telefone = document.getElementById('telefone-value2');
const cota = document.getElementById('cota-value2');
const socioForm = document.querySelector('.socio-post-form');
const edtForm = document.querySelector('.edit-post-form');
const edtValue = document.getElementById('title-value2');
const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2q}`;
const token = localStorage.getItem('token');
let h = {'authorization': `Bearer ${token}`, 'Content-Type':'application/json'}
let iDd = '';
let actual = '';
function sociedade() {
    fetch(url3)
        .then(res => res.json())
        .then(content => {           
            const data = content[0]['fornecedores'];
            console.log(content[0]);
            for (var i = 0; i < data.length; i++){

                var newRow = myAltTab.insertRow();
                var newCell1 = newRow.insertCell(0);
                var newCell2 = newRow.insertCell(1);
                var newCell3 = newRow.insertCell(2);
                var newCell4 = newRow.insertCell(3);
                var newCell5 = newRow.insertCell(4);
                var newCell6 = newRow.insertCell(5);
                var newCell7 = newRow.insertCell(6);
                newCell1.innerHTML = `<div>${i+1}</div>`;
                newCell2.innerHTML = `<div class="nomeSocio" id=${content[0]['fornecedores'][i]._id}>${content[0]['fornecedores'][i].nomeCliente}</div>`;
                newCell3.innerHTML = `<div class="endereco" id=${content[0]['fornecedores'][i]._id}>${content[0]['fornecedores'][i].endereco}</div>`;
                newCell4.innerHTML = `<div class="cidade" id=${content[0]['fornecedores'][i]._id}>${content[0]['fornecedores'][i].cidade}</div>`;
                newCell5.innerHTML = `<div class="provincia" id=${content[0]['fornecedores'][i]._id}>${content[0]['fornecedores'][i].provincia}</div>`;
                newCell6.innerHTML = `<div class="telefone" id=${content[0]['fornecedores'][i]._id}>${content[0]['fornecedores'][i].telefone}</div>`;
                newCell7.innerHTML = `<div class="cota" id=${content[0]['fornecedores'][i]._id}>${content[0]['fornecedores'][i].tipo}</div>`;
            }
            socioForm.addEventListener('submit', (e) =>{
                console.log('OK')
                const urlLogIn = 'https://stocksmanager1.herokuapp.com/fornecedores';
                let pora = new Request(urlLogIn, {
                method: 'PATCH',
                headers: h,
                body: JSON.stringify({
                    "nomeCliente": `${nome.value}`,
                    "endereco":`${endereco.value}`,
                    "cidade": `${cidade.value}`,
                    "provincia":`${provincia.value}`,
                    "telefone": `${telefone.value}`,
                    "tipo":'Activo'
                    })                        
                });
                fetch(pora)
                .then(ress => ress.json())
                .then(data5 => {
                    $('#socioModel').modal('hide');
                                      
                })
            })
            edtForm.addEventListener('submit', (e) =>{
                if(actual == "cidade"){
                    console.log(edtValue.value);
                    const urlLogIn = 'https://stocksmanager1.herokuapp.com/fornecedores/cidade';
                    let pora = new Request(urlLogIn, {
                    method: 'PATCH',
                    headers: h,
                    body: JSON.stringify({
                        "cidade": `${edtValue.value}`,
                        "id":`${iDd}`
                        })                        
                    });
                    fetch(pora)
                    .then(ress => ress.json())
                    .then(data5 => {
                        $('#socioModel').modal('hide');
                                        
                    })
                }
                if(actual == "endereco"){
                    console.log(edtValue.value);
                    const urlLogIn = 'https://stocksmanager1.herokuapp.com/fornecedores/endereco';
                    let pora = new Request(urlLogIn, {
                    method: 'PATCH',
                    headers: h,
                    body: JSON.stringify({
                        "endereco": `${edtValue.value}`,
                        "id":`${iDd}`
                        })                        
                    });
                    fetch(pora)
                    .then(ress => ress.json())
                    .then(data5 => {
                        $('#socioModel').modal('hide');
                                        
                    })
                }
                if(actual == "provincia"){
                    console.log(edtValue.value);
                    const urlLogIn = 'https://stocksmanager1.herokuapp.com/fornecedores/provincia';
                    let pora = new Request(urlLogIn, {
                    method: 'PATCH',
                    headers: h,
                    body: JSON.stringify({
                        "provincia": `${edtValue.value}`,
                        "id":`${iDd}`
                        })                        
                    });
                    fetch(pora)
                    .then(ress => ress.json())
                    .then(data5 => {
                        $('#socioModel').modal('hide');
                                        
                    })
                }
                if(actual == "telefone"){
                    console.log(edtValue.value);
                    const urlLogIn = 'https://stocksmanager1.herokuapp.com/fornecedores/telefone';
                    let pora = new Request(urlLogIn, {
                    method: 'PATCH',
                    headers: h,
                    body: JSON.stringify({
                        "telefone": `${edtValue.value}`,
                        "id":`${iDd}`
                        })                        
                    });
                    fetch(pora)
                    .then(ress => ress.json())
                    .then(data5 => {
                        $('#socioModel').modal('hide');
                                        
                    })
                }
                if(actual == "cota"){
                    console.log(edtValue.value);
                    const urlLogIn = 'https://stocksmanager1.herokuapp.com/fornecedores/tipo';
                    let pora = new Request(urlLogIn, {
                    method: 'PATCH',
                    headers: h,
                    body: JSON.stringify({
                        "tipo": `${edtValue.value}`,
                        "id":`${iDd}`
                        })                        
                    });
                    fetch(pora)
                    .then(ress => ress.json())
                    .then(data5 => {
                        $('#socioModel').modal('hide');
                                        
                    })
                }
                if(actual == "nomeSocio"){
                    console.log(edtValue.value);
                    const urlLogIn = 'https://stocksmanager1.herokuapp.com/fornecedores/nomeCliente';
                    let pora = new Request(urlLogIn, {
                    method: 'PATCH',
                    headers: h,
                    body: JSON.stringify({
                        "nomeCliente": `${edtValue.value}`,
                        "id":`${iDd}`
                        })                        
                    });
                    fetch(pora)
                    .then(ress => ress.json())
                    .then(data5 => {
                        $('#socioModel').modal('hide');
                                        
                    })
                }
            });
            myAltTab.addEventListener('click', (e) =>{               
                
                if(e.target.className == "cidade") {
                    actual = e.target.className;
                    console.log(e.target.id)
                    iDd = e.target.id;
                    modelTitle.innerHTML = "Cidade"  
                    $('#todosModel').modal('show'); 
                }
                if(e.target.className == "endereco") {
                    actual = e.target.className;
                    console.log(e.target.id)
                    iDd = e.target.id;
                    modelTitle.innerHTML = "Endereço"  
                    $('#todosModel').modal('show'); 
                }
                if(e.target.className == "provincia") {
                    actual = e.target.className;
                    console.log(e.target.id)
                    iDd = e.target.id;
                    modelTitle.innerHTML = "Provincia"  
                    $('#todosModel').modal('show'); 
                }
                if(e.target.className == "telefone") {
                    actual = e.target.className;
                    console.log(e.target.id)
                    iDd = e.target.id;
                    modelTitle.innerHTML = "Tetefone"  
                    $('#todosModel').modal('show'); 
                }
                if(e.target.className == "cota") {
                    actual = e.target.className;
                    console.log(e.target.id)
                    iDd = e.target.id;
                    modelTitle.innerHTML = "Cota"  
                    $('#todosModel').modal('show'); 
                }
                if(e.target.className == "status1") {
                    actual = e.target.className;
                    console.log(e.target.id)
                    iDd = e.target.id;
                    modelTitle.innerHTML = "Status"  
                    $('#todosModel').modal('show'); 
                }
                if(e.target.className == "nomeSocio") {
                    actual = e.target.className;
                    console.log(e.target.id)
                    iDd = e.target.id;
                    modelTitle.innerHTML = "Nome do Sócio"  
                    $('#todosModel').modal('show'); 
                }
            });
            addSocio.addEventListener('click', (e) =>{
                $('#socioModel').modal('show');
            })
            $(document).ready(function () {
                $('#tabbb').DataTable({
                "scrollX": true,
                "scrollY": 250,
                });
            }); 
            
        });
}

sociedade();
