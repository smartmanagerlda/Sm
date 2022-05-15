
const colaboradorLista = document.getElementById('recrutamentoLista');
const myRecruta = document.getElementById('myRecruta');
const empresa2 = localStorage.getItem('empresa');
const addVaga = document.getElementById('addVaga');
const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2}`;
fetch(url3)
        .then(res => res.json())
        .then(content => {           
            const data = content[0]['funcionarios'];
            for (var i = 0; i < data.length; i++){
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

                newCell1.innerHTML = i+1;
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
                if(ress[i].statusPraxo == ""){
                    statusPraxo = "-";
                }else{
                    statusPraxo = ress[i].statusPraxo;
                }
                if(ress[i].motivoVagaNPreenchida == ""){
                    motivoVagaNPreenchida = "-";
                }else{
                    motivoVagaNPreenchida = ress[i].motivoVagaNPreenchida;
                }
                if(ress[i].motivoAtrazo == ""){
                    motivoAtrazo = "-";
                }else{
                    motivoAtrazo = ress[i].motivoAtrazo;
                }
                if(ress[i].recExterno == ""){
                    recExterno = 0;
                }else{
                    recExterno = ress[i].recExterno;
                }
                if(ress[i].matEscritorio == ""){
                    matEscritorio = 0;
                }else{
                    matEscritorio = ress[i].matEscritorio;
                }
                if(ress[i].tempoRH == ""){
                    tempoRH = 0;
                }else{
                    tempoRH = ress[i].tempoRH;
                }
                if(ress[i].plataformaRec == ""){
                    plataformaRec = 0;
                }else{
                    plataformaRec = ress[i].plataformaRec;
                }
                if(ress[i].headHunter == ""){
                    headHunter = 0;
                }else{
                    headHunter = ress[i].headHunter;
                }
                if(ress[i].outros == ""){
                    outros = 0;
                }else{
                    outros = ress[i].outros;
                }

                if(ress[i].corriculosReceb == ""){
                    corriculosReceb = 0;
                }else{
                    corriculosReceb = ress[i].corriculosReceb;
                }
                if(ress[i].candidatosProcesso == ""){
                    candidatosProcesso = 0;
                }else{
                    candidatosProcesso = ress[i].candidatosProcesso;
                }
                if(ress[i].candQualificados == ""){
                    candQualificados = 0;
                }else{
                    candQualificados = ress[i].candQualificados;
                }
                if(ress[i].candFinalistas == ""){
                    candFinalistas = 0;
                }else{
                    candFinalistas = ress[i].candFinalistas;
                }
                let totall = parseFloat(matEscritorio)+parseFloat(tempoRH)+parseFloat(plataformaRec)+
                parseFloat(recExterno)+parseFloat(headHunter)+parseFloat(outros);
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
                newCell14.innerHTML = `<div class="matEscritorio" id=${ress[i]._id}>${ String(matEscritorio).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00"}</div>`;
                newCell15.innerHTML = `<div class="tempoRH" id=${ress[i]._id}>${ String(tempoRH).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00"}</div>`;
                newCell16.innerHTML = `<div class="plataformaRec" id=${ress[i]._id}>${ String(plataformaRec).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00"}</div>`;
                newCell17.innerHTML = `<div class="recExterno" id=${ress[i]._id}>${ String(recExterno).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00"}</div>`;
                newCell18.innerHTML = `<div class="headHunter" id=${ress[i]._id}>${ String(headHunter).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00"}</div>`;
                newCell19.innerHTML = `<div class="outros" id=${ress[i]._id}>${ String(outros).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00"}</div>`;
                newCell20.innerHTML =  String(totall).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00";
            }
            addVaga.addEventListener('click', (e) =>{
                e.preventDefault();
                $('#novaSeleccao').modal('show');
            })
            myRecruta.addEventListener('click', (e) =>{
                e.preventDefault();
                if(e.target.className == "statusProcesso") {
                    colabora = '';
                    titulo = '';
                    andamentoT.forEach(rec => {
                        console.log(rec)
                        colabora += `<div class="text-center">
                        <h5 class="text-gray-900 mb-4">${rec}</h5>
                    </div>`;
                    });
                    titulo = 'Status do Processo';
                    colaboradorLista.innerHTML = colabora;
                    modelTitle.innerHTML = titulo;          
                    $('#modelrecrutamento').modal('show'); 
                }
                if(e.target.className == "statusPraxo") {
                    colabora = '';
                    titulo = '';
                    statusPrazozz.forEach(rec => {
                        console.log(rec)
                        colabora += `<div class="text-center">
                        <h5 class="text-gray-900 mb-4">${rec}</h5>
                    </div>`;
                    });
                    titulo = 'Status do Prazo';
                    colaboradorLista.innerHTML = colabora;
                    modelTitle.innerHTML = titulo;          
                    $('#modelrecrutamento').modal('show'); 
                }
                if(e.target.className == "motivoAtrazo") {
                    colabora = '';
                    titulo = '';
                    motivosAtrasosContratratacao.forEach(rec => {
                        console.log(rec)
                        colabora += `<div class="text-center">
                        <h5 class="text-gray-900 mb-4">${rec}</h5>
                    </div>`;
                    });
                    titulo = 'Motivo Para Atrazo na Contratação';
                    colaboradorLista.innerHTML = colabora;
                    modelTitle.innerHTML = titulo;          
                    $('#modelrecrutamento').modal('show'); 
                }
                if(e.target.className == "motivoVagaNPreenchida") {
                    colabora = '';
                    titulo = '';
                    motivosFechamentoContratratacao.forEach(rec => {
                        console.log(rec)
                        colabora += `<div class="text-center">
                        <h5 class="text-gray-900 mb-4">${rec}</h5>
                    </div>`;
                    });
                    titulo = 'Motivo Para nao Preenchimento da Vaga';
                    colaboradorLista.innerHTML = colabora;
                    modelTitle.innerHTML = titulo;          
                    $('#modelrecrutamento').modal('show'); 
                }
                if(e.target.className == "outros") {
                    document.getElementById('modelTitle3').innerHTML = 'Outros Custos'
                    $('#modelRecrutamento3').modal('show'); 
                } 
                if(e.target.className == "headHunter") {
                    document.getElementById('modelTitle3').innerHTML = 'Custo HeadHunter'
                    $('#modelRecrutamento3').modal('show'); 
                } 
                if(e.target.className == "recExterno") {
                    document.getElementById('modelTitle3').innerHTML = 'Custo Pelo Recrutamento Externo'
                    $('#modelRecrutamento3').modal('show'); 
                }   
                if(e.target.className == "plataformaRec") {
                    document.getElementById('modelTitle3').innerHTML = 'Custo da Plataforma de Recrutamento'
                    $('#modelRecrutamento3').modal('show'); 
                }
                if(e.target.className == "tempoRH") {
                    document.getElementById('modelTitle3').innerHTML = 'Custo Profissional RH'
                    $('#modelRecrutamento3').modal('show'); 
                }
                if(e.target.className == "corriculosReceb") {
                    document.getElementById('modelTitle3').innerHTML = 'Corriculos Recebidos'
                    $('#modelRecrutamento3').modal('show'); 
                }
                if(e.target.className == "candidatosProcesso") {
                    document.getElementById('modelTitle3').innerHTML = 'Candidatos no Processo'
                    $('#modelRecrutamento3').modal('show'); 
                }
                if(e.target.className == "candQualificados") {
                    document.getElementById('modelTitle3').innerHTML = 'Candidatos Qualificados'
                    $('#modelRecrutamento3').modal('show'); 
                }
                if(e.target.className == "candFinalistas") {
                    document.getElementById('modelTitle3').innerHTML = 'Candidatos Finalistas'
                    $('#modelRecrutamento3').modal('show'); 
                }
            });
            $(document).ready(function () {
                $('#tabbb').DataTable({
                "scrollX": true,
                "scrollY": 200,
                });
            });
            
        });

