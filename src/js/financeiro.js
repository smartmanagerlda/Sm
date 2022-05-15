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
let colabora = '';
fetch(url5)
        .then(res => res.json())
        .then(content => {           
            const data = content[0]['financeiro'];
            for (var i = 0; i < data.length; i++){
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
                if (ress[i].salario == ""){
                    salario2 = "0";
                }else{
                    salario2 = ress[i].salario;
                }
                if (ress[i].proLabore == ""){
                    proLabore2 = "0";
                }else{
                    proLabore2 = ress[i].proLabore;
                }
                if (ress[i].ferias == ""){
                    ferias2 = "0";
                }else{
                    ferias2 = ress[i].ferias;
                }
                if (ress[i].horasExtras == ""){
                    horasExtras2 = "0";
                }else{
                    horasExtras2 = ress[i].horasExtras;
                }
                if (ress[i].decimoTerceiro == ""){
                    decimoTerceiro2 = "0";
                }else{
                    decimoTerceiro2 = ress[i].decimoTerceiro;
                }
                if (ress[i].licencas == ""){
                    licencas2 = "0";
                }else{
                    licencas2 = ress[i].licencas;
                }

                if (ress[i].encargos == ""){
                    encargos2 = "0";
                }else{
                    encargos2 = ress[i].encargos;
                }
                if (ress[i].outros == ""){
                    vTransporte2 = "0";
                }else{
                    vTransporte2 = ress[i].outros;
                }
                if (ress[i].vTransporte == ""){
                    vRefeicao2 = "0";
                }else{
                    vRefeicao2 = ress[i].vTransporte;
                }
                if (ress[i].vRefeicao == ""){
                    vAlimentacao2 = "0";
                }else{
                    vAlimentacao2 = ress[i].vRefeicao;
                }
                if (ress[i].vAlimentacao == ""){
                    planoSaude2 = "0";
                }else{
                    planoSaude2 = ress[i].vAlimentacao;
                }
                if (ress[i].planoSaude == ""){
                    planoOdontologico2 = "0";
                }else{
                    planoOdontologico2 = ress[i].planoSaude;
                }
                if (ress[i].planoOdontologico == ""){
                    ferias2 = "0";
                }else{
                    ferias2 = ress[i].planoOdontologico;
                }
                if (ress[i].segVida == ""){
                    segVida2 = "0";
                }else{
                    segVida2 = ress[i].segVida;
                }
                if (ress[i].outros2 == ""){
                    outros22 = "0";
                }else{
                    outros22 = ress[i].outros2;
                }
                let total1 = parseInt(salario2)+parseInt(proLabore2)+parseInt(ferias2)+
                parseInt(horasExtras2)+parseInt(decimoTerceiro2)+parseInt(licencas2)+
                parseInt(encargos2)+parseInt(outros2);
                let total2 = parseInt(vTransporte2)+parseInt(vRefeicao2)+parseInt(vAlimentacao2)+
                parseInt(planoSaude2)+parseInt(planoOdontologico2)+parseInt(segVida2)+
                parseInt(outros22);
                newCell1.innerHTML = i+1;
                newCell2.innerHTML = `<div>${ress[i].mes}</div>`;
                newCell3.innerHTML = `<div>${ress[i].ano}</div>`;
                newCell4.innerHTML = `<div>00,00</div>`;
                newCell5.innerHTML = `<div class="salario2" id=${ress[i]._id}>${String(salario2).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00"}</div>`;
                newCell6.innerHTML = `<div class="proLabore2" id=${ress[i]._id}>${String(proLabore2).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00"}</div>`;
                newCell7.innerHTML = `<div class="ferias2" id=${ress[i]._id}>${String(ferias2).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00"}</div>`;
                newCell8.innerHTML = `<div class="horasExtras2" id=${ress[i]._id}>${String(horasExtras2).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00"}</div>`;
                newCell9.innerHTML = `<div class="decimoTerceiro2" id=${ress[i]._id}>${ String(decimoTerceiro2).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00"}</div>`;
                newCell10.innerHTML = `<div class="licencas2" id=${ress[i]._id}>${ String(licencas2).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00"}</div>`;
                newCell11.innerHTML = `<div class="encargos2" id=${ress[i]._id}>${ String(encargos2).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00"}</div>`;
                newCell12.innerHTML = `<div class="outros2" id=${ress[i]._id}>${ String(outros2).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00"}</div>`;
                newCell13.innerHTML = `<div class="total1" id=${ress[i]._id}>${ String(total1).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00"}</div>`;
                newCell14.innerHTML = `<div class="vTransporte2" id=${ress[i]._id}>${ String(vTransporte2).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00"}</div>`;
                newCell15.innerHTML = `<div class="vRefeicao2" id=${ress[i]._id}>${ String(vRefeicao2).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00"}</div>`;
                newCell16.innerHTML = `<div class="vAlimentacao2" id=${ress[i]._id}>${ String(vAlimentacao2).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00"}</div>`;
                newCell17.innerHTML = `<div class="planoSaude2" id=${ress[i]._id}>${ String(planoSaude2).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00"}</div>`;
                newCell18.innerHTML = `<div class="planoOdontologico2" id=${ress[i]._id}>${ String(planoOdontologico2).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00"}</div>`;
                newCell19.innerHTML = `<div class="segVida2" id=${ress[i]._id}>${ String(segVida2).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00"}</div>`;
                newCell20.innerHTML = `<div class="outros22" id=${ress[i]._id}>${ String(outros22).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00"}</div>`;
                newCell21.innerHTML = `<div class="total2" id=${ress[i]._id}>${ String(total2).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00"}</div>`;
            }

            addAusências.addEventListener('click', (e) =>{
                e.preventDefault();
                $('#novaInformacao').modal('show');
            });
            let titulo = '';
            myFinanceiro.addEventListener('click', (e) =>{
                e.preventDefault();
                if(e.target.className == "outros22") {
                    document.getElementById('modelTitle4').innerHTML = 'Outros';
                    $('#modelFinaceiro').modal('show'); 
                }
                if(e.target.className == "segVida2") {
                    document.getElementById('modelTitle4').innerHTML = 'Seguro de Vida';
                    $('#modelFinaceiro').modal('show'); 
                }
                if(e.target.className == "planoOdontologico2") {
                    document.getElementById('modelTitle4').innerHTML = 'Plano Odontologico';
                    $('#modelFinaceiro').modal('show'); 
                }
                if(e.target.className == "planoSaude2") {
                    document.getElementById('modelTitle4').innerHTML = 'Plano de Saude';
                    $('#modelFinaceiro').modal('show'); 
                }
                if(e.target.className == "vAlimentacao2") {
                    document.getElementById('modelTitle4').innerHTML = 'Vale Alimentacao';
                    $('#modelFinaceiro').modal('show'); 
                }
                if(e.target.className == "vRefeicao2") {
                    document.getElementById('modelTitle4').innerHTML = 'Vale Refeicao';
                    $('#modelFinaceiro').modal('show'); 
                }
                if(e.target.className == "vTransporte2") {
                    document.getElementById('modelTitle4').innerHTML = 'Vale Transporte';
                    $('#modelFinaceiro').modal('show'); 
                }
                if(e.target.className == "outros2") {
                    document.getElementById('modelTitle4').innerHTML = 'Outros';
                    $('#modelFinaceiro').modal('show'); 
                }
                if(e.target.className == "encargos2") {
                    document.getElementById('modelTitle4').innerHTML = 'Encargos';
                    $('#modelFinaceiro').modal('show'); 
                }
                if(e.target.className == "licencas2") {
                    document.getElementById('modelTitle4').innerHTML = 'Licencas';
                    $('#modelFinaceiro').modal('show'); 
                }
                if(e.target.className == "decimoTerceiro2") {
                    document.getElementById('modelTitle4').innerHTML = '13º';
                    $('#modelFinaceiro').modal('show'); 
                }
                if(e.target.className == "horasExtras2") {
                    document.getElementById('modelTitle4').innerHTML = 'Horas Extras';
                    $('#modelFinaceiro').modal('show'); 
                }
                if(e.target.className == "salario2") {
                    document.getElementById('modelTitle4').innerHTML = 'Salario';
                    $('#modelFinaceiro').modal('show'); 
                }
                if(e.target.className == "proLabore2") {
                    document.getElementById('modelTitle4').innerHTML = 'Pro-labore';
                    $('#modelFinaceiro').modal('show'); 
                }
                if(e.target.className == "ferias2") {
                    document.getElementById('modelTitle4').innerHTML = 'Ferias';
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



