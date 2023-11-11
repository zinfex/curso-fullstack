const nome = "Marcio";
const sobrenome = "Ferreira";

console.log(nome);
console.log(sobrenome);

// PROGRAMACAO ORIENTADA A OBJETOS
// CLASS
class Pessoa{
    //ATRIBUTOS
    nome = '';
    idade = '';
    
    constructor(n, i) {
        this.nome = n;
        this.idade = i;
    }

    //METODOS OU FUNCOES DE CLASSE
    correr() {
        console.log('Correndo...')
    }
}

const pessoa1 = new Pessoa("Ana", 10);
const pessoa2 = new Pessoa("Jose", 15);
const pessoa3 = new Pessoa("Nick", 60);

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)