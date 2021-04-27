let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (index = 0; index < fruits.length; index += 1) {
    sum += fruits[index];
};

if(sum > 15) {
    console.log(sum);
} else {
    console.log('valor menos que 16');
};


//exercicios

 //exercicio 1
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

 for (index = 0; index < numbers.length; index += 1) { 
 };
 console.log(numbers);


 //exercicio 2
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let sum = 0

 for (index = 1; index < numbers.length; index +=1) {
     sum += numbers[index];
 };
 console.log (sum);


 //exercicio 3
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let sum = 0;

 for (index = 1; index < numbers.length; index +=1) {
     sum += numbers[index] / numbers.length
 }
console.log(sum);


 //exercicio 4
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let sum = 0;

 for (index = 1; index < numbers.length; index +=1) {
     sum += numbers[index] / numbers.length
 }
console.log(sum);

 if (sum > 20) {
     console.log('valor maior que 20.')
 } else {
     console.log('valor menor ou igual a 20.');
 };


 //exercicio 5
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let highestNumber = numbers[0];

 for (let index =1; index < numbers.length; index += 1) {
     if(numbers[index] > highestNumber) {
         highestNumber = numbers [index];
     }
 }
 console.log (highestNumber);


 //exercicio 6
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let evenNumbers = 0;

 for (index = 0; index < numbers.length; index += 1) {
     if ( numbers[index] % 2 >= 1) {
         evenNumbers += 1;
     }
 }
if( evenNumbers === 0) {
    console.log('nenhum valor encontrado')
} else {
    console.log( evenNumbers);
};


 //exercicio 7
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let lowestNumber = numbers[0];

 for(let index = 1; index < numbers.length; index += 1) {
     if (numbers[index] < lowestNumber) {
        lowestNumber = numbers[index];
     };
 };
console.log (lowestNumber);

 //exercicio 8
let result = [];

for( let index = 1; index <= 25; index += 1) {
    result.push(index);
};
console.log (result);


 //exercicio 9