class Animal {
    nome = '';
    raca = '';

    constructor(nome) {
        this.nome = nome;
    }

    getNome () {
        console.log(this.nome);
    }
    barulho() {
        console.log("Barulho de Animal");
    }
}
// HERANÇA - 
class Cachorro extends Animal {
    barulho() {
        console.log("Au Au");
    }
}

const cachorro1 = new Cachorro("Hulk");
cachorro1.getNome();
cachorro1.barulho();

class Gato extends Animal {
    barulho() {
        console.log("Miau");
    }
}

const gato1 = new Gato("Bisteca");
gato1.getNome();
gato1.barulho();