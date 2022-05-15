const myAltTab = document.getElementById('myAltTab');
const myAltTab2 = document.getElementById('myAltTab2');
const empresa2q = localStorage.getItem('empresa');
const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2q}`;
const token = localStorage.getItem('token');
let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
let iDd = '';
let actual = '';
function sociedade() {
    fetch(url3)
        .then(res => res.json())
        .then(content => {
            const data = content[0]['logs'];
            const data2 = content[0]['logsVenda'];
            console.log(content[0]);
            for (var i = 0; i < data.length; i++) {

                var newRow = myAltTab.insertRow();
                var newCell1 = newRow.insertCell(0);
                var newCell2 = newRow.insertCell(1);
                var newCell3 = newRow.insertCell(2);
                newCell1.innerHTML = `<div>${content[0]['logs'][i].nomeFuncionario}</div>`;
                newCell2.innerHTML = `<div class="nomeSocio">${content[0]['logs'][i].historico}</div>`;
                newCell3.innerHTML = `<div class="endereco">${content[0]['logs'][i].data}</div>`;
            }
            for (var i = 0; i < data2.length; i++) {

                var newRow = myAltTab2.insertRow();
                var newCell1 = newRow.insertCell(0);
                var newCell2 = newRow.insertCell(1);
                var newCell3 = newRow.insertCell(2);
                newCell1.innerHTML = `<div>${content[0]['logsVenda'][i].nomeFuncionario}</div>`;
                newCell2.innerHTML = `<div class="nomeSocio">${content[0]['logsVenda'][i].historico}</div>`;
                newCell3.innerHTML = `<div class="endereco">${content[0]['logsVenda'][i].data}</div>`;
            }
            $(document).ready(function () {
                $('#tabbb').DataTable({
                    "scrollX": true,
                    "scrollY": 600,
                });
            });
            $(document).ready(function () {
                $('#tabbb2').DataTable({
                    "scrollX": true,
                    "scrollY": 600,
                });
            });
        });
}

sociedade();
