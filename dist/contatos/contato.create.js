import { Contato } from "./contato.model.js";
import { ContatoRepositoryLocalStorage } from "./contato.repository.local-storage.js";
class ContatoPaginaCadastro {
    constructor(repositorioTarefas) {
        this.repositorioTarefas = repositorioTarefas;
        this.configurarElementos();
    }
    configurarElementos() {
        this.txtNomeContato = document.getElementById("txtNomeContato");
        this.txtEmail = document.getElementById("txtEmail");
        this.txtTelefone = document.getElementById("txtTelefone");
        this.txtEmpresa = document.getElementById("txtEmpresa");
        this.txtCargo = document.getElementById("txtCargo");
        this.btnSalvar = document.getElementById("btnSalvar");
        // operador discard _
        this.btnSalvar.addEventListener("click", (_evt) => this.gravarRegistros());
    }
    gravarRegistros() {
        const novoContato = new Contato(this.txtNomeContato.value, this.txtEmail.value, this.txtTelefone.value, this.txtEmpresa.value, this.txtCargo.value);
        this.repositorioTarefas.inserir(novoContato);
        // método para redirecionar usuario
        window.location.href = "contato.list.html";
    }
}
new ContatoPaginaCadastro(new ContatoRepositoryLocalStorage());
