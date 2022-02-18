import { Cliente } from "./Cliente.js"; // import
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente(); //Cliente1 é uma instancia da classe cliente  || Devolve a referencia de onde o Cliente está
cliente1.nome = 'Rae';
cliente1.cpf = 40028922;
cliente1.agencia = 2214;

console.log(cliente1)
