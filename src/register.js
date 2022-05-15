const nomeEmpresa = document.getElementById('nomeEmpresa');
const avenida = document.getElementById('avenida');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const senha2 = document.getElementById('senha2');
const bancoNIB = document.getElementById('bancoNIB');
const nuitEmpresa = document.getElementById('nuitEmpresa');
const form = document.getElementById('form');
const alertaSucesso = document.getElementById('alertaSucesso');
const alerrt2 = `<div class="alert alert-warning text-center" role="alert">
Senha deve ser maior que 6 caracteres!!!
</div>`;
const alerrt3 = `<div class="alert alert-warning text-center" role="alert">
Senhas diferentes!!!
</div>`;
const alerrt4 = `<div class="alert alert-info text-center" role="alert">
Processando...!!!
</div>`;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (senha.value.length <= 6) {
        alertaSucesso.innerHTML = alerrt2;
    }else{
        if (senha.value != senha2.value) {
            alertaSucesso.innerHTML = alerrt3; 
        }else{
            alertaSucesso.innerHTML = alerrt4;

            fetch('https://stocksmanager1.herokuapp.com/registerPequenas', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        "nomeEmpresa": `${nomeEmpresa.value}`,
                        "password": `${senha.value}`,
                        "email": `${email.value}`,
                        "avenidaLocalizacao": `${avenida.value}`,
                        "bancoNIB": `${bancoNIB.value}`,
                        "empresaNUIT": `${nuitEmpresa.value}`,
                        }
                )
              }).then(res => res.json())
              .then(data => {
                console.log("Request complete! response:", data);
                window.location= '../src/login.html';
              })
        }
    }
});