//teorico - objetos

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: '34 anos',
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
    medals: {
        golden: 2,
        silver: 3,
    }
};

player['fullName'] = player.name + ' ' + player.lastName;

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' de idade.');

console.log('A jogadora ' + player.fullName + ' foi eleita a melhor do mundo ' + player.bestInTheWorld.length + ' vezes');

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');



//teorico - for/in

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(index, cars[index]);
}




let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }



  let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
  }

  for (index in names) {
    console.log ('Olá ' + names[index])
  };



  let carro = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  }

  for (index in carro) {
      console.log (index + ": " + carro[index])
  };


//teorico - funções

function sum(a, b) {
    return a + b;
};
console.log(sum ( 15, 10));


function subtraction(a, b) {
    return a - b;
};
console.log (subtraction( 50, 14));


function mult(a, b) {
    return a * b;
};

console.log (mult(3, 5));


function div(a, b) {
    return a / b;
};

console.log (div(50, 25));


function modul(a, b) {
    return a % b;
};

console.log (modul(3, 5));