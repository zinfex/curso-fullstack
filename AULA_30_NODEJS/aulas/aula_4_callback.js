// NIVEL JUNIOR
function somar(v1, v2, callback) {
    const r = v1 + v2;
    callback(r)
}
const funcao = function(resultado) {
    console.log("Resultado é "+resultado)
} 
somar(10, 20, funcao)


// NIVEL PLENO
function gustavoPleno(v1, v2, callback) {
    const resultado = v1 + v2;
    callback(resultado);
}
gustavoPleno(10, 20, function(resultado) {
    console.log("Oi eu sou o MAtheus e o resultado é ", resultado);
});


// NIVEL SENIOR
function gustavoSenior(v1, v2, callback) {
    callback(v1 + v2);
}

gustavoSenior(10, 20, (resultado) => {
    console.log("Oi eu sou o MAtheus e o resultado é ", resultado);
});