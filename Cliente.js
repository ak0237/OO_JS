export class Cliente{ // export 
    nome;
    _cpf;
    
    get cpf(){
         this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    } // Ao instanciar um novo objeto, os parametros deverão ser passados =====> new Cliete(AQUI)
}