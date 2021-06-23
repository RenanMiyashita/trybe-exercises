const feedback = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const answers = ['A', 'N.A', 'N.A', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const result = (feedback, answers, checker) => {
  let contador = 0;
  for (let i = 0; i < feedback.length; i += 1) {
    const checkerReturn = checker(feedback[i], answers[i])
    contador += checkerReturn;
  }
  return `Resultado final: ${contador} corretas`;
};

console.log(result(feedback, answers, (rAnswer, uAnswer) => {
  if (rAnswer === uAnswer) {
    return 1;
  } if (uAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
}));