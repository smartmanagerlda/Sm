const postsList = document.getElementById('postList');
const titleValue = document.getElementById('title-value');
const dataAg = document.getElementById('date-value');
const dataAgHora = document.getElementById('dateTime-value');
const tipoServico = document.getElementById('tipoServico-value');
const funcionário = document.getElementById('funcionário-value');
const addPostForm = document.querySelector('.add-post-form');
const editPostForm = document.querySelector('.edit-post-form');
const titleValue2 = document.getElementById('title-value2');
const dataValue2 = document.getElementById('data-value2');
const horaValue2 = document.getElementById('hora-value2');
const tipoServicoValue2 = document.getElementById('tipoServico-value2');
const funcionarioValue2 = document.getElementById('funcionario-value2');
const lFuncionario = document.getElementById('funcionário-value');
const lServico = document.getElementById('tipoServico-value');
let idD = '';
let nomesLista = '';
let nomesLista2 = '';
let funcionarLista = [];
let servicoLista = [];
const token = localStorage.getItem('token');
let h = {'authorization': `Bearer ${token}`, 'Content-Type':'application/json'}
const empresa2 = localStorage.getItem('empresa');
const url = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2}`;

function estrategias(){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let output = '';        
        console.log(data[0]);
        let listEstrategias = data[0]['agenda'];
        let listEstrategias1 = data[0]['funcionarios'];
        let listServicos = data[0]['servicos'][0]['stock'];
        for (var i = 0; i < listEstrategias.length; i++){
            let idd = data[0]['agenda'][i]['_id'];
            output += `<div class="col-md-6 col-xl-4 mb-4">
            <div class="card text-center">
              <div class="card-body text-black">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-black text-uppercase mb-1" id=${'titulo'+idd}>${data[0]['agenda'][i]['titulo']}</div>
                      <div class="h5 mb-0 font-weight-bold text-black text-left"><h6 id=${'data'+idd}>${"Data: "+data[0]['agenda'][i]['dataV']}</h6></div>
                      <div class="h5 mb-0 font-weight-bold text-black text-left"><h6 id=${'hora'+idd}>${"Hora: "+data[0]['agenda'][i]['hora']}</h6></div>
                      <div class="h5 mb-0 font-weight-bold text-black text-left"><h6 id=${'tipoServico'+idd}>${"Tipo Serviço: "+data[0]['agenda'][i]['tipoServico']}</h6></div>
                      <div class="h5 mb-0 font-weight-bold text-black text-left"><h6 id=${'funcionario'+idd}>${"Funcionário: "+data[0]['agenda'][i]['funcionario']}</h6></div>
                      <a href="#" class=${idd} id="editarTt">Editar</a>
                  </div>    
              </div>
              </div>          
            </div>
          </div>`;
        }
        for (var i = 0; i < listEstrategias1.length; i++){
            funcionarLista.push(data[0]['funcionarios'][i]['nomeFuncionario'])
        }
       
        for (var i = 0; i < listServicos.length; i++){
            servicoLista.push(data[0]['servicos'][0]['stock'][i]['nomeProduto'])
            
        }
        funcionarLista.forEach(rec => {
            nomesLista +=`
            <option>${rec}</option>       
            `;
        })
        
        servicoLista.forEach(rec => {
            nomesLista2 +=`
            <option>${rec}</option>       
            `;
        })
        lFuncionario.innerHTML = nomesLista; 
        lServico.innerHTML = nomesLista2; 
        postsList.innerHTML = output;
        tipoServicoValue2.innerHTML = nomesLista2; 

        const editarTt = document.getElementById('editarTt')
        
        postsList.addEventListener('click', (e) => {
            console.log(e.target.className);
            idD = e.target.className;
            let titulo = document.getElementById('titulo'+idD);
            let dta = document.getElementById('data'+idD);
            let hora = document.getElementById('hora'+idD);
            let tipoServico = document.getElementById('tipoServico'+idD);
            let funcionario = document.getElementById('funcionario'+idD);
            $('#estragiasModel').modal('show');
            console.log(titulo.innerHTML);
            titleValue2.value = titulo.innerHTML;
            dataValue2.value = dta.innerHTML;
            horaValue2.value = hora.innerHTML;
            // tipoServicoValue2.value = tipoServico.innerHTML;
            funcionarioValue2.innerHTML = nomesLista;
    });
});

editPostForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Submetido');
    console.log(horaValue2.value);
    if(titleValue2.value){
        const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/agenda/titulo';
        let pora2 = new Request(urlLogIn3, {
        method: 'PATCH',
        headers: h,
        body: JSON.stringify({
            "titulo": `${titleValue2.value}`,
            "id":`${idD}`
            })                        
        });
        fetch(pora2)
        .then(ress => ress.json())
        .then(data5 => {
            $('#estragiasModel').modal('hide');
            estrategias();
        });
    }
    if(dataValue2.value){
        const urlLogIn = 'https://stocksmanager1.herokuapp.com/agenda/dataV';
        let pora = new Request(urlLogIn, {
        method: 'PATCH',
        headers: h,
        body: JSON.stringify({
            "dataV": `${dataValue2.value}`,
            "id":`${idD}`
            })                        
        });
        fetch(pora)
        .then(ress => ress.json())
        .then(data5 => {
            $('#estragiasModel').modal('hide');
            estrategias();
        });
    }
    if(horaValue2.value){
        const urlLogIn2 = 'https://stocksmanager1.herokuapp.com/agenda/hora';
        let pora1 = new Request(urlLogIn2, {
        method: 'PATCH',
        headers: h,
        body: JSON.stringify({
            "hora": `${horaValue2.value}`,
            "id":`${idD}`
            })                        
        });
        fetch(pora1)
        .then(ress => ress.json())
        .then(data5 => {
            $('#estragiasModel').modal('hide');
            estrategias();
        });
    }
    if(tipoServicoValue2.value){
        const urlLogIn1 = 'https://stocksmanager1.herokuapp.com/agenda/tipoServico';
        let pora3 = new Request(urlLogIn1, {
        method: 'PATCH',
        headers: h,
        body: JSON.stringify({
            "tipoServico": `${tipoServicoValue2.value}`,
            "id":`${idD}`
            })                        
        });
        fetch(pora3)
        .then(ress => ress.json())
        .then(data5 => {
            $('#estragiasModel').modal('hide');
            estrategias();
        });
    }
    if(funcionarioValue2.value){
        const urlLogIn4 = 'https://stocksmanager1.herokuapp.com/agenda/funcionario';
        let pora4 = new Request(urlLogIn4, {
        method: 'PATCH',
        headers: h,
        body: JSON.stringify({
            "funcionario": `${funcionarioValue2.value}`,
            "id":`${idD}`
            })                        
        });
        fetch(pora4)
        .then(ress => ress.json())
        .then(data5 => {
            $('#estragiasModel').modal('hide');
            estrategias();
        });
    }       
   
});



addPostForm.addEventListener('submit', (e) => {
    if (dataAgHora.value) {
        e.preventDefault();
        const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/agenda';
        let pora2 = new Request(urlLogIn3, {
        method: 'PATCH',
        headers: h,
        body: JSON.stringify({
            "titulo": `${titleValue.value}`,
            "dataV": `${dataAg.value}`,
            "hora": `${dataAgHora.value}`,
            "tipoServico": `${tipoServico.value}`,
            "funcionario": `${funcionário.value}`
            })                        
        });
        fetch(pora2)
        .then(ress => ress.json())
        .then(data5 => {
            titleValue.value = '';
            dataAg.value = '';
            dataAgHora.value = '';
            estrategias()
            
        })
}
});
}

estrategias();