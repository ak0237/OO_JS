import { Cliente } from "./Cliente.js";

export class ContaCorrente{ // export 
    agencia;
    _cliente; // Quando atribuir os valor deste atributo, deverá ser o nome da variavel que guarda o cliente desejado


    set cliente(novoValor){
        if(novoValor instanceof Cliente){ 
            this._cliente = novoValor;
        } // Se valor for uma instancia de Cliente
    }

    get cliente(){
        return this._cliente;
    }



    #saldo = 0; // # ou _ = privado

    get saldo(){
        return this.#saldo;
    }


    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
    }


    sacar(valor){
        if(this.#saldo >= valor){ // this é usado para referenciar a conta que está chamando o metodo 
            this.#saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if (valor <=0){ 
            return;  
        } // Earlier Return, facilita a leitura do código

        this.#saldo += valor;
    }

    transferir(valor, conta){
        valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}