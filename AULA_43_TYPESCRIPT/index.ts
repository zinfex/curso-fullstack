// TIPOS DE DADOS PRIMITIVOS COM TYPESCRIPT
let mensagem: string = "Olá mundo";
let numero: number = 10;
let decimal: number = 10.5;
let logico: boolean = false;
let indefinido: any;

// VARIAVEIS COMPOSTAS - ARRAYS
const alunos: string[] = ["Ana", "Maria", "Edi"];
const numeros: number[] = [10, 45, 85, 53];
const logicos: boolean[] = [true, false, false, false];
const variados: any[] = [10, "Jose", 105.5, null];

// OBJETOS
interface Pessoa {
    nome: string;
    idade: number;
    peso: number;
    e_solteiro?: boolean;
}

let pessoa: Pessoa = {
    nome: "Jose",
    idade: 25,
    peso: 65,
    e_solteiro: true
}

// console.log(pessoa)

// FUNCOES
function somar(valor: number, valor2: number) :number {
    return  valor + valor2;
}

somar(10, 52)

function lerObjetoPessoa(pessoa: Pessoa) {
    console.log(pessoa.nome)
}

lerObjetoPessoa(pessoa)