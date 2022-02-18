import { Cliente } from "./Cliente.js"; // import
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente(); //Cliente1 é uma instancia da classe cliente  || Devolve a referencia de onde o Cliente está
cliente1.nome = 'Rae';
cliente1._cpf = 40028922;
cliente1.agencia = 2214;

const cliente2= new Cliente("Alo", 142856);
const ContaCorrente1 = new ContaCorrente(cliente2, 5555);


console.log(ContaCorrente1)
