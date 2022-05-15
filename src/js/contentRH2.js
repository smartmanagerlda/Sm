


        // Tipos de Cargos
        tiposCargos1.forEach(rec => {
            parametrosLista +=`
            <div class="m-2 text-center">                
                <table id="table_id" class="table table-striped table-striped text-white">
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
        tabela.innerHTML = parametrosLista;

         // Tipos de desligamentos
         cargosT.forEach(rec => {
            parametrosLista1 +=`
            <div class="m-2 text-center">                
                <table id="table_id" class="table table-striped table-striped text-white">
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
        tiposDesligamentosT.innerHTML = parametrosLista1;

