const numberChecker = (myNumber, number) => myNumber === number;

const loteryResult = (myNumber, callback) => {
  const number = Math.round(Math.random() * 4 + 1);
  console.log (myNumber, `${'->'}`, number);

  return numberChecker(myNumber, number) ? 'lucky day, you are rich!!!' : 'Sorry, try again next time!';
};
console.log(loteryResult(2, numberChecker));

// const loteryResult = (myNumber, callback) => {
//   const number = Math.round(Math.random() * 4 + 1);
//   // console.log (myNumber, `${'->'}`, number);
// };

// const numberChecker = () => {
//   if(myNumber === number) {
//     'lucky day, you are rich!!!'
//   } else {
//     'Sorry, try again next time!'
//   }
// };

// console.log(loteryResult(2, numberChecker));