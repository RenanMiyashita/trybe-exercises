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

