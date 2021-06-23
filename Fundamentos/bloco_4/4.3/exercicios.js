//exercicio 1

let n = 8;
let imputLine = '';
let symbol = '*';

for (let index = 0; index < n; index +=1) {
    imputLine = imputLine + symbol 
}

for (let index = 0; index < n; index +=1) {
    console.log (imputLine);
};


 //exercicio 2

 let size = 8;
 let symbol = '*';
 let inputLine= '';

 for(let lineIndex=0; lineIndex <= size; lineIndex += 1) {
    console.log(inputLine);
    inputLine = inputLine + symbol;
 };


 //exercicio 3

 let size = 5;
 let symbol = '*';
 let inputLine = '';
 let inputPosition = size;

 
for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex<= size; columnIndex+= 1) {
        if ( columnIndex < inputPosition) {
            inputLine= inputLine + ' ';
        } else {    
            inputLine = inputLine + symbol;
        };
    };
    console.log(inputLine);
    inputLine = '';
    inputPosition -= 1;
};


//exercicio 4

 let size = 5;
 let symbol = '*';
 let inputLine = '';
 let midOfMatrix = (size + 1) / 2;
 let controlLeft = midOfMatrix;
 let controlRight = midOfMatrix;
 
for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex<= size; columnIndex+= 1) {
        if ( columnIndex > controlLeft && columnIndex < controlRight) {
            inputLine= inputLine + symbol;
        } else {    
            inputLine = inputLine + ' ';
        };
    };
    console.log(inputLine);
    inputLine = '';
    controlRight += 1;
    controlLeft -= 1;
};