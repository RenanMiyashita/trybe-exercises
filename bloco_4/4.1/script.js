//exercicio 1
    let a = 5;
    let b = 10;

    console.log ("Soma: " + (a + b));
    console.log ("Subtração: " + (a - b));
    console.log ("Multiplicação: " + (a * b));
    console.log ("Divisão: " + (a / b));
    console.log ("Módulo: " + (a % b));


//exercicio 2
    let a = 35;
    let b = 50;

    if (a > b) {
        console.log("35 é maior");
    } else {
        console.log("50 é maior");
    }


//exercicio 3
    let a = 12;
    let b = 24;
    let c = 36;

    if (a > b && a > c) {
        console.log("O número maior é: 12");
    } else if (b > a && b > c) {
        console.log("O número maior é: 24");
    } else if (c > a && c > b) {
        console.log("O número maior é: 36");
    } else {
        console.log("comando inválido");
    }


//exercicio 4
    let valor = -100;

    if(valor > 0) {
        console.log("positive");
    } else if(valor < 0) {
        console.log("negative");
    } else {
        console.log("zero");
    }


//exercicio 5
    let a = 80;
    let b = -100;
    let c = 30;
    let soma = a + b + c;
    let allAnglesArePositive = a > 0 && b >0 && c>0;

    if(allAnglesArePositive) {
        if(soma === 180) {
            console.log(true);
        } else {
            console.log(false);
        };
    } else {
        console.log("Erro 404")
    }

    
//exercicio 6
    let chessPiece = "Torre";

    switch(chessPiece.toLowerCase()) {
        case "peão":
            console.log ("Peão -> anda duas casas para frente se estiver na posição original ou uma casa para qualquer lado se nao estiver mais nela.");
            break;

        case "rei":
            console.log ("Rei ->  uma casa apenas para qualquer direção.");
            break;
        case "rainha":
            console.log ("Rainha -> Diagonal, horizontal e vertical.");
            break;
        case "torre":
            console.log ("Torre -> Horizontal e vertical.");
            break;
        case "cavalo":
            console.log ("Cavalo -> 'L' pode pular sobre as peças.");
            break;
        case "bispo":
            console.log ("Bispo -> Diagonal.");
            break;
        default:
            console.log ("Erro, peça inválida");
    };


//exercicio 7
    let nota = 99

    if(nota >= 90) {
        console.log("A");
    } else if(nota >= 80) {
        console.log("B");
    } else if(nota >= 70) {
        console.log("C");
    } else if(nota >= 60) {
        console.log("D");
    } else if(nota >= 50) {
        console.log("E");
    } else if(nota < 50) {
        console.log("F");
    } else {
        console.log("Erro, nota inválida")
    };


//exercicio 8
    let n1 = 4;
    let n2 = 5;
    let n3 = 9;
    let somaNumeros = n1 + n2 + n3
    
    if(somaNumeros % 2 === 0) {
        console.log(true);
    } else {
        console.log(false);
    };
    

//exercicio 9
    let n1 = 5;
    let n2 = 6;
    let n3 = 8;
    let somaNumeros = n1 + n2 + n3

    if(somaNumeros % 2 === 1) {
        console.log(true);
    } else {
        console.log(false);
    };


//exercicio 10
    let custo = 200;
    let venda = 500;

    if(custo >=0 && venda >=0) {
        let custoTotal = custo * 1.2;
        let lucroTotal = (venda - custoTotal) * 1000;
        console.log (lucroTotal);
    } else {
        console.log ("ERRO, os valores nao podem ser negativos!");
    };
    
    
//exercicio 11
    let aliquotINSS;
    let aliquotIR;

    let grossSalary = 2500;
    
    if (grossSalary <= 1556.94) {
        aliquotINSS = grossSalary * 0.08;
    } else if (grossSalary <= 2594.92) {
        aliquotINSS = grossSalary * 0.09;
    } else if (grossSalary <=5189.82) {
        aliquotINSS = grossSalary * 0.11;
    } else {
        aliquotINSS = 570.88;
    }

    let baseSalary = grossSalary - aliquotINSS;

    if(baseSalary <= 1903.98) {
        aliquotIR = 0;
    } else if(baseSalary <= 2826.65) {
        aliquotIR = (baseSalary * 0.075) - 142.80;
    } else if(baseSalary <= 3751.05) {
        aliquotIR = (baseSalary * 0.015) - 354.80;
    } else if(baseSalary <= 4664.68) {
        aliquotIR = (baseSalary * 0.225) - 636.13;
    } else {
        aliquotIR = (baseSalary * 0.275) - 869.36;
    };

    console.log('Salário liquido R$' + (baseSalary - aliquotIR));