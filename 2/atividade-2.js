function Atividade2() {
    var palavras = ["canoa", "borda", "biscoito", "chocalho", "caderno", "humor", "vacina", "escurecer", "percentagem", "banhar"];
    var qtde9c = 0;
    var qtde6c = 0;
    console.log("Palavras Definidas:");
    for(i=0;i<palavras.length;i++) {
        palavras[i] = palavras[i].split("");
        console.log(palavras[i].join("") + " | Tamanho: " + palavras[i].length);
    }

    console.log("Palavras com mais de 9 caracteres:");
    for(i=0;i<palavras.length;i++) {
        if(palavras[i].length > 9) {
            console.log(palavras[i].join(""));
            qtde9c++;
        }
    }
    console.log("Quantidade palavras com mais de 9 caracteres: " + qtde9c);

    console.log("Palavras com menos de 6 caracteres:");
    for(i=0;i<palavras.length;i++) {
        if(palavras[i].length < 6) {
            console.log(palavras[i].join(""));
            qtde6c++;
        }
    }
    console.log("Quantidade palavras com mais de 6 caracteres: " + qtde6c);
}

Atividade2();