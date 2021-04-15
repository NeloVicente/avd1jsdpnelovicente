function Atividade3() {
    var funcionarios = [];
    var nomes = ["Nelo", "Vicente", "João", "Maria", "Suzanne", "Ana Clara"];
    var funcoes = ["CEO", "FTO", "Estagiário", "Suporte"];
    var salariosFuncoes = [];
    var reajustesFuncoes = [];
    var cargosAtivos = [];
    for(i=0;i<6;i++) {
        /* Utilizei de alguns arrays e randomização para gerar valores. */
        funcionarios[i] = new Object();
        funcionarios[i].matricula = "000"+(i+1);
        funcionarios[i].nome = nomes[i];
        funcionarios[i].funcao = funcoes[Math.floor(Math.random() * 4)];
        funcionarios[i].salario = Math.floor((Math.random() * 9000)+999);
        //Reajuste
        funcionarios[i].salarioReajuste = (funcionarios[i].salario * 1.1) - funcionarios[i].salario;
        if(salariosFuncoes[funcionarios[i].funcao] !== undefined) {
            salariosFuncoes[funcionarios[i].funcao][1] = salariosFuncoes[funcionarios[i].funcao][1] + funcionarios[i].salario;
            reajustesFuncoes[funcionarios[i].funcao][1] = reajustesFuncoes[funcionarios[i].funcao][1] + funcionarios[i].salarioReajuste;
        } else {
            //Novo cargo
            salariosFuncoes[funcionarios[i].funcao] = [funcionarios[i].funcao, funcionarios[i].salario];
            reajustesFuncoes[funcionarios[i].funcao] = [funcionarios[i].funcao, funcionarios[i].salarioReajuste];
            cargosAtivos.push(funcionarios[i].funcao);
        }
    }

    for(i=0;i<6;i++) {
        console.log("Seu nome é " + funcionarios[i].nome + ", sua função é " + funcionarios[i].funcao + ", seu salário é " + funcionarios[i].salario.toLocaleString() + ", seu reajuste foi de " + funcionarios[i].salarioReajuste.toLocaleString() + " e o novo salário será de " + (funcionarios[i].salario + funcionarios[i].salarioReajuste).toLocaleString());
    }

    for(i=0;i<cargosAtivos.length;i++) {
        console.log("O somatório do salário da função "+ salariosFuncoes[cargosAtivos[i]][0] +" é "+salariosFuncoes[cargosAtivos[i]][1].toLocaleString()+". O somatório do reajuste da função "+reajustesFuncoes[cargosAtivos[i]][0]+" é " + reajustesFuncoes[cargosAtivos[i]][1].toLocaleString());
    }
}

Atividade3();