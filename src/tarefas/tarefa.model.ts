import { EntidadeBase } from "../shared/entidade.model.js";
import { Prioridade } from "./prioridade.enum.js";
//extends = herança, herdando dados
//implements = Interface, implementando interface

export class Tarefa extends EntidadeBase{
  public descricao: string;
  public dataCriacao: Date;
  public dataConclusao: Date | "Não Concluido" = "Não Concluido";
  public prioridade: Prioridade;

  constructor(descricao:string, prioridade:Prioridade){
    super();
    this.descricao = descricao;
    this.dataCriacao = new Date();
    this.dataConclusao
    this.prioridade = prioridade;

  }
}