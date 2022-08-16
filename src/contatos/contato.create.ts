import { IPaginaFormulario } from "../shared/pagina.create.interface.js";
import { IPaginaHTML } from "../shared/pagina.interface.js";
import { IRepositorio } from "../shared/repositorio.interface.js";
import { Contato } from "./contato.model.js";
import { ContatoRepositoryLocalStorage } from "./contato.repository.local-storage.js";

class ContatoPaginaCadastro implements IPaginaHTML, IPaginaFormulario {
  private txtNomeContato: HTMLInputElement;
  private txtEmail: HTMLInputElement;
  private txtTelefone: HTMLInputElement;
  private txtEmpresa: HTMLInputElement;
  private txtCargo: HTMLInputElement;
  private btnSalvar: HTMLButtonElement;

  constructor(private repositorioTarefas: IRepositorio<Contato>) {

    this.configurarElementos();
  }

  configurarElementos(): void {
    this.txtNomeContato = document.getElementById("txtNomeContato") as HTMLInputElement;
    this.txtEmail = document.getElementById("txtEmail") as HTMLInputElement;
    this.txtTelefone = document.getElementById("txtTelefone") as HTMLInputElement;
    this.txtEmpresa = document.getElementById("txtEmpresa") as HTMLInputElement;
    this.txtCargo = document.getElementById("txtCargo") as HTMLInputElement;


    this.btnSalvar = document.getElementById("btnSalvar") as HTMLButtonElement;

    // operador discard _
    this.btnSalvar.addEventListener("click", (_evt) => this.gravarRegistros());
  }

  gravarRegistros(): void {
   
    const novoContato = new Contato(this.txtNomeContato.value,this.txtEmail.value,this.txtTelefone.value,this.txtEmpresa.value,this.txtCargo.value);

    this.repositorioTarefas.inserir(novoContato);

    // método para redirecionar usuario
    window.location.href = "contato.list.html";
  }
}

new ContatoPaginaCadastro(new ContatoRepositoryLocalStorage());

