const tablerrr = document.getElementById('myTableeee');
const myTabGenero = document.getElementById('myTabGenero');
const myTabEtaria = document.getElementById('myTabEtaria');
const myTabTEmpresa = document.getElementById('myTabTEmpresa');
const myTabTEmpresaD = document.getElementById('myTabTEmpresaD');
const myTabTEmpresaD2 = document.getElementById('myTabTEmpresaD2');
const myTabTEmpresaD3 = document.getElementById('myTabTEmpresaD3');
colabora = '';
titulo = '';
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
    "scrollY": 150,
    });
});

$(document).ready(function () {
    $('#tabbb2').DataTable({
    "scrollX": true,
    "scrollY": 200,
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
    "scrollY": 100,
    });
});

$(document).ready(function () {
    $('#tabbb7').DataTable({
    "scrollX": true,
    "scrollY": 300,
    });
});