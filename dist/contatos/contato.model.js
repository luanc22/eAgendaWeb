import { EntidadeBase } from "../shared/entidade.model.js";
//extends = herança, herdando dados
//implements = Interface, implementando interface
export class Contato extends EntidadeBase {
    constructor(nomeContato, email, telefone, empresa, cargo) {
        super();
        this.nomeContato = nomeContato;
        this.email = email;
        this.telefone = telefone;
        this.empresa = empresa;
        this.cargo = cargo;
    }
}
