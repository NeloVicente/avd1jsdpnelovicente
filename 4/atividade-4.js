function Atividade4(obj) {
    const { produto, unidade, quantidade, valor_compra } = obj;

    var preco_total = quantidade * valor_compra;
    var preco_com_imposto = valor_compra + (valor_compra * 0.12);
    var lucro = preco_com_imposto - valor_compra;

    console.log(`O produto ${produto}, de quantidade ${quantidade}, valor da compra R$ ${valor_compra}, preço com imposto R$ ${preco_com_imposto.toFixed(2)}. O seu lucro é de R$ ${lucro.toFixed(2)}.`);
}

var objeto = {
    'produto': 'Produto teste',
    'unidade': 1,
    'quantidade': 999,
    'valor_compra': 9.99
}

Atividade4(objeto);