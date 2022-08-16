import { Guid } from "./guid.model.js";

export abstract class EntidadeBase{
  public id: string = new Guid ().gerarNovoId();

  constructor(){
    this.id = new Guid().gerarNovoId();
  }
}