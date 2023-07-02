var professor = "Marcio Ferreira";

// FUNCAO SEM PARAMETROS
function dispararMensagem() {
    alert("Função: Olá, " + professor);
}
// FUNCOES COM PARAMETROS - function nameFuntion(p1, p2, p3, ....pn)
function somarDoisNumeros(valor1, valor2) {
    const resultado = valor1 + valor2;
    alert("O resultado da soma é " + resultado);
}

somarDoisNumeros(10, 20);
somarDoisNumeros(120, 13);
somarDoisNumeros(420, 413);


// FUNCOES COM PARAMETROS E RETORNOS.
function multiplicaDoisNumeros(num1, num2) {
    const resultado = num1 * num2;
    return resultado;
}

const resultadoMult = multiplicaDoisNumeros(20, 50);
alert("Multiplicacao " + resultadoMult);



