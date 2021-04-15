function Atividade5() {
    var numeros = [];
    var somaTudo = 0;

    for(i=0;i<8;i++) {
        do {
            var num = Math.floor((Math.random() * 99)+1);
        } while(numeros.indexOf(num) > -1);
        numeros.push(num);
        somaTudo = somaTudo + num;
    }
    console.log("Números sorteados: " + numeros.join(", "));

    for(i=numeros.length-1;i>=0;i--) {
        console.log(numeros[i]);
    }
    console.log("Soma dos números sorteados: " + somaTudo);
    
    console.log("Soma do primeiro e último: " + (numeros[0] + numeros[numeros.length - 1]));
}

Atividade5();