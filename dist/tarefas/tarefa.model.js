import { EntidadeBase } from "../shared/entidade.model.js";
//extends = herança, herdando dados
//implements = Interface, implementando interface
export class Tarefa extends EntidadeBase {
    constructor(descricao, prioridade) {
        super();
        this.dataConclusao = "Não Concluido";
        this.descricao = descricao;
        this.dataCriacao = new Date();
        this.dataConclusao;
        this.prioridade = prioridade;
    }
}
