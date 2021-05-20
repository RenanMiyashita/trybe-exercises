//exercicio 1
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

//exercicio 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

const sortedArray = sortOddsAndEvens();
console.log(`Os numeros ${sortedArray} se encontram ordenados em ordem crescente!`);

//bonus
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sortArrayBonus = array => {
  const sortOddsAndEvens = array.sort((a,b) => a - b);
  return sortOddsAndEvens;
}

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente!`);

//bonus em 1 linha
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);

//parte II

//exercicio 1
const factorial = number => {
  let result = 1
  for (let index = 1; index <= number; index += 1) {
    result *= index;
  }
  return result;
}
console.log(factorial(6));

//recursiva
const factorial = (number) => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(0))