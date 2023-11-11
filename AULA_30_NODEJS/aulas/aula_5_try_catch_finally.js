try {
    // CASO O CODIGO AQUI DÊ ERRO O CATCH EXECUTA
    // VAMOS VOAR

} catch(erro) {
    // EXECUTA CASO O CODIGO ACIMA DÊ ERRO
    // CASO NAO CONSIGA VOAR, EU EEXECUTO.
} finally {
    // EXECUTA QUANDO O TRY TERMINE OU O CATCH TERMINA.
    // EXECUTO DE QUALQUER FORMA
    // CASO VOCE NAO CONSIGA VOAR OU VOE, EU EXECUTO.
}


try {
    const v1 = 10;
    const v2 = 0;

    // VALIDACAO DE DADOS
    if(v1 == 0 || v2 == 0) {
        throw "Voce nao pode informar zero";
    }

    // LINHA DE CODIGO PARA GRAVAR NO BANCO OS DADOS.
    const resultado = v1 / v2;
    console.log("Resultado", resultado);
    
} catch(e) {
    console.log("Error", e);
} finally {
    console.log("Finalizado");
}