//Arrays

//exercicio 1

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);


//exercicio 2

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu [2];

console.log(indexOfPortfolio);


//exercicio 3

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');
console.log(menu);


//for

//exercicio 1

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}


//for of

//exercicio 1

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(elements of names) {
    console.log(elements);
}