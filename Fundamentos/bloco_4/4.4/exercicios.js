                //exercicios pt 1 - objetos e funções

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

let info2 = {
    personagem: 'Tio patinhas',
    origem: "Christmas on Bear Mountain, Dell's four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

for (let properties in info) {
    if (
        info[properties] === info.recorrente &&
        info[properties] === 'Sim' &&
        info2[properties] === 'Sim'
    ) {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[properties] + ' e ' + info2[properties]);
    };

};


for (let properties in info) {
    console.log (info[properties]);
}

  
for (let key in info) {
    console.log(key);
};


console.log (info())

  console.log ('Bem-vinda, ' + info.personagem);


                //exercicios pt 2 - funções

function verificaPalindrome (string) {
    let arrayLetras = string.split('');
    let isPalindrome = true;

    for (let index in arrayLetras) {
        if (arrayLetras[index] != string[(string.length -1) - index]) {
            isPalindrome = false;
        };
    };
    return isPalindrome;
}
verificaPalindrome('arara');

console.log(verificaPalindrome('arara'));

//------------------------------------------------------------------------------

function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
  verificaPalindrome('arara');


console.log(verificaPalindrome('arara'));


//exercicio 2

function indiceDoMaior (numeros) {
  let indiceMaior = 0;
  for(let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    };
  };
  return indiceMaior;
};
console.log(indiceDoMaior([2,3,6,7,10,115]));


//exercicio 3

function indiceDoMenor (numeros) {
  let indiceMenor = 0;
  for(let indice in numeros) {
    if (numeros[indiceMenor] > numeros[indice]) {
      indiceMenor = indice;
    };
  };
  return indiceMenor;
};
console.log (indiceDoMenor([2, 4, 6, 7, 10, 0, -50]));


//exercicio 4

function maiorDosNomes (nomes) {
  let maiorNome = nomes[0];
  for (index in nomes) {
    if (maiorNome.length < nomes[index].length) {
      maiorNome = nomes[index];
    };
  };
  return maiorNome;
};
console.log(maiorDosNomes(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])):


//exercicio 5

function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

//-----------------------------------------------------------------------------

function maisRepetido(numeros) {
  let num = [];

  for (let index = 0; index < numeros.length; index += 1) {
    let valor = numeros[index];
    if (num[valor] === undefined) {
      num[valor] = 1;
    } else {
      num[valor] = num[valor] + 1;
    }
  }

  let contRepetido = 0;
  let contNumero = 0;

  for (let prop in num) {
    if (contRepetido < num[prop]) {
      contRepetido = num[prop];
      contNumero = prop;
    }
  }

  return contNumero;
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3, 5, 3, 2, 5, 5, 5]));