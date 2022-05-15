

class MyNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ``;
    }
}

class MySideBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <div class="row">
            <div class="card2 p-3 ml-4">
                <div class="toggle">
                    <ion-icon name="grid-outline" class="open"></ion-icon>
                    <ion-icon name="close-outline" class="close"></ion-icon>
                </div>
                <ul>                       
                    <li class="list active">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span class="icon" ><ion-icon name="construct-outline" id="config"></ion-icon></span>
                            <span class="title">Configurações</span>
                        </a>
                    </li>
                    <li class="list">
                        <a href="#">
                            <span class="icon"><ion-icon name="book-outline" id="cadastro"></ion-icon></span>
                            <span class="title">Cadastros</span>
                        </a>
                    </li>
                    <li class="list">
                        <a href="#">
                            <span class="icon"><ion-icon name="document-attach-outline" id="relatorio"></ion-icon></span>
                            <span class="title">Relatórios</span>
                        </a>
                    </li>
                    <li class="list">
                        <a href="#">
                            <span class="icon"><ion-icon name="bar-chart-outline" id="indicadores"></ion-icon></span>
                            <span class="title">Indicadores</span>
                        </a>
                    </li>
                </ul>             
            </div>
        
    </div>`;
    }
}

class MySideBar2 extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <div class="row">
            <div class="card2 p-3 ml-4">
                <div class="toggle">
                    <ion-icon name="grid-outline" class="open"></ion-icon>
                    <ion-icon name="close-outline" class="close"></ion-icon>
                </div>
                <ul>                       
                    <li class="list active">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span class="icon" ><ion-icon name="receipt-outline" id="todoEstoque"></ion-icon></span>
                            <span class="title">Todo Estoque</span>
                        </a>
                    </li>
                    <li class="list">
                        <a href="#">
                            <span class="icon"><ion-icon name="add-outline" id="addEstoque"></ion-icon></span>
                            <span class="title">Adicionar Estoque</span>
                        </a>
                    </li>
                    <li class="list">
                        <a href="#">
                            <span class="icon"><ion-icon name="pencil-outline" id="edtEstoque"></ion-icon></span>
                            <span class="title">Editar Estoque</span>
                        </a>
                    </li>
                    <li class="list">
                        <a href="#">
                            <span class="icon"><ion-icon name="trash-outline" id="removEstoque"></ion-icon></span>
                            <span class="title">Remover Estoque</span>
                        </a>
                    </li>
                </ul>             
            </div>
        
    </div>`;
    }
}

class MySideBar3 extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <div class="row">
            <div class="card2 p-3 ml-4">
                <div class="toggle">
                    <ion-icon name="grid-outline" class="open"></ion-icon>
                    <ion-icon name="close-outline" class="close"></ion-icon>
                </div>
                <ul> 
                    <li class="list">
                        <a href="#">
                            <span class="icon" ><ion-icon name="book-outline" id="planoDeContas"></ion-icon></span>
                            <span class="title">Plano de Contas</span>
                        </a>
                    </li>
                    <li class="list">
                        <a href="#">
                            <span class="icon" ><ion-icon name="document-attach-outline" id="balancete"></ion-icon></span>
                            <span class="title">Balancete</span>
                        </a>
                    </li>                  
                    <li class="list">
                        <a href="#">
                            <span class="icon" ><ion-icon name="clipboard-outline" id="balanco"></ion-icon></span>
                            <span class="title">Balanço</span>
                        </a>
                    </li>
                    <li class="list">
                        <a href="#">
                            <span class="icon" ><ion-icon name="stats-chart-outline" id="demostracaoResultados"></ion-icon></span>
                            <span class="title">D.R</span>
                        </a>
                    </li>
                    
                </ul>             
            </div>
        
    </div>`;
    }
}

class MySideBar4 extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="row text-black">
              <div class="card2 p-3 ml-4 text-black">
                  <div class="toggle">
                      <ion-icon name="grid-outline" class="open text-black"></ion-icon>
                      <ion-icon name="close-outline" class="close text-black"></ion-icon>
                  </div>
                  <ul>                       
                      <li class="list active">
                          <b></b>
                          <b></b>
                          <a href="#">
                              <span class="icon" ><ion-icon name="receipt-outline" id="todoEstoque"></ion-icon></span>
                              <span class="title">Todos Funcionários</span>
                          </a>
                      </li>
                      <!--
                      <li class="list">
                          <a href="#">
                              <span class="icon"><ion-icon name="pencil-outline" id="edtEstoque"></ion-icon></span>
                              <span class="title">Editar Funcionário</span>
                          </a>
                      </li>
                      <li class="list">
                          <a href="#">
                              <span class="icon"><ion-icon name="trash-outline" id="removEstoque"></ion-icon></span>
                              <span class="title text-black">Remover Funcionário</span>
                          </a>
                      </li>
                      -->
                  </ul>             
              </div>
          
      </div>`;
    }
}


customElements.define('my-nav', MyNav);
customElements.define('my-sidebar', MySideBar);
customElements.define('my-sidebar2', MySideBar2);
customElements.define('my-sidebar3', MySideBar3);
customElements.define('my-sidebar4', MySideBar4);
