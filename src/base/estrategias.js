const postsList = document.getElementById('postList');
const titleValue = document.getElementById('title-value');
const bodyValue = document.getElementById('body-value');
const addPostForm = document.querySelector('.add-post-form');
const editPostForm = document.querySelector('.edit-post-form');
const titleValue2 = document.getElementById('title-value2');
const bodyValue2 = document.getElementById('body-value2');
let output = '';
let idD = '';
const token = localStorage.getItem('token');
let h = {'authorization': `Bearer ${token}`, 'Content-Type':'application/json'}
const empresa2 = localStorage.getItem('empresa');
const url = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2}`;

function estrategias(){
    output = '';
    fetch(url)
    .then(res => res.json())
    .then(data => {
        
        console.log(data[0]['estrategias']);
        let listEstrategias = data[0]['estrategias'];
        for (var i = 0; i < listEstrategias.length; i++){
            let idd = data[0]['estrategias'][i]['_id'];
            output += `
            <div class="col-md-6 col-xl-4 mb-4">
        <div class="card text-center">
          <div class="card-body text-black">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-black text-uppercase mb-1" id=${'titulo'+idd}>${data[0]['estrategias'][i]['titulo']}</div>
                  <div class="h5 mb-0 font-weight-bold text-black"><h6 id=${'corpo'+idd}>${data[0]['estrategias'][i]['corpo']}</h6></div>
                  <a href="#" class=${idd} id="editarTt">Editar</a>
              </div>
          </div>
          </div>          
        </div>
      </div>
        `;
        }
        
        postsList.innerHTML = output;

        const editarTt = document.getElementById('editarTt')
        
        postsList.addEventListener('click', (e) => {
            console.log(e.target.className);
            idD = e.target.className;
            let corpo = document.getElementById('corpo'+idD);
            let titulo = document.getElementById('titulo'+idD);
            $('#estragiasModel').modal('show');
            console.log(corpo.innerHTML);
            console.log(titulo.innerHTML);
            titleValue2.value = titulo.innerHTML;
            bodyValue2.value = corpo.innerHTML;
            
            // const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/estrategias';
            // let pora2 = new Request(urlLogIn3, {
            // method: 'PATCH',
            // headers: h,
            // body: JSON.stringify({
            //     "titulo": `${titleValue.value}`,
            //     "corpo": `${bodyValue.value}`
            //     })                        
            // });
            // fetch(pora2)
            // .then(ress => ress.json())
            // .then(data5 => {
            //     titleValue.value = '';
            //     bodyValue.value = '';
            //     estrategias()
                
            // })
    });
});
}

editPostForm.addEventListener('submit', (e) => {
    console.log(idD)
    console.log(titleValue2.value);
    console.log(bodyValue2.value);
    e.preventDefault();
    const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/estrategias/corpo';
    let pora2 = new Request(urlLogIn3, {
    method: 'PATCH',
    headers: h,
    body: JSON.stringify({
        "corpo": `${bodyValue2.value}`,
        "id":`${idD}`
        })                        
    });
    fetch(pora2)
    .then(ress => ress.json())
    .then(data5 => {
        $('#estragiasModel').modal('hide');
        estrategias()
        
    })
    const urlLogIn = 'https://stocksmanager1.herokuapp.com/estrategias/titulo';
    let pora = new Request(urlLogIn, {
    method: 'PATCH',
    headers: h,
    body: JSON.stringify({
        "titulo": `${titleValue2.value}`,
        "id":`${idD}`
        })                        
    });
    fetch(pora)
    .then(ress => ress.json())
    .then(data5 => {
        $('#estragiasModel').modal('hide');
        
    })
});

addPostForm.addEventListener('submit', (e) => {
    if (bodyValue.value) {
    e.preventDefault();
    const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/estrategias';
    let pora2 = new Request(urlLogIn3, {
    method: 'PATCH',
    headers: h,
    body: JSON.stringify({
        "titulo": `${titleValue.value}`,
        "corpo": `${bodyValue.value}`
        })                        
    });
    fetch(pora2)
    .then(ress => ress.json())
    .then(data5 => {
        titleValue.value = '';
        bodyValue.value = '';
        estrategias()
        
    })
}
});

estrategias();