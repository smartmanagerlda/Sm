class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer class="sticky-footer bg-white">
        <div class="container my-auto">
            <div class="copyright text-center my-auto">
                <span>Copyright &copy; Stocks Manager 2021</span>
            </div>
        </div>      
    </footer>`;
    }
}

class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                    <a href="../src/Home/home.html" class="btn btn-primary px-3">
                        <i class="fa fa-chevron-left fa-lg"></i> 
                    </a>
                    
                    <!-- Sidebar Toggle (Topbar) -->
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>

                    <!-- Topbar Search -->
                    <form
                        class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Procurar..."
                                aria-label="Search" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    <!-- Topbar Navbar -->
                    <ul class="navbar-nav ml-auto">
                        

                        <!-- Nav Item - Search Dropdown (Visible Only XS) -->
                        <li class="nav-item dropdown no-arrow d-sm-none">
                            <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-search fa-fw"></i>
                            </a>
                            <!-- Dropdown - Messages -->
                            <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                aria-labelledby="searchDropdown">
                                <form class="form-inline mr-auto w-100 navbar-search">
                                    <div class="input-group">
                                        <input type="text" class="form-control bg-light border-0 small"
                                            placeholder="Search for..." aria-label="Search"
                                            aria-describedby="basic-addon2">
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="button">
                                                <i class="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>
                        
                        <!-- Nav Item - Alerts -->
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-bell fa-fw"></i>
                                <!-- Counter - Alerts -->
                                <span class="badge badge-danger badge-counter">3+</span>
                            </a>
                            
                            <!-- Dropdown - Alerts -->
                            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="alertsDropdown">
                                <h6 class="dropdown-header">
                                    Notificações
                                </h6>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-primary">
                                            <i class="fas fa-file-alt text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">Dezembro 12, 2019</div>
                                        <span class="font-weight-bold">A new monthly report is ready to download!</span>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-success">
                                            <i class="fas fa-donate text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">December 7, 2019</div>
                                        $290.29 has been deposited into your account!
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-warning">
                                            <i class="fas fa-exclamation-triangle text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">December 2, 2019</div>
                                        Spending Alert: We've noticed unusually high spending for your account.
                                    </div>
                                </a>
                                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                            </div>
                        </li>

                        <!-- Nav Item - Messages -->
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-envelope fa-fw"></i>
                                <!-- Counter - Messages -->
                                <span class="badge badge-danger badge-counter">7</span>
                            </a>
                            <!-- Dropdown - Messages -->
                            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="messagesDropdown">
                                <h6 class="dropdown-header">
                                    Messagens
                                </h6>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="#"
                                            alt="...">
                                        <div class="status-indicator bg-success"></div>
                                    </div>
                                    <div class="font-weight-bold">
                                        <div class="text-truncate">Hi there! I am wondering if you can help me with a
                                            problem I've been having.</div>
                                        <div class="small text-gray-500">Emily Fowler · 58m</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="#"
                                            alt="...">
                                        <div class="status-indicator"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">I have the photos that you ordered last month, how
                                            would you like them sent to you?</div>
                                        <div class="small text-gray-500">Jae Chun · 1d</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="#"
                                            alt="...">
                                        <div class="status-indicator bg-warning"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">Last month's report looks great, I am very happy with
                                            the progress so far, keep up the good work!</div>
                                        <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                            alt="...">
                                        <div class="status-indicator bg-success"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">Am I a good boy? The reason I ask is because someone
                                            told me that people say this to all dogs, even if they aren't good...</div>
                                        <div class="small text-gray-500">Chicken the Dog · 2w</div>
                                    </div>
                                </a>
                                <a class="dropdown-item text-center small text-gray-500" href="#">Ver mais Messagens</a>
                            </div>
                        </li>

                        <div class="topbar-divider d-none d-sm-block"></div>

                        <!-- Nav Item - User Information -->
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Coutinho Lucas</span>
                                <img class="img-profile rounded-circle"
                                    src="img/undraw_profile.svg">
                            </a>
                            <!-- Dropdown - User Information -->
                            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Perfil
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Definições
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Sobre
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                            </div>
                        </li>

                    </ul>

                </nav>
                <!-- End of Topbar -->`;
    }
}

class MyTopButton extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container-fluid">
                    <div class="container-fluid text-black">
                        <div class="row">
                            <div class="col-sm">
                                <div class="p-1 mb-2 bg-white text-white">
                                    <div class="container-fluid text-black">       
                                        <div class="row">
                                            <div class="col-md">
                                                <button type="button" class="btn btn-primary btn-block" id="configuracoes" >Configurações</button>                                                     
                                            </div>
                                            <div class="col-md">
                                                <button type="button" class="btn btn-primary btn-block" id="cadastro">Cadastro</button>
                                            </div>
                                            <div class="col-md">
                                                <button type="button" class="btn btn-primary btn-block" id="relatorios">Relatórios</button>
                                            </div>
                                            <div class="col-md">
                                                <button type="button" class="btn btn-primary btn-block" id="indicadores">Indicadores</button>        
                                            </div>
                                            <div class="col-md">
                                                <button type="button" class="btn btn-primary btn-block" id="instrucoes">Instruções</button>                 
                                            </div>
                                        </div>
                                    </div>      
                                </div>
                            </div>
                        </div>
                    </div>                     
        </div>`;
        this.addEventListener('click', (e) =>{
            if(e.target.id == "configuracoes"){
                window.location= 'rhConfiguracoes.html'; 
            }
            if(e.target.id == "cadastro"){
                window.location= 'cadastroRH.html'; 
            }
            if(e.target.id == "relatorios"){
                
                window.location= 'relatorios.html'; 
            }
            if(e.target.id == "indicadores"){
                // window.location= 'rhConfiguracoes.html';
                console.log(e.target.id); 
            }
            if(e.target.id == "instrucoes"){
                // window.location= 'rhConfiguracoes.html'; 
                console.log(e.target.id);
            }
        })
    }
}

class MyCadastro extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container-fluid">
        <div class="container-fluid text-black">
            <div class="row">
                <div class="col-sm">
                    <div class="p-1 mb-2 bg-white text-white">
                        <div class="container-fluid text-black">       
                            <div class="row">
                                <div class="col-md">
                                    <button type="button" class="btn btn-primary btn-block" id="func2" >Funcionário</button>                                                     
                                </div>
                                <div class="col-md">
                                    <button type="button" class="btn btn-primary btn-block" id="altFunc">Alt. Funcionário</button>
                                </div>
                                <div class="col-md">
                                    <button type="button" class="btn btn-primary btn-block" id="recrSelecc">Recrut. e Selecção</button>
                                </div>
                                <div class="col-md">
                                    <button type="button" class="btn btn-primary btn-block" id="jornad">Jornadas</button>
                                </div>
                                <div class="col-md">
                                    <button type="button" class="btn btn-primary btn-block" id="ausencias">Ausências</button>
                                </div>

                                <div class="col-md">
                                    <button type="button" class="btn btn-primary btn-block" id="financeiro">Financeiro</button>
                                </div>

                                <div class="col-md">
                                    <button type="button" class="btn btn-primary btn-block" id="treinamentos">Treinamentos</button>
                                </div>
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
        </div>                     
    </div>`;
    this.addEventListener('click', (e) =>{
        if(e.target.id == "func2"){
            window.location= 'funcionario.html';
        }
        if(e.target.id == "altFunc"){
            window.location= 'altFuncionario.html'; 
        }
        if(e.target.id == "recrSelecc"){
            window.location= 'recrutamentoSele.html'; 
        }
        if(e.target.id == "jornad"){ 
            window.location= 'jornadas.html'; 
        }
        if(e.target.id == "ausencias"){
            window.location= 'ausencias.html';
        }
        if(e.target.id == "financeiro"){
            window.location= 'financeiro.html';
        }
        if(e.target.id == "treinamentos"){
            window.location= 'treinamento.html';
        }
    })
    }
}
class MyRelatorio extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container-fluid">
        <div class="container-fluid text-black">
            <div class="row">
                <div class="col-sm">
                    <div class="p-1 mb-2 bg-white text-white">
                        <div class="container-fluid text-black">       
                            <div class="row">
                                <div class="col-md">
                                    <button type="button" class="btn btn-primary btn-block" id="perfil" >Perfil</button>                                                     
                                </div>
                                <div class="col-md">
                                    <button type="button" class="btn btn-primary btn-block" id="altFunc">Rotatividade</button>
                                </div>
                                <div class="col-md">
                                    <button type="button" class="btn btn-primary btn-block" id="recrSelecc">Absenteismo</button>
                                </div>
                                <div class="col-md">
                                    <button type="button" class="btn btn-primary btn-block" id="jornad">Recrut. e Selecção</button>
                                </div>
                                <div class="col-md">
                                    <button type="button" class="btn btn-primary btn-block" id="ausencias">Financeiro</button>
                                </div>
                                <div class="col-md">
                                    <button type="button" class="btn btn-primary btn-block" id="treinamentos">Treinamentos</button>
                                </div>
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
        </div>                     
    </div>`;
    this.addEventListener('click', (e) =>{
        if(e.target.id == "perfil"){
            window.location= 'perfil.html';
        }
        if(e.target.id == "altFunc"){
            window.location= 'rotatividade.html'; 
        }
        if(e.target.id == "recrSelecc"){
            window.location= 'absenteismo.html'; 
        }
        if(e.target.id == "jornad"){ 
            window.location= 'recESleccao.html'; 
        }
        if(e.target.id == "financeiro"){
            window.location= 'financeiro.html';
        }
        if(e.target.id == "treinamentos"){
            window.location= 'treinamento.html';
        }
    })
    }
}

customElements.define('my-footer', MyFooter);
customElements.define('my-header', MyHeader);
customElements.define('my-topbutton', MyTopButton);
customElements.define('my-cadastro', MyCadastro);
customElements.define('my-relatorio', MyRelatorio);