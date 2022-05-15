


        // Nivel academico
        nivelEscolaridade.forEach(rec => {
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
        nivelAcademico.innerHTML = `<h5 class="mt-2">Níveis Académicos</h5><hr>`;
        tabela.innerHTML = parametrosLista;

         // Tipos de desligamentos
         tiposDesligamentos.forEach(rec => {
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
        tiposDesligamentosi.innerHTML = `<h5 class="mt-2">Tipos de desligamentos</h5><hr>`;
        tiposDesligamentosT.innerHTML = parametrosLista1;

         // Tipos de Jornada de Trabalho
         tiposJornadasTrabalho.forEach(rec => {
            parametrosLista2 +=`
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
         
        addParametros4.innerHTML = `
        <div class="col-md">
            <button type="button" class="btn btn-primary" id="addParametros2">+</button>                 
        </div>`;
        tiposDesligamentos2.innerHTML = `<h5 class="mt-2">Tipos de Jornada de Trabalho</h5><hr>`;
        tiposDesligamentosT2.innerHTML = parametrosLista2;

        // Ausência Planejada
        ausenciaPlanejada.forEach(rec => {
            parametrosLista3 +=`
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
        
        addParametros5.innerHTML = `
        <div class="col-md">
            <button type="button" class="btn btn-primary" id="addParametros3">+</button>                 
        </div>`;
        tiposDesligamentos3.innerHTML = `<h5 class="mt-2">Ausência Planejada</h5><hr>`;
        tiposDesligamentosT3.innerHTML = parametrosLista3;

        // Ausência Não Planejada
        ausenciaNaoPlanejada.forEach(rec => {
            parametrosLista4 +=`
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
        
        addParametros6.innerHTML = `
        <div class="col-md">
            <button type="button" class="btn btn-primary" id="addParametros4">+</button>                 
        </div>`;
        tiposDesligamentos4.innerHTML = `<h5 class="mt-2">Ausência Não Planejada</h5><hr>`;
        tiposDesligamentosT4.innerHTML = parametrosLista4;

        // Motivos de atrasos na contratação
        motivosAtrasosContratratacao.forEach(rec => {
            parametrosLista5 +=`
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
        
        addParametros7.innerHTML = `
        <div class="col-md">
            <button type="button" class="btn btn-primary" id="addParametros5">+</button>                 
        </div>`;
        tiposDesligamentos5.innerHTML = `<h5 class="mt-2">Motivos de atrasos na contratação</h5><hr>`;
        tiposDesligamentosT5.innerHTML = parametrosLista5;

        // Custos do processo de Recrutamento e Seleção
        custoProcessoRecrutamento.forEach(rec => {
            parametrosLista6 +=`
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
        
        addParametros8.innerHTML = `
        <div class="col-md">
            <button type="button" class="btn btn-primary" id="addParametros6">+</button>                 
        </div>`;
        tiposDesligamentos6.innerHTML = `<h5 class="mt-2">Custos do processo de Recrutamento e Seleção</h5><hr>`;
        tiposDesligamentosT6.innerHTML = parametrosLista6;

        // Custos com Folha
        custoFolha1.forEach(rec => {
            parametrosLista7 +=`
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
        
        addParametros9.innerHTML = `
        <div class="col-md">
            <button type="button" class="btn btn-primary" id="addParametros7">+</button>                 
        </div>`;
        tiposDesligamentos7.innerHTML = `<h5 class="mt-2">Custos com Folha</h5><hr>`;
        tiposDesligamentosT7.innerHTML = parametrosLista7;

        // Custos com Benefícios
        custoBeneficio1.forEach(rec => {
            parametrosLista8 +=`
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
        
        addParametros10.innerHTML = `
        <div class="col-md">
            <button type="button" class="btn btn-primary" id="addParametros8">+</button>                 
        </div>`;
        tiposDesligamentos8.innerHTML = `<h5 class="mt-2">Custos com Benefícios</h5><hr>`;
        tiposDesligamentosT8.innerHTML = parametrosLista8;

        // Local de Treinamento
        localTreinamento1.forEach(rec => {
            parametrosLista9 +=`
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
        
        addParametros11.innerHTML = `
        <div class="col-md">
            <button type="button" class="btn btn-primary" id="addParametros9">+</button>                 
        </div>`;
        tiposDesligamentos9.innerHTML = `<h5 class="mt-2">Local de Treinamento</h5><hr>`;
        tiposDesligamentosT9.innerHTML = parametrosLista9;

        // Tipos de Treinamento
        tiposTreinamento1.forEach(rec => {
            parametrosLista10 +=`
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
        
        addParametros12.innerHTML = `
        <div class="col-md">
            <button type="button" class="btn btn-primary" id="addParametros10">+</button>                 
        </div>`;
        tiposDesligamentos10.innerHTML = `<h5 class="mt-2">Tipos de Treinamento</h5><hr>`;
        tiposDesligamentosT10.innerHTML = parametrosLista10;

        // ANDAMENTO
        andamentoT.forEach(rec => {
            parametrosLista11 +=`
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
        
        addParametros13.innerHTML = `
        <div class="col-md">
            <button type="button" class="btn btn-primary" id="addParametros11">+</button>                 
        </div>`;
        tiposDesligamentos11.innerHTML = `<h5 class="mt-2">Andamento</h5><hr>`;
        tiposDesligamentosT11.innerHTML = parametrosLista11;