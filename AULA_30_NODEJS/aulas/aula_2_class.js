class Carro {
    placa = '';
    modelo = '';
    ano = '';
    marca = '';

    setPlaca(placa) {
        this.placa = placa
    }

    getPlaca() {
        console.log("Placa: ", this.placa);
    }
}

const carro1 = new Carro();
carro1.setPlaca("PNL7516");
carro1.getPlaca();

const carro2 = new Carro();
carro2.setPlaca("JDC9345");
carro2.getPlaca();