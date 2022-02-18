export class ContaCorrente{ // export 
    agencia;
    cliente; // Quando atribuir os valor deste atributo, deverá ser o nome da variavel que guarda o cliente desejado



    #saldo = 0; // # ou _ = privado

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
}