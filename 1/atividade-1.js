function Atividade() {
    var numeros = [];
    var numerosPares = [];
    var numerosImpares = [];
    var somaPar = 0;
    var somaImpar = 0;
    var somaTudo = 0;
    var soma2Primeiros = 0;
    var soma2Ultimos = 0;

    //Gerar números
    for(i=0;i<10;i++) {
        /*numeros.push(prompt("Digite um número: ", "0"));*/
        do {
            var num = Math.floor((Math.random() * 99)+1);
        } while(numeros.indexOf(num) > -1);

        numeros.push(num);
        somaTudo = somaTudo + num;
    }
    console.log("Números sorteados: " + numeros.join(", "));
    console.log("Soma dos números sorteados: " + somaTudo);

    //.length é um atributo/variável que permite eu obter o tamanho de qualquer vetor
    for(i=0;i<numeros.length;i++) {
        if(numeros[i]%2 == 0) {
            //somaPar += numeros[i];
            numerosPares.push(numeros[i]);
            somaPar = somaPar + numeros[i];
        }
    }
    console.log("Números pares: " + numerosPares.join(", "));
    console.log("Soma dos números pares: " + somaPar);

    for(i=0;i<numeros.length;i++) {
        if(numeros[i]%2 != 0) {
            numerosImpares.push(numeros[i]);
            //somaPar += numeros[i];
            somaImpar = somaImpar + numeros[i];
        }
    }
    console.log("Números ímpares: " + numerosImpares.join(", "));
    console.log("Soma dos números ímpares: " + somaImpar);

    console.log("Soma dos 2 primeiros: " + (numeros[0] + numeros[1]));
    console.log("Soma dos 2 ultimos: " + (numeros[numeros.length - 1] + numeros[numeros.length - 2]));
}

Atividade();