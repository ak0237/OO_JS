class Cliente{
    nome;
    cpf;
    
}

class ContaCorrente{
    agencia;
    #saldo = 0; // # ou _ = privado

    sacar(valor){
        if(this.#saldo >= valor){ // this é usado para referenciar a conta que está chamando o metodo 
            this.#saldo -= valor;
        }
    }
}

const cliente1 = new Cliente(); //Cliente1 é uma instancia da classe cliente
cliente1.nome = 'Rae';
cliente1.cpf = 40028922;
cliente1.agencia = 2214;

console.log(cliente1)
